const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")
const tims = require('tims')

module.exports = class extends Command {
  constructor() {
    super("botinfo", {
      channel: "guild",
      aliases: ["botinfo", "statsbot", "you", "toi"],
      category: "Util",
      description: {
        content: "Affiche des statistiques à propos de Shēnghuá",
      },
    })
  }

  async exec(message) {
    const embed = new MessageEmbed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle(`Voici les Stats Principales de Shēnghuá`)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`[Shēnghuá](https://discord.com/oauth2/authorize?client_id=770769340693217281&scope=bot&permissions=8)`)
      .addFields(
        {
          name: "Mémoire",
          value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
          inline: true,
        },

        {
          name: "Uptime",
          value: `${
            tims.duration( message.client.uptime, { locale: 'fr' })
          }`,
          inline: true,
        },

        {
          name: "Serveurs",
          value: `${message.client.guilds.cache.size.toString()}`,
          inline: true,
        },

        {
          name: "Salons",
          value: `${message.client.channels.cache.size.toString()}`,
          inline: true,
        },

        {
          name: "Utilisateurs",
          value: `${message.client.guilds.cache
            .map((g) => g.memberCount)
            .reduce((a, b) => a + b)}`,
          inline: true,
        },

        {
          name: "Source",
          value: `[github](https://github.com/Arliming/Shenghua)`,
          inline: true,
        },
      )
      .setFooter("Made by Arliming |")
      .setTimestamp()
    await message.channel.send(embed)
  }
}
