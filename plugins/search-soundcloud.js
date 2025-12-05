const fetch = require('node-fetch');

let handler = async (m, { jerofc, text, prefix, command, reply, }) => {
    if (!text) return reply(`*Masukkan Judul Lagu Yang Ingin Di Cari Di Soundcloud!*\n\n*Contoh : ${prefix + command} stay*`);
    let url = `https://jerofc.my.id/api/search/soundcloud?query=${encodeURIComponent(text)}&apikey=${jerapi}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
        if (!json.status) return reply(`*Lagu Tidak Ditemukan!*`);
        let capt = '*───「 SOUNDLOUD SEARCH 」───*\n\n';
        for (let i of json.data) {
            capt += `*Title:* ${i.title}\n`
            capt += `*Artist:* ${i.artist}\n`
            capt += `*Views:* ${i.views}\n`
            capt += `*Duration:* ${i.timestamp || "null"}\n`
            capt += `*Link:* ${i.trackURL}\n`
            capt += `\n*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _*\n\n`;
        }

        jerofc.sendMessage(m.chat, {
            image: { url: json.data[0].thumb },
            caption: capt
        }, {
            quoted: m
        });
    } catch (error) {
        console.error(error);
        reply('*Terjadi Kesalahan Saat Mencari Lagu di Soundcloud!*');
    }
}

module.exports = handler;

handler.command = ["soundcloudsearch"];