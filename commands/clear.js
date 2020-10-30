const Discord = require("discord.js");

module.exports = function clear(message){
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("You do not have permission to run this command").then(msg => msg.delete({ timeout: 5000 }));
  }
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("Sorry I can't messages please make sure i have the correct permissions").then(msg => msg.delete());
  }
  
  let deleteAmount = Number(message.content || 1)

  if(isNaN(deleteAmount)) {
    return message.channel.send("Bite");
  }

  deleteAmount ++

  if (deleteAmount < 0) {
    deleteAmount = 0
  }else if(deleteAmount > 99){
    deleteAmount = 99
  }

  message.channel.bulkDelete(deleteAmount).then(deleted => {
    message.channel.send(`${deleteAmount -1} messages purged!`).then(msg => msg.delete({ timeout: 5000 }));
  })
}
module.exports.description = "Clear un certain nombre de messages"
module.exports.longDescription = "a,clear ***nombre de messages***\nle message de suppression se supprime tout seul au bout d'un certain temps."
module.exports.aliases = ['purge']