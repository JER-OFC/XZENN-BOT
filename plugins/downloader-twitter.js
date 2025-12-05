const fetch = require("node-fetch");

let handler = async (m, { jerofc, text, reply, prefix, command, quoted }) => {
  if (!text)
    return reply(
      `Please enter the url\n\nExample : ${
        prefix + command
      } https://twitter.com/Michie_JKT48/status/1995147036589760544`
    );
  try {
    const api = await fetch(
      `https://jerofc.my.id/api/download/twitter?url=${text}&apikey=${jerapi}`
    );
    let results = await api.json();
    for (let media of results.media_extended) {
        if (media.type === "video") {
            jerofc.sendFile(m.chat, media.url, null, "DONE", m);
        } else if (media.type === "image") {
            jerofc.sendFile(m.chat, media.url, null, "", m);
        }
    }
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["twitter", "twiter"];

module.exports = handler;