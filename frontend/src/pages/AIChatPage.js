import React from "react";
import AIChat from "../components/AIChat";
import Header from "../components/Layout/Header";
import FooterPage from "./FooterPage"; // Adjust path if needed

const AIChatPage = () => {
    return (
        <div className="aichat-page-wrapper">
            {/* Optional: Use your existing layout structure */}
            <Header />
            <main style={{ padding: "20px" }}>
                <AIChat />
            </main>
            <FooterPage />
        </div>
    );
};

export default AIChatPage;
