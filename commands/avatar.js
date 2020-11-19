const Akairo = require("discord-akairo")
module.exports = new Akairo.Command(
  "avatar",
  async function (message, { member }) {
    const embed = this.embed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle("Voici l'avatar de " + member.user.username)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setImage(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    await message.channel.send(embed)
    await message.delete()
  },
  {
    aliases: ["pdp", "pp"],
    args: [
      {
        id: "member",
        type: "member",
      },
    ],
  }
)
