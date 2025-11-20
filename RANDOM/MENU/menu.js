const fs = require("fs")
const chalk = require('chalk')

global.menunya = (prefix) => {
	return `╭───「 *INFO PENGGUNA* 」───
│ 
│ *Nomor:* @${m.sender.split("@")[0]}
│ 
├───「 *🤖 Artificial Intelligence* 」───
│ 
│ ❯ ${prefix}ai
│ ❯ ${prefix}deepseek
│ ❯ ${prefix}gemini
│ 
├───「 *⏳ DOWNLOAD* 」───
│ 
│ ❯ ${prefix}capcut
│ ❯ ${prefix}douyin
│ ❯ ${prefix}facebook
│ ❯ ${prefix}instagram
│ ❯ ${prefix}pindl
│ ❯ ${prefix}soundcloud
│ ❯ ${prefix}spotify
│ ❯ ${prefix}threads
│ ❯ ${prefix}tiktok
│ ❯ ${prefix}tiktokslide
│ ❯ ${prefix}videy
│ ❯ ${prefix}ytmp3
│ ❯ ${prefix}ytmp4
│ 
├───「 *👥 GRUP* 」───
│ 
│ ❯ ${prefix}antilink
│ ❯ ${prefix}antilink2
│ ❯ ${prefix}antiwame
│ ❯ ${prefix}antiwame2
│ ❯ ${prefix}welcome
│ ❯ ${prefix}left
│ ❯ ${prefix}delete
│ ❯ ${prefix}linkgc
│ ❯ ${prefix}open
│ ❯ ${prefix}close
│ ❯ ${prefix}group open
│ ❯ ${prefix}group close
│ ❯ ${prefix}pinchat
│ ❯ ${prefix}unpin
│ ❯ ${prefix}kick
│ ❯ ${prefix}promote
│ ❯ ${prefix}demote
│ ❯ ${prefix}hidetag
│ ❯ ${prefix}totag
│ ❯ ${prefix}autogc
│ ❯ ${prefix}autogc status
│ ❯ ${prefix}autogc off
│ 
├───「 *❔ LAINNYA* 」───
│ 
│ ❯ ${prefix}owner
│ ❯ ${prefix}speed
│ ❯ ${prefix}ping
│ ❯ ${prefix}script
│ ❯ ${prefix}afk
│ ❯ ${prefix}cekpremium
│ 
├───「 *👑 OWNER* 」───
│ 
│ ❯ ${prefix}addplugins
│ ❯ ${prefix}delplugins
│ ❯ ${prefix}getplugins
│ ❯ ${prefix}listplugins
│ ❯ ${prefix}saveplugins
│ ❯ ${prefix}join
│ ❯ ${prefix}addcase
│ ❯ ${prefix}delcase
│ ❯ ${prefix}listcase
│ ❯ ${prefix}getcase
│ ❯ ${prefix}addsewa
│ ❯ ${prefix}delsewa
│ ❯ ${prefix}listsewa
│ ❯ ${prefix}addprem
│ ❯ ${prefix}delprem
│ ❯ ${prefix}listpremium
│ 
├───「 *🎮 GAME RPG* 」───
│ 
│ ❯ ${prefix}inventory
│ ❯ ${prefix}mining
│ ❯ ${prefix}buy 
│ ❯ ${prefix}sell
│ ❯ ${prefix}heal
│ ❯ ${prefix}hunt
│ ❯ ${prefix}adventure
│ ❯ ${prefix}luckyday
│ ❯ ${prefix}killslime
│ ❯ ${prefix}killgoblin
│ ❯ ${prefix}killdevil
│ ❯ ${prefix}killbehemoth
│ ❯ ${prefix}killdemon
│ ❯ ${prefix}killdemonking
│ ❯ ${prefix}joinrpg
│ ❯ ${prefix}sellikan
│ ❯ ${prefix}sellbesi
│ ❯ ${prefix}sellemas
│ ❯ ${prefix}jelajah
│ ❯ ${prefix}mancing
│ ❯ ${prefix}jualikan
│ ❯ ${prefix}jualcoal
│ ❯ ${prefix}lebur
│ ❯ ${prefix}jualstone
│ ❯ ${prefix}jualingot
│ ❯ ${prefix}jualkayu
│ ❯ ${prefix}nebang
│ ❯ ${prefix}goplanet
│ ❯ ${prefix}jualbahankimia
│ 
├───「 *🎰 SALDO RPG* 」───
│ 
│ ❯ ${prefix}topglobal
│ ❯ ${prefix}toplocal
│ ❯ ${prefix}buylimit
│ ❯ ${prefix}buyglimit
│ ❯ ${prefix}transfer
│ ❯ ${prefix}limit
│ ❯ ${prefix}balance
│ 
├───「 *🛒 TOKO* 」───
│ 
│ ❯ ${prefix}list
│ ❯ ${prefix}addlist
│ ❯ ${prefix}updatelist
│ ❯ ${prefix}dellist
│ ❯ ${prefix}jeda
│ ❯ ${prefix}tambah
│ ❯ ${prefix}kurang
│ ❯ ${prefix}kali
│ ❯ ${prefix}bagi
│ ❯ ${prefix}setproses
│ ❯ ${prefix}changeproses
│ ❯ ${prefix}delsetproses
│ ❯ ${prefix}setdone
│ ❯ ${prefix}changedone
│ ❯ ${prefix}delsetdone
│ ❯ ${prefix}proses
│ ❯ ${prefix}done
│ ❯ ${prefix}setwelcome
│ ❯ ${prefix}changewelcome
│ ❯ ${prefix}delsetwelcome
│ ❯ ${prefix}setleft
│ ❯ ${prefix}changeleft
│ ❯ ${prefix}delsetleft
│ 
├───「 *🔍 PENCARIAN* 」───
│ 
│ ❯ ${prefix}play
│ ❯ ${prefix}yts
│ ❯ ${prefix}google
│ ❯ ${prefix}kodepos
│ 
├───「 *👤 STALKER* 」───
│ 
│ ❯ ${prefix}ffstalk
│ ❯ ${prefix}igstalk
│ ❯ ${prefix}stalktele
│ ❯ ${prefix}stalkchtele
│ ❯ ${prefix}stalktwit
│ ❯ ${prefix}wastalk
│ 
├───「 *❓ STICKER* 」───
│ 
│ ❯ ${prefix}brat
│ ❯ ${prefix}bratvideo
│ ❯ ${prefix}sticker
│ ❯ ${prefix}smeme
│ ❯ ${prefix}toimg
│ 
├───「 *🌐 TOOLS* 」───
│ 
│ ❯ ${prefix}iqc
│ ❯ ${prefix}ocr
│ ❯ ${prefix}remini
│ ❯ ${prefix}remini2
│ ❯ ${prefix}removebg
│ ❯ ${prefix}safelinku
│ ❯ ${prefix}shortlink
│ ❯ ${prefix}ssweb
│ ❯ ${prefix}tourl
│ ❯ ${prefix}rvo
│ ❯ ${prefix}tohitam
│ 
╰─────────────

╭───「 *END MENU* 」───
│ ✧ Gunakan fitur dengan bijak
│ ✧ Jangan lakukan spam ya !
╰─────────────
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});