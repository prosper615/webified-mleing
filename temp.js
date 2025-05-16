
/*


import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;
const messagesFile = path.join("messages.json");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve frontend from 'public' folder

// Load existing messages or initialize
let messages = [];
if (fs.existsSync(messagesFile)) {
    messages = JSON.parse(fs.readFileSync(messagesFile));
}

// Save a message
app.post("/api/message", (req, res) => {
    const { message } = req.body;
    if (!message || message.trim() === "") {
        return res.status(400).json({ error: "Message is required." });
    }

    messages.push({ message, timestamp: Date.now() });
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    res.status(200).json({ success: true });
});

// Get all messages
app.get("/api/messages", (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});










<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Message Lock Encryption</title>
</head>
<body>
  <h2>Message Lock Encryption (MLE)</h2>
  <textarea id="inputmessage" rows="5" cols="30" placeholder="Enter your message here..."></textarea>
  <br />
  <button id="submitmessage">Submit Message</button>
  <p id="status"></p>

  <script type="module">
    const button = document.getElementById("submitmessage");
    const textarea = document.getElementById("inputmessage");
    const status = document.getElementById("status");

    button.addEventListener("click", async () => {
      const message = textarea.value.trim();

      if (!message) {
        status.textContent = "Please enter a message.";
        return;
      }

      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        status.textContent = "Message saved successfully!";
        textarea.value = "";
      } else {
        status.textContent = "Failed to save message.";
      }
    });
  </script>
</body>
</html>






npm init -y
npm install express body-parser cors
node server.js




*/