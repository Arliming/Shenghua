const { Command, Argument } = require("discord-akairo")
const Discord = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("ban", {
      channel: "guild",
      clientPermissions: "BAN_MEMBERS",
      userPermissions: "BAN_MEMBERS",
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
        },
      ],
      aliases: ["ban", "banned"],
      category: "Modération",
      description: {
        content: "Ban un utilisateur",
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
      return message.channel.send("Je ne trouve pas la personne à ban ?")
    } else {
      if (target instanceof Discord.User)
        target = await message.guild.members.fetch(target)

      const grade = await message.member
        .fetch()
        .then((m) => m.roles.highest.comparePositionTo(target.roles.highest))

      if (grade > 0) {
        if (target.bannable) {
          if (user) {
            await target.ban()
            await message.channel.send(`${user.username} a été ban`)
          } else {
            await message.channel.send("Précise qui tu veux ban ?")
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
