const { Command, Argument } = require("discord-akairo")
const Discord = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("banneur", {
      channel: "guild",
      clientPermissions: "BAN_MEMBERS",
      userPermissions: "BAN_MEMBERS",
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
        },
      ],
      aliases: ["ban"],
      category: "Modération",
      description: {
        content: "Ban un utilisateur",
        usage: "[pseudo]",
        examples: ["Mee6"],
      },
    })
  }

  async exec(message, { target }) {
    if (!target)
      await message.channel.send("Je ne trouve pas la personne à ban !")
    else if (typeof target === "string") {
      try {
        target = await message.guild.members.fetch(target)
      } catch (err) {
        return message.channel.send(
          "Veuillez mentionner la personne à ban si ça ne fonctionne pas."
        )
      }
    } else {
      target = await message.guild.members.fetch(target.id)
    }
    await target.user.fetch()

    const grade = await message.member
      .fetch()
      .then((m) => m.roles.highest.comparePositionTo(target.roles.highest))

    if (grade > 0) {
      if (target.bannable) {
        await target.ban()
        await message.channel.send(`${target.user.tag} a été ban`)
      } else {
        await message.channel.send("Je ne possède pas la permission :/")
      }
    } else {
      await message.channel.send(
        "**Cette fois-ci c'est non !** \nFini la guéguerre entre le staff <:A_MaePolice:767726955637243966>"
      )
    }
  }
}