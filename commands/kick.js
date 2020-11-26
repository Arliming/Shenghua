const { Command, Argument } = require("discord-akairo")
const Discord = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("kick", {
      channel: "guild",
      clientPermissions: "KICK_MEMBERS",
      userPermissions: "KICK_MEMBERS",
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
        },
      ],
      aliases: ["kick", "expulse"],
      category: "Modération",
      description: {
        content: "Kick un utilisateur",
        usage: "[pseudo]",
        examples: ["Mee6"],
      },
    })
  }

  async exec(message, { target }) {
    if (!target)
      await message.channel.send("Je ne trouve pas la personne à kick !")
    else if (typeof target === "string") {
      try {
        target = await message.guild.members.fetch(target)
      } catch (err) {
        return message.channel.send(
          "Veuillez mentionner la personne à kick si ça ne fonctionne pas."
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
      if (target.kickable) {
        await target.kick()
        await message.channel.send(`${target.user.username} a été kick`)
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
