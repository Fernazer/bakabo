let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    let res = await fetch(`http://zekais-api.herokuapp.com/cersex?query=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.thumb)).buffer()
    let hasil = `*── 「 CERSEX 」 ──*\n\n❏ *Judul*: ${json.title}\n\n❏*Category*: ${json.category}\n\n❏*Post*: ${json.post}\n\n❏*Cerita*: ${json.result}`

    conn.sendFile(m.chat, thumb, 'cersex.jpg', hasil, m)
}
handler.help = ['cersex'].map(v => v + ' <query>')
handler.tags = ['dewasa']
handler.command = /^(cersex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 2

module.exports = handler
