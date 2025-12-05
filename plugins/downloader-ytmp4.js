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
      `https://jerofc.my.id/api/download/ytmp4?url=${text}&apikey=${global.jerapi}`
    );
    const result = response.data.data;
    await jerofc.sendMessage(
      m.chat,
      {
        document: {
          url: result.mp4,
        },
        fileName: result.title + ".mp4",
        mimetype: "video/mp4",
        caption: result.title,
        ptt: false,
        contextInfo: {
          externalAdReply: {
            title: result.title,
            body: "YOUTUBE DOWNLOAD MP4",
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

handler.command = ["ytmp4", "ytvideo", "ytvid"];

module.exports = handler;
