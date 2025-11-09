const axios = require("axios");

let handler = async (m, { jerofc, text, reply, prefix, command }) => {
  if (!text)
    return reply(`Silahkan input text\n\nExample: ${prefix + command} Hello`);
  let response = await axios.get(
    `https://jerofc.my.id/api/tools/iqc?text=${encodeURIComponent(
      text
    )}&apikey=${jerapi}`,
    {
      responseType: "arraybuffer",
    }
  );
  try {
    let media = Buffer.from(response.data);
    jerofc.sendMessage(
      m.chat,
      { image: media, caption: "DONE" },
      { quoted: m }
    );
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["iqc"];

module.exports = handler;
