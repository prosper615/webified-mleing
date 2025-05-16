


// Here am going to write  a simple backend for the message lock encryption(mle)

// Why? This is because i think this would save as the tag generation for the mle

// Its just like checking if two ciphertext encrypts to the same message


 


 


import express from "express";

import fs from "fs"

import path from "path"

import bodyParser from "body-parser";

import cors from "cors";




const Port = 3000

const connect_express = express()





connect_express.use(cors({ origin: "http://127.0.0.1:5500/mleing.html" }));

connect_express.use(express.json());


// connect_express.use(bodyParser.json());

connect_express.use(express.static("public")); 



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

    messages.push({ message, timestamp: Date.now() });
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    res.status(200).json({ success: true });



} )






connect_express.get( '/api-messages' , (req , res )=>{


res.json(messages)


})



connect_express.listen(Port, ()=>{
 

 console.log(`Server is running on http://localhost:${Port}`);



})











