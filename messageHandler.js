// messageHandler.js

const prefix = '!';

// --- COMMAND FILES IMPORT ---
const utilityCommands = require('./commands/utility');
const adminCommands = require('./commands/admin');
const graphicsCommands = require('./commands/graphics');
const funCommands = require('./commands/fun');
// ... অন্যান্য কমান্ড ফাইল এখানে ইম্পোর্ট করুন

const allCommands = {
    // Utility & System
    'alive': utilityCommands.alive, 'ping': utilityCommands.ping, 'menu': utilityCommands.menu, 'owner': utilityCommands.owner,
    'ytmp3': utilityCommands.ytmp3, 'ytmp4': utilityCommands.ytmp4, 'photo': utilityCommands.photo, 'video': utilityCommands.video, 'tts': utilityCommands.tts,
    
    // Graphics
    'hackerlogo': graphicsCommands.hackerlogo, 'neon': graphicsCommands.neon, 'matrix': graphicsCommands.matrix, 'firetext': graphicsCommands.firetext, 'dark': graphicsCommands.dark,

    // Admin
    'add': adminCommands.add, 'kick': adminCommands.kick, 'promote': adminCommands.promote, 'demote': adminCommands.demote, 'mute': adminCommands.mute, 'unmute': adminCommands.unmute, 'delete': adminCommands.delete,

    // Fun/Simulation
    'hack': funCommands.hack, 'virus': funCommands.virus, 'whois': funCommands.whois, 'meme': funCommands.meme, 'joke': funCommands.joke,

    // ... আপনার বাকি কমান্ডগুলো এখানে যোগ করুন
};

function handleMessage(client, msg) {
    const body = msg.body;
    if (!body || !body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    const commandFunction = allCommands[commandName];

    if (commandFunction) {
        try {
            commandFunction(client, msg, args);
        } catch (error) {
            console.error(`Error executing ${commandName}:`, error);
            msg.reply(`❌ কমান্ডে ত্রুটি: ${prefix}${commandName}`);
        }
    }
}

module.exports = { handleMessage };
