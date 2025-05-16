


// Here am going to write  a simple backend for the message lock encryption(mle)

// Why? This is because i think this would save as the tag generation for the mle

// Its just like checking if two ciphertext encrypts to the same message


 


 
// Initially intended to use  mongodb as database, 
// later found out the body-parser dependency is deprecated( for JSON requests)

import express from "express";

import fs from "fs"

import path from "path"

// import bodyParser from "body-parser";

import cors from "cors";






import dotenv from 'dotenv';
dotenv.config();


const connect_express = express()

 const The_port = process.env.Port  || 500






connect_express.use(cors({ origin: "http://127.0.0.1:5500" }));

connect_express.use(express.json());




import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


 






// decided to  choose this format for better date readability at a glance
const date = new Date(Date.now());
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});







const messagesFile = path.join("messages.json");



let messages = [];

if (fs.existsSync(messagesFile)) {

    messages = JSON.parse(fs.readFileSync(messagesFile));
}





connect_express.post('/api-message', (req, res)=>{


    const { message } = req.body;
    if (!message || message.trim() === "") {
        return res.status(400).json({ error: "Message is required." });
    }


    messages.push({ message, timestamp: formatter.format(date) });
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    res.status(200).json({ success: true });



} )






connect_express.get( '/api-messages' , (req , res )=>{


res.send(messages)


})



connect_express.listen(The_port, ()=>{
 
  
 console.log(`Server is running on http://localhost:${The_port}`);



})











