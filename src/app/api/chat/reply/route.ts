import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

// ============================================================
// 💬 CHAT REPLY API
// Endpoint for Daniel to reply to conversations
// Called by Discord bot or directly via API
// ============================================================

// Initialize Firebase Admin (server-side)
function getFirebaseAdmin() {
  if (getApps().length === 0) {
    // For production, use service account credentials
    const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    
    if (serviceAccount) {
      initializeApp({
        credential: cert(JSON.parse(serviceAccount)),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      });
    } else {
      // For development, use default credentials
      initializeApp({
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      });
    }
  }
  return getDatabase();
}

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Discord (optional security)
    const authHeader = request.headers.get("authorization");
    const expectedToken = process.env.CHAT_REPLY_SECRET;
    
    // If a secret is set, verify it
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { conversationId, message } = body;

    if (!conversationId || !message) {
      return NextResponse.json(
        { error: "Missing conversationId or message" },
        { status: 400 }
      );
    }

    // Add reply to Firebase
    const db = getFirebaseAdmin();
    const messagesRef = db.ref(`conversations/${conversationId}/messages`);
    
    await messagesRef.push({
      text: message,
      sender: "daniel",
      timestamp: Date.now(),
    });

    console.log(`✅ Reply sent to conversation ${conversationId}: ${message}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reply error:", error);
    return NextResponse.json(
      { error: "Failed to send reply" },
      { status: 500 }
    );
  }
}

// Handle Discord bot webhook (for !reply command)
export async function GET(request: NextRequest) {
  // Health check endpoint
  return NextResponse.json({ status: "ok", message: "Chat reply API is running" });
}

