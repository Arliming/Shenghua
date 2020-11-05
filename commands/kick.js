const Discord = require("discord.js")
const { resolveMember } = require("../utils")

module.exports = async function kick(message) {

    const {member, mentions} = message

    const tag = `<@${member.id}>`

    const targetMember = await resolveMember(message)
    const grade = member.roles.highest.comparePositionTo(targetMember.roles.highest)

    //si l'auteur a les droits
    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('KICK_MEMBERS')
    ) {

        //si l'auteur est high rank
        if (
            grade > 0
        ) {

            //si la cible est kickable par le bot
            if (targetMember.kickable) {
        
                if (targetMember) {
                    targetMember.kick()
                    message.channel.send(`${tag} Cet utilisateur a été kick`)

                } else {
                    message.channel.send(`${tag} Précise qui tu veux kick ?`)
                }
            } else {
                message.channel.send(`${tag} Je ne possède pas la permission :/`)
            }
        } else {
            message.channel.send(`${tag} Vous ne pouvez pas kick un utilisateur plus haut gradé ou du même grade que vous !`)
        }
    } else {
        message.channel.send(`${tag} Vous n'avez pas les permissions !`)
    }
}

module.exports.description = "You should kick him."
module.exports.longDescription = "a,kick *nom de la personne* \nVous permet de kick un membre. \nSi le bot ne trouve pas de personne à kick, essayer de ping !"
module.exports.aliases = ['expulse', 'expluser']