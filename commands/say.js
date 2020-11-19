const { Command } = require("discord-akairo")

class CmdSay extends Command {
  constructor() {
    super("say", {
      aliases: ["say", "dis", "dire", "parle"],
      category: "Fun",
      description: {
        content: "Dis ce que vous souhaitez",
        usage: "[message]",
        examples: ["Bonjour !"],
      },
    })
  }

  async exec(message) {
    const { prefix, alias } = message.util.parsed

    const said = message.content.slice((prefix + alias).length) || "Bite"

    await message.channel.send(`${said}`)

    await message.delete()
  }
}

module.exports = CmdSay
