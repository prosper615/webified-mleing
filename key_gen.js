

// Here am implementing  key generation instead of opting for manually inputing your keys

  export async function key_gen() {


const algorithm =  { name: "HMAC", hash: { name: "SHA-256" } }

const extractable = true;

const keyUsages =  ["sign"];


  
try {

 const   cryptoKey =    await window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)  

      

const  return_key =  window.crypto.subtle.exportKey('jwk', cryptoKey)

return return_key




  



  
} catch (error) {


console.log(error)

  
}


    



}

