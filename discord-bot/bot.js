// ============================================================
// 🤖 DISCORD BOT FOR PORTFOLIO CHAT
// This bot:
// 1. Watches Firebase for new visitor messages → notifies Discord
// 2. Listens for your replies on Discord → sends to Firebase
// Run with: node discord-bot/bot.js
// ============================================================

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, onChildAdded, onValue, get } = require('firebase/database');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Discord bot setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});

const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;
const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// Track conversations and their message counts
const conversationMessageCounts = new Map();
let lastConversationId = null;
let discordChannel = null;

client.once('ready', async () => {
  console.log('');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  🤖 Portfolio Chat Bot is ONLINE!                          ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║  Logged in as: ${client.user.tag.padEnd(41)}║`);
  console.log(`║  Watching channel: ${CHANNEL_ID.padEnd(37)}║`);
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log('║  HOW TO REPLY:                                             ║');
  console.log('║  Just type your message in the chat channel!               ║');
  console.log('║  The bot will send it to the visitor automatically.        ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');

  // Get the Discord channel
  try {
    discordChannel = await client.channels.fetch(CHANNEL_ID);
    console.log('✅ Connected to Discord channel');
  } catch (error) {
    console.error('❌ Could not fetch Discord channel:', error.message);
  }

  // Watch Firebase for new conversations and messages
  watchFirebase();
});

function watchFirebase() {
  const conversationsRef = ref(database, 'conversations');
  
  // Watch for changes in conversations
  onValue(conversationsRef, async (snapshot) => {
    const conversations = snapshot.val();
    if (!conversations) return;

    for (const [convId, convData] of Object.entries(conversations)) {
      if (!convData.messages) continue;

      const messages = Object.entries(convData.messages);
      const currentCount = messages.length;
      const previousCount = conversationMessageCounts.get(convId) || 0;

      // Check for new messages
      if (currentCount > previousCount) {
        // Get the new messages
        const newMessages = messages.slice(previousCount);
        
        for (const [msgId, msgData] of newMessages) {
          // Only notify for visitor messages
          if (msgData.sender === 'visitor') {
            await notifyDiscord(convId, msgData.text);
            lastConversationId = convId;
          }
        }
      }

      conversationMessageCounts.set(convId, currentCount);
    }
  });

  console.log('👀 Watching Firebase for new messages...');
}

async function notifyDiscord(conversationId, message) {
  const timestamp = new Date().toLocaleString();
  const discordMessage = `💬 **New Message**\n🕐 ${timestamp}\n\n> ${message}\n\n🔗 ID: \`${conversationId}\``;

  // Try webhook first (prettier formatting)
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: discordMessage,
          username: 'Portfolio Chat',
          avatar_url: 'https://i.imgur.com/AfFp7pu.png',
        }),
      });
      console.log(`📥 New visitor message (${conversationId}): "${message}"`);
      return;
    } catch (error) {
      console.error('Webhook failed, trying channel message:', error.message);
    }
  }

  // Fallback to channel message
  if (discordChannel) {
    try {
      await discordChannel.send(discordMessage);
      console.log(`📥 New visitor message (${conversationId}): "${message}"`);
    } catch (error) {
      console.error('Failed to send Discord message:', error.message);
    }
  }
}

client.on('messageCreate', async (message) => {
  // Ignore bot messages and messages from other channels
  if (message.channel.id !== CHANNEL_ID) return;
  if (message.author.bot) return;
  if (message.webhookId) return;

  // This is your reply!
  const replyText = message.content.trim();
  if (!replyText) return;

  // Find the conversation to reply to
  let conversationId = lastConversationId;
  
  // If replying to a specific message, try to get that conversation ID
  if (message.reference) {
    try {
      const repliedMessage = await message.channel.messages.fetch(message.reference.messageId);
      const match = repliedMessage.content.match(/ID: `([^`]+)`/);
      if (match) {
        conversationId = match[1];
      }
    } catch (e) {
      // Couldn't fetch replied message, use last conversation
    }
  }

  if (!conversationId) {
    console.log('⚠️ No active conversation found. Wait for a visitor message first.');
    await message.react('❓');
    return;
  }

  try {
    // Send reply to Firebase
    const messagesRef = ref(database, `conversations/${conversationId}/messages`);
    await push(messagesRef, {
      text: replyText,
      sender: 'daniel',
      timestamp: Date.now(),
    });

    console.log(`✅ Reply sent to ${conversationId}: "${replyText}"`);
    await message.react('✅');
  } catch (error) {
    console.error('❌ Failed to send reply:', error);
    await message.react('❌');
  }
});

// Error handling
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

// Login
const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
  console.error('❌ DISCORD_BOT_TOKEN not found in environment variables');
  process.exit(1);
}

client.login(token);
