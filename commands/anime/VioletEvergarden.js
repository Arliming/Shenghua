const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("Violet", {
      aliases: ["VioletEvergarden", "violet", "violet-evergarden"],
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
      .setTitle("Violet Evergarden ヴァイオレット・エヴァーガーデン")
      .addField("Synopsis :",
        `*La guerre opposant Leidenschaftreich à l'Empire Gardarik a finalement pris fin. Violet, une jeune fille formée dans le seul but de décimer les lignes ennemies, est hospitalisée suite à une violente opération. Après avoir tout perdu, elle se raccroche aux derniers mots du Major, son supérieur hiérarchique, mais sans comprendre leur signification. Se remettant de ses blessures, elle décide de commencer une nouvelle vie à CH Postal, une entreprise postale. Un jour, elle assiste par pur hasard au travail d'une «poupée de souvenirs automatiques», une personne qui retranscrit les pensées et les sentiments d'autrui dans des lettres. Intéressée, Violet commence à travailler en tant que poupée de souvenirs automatiques, un métier qui va lui permettre d'aider ses clients et de comprendre les derniers mots de celui qu'elle aimait.*\n`
      )
      .addField(
        '**Seinen genres :  :  Drame, Fantasy, Romance, Science-fiction, Slice of Life**',
        `**Studio :** Kyoto Animation\n`+
        `**Réalisateur :** Ishidate Taichi\n`+
        `**Compositeur :** Yoshida Reiko\n`+
        `**Scénariste :** Yoshida Reiko, Suzuki Takaaki, Urahata Tatsuhiko\n`+
        `**Date de diffusion :** 10/01/2018\n`+
        `**Disponibilité :** Netflix\n`+
        `**COUP DE COEUR** :heart:\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://www.nautiljon.com/images/anime/00/17/mini/violet_evergarden_5571.jpg?11542568605")
      .setThumbnail("https://s2.qwant.com/thumbr/0x380/e/b/e157cf0c4e070147c3fd303d4dcbbfd96226044979372eab94ec90ababebba/VioletEvergarden.jpg?u=https%3A%2F%2Fcdn.theouterhaven.net%2Fwp-content%2Fuploads%2F2018%2F01%2FVioletEvergarden.jpg&q=0&b=1&p=0&a=1")
    await message.channel.send(embed)
    await message.delete()
  }
}