const deval = require("discord-eval.js")

module.exports = function js(message) {
  if(message.author.id !== "308540889754501120") return
  const code = message.content.replace(/^js\s*/, "")
  deval(code, message).catch(console.error)
}

module.exports.description = "Execute du Javascript"