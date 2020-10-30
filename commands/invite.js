const Discord = require("discord.js")

module.exports = function invite(message, member){

    const embed = new Discord.MessageEmbed()

      .setTitle("Voici le lien d'invitation de Shēnghuá")
      .setDescription("[>>Invite moi<<](https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8)")
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed)
    message.delete()
}

module.exports.description = "Lien d'invitation du bot"
module.exports.aliases = ['invitation']