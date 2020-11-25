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
    if (!user) {
      return message.channel.send("Je ne trouve pas la personne à kick ?")
    } else {
      if (target instanceof Discord.User)
        target = await message.guild.members.fetch(target)

      const grade = await message.member
        .fetch()
        .then((m) => m.roles.highest.comparePositionTo(target.roles.highest))

      if (grade > 0) {
        if (target.kickable) {
          if (user) {
            await target.kick()
            await message.channel.send(`${user.username} a été kick`)
          } else {
            await message.channel.send("Précise qui tu veux kick ?")
          }
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
}
