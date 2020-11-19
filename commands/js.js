const Akairo = require("discord-akairo")
const deval = require("discord-eval.js")

module.exports = new Akairo.Command(
  "js",
  function (message) {
    return deval(message.content, message)
  },

  {
    aliases: ["eval", "code", "run"],
    ownerOnly: true,
    category: "administrator"
  }
)
