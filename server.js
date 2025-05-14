


// Here am going to write  a simple backend for the message lock encryption(mle)

// Why? This is because i think this would save as the tag generation for the mle

// Its just like checking if two ciphertext encrypts to the same message


// Would be writting a simple backend for the message lock encryption



import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(' I love to hack on cool stuffs. I love computers\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});





