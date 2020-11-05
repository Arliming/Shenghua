const Discord = require("discord.js")
const { resolveMember } = require("../utils")

module.exports = async function ban(message){

    const {member, mentions} = message

    const tag = `<@${member.id}>`

    const targetMember = await resolveMember(message)
    const grade = member.roles.highest.comparePositionTo(targetMember.roles.highest)

    //si l'auteur a les droits
    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
    ) {

        //si l'auteur est high rank
        if (
            grade > 0
        ) {

            //si la cible est kickable par le bot
            if (targetMember.bannable) {
        
                if (targetMember) {
                    targetMember.ban()
                    message.channel.send(`${tag} Cet utilisateur a été ban`)

                } else {
                    message.channel.send(`${tag} Précise qui tu veux ban ?`)
                }
            } else {
                message.channel.send(`${tag} Je ne possède pas la permission :/`)
            }
        } else {
            message.channel.send(`${tag} Vous ne pouvez pas ban un utilisateur plus haut gradé ou du même grade que vous !`)
        }
    } else {
        message.channel.send(`${tag} Vous n'avez pas les permissions !`)
    }
}

module.exports.description = "You should ban him."
module.exports.longDescription = "a,ban *nom de la personne* \nVous permet de kick un membre. \nSi le bot ne trouve pas de personne à ban, essayer de ping !"