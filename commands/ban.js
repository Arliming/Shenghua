const Akairo = require("discord-akairo")
module.exports = new Akairo.Command(
  "ban",
  async function (message, { member }) {
    if (member.bannable) {
      if (member) {
        await member.ban()
        await message.channel.send("Cet utilisateur a été ban")
      } else {
        await message.channel.send("Précise qui tu veux ban ?")
      }
    } else {
      await message.channel.send("Je ne possède pas la permission :/")
    }
  },

  {
    description:
      "a,ban *nom de la personne* \nVous permet de kick un membre. \nSi le bot ne trouve pas de personne à ban, essayer de ping !",
    clientPermissions: "BAN_MEMBERS",
    userPermissions: "BAN_MEMBERS",
    args: [
      {
        id: "member",
        type: "member",
      },
    ],
  }
)
