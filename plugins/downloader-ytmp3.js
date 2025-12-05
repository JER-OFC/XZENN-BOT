const axios = require("axios");

let handler = async (m, { jerofc, args, reply, prefix, command, quoted }) => {
  if (!text)
    return reply(
      `Silahkan Input Url Dari Youtube\n\n${
        prefix + command
      } https://youtu.be/gvunApwKIiY?si=rsmSHOdNysDNnVFj`
    );
  try {
    const response = await axios.get(
      `https://jerofc.my.id/api/download/ytmp3?url=${text}&apikey=${global.jerapi}`
    );
    const result = response.data.data;
    await jerofc.sendMessage(
      m.chat,
      {
        audio: {
          url: result.mp3,
        },
        mimetype: "audio/mpeg",
        ptt: false,
        contextInfo: {
          externalAdReply: {
            title: result.title,
            body: "YOUTUBE DOWNLOAD MP3",
            previewType: "PHOTO",
            thumbnailUrl: result.thumbnail,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: args[0],
          },
        },
      },
      {
        quoted: m,
      }
    );
  } catch (e) {
    console.log(e);
    reply("EROR");
  }
};

handler.command = ["ytmp3", "ytaudio"];

module.exports = handler;
