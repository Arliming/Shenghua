const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("Steins;Gate", {
      aliases: ["SteinsGate", "S;G"],
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
      .setTitle("Steins;Gate シュタインズ・ゲート")
      .addField("Synopsis :",
        `*Rintarô Okabe est un scientifique un peu paranoïaque, toujours accompagné de Mayuri et Itaru, qui l'aident dans ses expériences farfelues pour son laboratoire. Découvrant les secrets du temps et comment y voyager, the Mad Scientist Okabe Rintarô combat le CERN pour sauver le monde.*\n`
      )
      .addField(
        '**Seinen genres :  : Comédie, Drame, Mystère, Psychologique, Science-fiction**',
        `**Studio :** White Fox\n`+
        `**Réalisateur :** Hamasaki Hiroshi, Kobayashi Tomoki (ep 25), Sato Takuya\n`+
        `**Compositeur :** Hanada Jukki\n`+
        `**Scénariste :** Hanada Jukki, Nemoto Toshizo, Nemoto Toshizo\n`+
        `**Date de diffusion :** 6/ 4/ 2011\n`+
        `**Disponibilité :** Netflix\n`+
        `**COUP DE COEUR** :heart:\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://www.nautiljon.com/images/anime/00/98/mini/steins_gate_0_4689.jpg?11544053196")
      .setThumbnail("https://s1.qwant.com/thumbr/700x0/0/d/75a65e70f46070ff5c48ebd499f897bb0ac627a39ff94e10d94afdf99c61d6/Steinsgate_logo.png?u=https%3A%2F%2Fanimetourism88.com%2Fapplication%2Ffiles%2F3115%2F0200%2F1180%2FSteinsgate_logo.png&q=0&b=1&p=0&a=1")
    await message.channel.send(embed)
    await message.delete()
  }
}