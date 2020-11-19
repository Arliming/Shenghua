const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class CmdInvit extends Command {
  constructor() {
    super("invitation", {
      aliases: ["invitation", "invite", "link"],
      category: "Util",
      description: {
        content: "Envoie le lien d'invitation du bot",
      },
    })
  }

  async exec(message) {
    const embed = new MessageEmbed()
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
  }
}

module.exports = CmdInvit
