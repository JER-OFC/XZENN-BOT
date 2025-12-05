const fetch = require("node-fetch");

let handler = async (m, { jerofc, text, reply, prefix, command }) => {
  if (!text)
    return reply(
      `Please enter url\n\nExample: ${
        prefix + command
      } https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`
    );
  try {
    let api = await fetch(
      `https://jerofc.my.id/api/download/soundcloud?url=${text}&apikey=${jerapi}`
    );
    let res = await api.json();

    await jerofc.sendMessage(m.chat, {
      audio: {
        url: res.downloadUrl,
      },
      mimetype: "audio/mpeg"
    }, {
      quoted: m
    });

  } catch (err) {
    console.error("Error", err);
    throw err;
  }
};

handler.command = ["soundcloud"];

module.exports = handler;
