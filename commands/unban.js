module.exports = function unban(message) {
    const {member, mentions} = message
    let arg = Number(message.content)

    if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
    ) {

        if(isNaN(arg)) {
        return message.channel.send("Vous devez précisez l'id de la personne.")
        }

            if (
                message.guild.me.hasPermission('ADMINISTRATOR') ||
                message.guild.me.hasPermission('BAN_MEMBERS')
            ) {
                message.guild.fetchBans().then(bans => {
                    message.guild.members.unban(arg)
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
module.exports.longDescription = "il faut une id pour unban | a,unban *id de la personne*"