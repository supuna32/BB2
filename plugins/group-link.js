import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'සමූහ දත්ත නැත.'
    if (!('participants' in groupMetadata)) throw 'සහභාගිවන්නන් ලියාපදිංචි වී නොමැත.'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'බොට් අංකය එම කණ්ඩායමේ නැත.'
    if (!me.admin) throw '.බොට් නම්බර් එක ඒ ගෲප් එකේ ඇඩ්මින් කෙනෙක් නෙවෙයි'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup <jid>']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true


export default handler