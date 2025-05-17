



// Remember the key to be used is derived from the message itself using kdf( hmac in my case)

import { hmacing } from "./hmac.js"



// Here i will implement the aes encryption of the message using the key derived from the message



  export async function aes_encrypt (   ){

  let  getmessage = document.getElementById("inputmessage")

      let typed_message = getmessage.value



// perphaps not actually a good pratice but not wanna trim the input to be encrypted which is the above
 

/*
 const message = getmessage.value.trim();

      if (!message) {

        submissioncheck.textContent = "Please enter a message."

        return

      }

        */

      







const see_encoded = new TextEncoder()


   const   message_to_encrypt = see_encoded.encode(typed_message)
   
  
 const  key_tobe_used =  await hmacing()


    const key = await window.crypto.subtle.importKey(
      
      'jwk',

      key_tobe_used,

      { name: "AES-GCM" },

      true,

      ["encrypt"]
    

    );





// Initiating the initial vector to be used for encryption

const iv =  window.crypto.getRandomValues( new Uint8Array(12))

try {
    

const encrypter = await window.crypto.subtle.encrypt(      {
        name: "AES-GCM",
        iv: iv  
      },

     key  , message_to_encrypt 
    )


//  Now i want the encryption to  be returned in hex value for better readability

const tohex_readable = Array.from(new Uint8Array(encrypter).toString(16).padStart(2,"0" )).join("")






return { tohex_readable , iv }










} catch (error) {

    console.log( error)
    
}



}




 