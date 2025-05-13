
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


const submitmessage = document.getElementById("submitmessage")



submitmessage.addEventListener( "click",  async ()=>{


console.log("I love to hack on cool stuff")


const output_of_aes = await aes_encrypt()


console.log(output_of_aes)



})



  
});








