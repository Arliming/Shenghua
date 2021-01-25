const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("Shingeki", {
      aliases: ["ShingekiNoKyojin", "Shingeki", "aot", "AttackOnTitan"],
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
      .setTitle("L’Attaque des Titans 進撃の巨人")
      .addField("Synopsis :",
        `*Plus de cent ans avant le début de l’histoire, des créatures géantes humanoïdes nommées Titans sont subitement apparues et ont presque anéanti l’humanité. Ces créatures géantes font habituellement entre trois et quinze mètres de haut, avec quelques exceptions comme le Titan colossal qui en mesure soixante. Il semblerait que les Titans dévorent les humains par instinct et uniquement pour les tuer : en effet, ils ne possèdent pas de système digestif et n’ont pas besoin de se nourrir, puisant leur énergie dans la lumière du soleil. Ils ont la peau dure, des capacités régénératrices et ne peuvent être tués que par une incision profonde à la base de la nuque. Pour se protéger, l’humanité vit entourée par un système de trois murs concentriques de cinquante mètres de haut, distants les uns des autres d’une centaine de kilomètres.*\n`
      )
      .addField(
        '**Shounen genres : Action, Military, Mystery, Drama, Fantasy**',
        `L\'intrigue tourne autour de la survie des 3 protagonistes Eren, Mikasa et Armin qui rentre dans l'armée pour protéger le monde des Titans. Mais petit à petit ils s'appretent à révèler un lourd secret sur l'apparition des Titans !\n`+
        `**Date de diffusion :** 07/04/2013\n`+
        `**Disponibilité :** Netflix, Wakanim\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://ekladata.com/kYb5xPC9jZ7vJHiLuU8QHfc4QtU.png")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/thumb/9/94/Attaque_des_Titans_CMJN.svg/langfr-1920px-Attaque_des_Titans_CMJN.svg.png")
    await message.channel.send(embed)
    await message.delete()
  }
}