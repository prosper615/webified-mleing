

// Here am implementing  key generation instead of opting for manually inputing your keys


/*


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


*/






export async function key_gen() {

  const algorithm = { name: "HMAC", hash: { name: "SHA-256" } };

  const extractable = true

  const keyUsages = ["sign"]

  //   This ensures there is constant key against my previous implementation where the key is generated randomly
  // Though using the same key is not crytographically secure, i purposely did it for the sake of same message having the 
  // same encryption

  const jwkKey = {
    kty: "oct",
    k: "ZHVtbXlfa2V5X2Zvcl9kZXRlcm1pbmlzdGljX3VzZQ",  // oooh nooo, this is a handcoded key brooooo
    alg: "HS256",
    ext: true
  }

  try {
    
    const cryptoKey = await window.crypto.subtle.importKey(
      "jwk",
      jwkKey,
      algorithm,
      extractable,
      keyUsages
    )

    
    const return_key = await window.crypto.subtle.exportKey("jwk", cryptoKey);

    return return_key;

  } catch (error) {

    console.log("Key generation error:", error);

  }
}





