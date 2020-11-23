const { Command } = require("discord-akairo")

module.exports = class extends Command {
  constructor() {
    super("kick", {
      clientPermissions: "KICK_MEMBERS",
      userPermissions: "KICK_MEMBERS",
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text")
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
    if(typeof target === "string"){
      try {
      user = await message.client.users.fetch(target)
      }catch(err){
        user = null
      }
    }else{
      user = target?.user ?? target
    }

    const grade = message.user.roles.highest.comparePositionTo(
      user.roles.highest
    )
    if (grade > 0) {
      if (user.kickable) {
        if (user) {
          await user.kick()
          await message.channel.send(`${user.username} a été kick`)
        } else {
          await message.channel.send("Précise qui tu veux kick ?")
        }
      } else {
        await message.channel.send("Je ne possède pas la permission :/")
      }
    } else {
      message.channel.send(
        "**Cette fois-ci c'est non !** \nFini la guéguerre entre le staff <:A_MaePolice:767726955637243966>"
      )
    }
  }
}