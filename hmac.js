


// Here am gonna implement message lock encryption

// Just a simple version using the web cryto api

// influenced by reading the summary  of paper on message lock encryption by 

//   Ananth Raghunathan, Dan Boneh,  Ilya Mironove and co






// Message lock encryption is just like deriving the encryption key from the message itself 
// This means the same message = the same key = the same ciphertext, so diff.. mess.. diff.. as specified

// This enables storage systems to detect and eliminate 





 async function hmacing(  themessage, choose_secretkey  ){


// First step is the key derivation  (KDF) from the message itself HMAC fits the situation 
try {
   
    
const encoder = new TextEncoder()

const encodeit = encoder.encode( themessage)

const encode_secretkey = encoder.encode(choose_secretkey)



const hashofmessage =  await window.crypto.subtle.importKey(

       'raw',
     encode_secretkey,
    { name: 'HMAC', hash: { name: 'SHA-256' } },
    false,
    ['sign'],  
)

const signedmessage = await window.crypto.subtle.sign('HMAC', hashofmessage, encodeit)


const toreadable_hex = Array.from(new Uint8Array(signedmessage)).map(b=> b.toString(16).padStart(8,'0' )).join()



return toreadable_hex


} catch (error) {


    console.log(error)
    
}




}




 console.log(hmacing( "I love to hack on cool stuff", '0x3F4A9D2E1B5C7F8A3D9E2C1B4A6F7E8D').then(see_hmac=>{console.log(see_hmac)}))


 





