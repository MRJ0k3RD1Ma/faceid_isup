const net = require('net');
const fs = require('fs');

// Faylga yozish uchun stream yaratamiz
const output = fs.createWriteStream('output.bin', { flags: 'a' });

// TCP server porti (masalan ISUP 5.0 7660-port)
const PORT = 7660;

const server = net.createServer((socket) => {
  console.log('🔌 Client ulandi:', socket.remoteAddress, socket.remotePort);

  socket.on('data', (data) => {
    console.log('📥 Ma\'lumot keldi, uzunligi:', data.length);
    output.write(data);
  });

  socket.on('end', () => {
    console.log('❌ Client uzildi');
  });

  socket.on('error', (err) => {
    console.error('⚠️ Xatolik:', err.message);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 TCP server ${PORT}-portda ishlamoqda`);
});
