const deval = require("discord-eval.js")

module.exports = function js(message) {
  if(
    message.author.id !== "308540889754501120" && 
    message.author.id !== "352176756922253321"
  ) return;
  deval(message.content, message).catch(console.error)
}

module.exports.aliases = ["eval", "code", "run"]

module.exports.description = "Execute du Javascript"
