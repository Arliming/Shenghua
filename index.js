const { forFiles } = require("./utils.js")

const Discord = require("discord.js")

const client = new Discord.Client()

const path = require("path")

client.prefix = "a,"

client.commands = new Discord.Collection()

forFiles(
  [path.join(__dirname, "commands")],
  function (filePath) {
    client.commands.set(filePath, require(filePath))
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
  const command = client.commands.find((cmd, cmdPath) => {
    const cmdName = path.basename(cmdPath, ".js")
    return message.content.startsWith(cmdName)
  })
    command?.(message)

})

client.login("NzcwNzY5MzQwNjkzMjE3Mjgx.X5iY4w.sJ7c98cPWSaj-Dfqv4SHYqgSaHo")
//https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8