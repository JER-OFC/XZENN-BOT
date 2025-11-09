const axios = require("axios");

const { UploadImg } = require("../lib/uploader");

let handler = async (m, { jerofc, text, reply, prefix, command }) => {
  const mime = (quoted.msg || quoted).mimetype || "";
  if (!quoted)
    return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`);
  if (!/image/.test(mime))
    return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`);
  try {
    const buffer = q.download()
    const upload = await UploadImg(buffer)
    let response = await axios.get(
      `https://jerofc.my.id/api/tools/ocr?url=${upload}&apikey=${jerapi}`
    );
    jerofc.sendMessage(m.chat, { text: response.data.result }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["ocr"];

module.exports = handler;
