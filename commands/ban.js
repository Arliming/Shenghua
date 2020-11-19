const { Command } = require("discord-akairo")

class CmdBan extends Command {
  constructor() {
    super("ban", {
    clientPermissions: "BAN_MEMBERS",
    userPermissions: "BAN_MEMBERS",
    args: [
      {
        id: "member",
        type: "member",
        otherwise: "Donne un membre valide",
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

  async exec(message, { member }) {
    const grade = message.member.roles.highest.comparePositionTo(member.roles.highest)
    if (
      grade > 0
    ) {
      if (member.bannable) {
        if (member) {
          await member.ban()
          await message.channel.send("Cet utilisateur a été ban")
        } else {
          await message.channel.send("Précise qui tu veux ban ?")
        }
      } else {
        await message.channel.send("Je ne possède pas la permission :/")
      }
    } else {
      await message.channel.send("Cette fois-ci c'est non ! \nFini la guéguerre entre le staff <:A_MaePolice:767726955637243966>")
    }
  }
}

module.exports = CmdBan