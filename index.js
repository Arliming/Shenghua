const client = require("./client.js")

const { findCommand } = require("./utils.js")

client.on("message", function (message) {
  if(message.system || message.author.bot) return
  // prefix check
  if(message.content.startsWith(client.prefix)){
    message.content = message.content.slice(client.prefix.length)
  }else{
    return
  }
  // commande appelée
  const command = findCommand(message.content)
  
  if(command){
    message.content = message.content.slice(command.name.length).trim()
    command(message)
  }
})
    
//https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8
