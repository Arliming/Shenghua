const client = require("./client.js")

client.on("message", function (message) {
  if(message.system || message.author.bot) return
  // prefix check
  if(message.content.startsWith(client.prefix)){
    message.content = message.content.slice(client.prefix.length)
  }else{
    return
  }
  // commande appelée
  const command = client.findCommand(message.content)
  const alias =
    command.aliases?.find((a) => message.content.startsWith(a)) || command.name
  
  if(command){
    message.content = message.content.slice(alias.length).trim()
    command(message)
  }
})
    
//https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8