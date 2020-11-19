const Akairo = require("discord-akairo")
module.exports = new Akairo.Command(
  "invitation",
  async function (message) {
    const embed = this.embed()
      .setTitle("Voici le lien d'invitation de Shēnghuá")
      .setDescription(
        "[>>Invite moi<<](https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8)"
      )
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    await message.channel.send(embed)
    await message.delete()
  },
  {
    aliases: ["invite", "link"],
  }
)
