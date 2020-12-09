const { Command } = require("discord-akairo")
const db = require("../db.js")

module.exports = class extends Command {
  constructor() {
    super("prefix", {
      userPermissions: "MANAGE_MESSAGES",
      cooldown: 5000,
      aliases: ["prefix", "pfx"],
      channel: "guild",
      category: "custom",
      description: {
        content: "Modifie le prefix pour votre discord",
      },
      args: [
        {
          id: "newPrefix",
          type: "text",
          default: "a,",
        },
      ],
    })
  }

  async exec(message, { newPrefix }) {
    await db.prefixes.set(message.guild.id, newPrefix)
    return message.util.send("**Prefix mis à jour :** \n> " + newPrefix)
  }
}
