const Discord = require("discord.js")

module.exports = async function unban(message) {

    const {member, mentions} = message
    
    const banned = await message.guild.fetchBans()

    if(/^\d+$/.test(message.content)) {

        if(banned.has(message.content)) {

            if (
                member.hasPermission('ADMINISTRATOR') ||
                member.hasPermission('BAN_MEMBERS')
            ) {

                if (
                message.guild.me.hasPermission('ADMINISTRATOR') ||
                message.guild.me.hasPermission('BAN_MEMBERS')
                ) {
                    const user = banned.get(message.content).user
                    await message.guild.members.unban(user)
                    message.channel.send(`${user} a été unban`)
                }

                else {
                message.reply("Je n'ai pas la permission !")
                }

            } else {
            message.reply("Vous n'avez pas la permission !")
    
            }
        } else {
            message.reply("Je ne trouve pas cette personne")
        }
    } else {
        message.reply("Indiquez un ID")
    }
}

module.exports.description = "Unban un utilisateur"
module.exports.longDescription = "il faut un ID pour unban \na,unban *id de la personne*"