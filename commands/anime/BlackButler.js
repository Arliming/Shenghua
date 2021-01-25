const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("BlackButler", {
      aliases: ["BlackButler", "BB"],
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
      .setTitle("Black Buttler 黒執事")
      .addField("Synopsis :",
        `*À la deuxième moitié du XIXème siècle, à l'époque Victorienne, à Londres, un jeune maître de douze ans, nommé Ciel Phantomhive, dirige la famille la plus noble et la plus redoutée de toute l'Angleterre. La raison d'une telle réussite en affaire à un âge aussi jeune ? Son talentueux majordome, Sebastian Michaelis. Ce qui peut être impossible pour un homme normal, ne l'est pas pour ce majordome, et comme il le dit souvent, "Je ne suis qu'un diable de Majordome". Sebastian cache donc un grand secret, couvert par un contrat entre lui et son jeune maître.*\n`
      )
      .addField(
        '**Seinen genres : Comédie, Historique, Mystère, Surnaturel**',
        `**Studio :**  A-1 Pictures\n`+
        `**Réalisateur :** Shinohara Toshiya\n`+
        `**Compositeur :** Okada Mari\n`+
        `**Scénariste :** Okada Mari\n`+
        `**Date de diffusion :** 02/10/2008\n`+
        `**Disponibilité :** Netflix, Wakanim, ADN\n`+
        `**COUP DE COEUR** :heart:\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://cdn.myanimelist.net/images/anime/5/27013.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/thumb/1/11/Logo_Black_Butler_%28jp%29.svg/50px-Logo_Black_Butler_%28jp%29.svg.png")
    await message.channel.send(embed)
    await message.delete()
  }
}