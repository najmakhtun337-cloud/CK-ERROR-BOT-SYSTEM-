// commands/utility.js

const { MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');

// --- কনফিগারেশন ---
const MENU_IMAGE_PATH = 'menu_image.jpg'; 
const CHANNEL_LINK = "https://whatsapp.com/channel/0029VbBQQ6v4Y9lenR8ROD3O";
const GROUP_LINK = "https://chat.whatsapp.com/GsEXaibKDOz3TuCsqqlXzA";

const MENU_TEXT_BODY = `
《 💀 HACKER MAIN COMMANDS 》
> !alive          System Status Check
> !ping           Response Speed Test
> !menu           Open Main Interface
> !owner          Developer Info
... (আপনার বাকি কমান্ডের তালিকা) ...
------------------------------------------------
⚡ Powered by: CK-ا ERROR Bot
⌁ System Secure • End-to-End Layer Protected 
`;

// --- ফাংশন সমূহ ---
async function alive(client, msg, args) {
    const statusMessage = `⚡ CK-ا ERROR BOT SYSTEM ⚡\nSTATUS: ONLINE ∎ ∎ ∎ ∎ ∎ █ 100%`;
    msg.reply(statusMessage);
}

async function menu(client, msg, args) {
    
    if (!fs.existsSync(MENU_IMAGE_PATH)) {
        console.error('Menu image not found!');
        return msg.reply("❌ Error: Menu image not found.\n" + MENU_TEXT_BODY);
    }
    
    const media = MessageMedia.fromFilePath(MENU_IMAGE_PATH);
    
    const caption = `
*${MENU_TEXT_BODY}*

🔗 **OFFICIAL LINKS**
📣 JOIN CHANNEL: ${CHANNEL_LINK}
🌐 JOIN GROUP: ${GROUP_LINK}
`;
    
    await client.sendMessage(msg.from, media, { caption: caption });
}

module.exports = { 
    alive, 
    ping: async(c,m,a) => {const start = Date.now(); await c.sendMessage(m.from, 'Pinging...'); const end = Date.now(); c.sendMessage(m.from, `Pong! 📶 ${end - start}ms`);}, 
    menu, 
    owner: async(c,m,a) => m.reply("Owner: CK-A ERROR | WA: +919046579718"), 
    ytmp3: async(c,m,a) => m.reply("YTMP3 Logic"), 
    ytmp4: async(c,m,a) => m.reply("YTMP4 Logic"), 
    photo: async(c,m,a) => m.reply("Photo Logic"), 
    video: async(c,m,a) => m.reply("Video Logic"), 
    tts: async(c,m,a) => m.reply("TTS Logic") 
};
