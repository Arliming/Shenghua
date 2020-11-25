const db = require("../db.js")
const { Command } = require("discord-akairo")

module.exports = class extends Command {
  constructor() {
    super("showprefix", {
      prefix: "",
      cooldown: 5000,
      aliases: ["<@770769340693217281>"],
      category: "hidden",
      description: {
        content: "affiche le prefix",
      },
    })
  }

  async exec(message) {
    await message.channel.send(
      `**Mon préfix est :** \n> ${await db.prefixes.ensure(
        message.guild.id,
        "a,"
      )}`
    )
  }
}
