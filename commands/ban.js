module.exports = function ban(message){
    const {member, mentions} = message

    const tag = `<@${member.id}>`
    const target = mentions.users.first()
    const targetMember = message.guild.members.cache.get(target.id)
    const grade = member.roles.highest.comparePositionTo(targetMember.roles.highest)

    //Permission de l'auteur
    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
    ) {

        //rang de l'auteur supérieur à la cible ?
        if (
            grade > 0
        ) {

            //Permission du bot
            if (targetMember.bannable) {
        
                if (target) {
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
module.exports.longDescription = "a,ban @.\nvous permet de ban une personne si le bot a un rôle au dessus du sien, il sera plus tard possible de ban une personne sans la ping."