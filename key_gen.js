






export async function key_gen() { 

  const algorithm = { name: "HMAC", hash: { name: "SHA-256" } };

  const extractable = true

  const keyUsages = ["sign"] 

const  keyisfrom_input = document.getElementById("inputmessage")



// Now getting the key based on user input instead og being handcoded as earlier

 function tobase64(){

// lol realised there is a binary to Ascii converter function in js: btoa()
return btoa(keyisfrom_input)

.replace(/\+/g,"" ) 
.replace(/\//g,"")
.replace(/\=+$/g, "")


}

const  seeit  = tobase64()



  const jwkKey = {
    kty: "oct",
    k: seeit,
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





