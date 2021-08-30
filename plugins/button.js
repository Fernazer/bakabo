let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, 'Pilih Menu Di Bawah Ya Kak\nDan Jangan Lupa Baca Rules Dibawah Ini\n\nSpam = Banned\nTelp = Blok\n\nSubscribe Me\nhttps://bit.ly/3hg3bm4\n\nJoin My Grup WhatsApp Official\nhttps://bit.ly/2VUSJIC\n\n\nMy Rest Api\n1. https://zergans-api.herokuapp.com\n2. https://rakugans.herokuapp.com', 'https://i.ibb.co/fHDx30X/20210725-125918.jpg', `▷Registered : ${registered ? 'Yes': 'No'}\n▷Name : ${name}\n▷Age : ${age}\n▷Ticket : ${limit}\n▷Role : ${role}\n▷Money : ${money}\n▷Level : ${level}\n▷Health : ${healt}\n▷Premium : ${premium ? 'Yes': 'No'}\n\n Thanks To\nNurutomo\nRendyCraft\nIbnu NR\nCaliph71\nRaku-Kun\nAria\nAnd All Creator Bot`.trim(), 'Menu Bot', '.newmenu',m)
  }
handler.help = ['menu']
handler.tags = ['main'] 
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler

//gtw work kga klo kga work ubah sendiri aja commandnya
