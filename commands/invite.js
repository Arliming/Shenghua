const Discord = require("discord.js")

module.exports = function invite(message){

    const embed = new Discord.MessageEmbed()

      .setTitle("Voici le lien d'invitation de Shēnghuá")
      .setDescription("[>>Invite moi<<](https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8)")
      .setColor(message.client.roleHexColor)
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setThumbnail(message.client.user.avatarURL)
      .setTimestamp();

    message.channel.send(embed)
    message.delete()
}

module.exports.description = "Lien d'invitation du bot"
module.exports.aliases = ['invitation']