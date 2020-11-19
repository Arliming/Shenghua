const { Command } = require("discord-akairo")

class CmdKick extends Command {
  constructor() {
    super("kick", {
    clientPermissions: "KICK_MEMBERS",
    userPermissions: "KICK_MEMBERS",
    args: [
      {
        id: "member",
        type: "member",
        otherwise: "Donne un membre valide",
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

  async exec(message, { member }) {
    const grade = message.member.roles.highest.comparePositionTo(member.roles.highest)
    if (
      grade > 0
    ) {
      if (member.kickable) {
        if (member) {
          await member.kick()
          await message.channel.send("Cet utilisateur a été kick")
        } else {
          await message.channel.send("Précise qui tu veux kick ?")
        }
      } else {
        await message.channel.send("Je ne possède pas la permission :/")
      }
    } else {
      message.channel.send("Cette fois-ci c'est non ! \nFini la guéguerre entre le staff <:A_MaePolice:767726955637243966>")
    }
  }
}

module.exports = CmdKick
