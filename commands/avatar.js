const Discord = require("discord.js")
const { resolveMember } = require("../utils")

module.exports = async function avatar(message) {
    const member = await resolveMember(message)
  
    const embed = new Discord.MessageEmbed()
  
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle("Voici l'avatar de " + member.user.username)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setImage(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    message.channel.send(embed)
  }

module.exports.description = "Voir l'avatar d'un membre"
module.exports.longDescription = "a,avatar ***pseudo***\nvous permet de voir l'avatar d'un membre. \nsi vous ne préciser pas de membre, il montre votre avatar"
module.exports.aliases = ['pdp', 'pp']