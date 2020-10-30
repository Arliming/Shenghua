module.exports = function ban(message){
    const {member, mentions} = message

    const tag = `<@${member.id}>`

    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
    ) {
        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`${tag} Cet utilisateur a été ban`)
        } else {
            message.channel.send(`${tag} Précise qui tu veux ban ?`)
        }
    } else {
        message.channel.send(
            `${tag} Vous n'avez pas les permissions !`
        )
    }
}

module.exports.description = "You should ban him."
module.exports.longDescription = "a,ban @.\nvous permet de ban une personne si le bot a un rôle au dessus du sien, il sera plus tard possible de ban une personne sans la ping."