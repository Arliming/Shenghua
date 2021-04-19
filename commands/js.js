const evaluate = require("ghom-eval")
const { MessageEmbed } = require("discord.js")
const { Command } = require("discord-akairo")
const pattern = /^```(\S+)?\s(.+[^\\])```$/is

class JSeval extends Command {
  constructor() {
    super("js", {
      aliases: ["js", "run", "eval", "="],
      ownerOnly: true,
      category: "hidden",
      description: {
        content: "Run un code js",
        usage: "[code]",
        examples: ["return 1+1"],
      },
    })
  }

  async exec(message) {
    const { prefix, alias } = message.util.parsed
    
    let code = message.content.slice((prefix + alias).length).trim()

    if (pattern.test(code)) code = code.replace(pattern, "$2")
    
    const evaluated = await evaluate(code, message, "message")

    await message.channel.send(
        new MessageEmbed()
          .setColor(evaluated.failed ? "RED" : "BLURPLE")
          .setTitle(
            `${evaluated.failed ? "\\❌" : "\\✔"} Result of JS evaluation ${
              evaluated.failed ? "(failed)" : ""
            }`
          )
          .setDescription("```js\n" + 
            evaluated.output.slice(0, 2000) + "```"
          )
          .addField(
            "Information", "```yaml\n" + 
            `type: ${evaluated.type}\nclass: ${evaluated.class}\nduration: ${evaluated.duration}ms`+ "```"
          )
      )
  }
}

module.exports = JSeval
