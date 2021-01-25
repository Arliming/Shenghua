const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("DrStone", {
      aliases: ["DrStone", "DrS"],
      category: "anime",
      description: {
        content: "fiche anime",
      },
    })
  }

  async exec(message) {

    const embed = new MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle("Dr. Stone ドクターストーン")
      .addField("Synopsis :",
        `*Taiju, lycéen comme les autres, est sur le point d’annoncer à une fille qu’il est secrètement amoureux d’elle. Alors qu'il s'apprête a lui déclarer sa flamme, une lumière brillante apparaît dans le ciel et pétrifie toute l'humanité sur Terre. Au fil des années, bien décidé à l'idée d'avouer ses sentiments pour Yuzuriha, Taiju parvient à se libérer et trouve un message gravé dans un arbre. Yuzuriha essaie tant bien que mal de lui faire comprendre que Senku est également sorti de l'emprise de la pierre. Ce dernier est parvenu à maintenir sa conscience vivante en comptant combien de temps il a été pétrifié. Ainsi, Taiju apprend que la date actuelle est le 5 octobre 5738…*\n`
      )
      .addField(
        '**Shounen genres : Adventure, Sci-Fi**',
        `Dans cet anime, nous suivons l'histoire de Senku, un surdoué et passionné de science, qui se retrouve à l'âge de pierre. Il va donc devoir récréer toutes les inventions humaines à partir de rien…\n`+
        `**Date de diffusion :** 05/07/2019\n`+
        `**Disponibilité :** Crunchyroll\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://fr.web.img5.acsta.net/pictures/19/08/07/10/33/5476043.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/thumb/2/2a/Dr._Stone_Logo.png/260px-Dr._Stone_Logo.png")
    await message.channel.send(embed)
    await message.delete()
  }
}