import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗INFO❗]ඔබට ඡායාරූපයක් ගැනීමට අවශ්‍ය Tiktok පරිශීලක නාමය ඇතුළත් කරන්න*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkey}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses  ${text}*`, m, false)
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler