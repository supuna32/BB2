export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai ${conn.getName(m.sender)}, ${user.banned ? 'kamu dibanned' : `ආයුබෝවන් ${this.user.name} මෙනුව සදහා */menu* යොදාගන්න අපගෙ සමූහය https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV`}
`.trim(), author, [[user.banned ? 'Bot' : 'Menu', user.banned ? '.owner' : '/menu']], m)
    user.pc = new Date * 1
}