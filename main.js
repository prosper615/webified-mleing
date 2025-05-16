
// Here am gonna implement message lock encryption


// Just a simple version using the web cryto api

// influenced by reading the summary  of paper on message lock encryption by 

//   Ananth Raghunathan, Dan Boneh,  Ilya Mironove and co




// Message lock encryption is just like deriving the encryption key from the message itself 
// This means the same message = the same key = the same ciphertext, so diff.. mess.. diff.. as specified

// This enables storage systems to detect and eliminate duplicates









// Ok... this would be my main js file




import { aes_encrypt } from "./aes_encrypt.js";


// Due to am using modules, yeah i think i should wait for the document to load



document.addEventListener('DOMContentLoaded', function() {


const inputmessage = document.getElementById("inputmessage")

const submitmessage = document.getElementById("submitmessage")

const submissioncheck =  document.getElementById("submissioncheck") 




submitmessage.addEventListener( "click",  async ()=>{

 const message = inputmessage.value.trim();

      if (!message) {

        submissioncheck.textContent = "Please enter a message."

        return

      }

 


  const response = await fetch("http://localhost:3000/api-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });




   if (response.ok) {
        submissioncheck.textContent = "Message saved successfully!";
        textarea.value = "";
      } else {
        submissioncheck.textContent = "Failed to save message.";
      }
    




      

})



  


})


const whatilove =  [   "I love to hack on cool stuff" , "I love software engineering" ]

console.log( whatilove)




console.log("I love to hack on cool stuff")




