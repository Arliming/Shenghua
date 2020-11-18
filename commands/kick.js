module.exports = new Akairo.Command(
    "kick",
    async function (message, { member }) {

        if (member.kickable) {
            
            if (member) {
                await member.kick()
                await message.channel.send("Cet utilisateur a été kick")
    
            } else {
                await message.channel.send("Précise qui tu veux kick ?")
            }
        } else {
            await message.channel.send("Je ne possède pas la permission :/")
        }
    
    },

    {
        description:"a,kick *nom de la personne* \nVous permet de kick un membre. \nSi le bot ne trouve pas de personne à kick, essayer de ping !",
        clientPermissions: "KICK_MEMBERS",
        userPermissions: "KICK_MEMBERS",
        args: [{
            id: "member",
            type: "member"
        }]
    }
)