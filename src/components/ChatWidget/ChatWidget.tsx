"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { database } from "@/lib/firebase";
import { ref, push, onValue, set } from "firebase/database";
import styles from "./ChatWidget.module.css";

// Check if Firebase is available
const isFirebaseEnabled = Boolean(database);

// Play notification sound
const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Pleasant ping sound
    oscillator.frequency.setValueAtTime(830, audioContext.currentTime); // Starting frequency
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    
    oscillator.type = 'sine';
    
    // Fade out
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    // Audio not supported or blocked
    console.log('Could not play notification sound');
  }
};

interface Message {
  id: string;
  text: string;
  sender: "visitor" | "daniel";
  timestamp: number;
}

interface Conversation {
  visitorName: string;
  visitorEmail: string;
  status: "active" | "closed";
  createdAt: number;
  messages: Record<string, Message>;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageCount = useRef(0);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show notification dot after delay if chat hasn't been opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !isInitialized) {
        setShowNotification(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, isInitialized]);

  // Initialize conversation on first open
  useEffect(() => {
    if (isOpen && !isInitialized) {
      initializeChat();
    }
  }, [isOpen, isInitialized]);

  const initializeChat = async () => {
    // Check for existing conversation
    const savedConversationId = localStorage.getItem("chatConversationId");
    
    if (savedConversationId) {
      setConversationId(savedConversationId);
      setIsInitialized(true);
      return;
    }

    // Create new conversation
    const newConversationId = `chat-${Date.now()}`;
    
    // Add welcome message
    const welcomeMessage: Message = {
      id: "welcome",
      text: "Hi there! 👋 Feel free to ask me anything about my work or projects. I'll get back to you as soon as I can!",
      sender: "daniel",
      timestamp: Date.now(),
    };
    setMessages([welcomeMessage]);

    // Save to localStorage
    localStorage.setItem("chatConversationId", newConversationId);
    setConversationId(newConversationId);
    setIsInitialized(true);

    // If Firebase is enabled, create in database
    if (isFirebaseEnabled && database) {
      try {
        const conversationsRef = ref(database, "conversations");
        const newConversationRef = push(conversationsRef);
        const firebaseConversationId = newConversationRef.key!;

        await set(newConversationRef, {
          status: "active",
          createdAt: Date.now(),
        });

        const messagesRef = ref(database, `conversations/${firebaseConversationId}/messages`);
        await push(messagesRef, {
          text: welcomeMessage.text,
          sender: "daniel",
          timestamp: Date.now(),
        });

        localStorage.setItem("chatConversationId", firebaseConversationId);
        setConversationId(firebaseConversationId);
      } catch (error) {
        console.error("Failed to create Firebase conversation:", error);
      }
    }
  };

  // Listen for real-time messages (only if Firebase is enabled)
  useEffect(() => {
    if (!conversationId || !isFirebaseEnabled || !database) return;

    const messagesRef = ref(database, `conversations/${conversationId}/messages`);
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList: Message[] = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<Message, "id">),
        }));
        
        // Sort by timestamp
        messageList.sort((a, b) => a.timestamp - b.timestamp);
        
        // Check if there's a new message from Daniel
        if (messageList.length > lastMessageCount.current) {
          const lastMessage = messageList[messageList.length - 1];
          if (lastMessage.sender === "daniel") {
            // Play notification sound
            playNotificationSound();
            
            if (!isOpen) {
              setHasNewMessage(true);
              setShowNotification(true);
            }
          }
        }
        lastMessageCount.current = messageList.length;
        
        setMessages(messageList);
      }
    });

    return () => unsubscribe();
  }, [conversationId, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading || !conversationId) return;

    const messageText = inputText.trim();
    setInputText("");
    setIsLoading(true);

    // Add message locally first for instant feedback
    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "visitor",
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newMessage]);

    try {
      if (isFirebaseEnabled && database) {
        // Add message to Firebase
        const messagesRef = ref(database, `conversations/${conversationId}/messages`);
        await push(messagesRef, {
          text: messageText,
          sender: "visitor",
          timestamp: Date.now(),
        });
      } else {
        // Demo mode - add auto-response
        setTimeout(() => {
          const autoResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: "Thanks for your message! I've been notified and will respond soon. 💬",
            sender: "daniel",
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, autoResponse]);
        }, 1500);
      }

      // Discord bot watches Firebase and will notify automatically
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={styles.chatWidget}>
      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ""}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.avatar}>DO</div>
            <div className={styles.headerText}>
              <span className={styles.headerName}>Daniel Oyieke</span>
              <span className={styles.headerStatus}>
                <span className={styles.statusDot}></span>
                Usually replies within minutes
              </span>
            </div>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsOpen(false);
              setHasNewMessage(false);
            }}
            aria-label="Close chat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className={styles.chatBody}>
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.sender === "visitor"
                    ? styles.userMessage
                    : styles.danielMessage
                }`}
              >
                {message.sender === "daniel" && (
                  <div className={styles.messageAvatar}>DO</div>
                )}
                <div className={styles.messageBubble}>
                  <p>{message.text}</p>
                  <span className={styles.messageTime}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.danielMessage}`}>
                <div className={styles.messageAvatar}>DO</div>
                <div className={styles.messageBubble}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className={styles.inputArea}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className={styles.messageInput}
            disabled={isLoading}
            autoFocus={isOpen}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={!inputText.trim() || isLoading}
            aria-label="Send message"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>

      {/* Chat Bubble Button */}
      <button
        className={`${styles.chatBubble} ${isOpen ? styles.hidden : ""}`}
        onClick={() => {
          setIsOpen(true);
          setShowNotification(false);
          setHasNewMessage(false);
        }}
        aria-label="Open chat"
      >
        {(showNotification || hasNewMessage) && (
          <span className={styles.notificationDot}></span>
        )}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}
