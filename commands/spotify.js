const { Command, Argument } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")
const convert = require('parse-ms')

module.exports = class extends Command {
  constructor() {
    super("spoti", {
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
        },
      ],
      channel: "guild",
      aliases: ["spotify"],
      category: "Fun",
      description: {
        content: "Affiche le status Spotify",
      },
    })
  }

  async exec(message, { target }) {
    if (!target) target = message.member
    else if (typeof target === "string") {
      try {
        target = await message.guild.members.fetch(target)
      } catch (err) {
        target = message.member
      }
    } else {
      target = await message.guild.members.fetch(target.id)
    }
    await target.user.fetch()
    
    let status = target.user.presence.activities.find(stf => stf.name === 'Spotify' && stf.type === 'LISTENING');

    if (target.user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("Cette personne n'écoute pas Spotify.");
    
    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          url = `https://open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = status.timestamps.start,
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);
      
      let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
      let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
      
      let time = `${minutes}:${seconds}`;
      
      const embed = new MessageEmbed()
        .setAuthor(
            message.author.tag,
            message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`Information Spotify de ${target.displayName}`)
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setThumbnail(image)
      .addField("Titre :", name, true)
      .addField("Album :", album, true)
      .addField("Artiste :", artist, true)
      .addField("Durée :", time, false)
      .addField("Écoute sur Spotify !", `[${artist} - ${name}](${url})`, false)
      .setFooter("from Spotify", "https://i.pinimg.com/originals/fb/2c/4c/fb2c4cd83cf531f37381ed8e7b9ad1fc.png")
      message.channel.send(embed)
    }
  }
}