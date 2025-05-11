



// Remember the key to be used is derived from the message itself using kdf( hmac in my case)

import { hmacing } from "./hmac.js"



// Here i will implement the aes encryption of the message using the key derived from the message



 async function aes_encrypt (  ){


   const   message_to_encrypt= document.getElementById("input_message")

 const  key_tobe_used = hmacing().then(see_key=>{ return see_key})





// Initiating the initial vector to be used for encryption

const iv =  window.crypto.getRandomValues( new Uint8Array(12))

try {
    

const encrypter = await window.crypto.subtle.encrypt(      {
        name: "AES-GCM",

        iv: iv

      },


      message_to_encrypt, key_tobe_used
    )

return{ encrypter, iv }



} catch (error) {

    console.log( error)
    
}



}





 console.log(  aes_encrypt( ).then( aes_ed=>{ console.log(aes_ed)}))