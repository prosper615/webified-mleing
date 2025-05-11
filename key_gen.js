

// Here am implementing key generation instead of opting for manually inputing your keys


const algorithm = { name: "AES-GCM", length: 256 };
const extractable = true;
const keyUsages = ["encrypt", "decrypt"];

window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)

  .then(cryptoKey => {

    // console.log("Generated key:", cryptoKey);
return window.crypto.subtle.exportKey('raw', cryptoKey)

  })
  .then( seein_hex=> {

console.log( Array.from(new Uint8Array(seein_hex)).map( h=>h.toString(16).padStart(8, "0")).join(""))



  })

  .catch(error => {

    console.error("Key generation failed:", error);

  });



  /*


const algorithm = { name: "AES-GCM", length: 256 };
const extractable = true;
const keyUsages = ["encrypt", "decrypt"];

window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)
  .then(cryptoKey => {
    // Export the key to raw format (returns ArrayBuffer)
    return window.crypto.subtle.exportKey("raw", cryptoKey);
  })
  .then(rawKey => {
    // Convert ArrayBuffer to hex string
    const byteArray = new Uint8Array(rawKey);
    const hexKey = Array.from(byteArray)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    console.log("Key in hex:", hexKey);
  })
  .catch(error => {
    console.error("Error exporting key:", error);
  });

  */
