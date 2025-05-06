const fs = require('fs');
const data = fs.readFileSync('output.bin');
console.log(data.toString('hex'));
