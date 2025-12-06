"use client";

import { useState } from "react";
import styles from "./ResumeModal.module.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Open resume directly if EmailJS not configured
        window.open("/resume.pdf", "_blank");
        setStatus("success");
        setTimeout(() => {
          onClose();
          setEmail("");
          setStatus("idle");
        }, 2000);
        return;
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: email,
            from_name: "Daniel Oyieke",
            resume_link: `${window.location.origin}/resume.pdf`,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setEmail("");
          setStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending resume:", error);
      setStatus("error");
      setErrorMessage("Failed to send. Opening resume directly...");
      setTimeout(() => {
        window.open("/resume.pdf", "_blank");
        onClose();
        setEmail("");
        setStatus("idle");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === "success" ? (
          <div className={styles.successMessage}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>Resume Sent!</h3>
            <p>Check your inbox at <strong>{email}</strong></p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h3>Get My Resume</h3>
              <p>Enter your email and I&apos;ll send you my resume directly.</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className={styles.input}
              />
              
              <button 
                type="submit" 
                disabled={isLoading || !email.trim()}
                className={styles.submitButton}
              >
                {isLoading ? (
                  <span className={styles.spinner}></span>
                ) : (
                  <>
                    Send Resume
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>

              {status === "error" && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </form>

            <p className={styles.disclaimer}>
              Your email will only be used to send the resume.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

