import React, { useState } from "react";
import axios from "axios";
import "./AIChat.css"; // Add this line to import the CSS

const AIChat = () => {
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message.trim()) return;
        setLoading(true);
        try {
            const res = await axios.post("https://ai-assisted-backend-9.onrender.com/api/chat", { message });
            setReply(res.data.reply);
        } catch (error) {
            console.error(error);
            setReply("⚠️ Failed to contact AI.");
        }
        setLoading(false);
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">💬 Ask the AI Assistant</h2>
            <textarea
                rows={4}
                className="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
            />
            <button className="chat-button" onClick={sendMessage} disabled={loading}>
                {loading ? "Sending..." : "Send"}
            </button>
            {reply && (
                <div className="chat-reply">
                    <strong>AI:</strong>
                    <p>{reply}</p>
                </div>
            )}
        </div>
    );
};

export default AIChat;
