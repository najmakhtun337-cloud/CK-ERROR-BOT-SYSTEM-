// commands/admin.js

module.exports = { 
    add: async(c,m,a) => m.reply("Admin: Add Logic"), 
    kick: async(c,m,a) => m.reply("Admin: Kick Logic"), 
    promote: async(c,m,a) => m.reply("Admin: Promote Logic"), 
    demote: async(c,m,a) => m.reply("Admin: Demote Logic"), 
    mute: async(c,m,a) => m.reply("Admin: Mute Logic"), 
    unmute: async(c,m,a) => m.reply("Admin: Unmute Logic"), 
    delete: async(c,m,a) => m.reply("Admin: Delete Logic") 
};
