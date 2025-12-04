// index.js

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const messageHandler = require('./messageHandler');

const PUPPETEER_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-accelerated-2d-canvas',
  '--no-first-run',
  '--no-zygote',
  '--single-process', 
  '--disable-gpu'
];

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "ck_error_bot" }), 
    puppeteer: {
        args: PUPPETEER_ARGS,
    }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED. Scan this code:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ CK-اERROR Bot is Ready and ONLINE!');
});

client.on('message_create', async (msg) => {
    if (msg.fromMe) return; 
    messageHandler.handleMessage(client, msg);
});

client.on('disconnected', (reason) => {
    console.log('❌ Client was disconnected:', reason);
});

client.initialize();
