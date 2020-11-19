const deval = require("discord-eval.js")
const { Command } = require("discord-akairo")

class JSeval extends Command {
  constructor() {
    super("js", {
      aliases: ["js", "run", "eval"],
      ownerOnly: true,
      category: "secret",
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
    return deval(code, message)
  }
}

module.exports = JSeval
