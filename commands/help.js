const path = require("path")

module.exports = function help(message){
  message.channel.send(
    message.client.commands.map((cmd, cmdPath) => {
      const cmdName = path.basename(cmdPath, '.js')
      return `${message.client.prefix}${cmdName} - ${cmd.description ?? "pas de description"}`
    }).join("\n")
  )}

  module.exports.description = "Liste les commandes disponibles"