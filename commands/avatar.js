const { Command, Argument } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("avatar", {
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
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

  async exec(message, { target }) {
    let user
    if (typeof target === "string") {
      try {
        user = await message.client.users.fetch(target)
      } catch (err) {
        user = null
      }
    } else {
      user = target?.user ?? target
    }
    if (!user) user = message.author

    const embed = new MessageEmbed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle("Voici l'avatar de " + user.username)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setImage(
        user.displayAvatarURL({
          dynamic: true,
          size: 256,
        })
      )
      .setTimestamp()
    await message.channel.send(embed)
    await message.delete()
  }
}
