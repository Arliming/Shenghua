const Discord = require("discord.js")
const path = require("path")

module.exports = function help(message){
  if(message.content){
    const command = message.client.findCommand(message.content)
    
    if(!command) return message.channel.send("unknown command...")
    
    const embed = new Discord.MessageEmbed()
      .setTitle(`Command: ${command.name}`)
      .setDescription(
        command.longDescription ?? 
        command.description ?? 
        "Pas de description."
      )
      
    const aliases = command.aliases ?? []
    
    if(aliases.length > 0){
      embed.addField("aliases", aliases.join(",")))
    }
    
    message.channel.send(embed)
  }else{
    message.channel.send(
      message.client.commands.map((cmd, cmdName) => {
        return `${message.client.prefix}${cmdName} - ${cmd.description ?? "pas de description"}`
      }).join("\n")
    )
  }
}

module.exports.description = "Liste les commandes disponibles"
