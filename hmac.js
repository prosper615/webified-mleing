


// Remember the choosen key is now generated
import { key_gen } from "./key_gen.js"






const   getmessage = document.getElementById("inputmessage")
   
 const  themessage = getmessage.value


  export async function hmacing(  ){


// First step is the key derivation  (KDF) from the message itself, HMAC fits the situation as a KDF

try {





// Also making the salt to be fixed according to an input.


async function getFixedSalt() {

  const encoder = new TextEncoder()

  const data = encoder.encode(themessage)
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)

  const hashArray = new Uint8Array(hashBuffer)
  
   // Taking the first 16 bytes as the salt,kinda like still using this : crypto.getRandomValues(new Uint8Array(16))
   // But here the dif.. is just that the salt is based on the input and deterministic
  const salted = hashArray.slice(0, 16)


  return salted

}

const salt =   await getFixedSalt()

  

 const  choose_secretkey =    await key_gen()

    
    

const encoder = new TextEncoder()

const encodeit = encoder.encode( themessage)





const signing_key =  await window.crypto.subtle.importKey(

    'jwk',

      choose_secretkey ,

    { name: 'HMAC', hash: { name: 'SHA-256' } },

  
    
     true,
    
    ['sign'],

    
    
    
)

const signedmessage = await window.crypto.subtle.sign('HMAC', signing_key, encodeit)



  const baseKey = await window.crypto.subtle.importKey(

      'raw',

      signedmessage, 

      { name: 'HKDF' },

      false,

      ['deriveKey']

    );



const gotten_hmackey = await window.crypto.subtle.deriveKey(


     {
        name: 'HKDF',

        salt: salt, 
      
        info: encoder.encode('encryption'),

        hash: 'SHA-256'
      },

 

baseKey,

{

name : 'AES-GCM', length: 256

},

true, 

['encrypt'  ]

)



const exportgotten_hmackey  = await window.crypto.subtle.exportKey('jwk', gotten_hmackey)


return exportgotten_hmackey   // I had to derive the key because HMAC can not be used directly as the key for AES


} catch (error) {


    console.log(error)
    
}




}








