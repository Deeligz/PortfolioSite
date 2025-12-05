import { NextRequest, NextResponse } from "next/server";

// ============================================================
// 📬 CHAT NOTIFICATION API
// Sends notifications to Discord when visitors message you
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, conversationId, message } = body;

    // Log the notification (useful for debugging)
    console.log("📬 Chat notification:", {
      type,
      conversationId,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send to Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (discordWebhookUrl) {
      let discordMessage = "";
      const timestamp = new Date().toLocaleString();
      
      if (type === "new_conversation") {
        discordMessage = `🆕 **New Chat Started!**\n` +
          `🕐 ${timestamp}\n` +
          `🔗 ID: \`${conversationId}\``;
      } else if (type === "new_message") {
        discordMessage = `💬 **New Message**\n` +
          `🕐 ${timestamp}\n\n` +
          `> ${message}\n\n` +
          `🔗 ID: \`${conversationId}\``;
      }

      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: discordMessage,
          username: "Portfolio Chat",
          avatar_url: "https://i.imgur.com/AfFp7pu.png",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
