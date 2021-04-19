const evaluate = require("ghom-eval")
const { Command } = require("discord-akairo")

class JSeval extends Command {
  constructor() {
    super("js", {
      aliases: ["js", "run", "eval"],
      ownerOnly: true,
      category: "hidden",
      description: {
        content: "Run un code js",
        usage: "[code]",
        examples: ["return 1+1"],
      },
    })
  }

  exec(message) {
    const { prefix, alias } = message.util.parsed
    const code = message.content.slice((prefix + alias).length)
    
    const evaluated = await evaluate(code, message, "message")

    await message.channel.send(
        new app.MessageEmbed()
          .setColor(evaluated.failed ? "RED" : "BLURPLE")
          .setTitle(
            `${evaluated.failed ? "\\❌" : "\\✔"} Result of JS evaluation ${
              evaluated.failed ? "(failed)" : ""
            }`
          )
          .setDescription(
            app.CODE.stringify({
              content: evaluated.output.slice(0, 2000),
              lang: "js",
            })
          )
          .addField(
            "Information",
            app.CODE.stringify({
              content: `type: ${evaluated.type}\nclass: ${evaluated.class}\nduration: ${evaluated.duration}ms`,
              lang: "yaml",
            })
          )
      )
  }
}

module.exports = JSeval
