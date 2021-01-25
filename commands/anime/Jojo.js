const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("Jojo's", {
      aliases: ["Jojo"],
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
      .setTitle("JoJo no Kimyou na Bouken ジョジョの奇妙な冒険")
    .addField("Synopsis :",
      `*Le surnom JoJo est donné aux différents héros de la série, du fait que ces deux syllabes apparaissent dans leur nom :
                    Jonathan Joestar
                    Joseph Joestar
                    Jôtarô Kûjô
                    Jôsuke Higashikata (4) (« Jôsuke » s'écrit « 仗助 » ; si le premier kanji se prononce « Jô », le second peut être prononcé soit « Suke » soit « Jo », d'où son surnom)
                    Giorno Giovanna, prononciation à l'italienne d' « Haruno Shiobana » (les syllabes « Jo » et « Gio » s’écrivent de la même manière en katakana (ジョ))
                    Jolyne Kûjô
                    Johnny Joestar
                    Jôsuke Higashikata (8) (même procédé que le précédent ; sauf qu'il ne s'agit pas de la même personne, celui-ci étant le héros principal dans la huitième partie, JoJolion)
                    Jojo est effectivement divisé en 8 parties, qui raconte toute l'histoire de leurs héros respectifs*\n`
    )
    .addField(
      '**Shounen genres :  Action, Adventure, Supernatural, Vampire**',
      `Un anime que l'on peut prendre très largement à la rigolade pour le style graphique et les fameuses "Jojo pose" mais qui peut également être prit sérieusement, en fonction de votre manière de l'aborder !\n`+
      `**Date de diffusion :** 01/11/2012\n`+
      `**Disponibilité :** Netflix, Crunchyroll, ADN\n`
    )
    .setColor('#F8E000')
    .setFooter("Made by Arliming")
    .setImage("https://dere.shikimori.one/system/animes/original/14719.jpg?1578499527")
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JoJo%27s_Bizarre_Adventure_logo.png/220px-JoJo%27s_Bizarre_Adventure_logo.png")
    await message.channel.send(embed)
    await message.delete()
  }
}