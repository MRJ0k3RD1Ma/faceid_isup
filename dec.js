const crypto = require('crypto');

const key = Buffer.from('Mbos2025'.padEnd(16, '\0'), 'utf8'); // 16-byte kalit
const encryptedHex = '0775fad2e44447465e7a3564d1dee232d886a6232d27cde114c3a21b0d608caebf0';
const encrypted = Buffer.from(encryptedHex, 'hex');

const decipher = crypto.createDecipheriv('aes-128-ecb', key, null);
decipher.setAutoPadding(false);

let decrypted = decipher.update(encrypted);
decrypted = Buffer.concat([decrypted, decipher.final()]);

console.log('Decrypted data:', decrypted.toString('utf8'));
