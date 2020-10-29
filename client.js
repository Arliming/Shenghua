const Discord = require("discord.js")
const path = require("path")

const { forFiles } = require("./utils.js")

const client = new Discord.Client()

client.prefix = "a,"

client.commands = new Discord.Collection()

forFiles(
  [path.join(__dirname, "commands")],
  function (filePath) {
    const cmdName = path.basename(filePath, ".js")
    client.commands.set(cmdName, require(filePath))
  }
)

client.on("message", function (message) {
  if(message.system || message.author.bot) return
  // prefix check
  if(message.content.startsWith(client.prefix)){
    message.content = message.content.slice(client.prefix.length)
  }else{
    return
  }
  // commande appelée
  const command = client.commands.find((cmd, cmdName) => {
    const aliases = cmd.aliases ?? []
    return (
      message.content.startsWith(cmdName) ||
      aliases.some(alias => message.content.startsWith(alias))
    )
  })
  
  command?.(message)
})

client.login(require("./token/json"))

module.exports = client
