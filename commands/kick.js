module.exports = function kick(message){
    const {member, mentions} = message

    const tag = `<@${member.id}>`

    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('KICK_MEMBERS')
    ) {
        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} Cet utilisateur a été kick`)
        } else {
            message.channel.send(`${tag} Précise qui tu veux kick ?`)
        }
    } else {
        message.channel.send(
            `${tag} Vous n'avez pas les permissions !`
        )
    }
}

module.exports.description = "You should kick her"