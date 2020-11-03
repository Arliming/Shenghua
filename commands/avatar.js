const Discord = require("discord.js")

module.exports = function avatar(message, member){

    let text = message.content

    console.log(text);

    if(text) {
        member = message.mentions.members.first() || message.guild.members.cache.find(m => m.displayName.toLowerCase().includes(text.toLowerCase())) || message.guild.members.cache.find(m => m.user.username.toLowerCase().includes(text.toLowerCase()))
    } else {
        member = message.member
    }

    if(!member) return message.channel.send("Son existence est à prouver...")

    const embed = new Discord.MessageEmbed()

    .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
    .setTitle("Voici l'avatar de " + member.user.username)
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setImage(member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
    message.channel.send(embed)
}

module.exports.description = "Voir l'avatar d'un membre"
module.exports.longDescription = "a,avatar ***pseudo***\nvous permet de voir l'avatar d'un membre. \nsi vous ne préciser pas de membre, il montre votre avatar"
module.exports.aliases = ['pdp', 'pp']