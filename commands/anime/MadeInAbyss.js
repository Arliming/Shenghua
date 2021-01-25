const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("MadeInAbyss", {
      aliases: ["MadeInAbyss", "mia"],
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
      .setTitle("Made in Abyss メイドインアビス")
      .addField("Synopsis :",
        `*À la surface de cette planète, un seul endroit demeure encore mystérieux et inexploré : un trou gigantesque surnommé « L’Abysse ». Dans cette crevasse sans fond dorment des trésors que l’humanité ne semble plus pouvoir reproduire. La fascination et l’émerveillement que représente L’Abysse poussent de nombreuses personnes à s’y aventurer.*\n`
      )
      .addField(
        '**Seinen genres : Action, Drame, Fantasy**',
        `**Studio :** Kinema Citrus\n`+
        `**Réalisateur :** Masayuki Kojima\n`+
        `**Musiques :** Hiromitsu Iijima\n`+
        `**Original Character Design :** Akihito Tsukushi\n`+
        `**Character Design :** Kazuchika Kise\n`+
        `**Date de diffusion :** 7/ 7/ 2017\n`+
        `**Disponibilité :** Wakanim\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://www.nautiljon.com/images/anime/00/67/mini/made_in_abyss_6476.jpg?11517357595")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MadeInAbyss_logo.svg/220px-MadeInAbyss_logo.svg.png")
    await message.channel.send(embed)
    await message.delete()
  }
}