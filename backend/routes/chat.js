// backend/routes/chat.js

const express = require("express");
const router = express.Router();
require("dotenv").config();
const { OpenAI } = require("openai");

// Initialize DeepSeek API
const openai = new OpenAI({
  apiKey: process.env.api_key, // DeepSeek API key from Render
  baseURL: "https://api.deepseek.com", // Use DeepSeek API
});

// POST /api/chat — Main AI chat endpoint
router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const systemMessage = `
You are a helpful AI assistant in a fingerprint attendance system.
Answer any relevant questions. Don't say you lack data.`;

    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("🔥 DeepSeek API error:", error);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

// Test route
router.get("/chat/test", (req, res) => {
  res.json({ reply: "Hello!" });
});

module.exports = router;


// const express = require("express");
// const router = express.Router();
// require("dotenv").config();
// const { OpenAI } = require("openai");
// const db = require("../../backend/db");

// const openai = new OpenAI({
//     apiKey: process.env.api_key, // your DeepSeek API key
//     baseURL: "https://api.deepseek.com", // tell SDK to use DeepSeek instead of OpenAI
// });

// router.post("/chat", async (req, res) => {
//     const { message } = req.body;

//     if (!message) {
//         return res.status(400).json({ error: "Message is required" });
//     }

//     let systemMessage = `
// You are an AI assistant for a fingerprint-based attendance system.
// Use the following data to answer any system-related question. Do not say you lack access.
// `;

//     try {
//         const query = `
//       SELECT 
//         (SELECT COUNT(*) FROM users) AS userCount,
//         (SELECT COUNT(*) FROM attendance WHERE DATE(attendance_date) = CURDATE() AND status = 1) AS presentToday,
//         (SELECT name FROM users ORDER BY id DESC LIMIT 1) AS latestUser
//     `;

//         const results = await new Promise((resolve, reject) => {
//             db.query(query, (err, result) => {
//                 if (err) return reject(err);
//                 resolve(result);
//             });
//         });

//         const data = results[0];
//         const userCount = data.userCount;
//         const presentToday = data.presentToday;
//         const latestUser = data.latestUser || "Unknown";

//         systemMessage += `
// - Total users: ${userCount}
// - Students present today: ${presentToday}
// - Latest registered user: ${latestUser}
//     `.trim();
//     } catch (err) {
//         console.warn("⚠️ Could not load DB data. Continuing without it.");
//     }

//     try {
//         const completion = await openai.chat.completions.create({
//             model: "deepseek-chat", // or "deepseek-v2" or "deepseek-coder"
//             messages: [
//                 { role: "system", content: systemMessage },
//                 { role: "user", content: message },
//             ],
//         });

//         const reply = completion.choices[0].message.content;
//         res.json({ reply });
//     } catch (error) {
//         console.error("DeepSeek API error:", error.message);
//         res.status(500).json({ error: "AI service unavailable" });
//     }
// });

// module.exports = router;
