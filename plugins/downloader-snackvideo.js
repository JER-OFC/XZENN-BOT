const fetch = require("node-fetch");

let handler = async (m, { jerofc, text, reply, prefix, command, quoted }) => {
  if (!text)
    return reply(
      `Please enter the url\n\nExample : ${
        prefix + command
      } https://www.snackvideo.com/@boniekol23283/video/5215318474710545066`
    );
  try {
    const api = await fetch(
      `https://jerofc.my.id/api/download/snackvid?url=${text}&apikey=${jerapi}`
    );
    let data = await api.json();
    let video = data.result.download;
    jerofc.sendFile(m.chat, video, null, "DONE", m);
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["snack", "snackvideo", "snackvid"];

module.exports = handler;