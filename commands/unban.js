const Akairo = require("discord-akairo")
const banned = await message.guild.fetchBans()

module.exports = new Akairo.Command(
  "unban",
  async function (message) {
    if (/^\d+$/.test(message.content)) {
      if (banned.has(message.content)) {
        const user = banned.get(message.content).user
        await message.guild.members.unban(user)
        await message.channel.send(`${user} a été unban`)
      } else {
        await message.channel.send("Je ne trouve pas cette personne")
      }
    } else {
      await message.channel.send("Indiquez un ID")
    }
  },

  {
    description: "a,unban *id de la personne*",
    clientPermissions: "BAN_MEMBERS",
    userPermissions: "BAN_MEMBERS",
  }
)
