const fetch = require("node-fetch");

let handler = async (m, { jerofc, text, reply, prefix, command, quoted }) => {
  if (!text)
    return reply(
      `Please enter the url\n\nExample : ${
        prefix + command
      } https://l.likee.video/v/o4Uc8p/`
    );
  try {
    const api = await fetch(
      `https://jerofc.my.id/api/download/likeedl?url=${text}&apikey=${jerapi}`
    );
    let data = await api.json();
    let video = data.result.nowm;
    jerofc.sendMessage(m.chat, {
        video: { url: video },
        caption: "DONE",
      }, {
        quoted: m,
      });
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["likee", "like", "likeedl", "likedl"];

module.exports = handler;