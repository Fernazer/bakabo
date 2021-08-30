let { performance } = require('perf_hooks')

const { createHash } = require('crypto') 

let util = require('util')

let fetch = require('node-fetch')

let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

let levelling = require('../lib/levelling')

const moment = require('moment-timezone')

let PhoneNumber = require('awesome-phonenumber')

let fs = require ('fs')

let path = require('path')



let handler  = async (m, { conn, usedPrefix: _p }) => {



let neww = performance.now()

let old = performance.now()

const chats = conn.chats.all()

const groups = chats.filter(v => v.jid.endsWith('g.us'))

const groupsIn = groups.filter(v => !v.read_only)

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {

  	const job = global.DATABASE.data.users[m.sender].level

  var zerojob = 'Pengangguran'

  

  	      if (job >= '0' && job <= '5') {

  		      zerojob = 'Pengangguran'

 } else if (job >= '5' && job <= '10') {

 			   zerojob = 'Pemulung'

 } else if (job >= '10' && job <= '20') {

 			   zerojob = 'Miner/Penambang'

 } else if (job >= '20' && job <= '30') {

 			   zerojob = 'Penebang Pohon'

 } else if (job >= '30' && job <= '40') {

 			   zerojob = 'Pangkalan Ojek'

 } else if (job >= '40' && job <= '50') {

 			   zerojob = 'Driver Online'

 } else if (job >= '50' && job <= '60') {

 			   zerojob = 'Satpam'

 } else if (job >= '60' && job <= '70') {

 			   zerojob = 'Polisi'

 } else if (job >= '70' && job <= '80') {

 			   zerojob = 'Tentara'

 } else if (job >= '80' && job <= '90') {

 			   zerojob = 'Pekerja Kantoran'

 } else if (job >= '90' && job <= '100') {

 			   zerojob = 'Prostitusi Online'

 } else {

 			   zerojob = 'Prostitusi Online'

 }

 

  	const lbars = global.DATABASE.data.users[m.sender].level

  var zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’]'



         if (lbars >= '0' && lbars <= '5') {

                zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'

         } else if (lbars >= '5' && lbars <= '10') {

				zerobars = '[â–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’]'

		 } else if (lbars >= '10' && lbars <= '20') {

				zerobars = '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '20' && lbars <= '30') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '30' && lbars <= '40') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '40' && lbars <= '50') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’]'

		} else if (lbars >= '50' && lbars <= '60') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’]' 

		} else if (lbars >= '60' && lbars <= '70') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’]'

		} else if (lbars >= '70' && lbars <= '80') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’]'

		} else if (lbars >= '80' && lbars <= '90') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’]'

		} else if (lbars >= '90' && lbars <= '100') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'

		} else { 

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'

		} 



const jam = moment.tz('Asia/Jakarta').format('HH')



 var ucapanWaktu = 'Selamat Pagi ðŸŒ„'







				if (jam >= '03' && jam <= '10') {



				ucapanWaktu = 'Selamat Pagi ðŸŒ„'



				} else if (jam >= '10' && jam <= '13') {



				ucapanWaktu = 'Selamat Siang â˜€ï¸'



				} else if (jam >= '13' && jam <= '18') {



				ucapanWaktu = 'Selamat Sore ðŸŒ…'



				} else if (jam >= '18' && jam <= '23') {



				ucapanWaktu = 'Selamat Malam ðŸŒ™'



				} else {



				ucapanWaktu = 'Selamat Malam ðŸŒ™'



				}

 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `${ucapanWaktu}`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}

const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {







					"productMessage": {



						"product": {



							"productImage": {



								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",



								"mimetype": "image/jpeg",



								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",



								"fileLength": "43344",



								"height": 1080,



								"width": 1080,



								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",



								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",



								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",



								"mediaKeyTimestamp": "1612168223",



								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)



		},



							"productId": "3872465552870232",



							"title": `RP 50.000`,



							"description" : `${ucapanWaktu}`,



	"productImageCount": 1



						},



						"businessOwnerJid": "6287834993722@s.whatsapp.net"}}}    



let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

    let { exp, limit, level, role, age, money, registered, healt, coin, tigame, premium } = global.DATABASE.data.users[m.sender]

    let { min, xp, max } = levelling.xpRange(level, global.multiplier)



    let name = registered ? global.DATABASE.data.users[m.sender].name : conn.getName(m.sender)

    

    let sn = createHash('md5').update(m.sender).digest('hex')



    let d = new Date

    let locale = 'id'

    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()

        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

  const memo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

    }) 

    const hariRaya = new Date('December 31, 2021 23:59:59')
let { performance } = require('perf_hooks')

const { createHash } = require('crypto') 

let util = require('util')

let fetch = require('node-fetch')

let os = require('node-os-utils')

let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

let levelling = require('../lib/levelling')

const moment = require('moment-timezone')

let PhoneNumber = require('awesome-phonenumber')

let fs = require ('fs')

let path = require('path')



let handler  = async (m, { conn, usedPrefix: _p }) => {



let neww = performance.now()

let old = performance.now()

const chats = conn.chats.all()

const groups = chats.filter(v => v.jid.endsWith('g.us'))

const groupsIn = groups.filter(v => !v.read_only)

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {

  	const job = global.DATABASE.data.users[m.sender].level

  var zerojob = 'Pengangguran'

  

  	      if (job >= '0' && job <= '5') {

  		      zerojob = 'Pengangguran'

 } else if (job >= '5' && job <= '10') {

 			   zerojob = 'Pemulung'

 } else if (job >= '10' && job <= '20') {

 			   zerojob = 'Miner/Penambang'

 } else if (job >= '20' && job <= '30') {

 			   zerojob = 'Penebang Pohon'

 } else if (job >= '30' && job <= '40') {

 			   zerojob = 'Pangkalan Ojek'

 } else if (job >= '40' && job <= '50') {

 			   zerojob = 'Driver Online'

 } else if (job >= '50' && job <= '60') {

 			   zerojob = 'Satpam'

 } else if (job >= '60' && job <= '70') {

 			   zerojob = 'Polisi'

 } else if (job >= '70' && job <= '80') {

 			   zerojob = 'Tentara'

 } else if (job >= '80' && job <= '90') {

 			   zerojob = 'Pekerja Kantoran'

 } else if (job >= '90' && job <= '100') {

 			   zerojob = 'Prostitusi Online'

 } else {

 			   zerojob = 'Prostitusi Online'

 }

 

  	const lbars = global.DATABASE.data.users[m.sender].level

  var zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’]'



         if (lbars >= '0' && lbars <= '5') {

                zerobars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'

         } else if (lbars >= '5' && lbars <= '10') {

				zerobars = '[â–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’]'

		 } else if (lbars >= '10' && lbars <= '20') {

				zerobars = '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '20' && lbars <= '30') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '30' && lbars <= '40') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’]'

		} else if (lbars >= '40' && lbars <= '50') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’]'

		} else if (lbars >= '50' && lbars <= '60') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’]' 

		} else if (lbars >= '60' && lbars <= '70') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’]'

		} else if (lbars >= '70' && lbars <= '80') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’]'

		} else if (lbars >= '80' && lbars <= '90') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’]'

		} else if (lbars >= '90' && lbars <= '100') {

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'

		} else { 

				zerobars = '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'

		} 



const jam = moment.tz('Asia/Jakarta').format('HH')



 var ucapanWaktu = 'Selamat Pagi ðŸŒ„'







				if (jam >= '03' && jam <= '10') {



				ucapanWaktu = 'Selamat Pagi ðŸŒ„'



				} else if (jam >= '10' && jam <= '13') {



				ucapanWaktu = 'Selamat Siang â˜€ï¸'



				} else if (jam >= '13' && jam <= '18') {



				ucapanWaktu = 'Selamat Sore ðŸŒ…'



				} else if (jam >= '18' && jam <= '23') {



				ucapanWaktu = 'Selamat Malam ðŸŒ™'



				} else {



				ucapanWaktu = 'Selamat Malam ðŸŒ™'



				}

 const ftoko = { key : { fromMe: false, participant : `0@s.whatsapp.net` },message: {orderMessage: { message: `${ucapanWaktu}`,thumbnail: fs.readFileSync("./src/logo.jpg")}}}

const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {







					"productMessage": {



						"product": {



							"productImage": {



								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",



								"mimetype": "image/jpeg",



								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",



								"fileLength": "43344",



								"height": 1080,



								"width": 1080,



								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",



								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",



								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",



								"mediaKeyTimestamp": "1612168223",



								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)



		},



							"productId": "3872465552870232",



							"title": `RP 50.000`,



							"description" : `${ucapanWaktu}`,



	"productImageCount": 1



						},



						"businessOwnerJid": "6287834993722@s.whatsapp.net"}}}    



let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

    let { exp, limit, level, role, age, money, registered, healt, coin, tigame, premium } = global.DATABASE.data.users[m.sender]

    let { min, xp, max } = levelling.xpRange(level, global.multiplier)



    let name = registered ? global.DATABASE.data.users[m.sender].name : conn.getName(m.sender)

    

    let sn = createHash('md5').update(m.sender).digest('hex')



    let d = new Date

    let locale = 'id'

    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()

        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    }).format(d)

    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")

    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

    let date = d.toLocaleDateString(locale, {



      day: 'numeric',



      month: 'long',



      year: 'numeric'



    })



    let time = d.toLocaleTimeString(locale, {



      hour: 'numeric',



      minute: 'numeric',



      second: 'numeric'



    })



    let _uptime = process.uptime() * 1000



    let _muptime



    if (process.send) {



      process.send('uptime')



      _muptime = await new Promise(resolve => {



        process.once('message', resolve)



        setTimeout(resolve, 1000)



      }) * 1000



    }



    let muptime = clockString(_muptime)



    let uptime = clockString(_uptime)



    let totalreg = Object.keys(global.DATABASE._data.users).length

    let totalgc = Object.keys(global.DATABASE._data.chats).length

    let totalsend = global.DATABASE.data.stats['menu.js'].total



    let rtotalreg = 0



    try {



    



    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length



    } catch {



  



    }



  



let tags = {

  'main': 'ï¼³ï½”ï½ï½’ï½”  ï¼¢ï½ï½”',

      'daftar': 'ï¼¤ï½ï½†ï½”ï½ï½’',

      'abs': 'ï¼¡ï½‚ï½“ï½…ï½Žï½“ï½‰  ï¼ï½…ï½Žï½•', 

      'xp': 'ï¼¥ï½˜ï½  &   ï¼¬ï½‰ï½ï½‰ï½”',

      'rpg': 'ï¼¡ï½„ï½–ï½…ï½Žï½”ï½•ï½’ï½…  ï¼ï½…ï½Žï½•', 

      'apk': 'ï¼¡ï½ï½‹  ï¼¤ï½ï½—ï½Žï½Œï½ï½ï½„ï½…ï½’',

      'hadiah': 'ï¼¨ï½ï½„ï½‰ï½ï½ˆ',

      'dewasa': 'ï¼¤ï½…ï½—ï½ï½“ï½  ï¼ï½…ï½Žï½•',

      'database': 'ï¼¤ï½ï½”ï½ï½‚ï½ï½“ï½…',

      'group': 'ï¼§ï½’ï½ï½•ï½  ï¼ï½…ï½Žï½•',

      'anime': 'ï¼¡ï½Žï½‰ï½ï½…  ï¼ï½…ï½Žï½•',

      'panik': 'ï¼°ï½’ï½ï½Žï½‹  ï¼ï½…ï½Žï½•',

      'sticker': 'ï¼³ï½”ï½‰ï½ƒï½‹ï½…ï½’  ï¼ï½…ï½Žï½•',

      'game': 'ï¼¦ï½•ï½Ž  ï¼ï½…ï½Žï½•',

      'image': 'ï¼©ï½ï½ï½‡ï½…  ï¼ï½…ï½Žï½•',

      'videomaker': 'ï¼¶ï½‰ï½„ï½…ï½  ï¼ï½…ï½Žï½•',

      'anony': 'ï¼¡ï½Žï½ï½Žï½™ï½ï½ï½•ï½“  ï¼£ï½ˆï½ï½”',

      'input': 'ï¼¶ï½‰ï½’ï½•ï½“  ï¼¢ï½•ï½‹ï½ï½Ž  ï¼¶ï½‰ï½’ï½•ï½“', 

      'audio': 'ï¼¡ï½•ï½„ï½‰ï½  ï¼ï½…ï½Žï½•', 

      'sound': 'ï¼³ï½ï½•ï½Žï½„  ï¼ï½…ï½Žï½•',

      'quotes': 'ï¼²ï½ï½Žï½„ï½ï½ ï¼ï½…ï½Žï½•',

      'primbon': 'ï¼°ï½’ï½‰ï½ï½‚ï½ï½Ž  ï¼ï½…ï½Žï½•',

      'belajar': 'ï¼¥ï½„ï½•ï½ƒï½ï½”ï½‰ï½ï½Ž  ï¼ï½…ï½Žï½•',

      'music': 'ï¼ï½•ï½“ï½‰ï½ƒ  ï¼ï½…ï½Žï½•',

      'simi': 'ï¼³ï½‰ï½ï½‰ï¼³ï½‰ï½ï½‰  ï¼ï½…ï½Žï½•',

      'kerang': 'ï¼«ï½…ï½’ï½ï½Žï½‡  ï¼ï½…ï½Žï½•',

      'downloader': 'ï¼¤ï½ï½—ï½Žï½Œï½ï½ï½„  ï¼ï½…ï½Žï½•',

      'news': 'ï¼¢ï½…ï½’ï½‰ï½”ï½  ï¼ï½…ï½Žï½•',

      'spam': 'ï¼³ï½ï½ï½  ï¼ï½…ï½Žï½•',

      'tools': 'ï¼´ï½ï½ï½Œï½“  ï¼ï½…ï½Žï½•',

      'jadibot': 'ï¼®ï½•ï½ï½ï½ï½Žï½‡  ï¼¢ï½ï½”',

      'premium': 'ï¼°ï½’ï½…ï½ï½‰ï½•ï½  &  ï¼¶ï¼©ï¼°  ï¼ï½…ï½Žï½•',

      'owner': 'ï¼¯ï½—ï½Žï½…ï½’  ï¼ï½…ï½Žï½•',

      'host': 'ï¼¨ï½ï½“ï½”  ï¼ï½…ï½Žï½•',

      'info': 'ï¼©ï½Žï½†ï½ï½’ï½ï½ï½”ï½‰ï½ï½Ž',

      'thnks': 'ï¼´ï¼¨ï¼¡ï¼®ï¼«ï¼³  ï¼´ï¼¯',

}



    for (let plugin of Object.values(global.plugins))



      if (plugin && 'tags' in plugin)



        for (let tag of plugin.tags)



          if (!tag in  tags) tags[tag] = tag



    let help = Object.values(global.plugins).map(plugin => {



      return {



        help: plugin.help,



        tags: plugin.tags,



        prefix: 'customPrefix' in plugin,



        limit: plugin.limit



      }



    })



    let groups = {}



    for (let tag in tags) {



      groups[tag] = []



      for (let menu of help)



        if (menu.tags && menu.tags.includes(tag))



          if (menu.help) groups[tag].push(menu)



    }



    conn.menu = conn.menu ? conn.menu : {}



    let before = conn.menu.before || `

Hello *%name*

Im *${conn.getName(conn.user.jid)}* And You Use 

Prefix *%p*



â ï¼©ï½Žï½†ï½ ï¼¢ï½ï½”

â–· Bot Name : *${conn.getName(conn.user.jid)}*

â–· Browser : *${conn.browserDescription[1]}*

â–· Wa Web Name : *${conn.browserDescription[0]}*

â–· Wa Web Version : *${conn.browserDescription[2]}*

â–· Version : *%version*

â–· Memory : *${memo}*

â–· Battery : *${conn.battery ? `${conn.battery.value}%* ${conn.battery.live ? '*Charging*%' : '*Not Charging*'}` : '*Menunggu...*'}

â–· Speed : ${neww} *ms*

â–· Level Bars : *${zerobars}*

â–· Total Features : *998+*



â–· Click Here To Join

â–· *https://bit.ly/2VUSJIC*





â ï¼©ï½Žï½†ï½ ï¼µï½“ï½…ï½’

â–· UserName : *%name*

â–· Serial Number : *%sn*

â–· Prefix : ã€Ž *%p* ã€

â–· Mention : *@${m.sender.replace(/@.+/, '')}*

â–· Age : *${registered ? '' + age : ''}*

â–· Phone Number : *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*

â–· Registered : *${registered ? 'Yes': 'No'}*

â–· Premium User : *${premium ? 'Yes': 'No'}*

â–· Pekerjaan : *${job}*

â–· Role : *%role*

â–· Health : *%healt*

â–· Coin : *%coin*

â–· Money : *RP %money*

â–· Ticket : *%limit*

â–· Game Limit : *%tigame*

â–· Level : *%level*

â–· Exp : *%exp*

â–· Exp To Levelup : *%xp4levelup*

â–· Total Exp : *%totalexp*





â ï¼¤ï½ï½”ï½… ï¼† ï¼´ï½‰ï½ï½…

â–· Day : *%week*

â–· Date : *%date*

â–· New Year : *${raya}*

â–· Weton : *%weton*

â–· Islamic Date : *${dateIslamic}*

â–· Time : *%time WIB*

â–· Time : *${wit} WIT*

â–· Time : *${wita} WITA*





â ï¼¤ï½ï½”ï½

â–· Uptime : *%uptime*

â–· Total Hit : *%totalsend*

â–· Chat In Group : *${groupsIn.length}*

â–· Total Chats : ${chats.length}

â–· Main Uptime : *%muptime*

â–· Users In Database : *%totalreg Users*

â–· Registered : *%rtotalreg*

â–· Total GC : *%totalgc*



%readmore



`

    let header = conn.menu.header || 'à¼º %category à¼»'



    let body   = conn.menu.body   || 'â”‚ ð–£µ *%cmd*%islimit' 



    let footer = conn.menu.footer || 'â•°â”€â”€â”€â”€\n'



    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``



    let _text  = before + '\n'



    for (let tag in groups) {



      _text += header.replace(/%category/g, tags[tag]) + '\n'



      for (let menu of groups[tag]) {



        for (let help of menu.help)



          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'



      }



      _text += footer + '\n'



    }



    _text += after



    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''



    let replace = {



      '%': '%',



      p: _p, uptime, muptime,



      npmname: package.name,



      npmdesc: package.description,



      version: package.version,



      exp: exp - min,



      maxexp: xp,



      totalexp: exp,



      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,



      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',



      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, battery, coin, tigame, totalsend, sn,



      readmore: readMore



    }



    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])



    ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)



    

   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: false, thumbnail: ppnya, quoted: ftoko, contextInfo : { mentionedJid: conn.parseMention(text),



    externalAdReply: {



                    title: `SIMPLE BOT WHATSAPP`,



                    body: `${ucapanWaktu} ${name}`,



                    mediaType: 2,



                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),



                    mediaUrl: 'https://i.ibb.co/fHDx30X/20210725-125918.jpg'



                }



}})



  } catch (e) {



    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)



    throw e



  }



}

handler.help = ['newmenu']

handler.tags = ['kd']

handler.command = ['newmenu']

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = true



handler.admin = false

handler.botAdmin = false



handler.fail = null

handler.exp = false



module.exports = handler



const more = String.fromCharCode(8206)



const readMore = more.repeat(4001)







function clockString(ms) {



  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)



  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60



  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60



  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')



}
    var sekarang = new Date().getTime()

    var Selisih = hariRaya - sekarang

    var jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24))

    var jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    var mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))

    var ddetik = Math.floor( Selisih % (1000 * 60) / 1000)

    const raya = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`

     }) 

    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    }).format(d)

    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")

    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

    let date = d.toLocaleDateString(locale, {



      day: 'numeric',



      month: 'long',



      year: 'numeric'



    })



    let time = d.toLocaleTimeString(locale, {



      hour: 'numeric',



      minute: 'numeric',



      second: 'numeric'



    })



    let _uptime = process.uptime() * 1000



    let _muptime



    if (process.send) {



      process.send('uptime')



      _muptime = await new Promise(resolve => {



        process.once('message', resolve)



        setTimeout(resolve, 1000)



      }) * 1000



    }



    let muptime = clockString(_muptime)



    let uptime = clockString(_uptime)



    let totalreg = Object.keys(global.DATABASE._data.users).length

    let totalgc = Object.keys(global.DATABASE._data.chats).length

    let totalsend = global.DATABASE.data.stats['menu.js'].total



    let rtotalreg = 0



    try {



    



    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length



    } catch {



  



    }



  



let tags = {

  'main': 'ï¼³ï½”ï½ï½’ï½”  ï¼¢ï½ï½”',

      'daftar': 'ï¼¤ï½ï½†ï½”ï½ï½’',

      'abs': 'ï¼¡ï½‚ï½“ï½…ï½Žï½“ï½‰  ï¼ï½…ï½Žï½•', 

      'xp': 'ï¼¥ï½˜ï½  &   ï¼¬ï½‰ï½ï½‰ï½”',

      'rpg': 'ï¼¡ï½„ï½–ï½…ï½Žï½”ï½•ï½’ï½…  ï¼ï½…ï½Žï½•', 

      'apk': 'ï¼¡ï½ï½‹  ï¼¤ï½ï½—ï½Žï½Œï½ï½ï½„ï½…ï½’',

      'hadiah': 'ï¼¨ï½ï½„ï½‰ï½ï½ˆ',

      'dewasa': 'ï¼¤ï½…ï½—ï½ï½“ï½  ï¼ï½…ï½Žï½•',

      'database': 'ï¼¤ï½ï½”ï½ï½‚ï½ï½“ï½…',

      'group': 'ï¼§ï½’ï½ï½•ï½  ï¼ï½…ï½Žï½•',

      'anime': 'ï¼¡ï½Žï½‰ï½ï½…  ï¼ï½…ï½Žï½•',

      'panik': 'ï¼°ï½’ï½ï½Žï½‹  ï¼ï½…ï½Žï½•',

      'sticker': 'ï¼³ï½”ï½‰ï½ƒï½‹ï½…ï½’  ï¼ï½…ï½Žï½•',

      'game': 'ï¼¦ï½•ï½Ž  ï¼ï½…ï½Žï½•',

      'image': 'ï¼©ï½ï½ï½‡ï½…  ï¼ï½…ï½Žï½•',

      'videomaker': 'ï¼¶ï½‰ï½„ï½…ï½  ï¼ï½…ï½Žï½•',

      'anony': 'ï¼¡ï½Žï½ï½Žï½™ï½ï½ï½•ï½“  ï¼£ï½ˆï½ï½”',

      'input': 'ï¼¶ï½‰ï½’ï½•ï½“  ï¼¢ï½•ï½‹ï½ï½Ž  ï¼¶ï½‰ï½’ï½•ï½“', 

      'audio': 'ï¼¡ï½•ï½„ï½‰ï½  ï¼ï½…ï½Žï½•', 

      'sound': 'ï¼³ï½ï½•ï½Žï½„  ï¼ï½…ï½Žï½•',

      'quotes': 'ï¼²ï½ï½Žï½„ï½ï½ ï¼ï½…ï½Žï½•',

      'primbon': 'ï¼°ï½’ï½‰ï½ï½‚ï½ï½Ž  ï¼ï½…ï½Žï½•',

      'belajar': 'ï¼¥ï½„ï½•ï½ƒï½ï½”ï½‰ï½ï½Ž  ï¼ï½…ï½Žï½•',

      'music': 'ï¼ï½•ï½“ï½‰ï½ƒ  ï¼ï½…ï½Žï½•',

      'simi': 'ï¼³ï½‰ï½ï½‰ï¼³ï½‰ï½ï½‰  ï¼ï½…ï½Žï½•',

      'kerang': 'ï¼«ï½…ï½’ï½ï½Žï½‡  ï¼ï½…ï½Žï½•',

      'downloader': 'ï¼¤ï½ï½—ï½Žï½Œï½ï½ï½„  ï¼ï½…ï½Žï½•',

      'news': 'ï¼¢ï½…ï½’ï½‰ï½”ï½  ï¼ï½…ï½Žï½•',

      'spam': 'ï¼³ï½ï½ï½  ï¼ï½…ï½Žï½•',

      'tools': 'ï¼´ï½ï½ï½Œï½“  ï¼ï½…ï½Žï½•',

      'jadibot': 'ï¼®ï½•ï½ï½ï½ï½Žï½‡  ï¼¢ï½ï½”',

      'premium': 'ï¼°ï½’ï½…ï½ï½‰ï½•ï½  &  ï¼¶ï¼©ï¼°  ï¼ï½…ï½Žï½•',

      'owner': 'ï¼¯ï½—ï½Žï½…ï½’  ï¼ï½…ï½Žï½•',

      'host': 'ï¼¨ï½ï½“ï½”  ï¼ï½…ï½Žï½•',

      'info': 'ï¼©ï½Žï½†ï½ï½’ï½ï½ï½”ï½‰ï½ï½Ž',

      'thnks': 'ï¼´ï¼¨ï¼¡ï¼®ï¼«ï¼³  ï¼´ï¼¯',

}



    for (let plugin of Object.values(global.plugins))



      if (plugin && 'tags' in plugin)



        for (let tag of plugin.tags)



          if (!tag in  tags) tags[tag] = tag



    let help = Object.values(global.plugins).map(plugin => {



      return {



        help: plugin.help,



        tags: plugin.tags,



        prefix: 'customPrefix' in plugin,



        limit: plugin.limit



      }



    })



    let groups = {}



    for (let tag in tags) {



      groups[tag] = []



      for (let menu of help)



        if (menu.tags && menu.tags.includes(tag))



          if (menu.help) groups[tag].push(menu)



    }



    conn.menu = conn.menu ? conn.menu : {}



    let before = conn.menu.before || `

Hello *%name*

Im *${conn.getName(conn.user.jid)}* And You Use 

Prefix *%p*



â ï¼©ï½Žï½†ï½ ï¼¢ï½ï½”

â–· Bot Name : *${conn.getName(conn.user.jid)}*

â–· Browser : *${conn.browserDescription[1]}*

â–· Wa Web Name : *${conn.browserDescription[0]}*

â–· Wa Web Version : *${conn.browserDescription[2]}*

â–· Version : *%version*

â–· Battery : *${conn.battery ? `${conn.battery.value}%* ${conn.battery.live ? '*Charging*%' : '*Not Charging*'}` : '*Menunggu...*'}

â–· Speed : ${neww} *ms*

â–· Level Bars : *${zerobars}*

â–· Total Features : *998+*



â–· Click Here To Join

â–· *https://bit.ly/2VUSJIC*





â ï¼©ï½Žï½†ï½ ï¼µï½“ï½…ï½’

â–· UserName : *%name*

â–· Serial Number : *%sn*

â–· Prefix : ã€Ž *%p* ã€

â–· Mention : *@${m.sender.replace(/@.+/, '')}*

â–· Age : *${registered ? '' + age : ''}*

â–· Phone Number : *${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}*

â–· Registered : *${registered ? 'Yes': 'No'}*

â–· Premium User : *${premium ? 'Yes': 'No'}*

â–· Pekerjaan : *${job}*

â–· Role : *%role*

â–· Health : *%healt*

â–· Coin : *%coin*

â–· Money : *RP %money*

â–· Ticket : *%limit*

â–· Game Limit : *%tigame*

â–· Level : *%level*

â–· Exp : *%exp*

â–· Exp To Levelup : *%xp4levelup*

â–· Total Exp : *%totalexp*





â ï¼¤ï½ï½”ï½… ï¼† ï¼´ï½‰ï½ï½…

â–· Day : *%week*

â–· Date : *%date*.

â–· Weton : *%weton*

â–· Islamic Date : *${dateIslamic}*

â–· Time : *%time WIB*

â–· Time : *${wit} WIT*

â–· Time : *${wita} WITA*





â ï¼¤ï½ï½”ï½

â–· Uptime : *%uptime*

â–· Total Hit : *%totalsend*

â–· Chat In Group : *${groupsIn.length}*

â–· Total Chats : ${chats.length}

â–· Main Uptime : *%muptime*

â–· Users In Database : *%totalreg Users*

â–· Registered : *%rtotalreg*

â–· Total GC : *%totalgc*



%readmore



`

    let header = conn.menu.header || 'à¼º %category à¼»'



    let body   = conn.menu.body   || 'â”‚ ð–£µ *%cmd*%islimit' 



    let footer = conn.menu.footer || 'â•°â”€â”€â”€â”€\n'



    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``



    let _text  = before + '\n'



    for (let tag in groups) {



      _text += header.replace(/%category/g, tags[tag]) + '\n'



      for (let menu of groups[tag]) {



        for (let help of menu.help)



          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'



      }



      _text += footer + '\n'



    }



    _text += after



    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''



    let replace = {



      '%': '%',



      p: _p, uptime, muptime,



      npmname: package.name,



      npmdesc: package.description,



      version: package.version,



      exp: exp - min,



      maxexp: xp,



      totalexp: exp,



      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,



      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',



      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, battery, coin, tigame, totalsend, sn,



      readmore: readMore



    }



    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])



    ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)



    

   conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: false, thumbnail: ppnya, quoted: ftoko, contextInfo : { mentionedJid: conn.parseMention(text),



    externalAdReply: {



                    title: `SIMPLE BOT WHATSAPP`,



                    body: `${ucapanWaktu} ${name}`,



                    mediaType: 2,



                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),



                    mediaUrl: 'https://i.ibb.co/fHDx30X/20210725-125918.jpg'



                }



}})



  } catch (e) {



    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)



    throw e



  }



}

handler.help = ['newmenu']

handler.tags = ['kd']

handler.command = ['newmenu']

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = true



handler.admin = false

handler.botAdmin = false



handler.fail = null

handler.exp = false



module.exports = handler



const more = String.fromCharCode(8206)



const readMore = more.repeat(4001)







function clockString(ms) {



  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)



  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60



  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60



  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')



}
