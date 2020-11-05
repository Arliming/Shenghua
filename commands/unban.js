const Discord = require("discord.js")
const { resolveMember } = require("../utils")

module.exports = async function unban(message) {

    const {member, mentions} = message
    
    const targetMember = await resolveMember(message)

    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
    ) {

        if (
            message.guild.me.hasPermission('ADMINISTRATOR') ||
            message.guild.me.hasPermission('BAN_MEMBERS')
        ) {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(targetMember)
                message.channel.send(`l'utilisateur a été unban`)
            })
        }

        else {
            message.channel.send("Je n'ai pas la permission !")
        }

    } else {
        message.channel.send("Vous n'avez pas la permission !")
    
    }
}

module.exports.description = "Unban un utilisateur"
module.exports.longDescription = "il faut une id pour unban \na,unban *id de la personne*"