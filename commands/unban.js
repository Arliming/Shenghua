const { Command } = require("discord-akairo")

class CmdUnban extends Command {
  constructor() {
    super("unban", {
      aliases: ["unban", "ub"],
      clientPermissions: "BAN_MEMBERS",
      userPermissions: "BAN_MEMBERS",
      category: "Modération",
      description: {
        content: "Unban un utilisateur",
        usage: "[id]",
        examples: ["308540889754501120"],
      },
      args: [
        {
          id: "user",
          type: "user",
          otherwise: "Indique un ID...",
        },
      ],
    })
  }

  async exec(message, { user }) {
    const banned = await message.guild.fetchBans()

    if (banned.has(user.id)) {
      await message.guild.members.unban(user)
      await message.channel.send(`${user} a été unban`)
    } else {
      await message.channel.send("Cette personne n'est pas bannie.")
    }
  }
}

module.exports = CmdUnban
