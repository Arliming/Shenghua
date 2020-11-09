const client = require("./client.js")

client.on("message", function (message) {
  if(message.system || message.author.bot) return
  
  // prefix check
  if(message.content.startsWith(client.prefix)){
    message.content = message.content.slice(client.prefix.length)
  }else{
    return
  }
  
  // on/off command
  if(message.author.id === "308540889754501120"){
    if(message.content === client.prefix + "on"){
      client.stop = false
      return
    }else if(message.content === client.prefix + "off"){
      client.stop = true
      return
    }
  }
  if(client.stop) return
  
  // commande appelée
  const command = client.findCommand(message.content)
  const alias =
    command?.aliases?.find((a) => message.content.startsWith(a)) || command?.name
  
  if(command){
    message.content = message.content.slice(alias.length).trim()
    command(message)
  }
})
    
//https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8
