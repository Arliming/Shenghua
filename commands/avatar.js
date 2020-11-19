const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class CmdAvatar extends Command {
  constructor() {
    super("avatar", {
      args: [
        {
          id: "member",
          type: "member",
          otherwise: "lul",
        },
      ],
      channel: "guild",
      aliases: ["avatar", "pdp", "pp"],
      category: "Fun",
      description: {
        content: "Affiche l'avatar d'un membre",
        usage: "[pseudo]",
        examples: ["Mee6"],
      },
    })
  }

  async exec(message, { member }) {
    const embed = new MessageEmbed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle("Voici l'avatar de " + member.displayName)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setImage(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    await message.channel.send(embed)
    await message.delete()
  }
}

module.exports = CmdAvatar
