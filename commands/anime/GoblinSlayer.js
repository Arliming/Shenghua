const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("GoblinSlayer", {
      aliases: ["GoblinSlayer", "Gobsly"],
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
      .setTitle("Goblin Slayer ゴブリンスレイヤー")
      .addField("Synopsis :",
        `*Dans un monde de fantasy, les aventuriers viennent de partout pour rejoindre la Guilde afin d'y accomplir toutes les tâches disponibles. Une jeune prêtresse inexpérimentée se joint à son premier groupe d'aventuriers, mais elle est en danger suite à sa première quête d'aventurière impliquant des gobelins qui s'est mal déroulée. Après que le reste de son groupe soit anéanti, elle est sauvée par un homme connu sous le nom de "Goblin Slayer", un aventurier dont le seul but est l'éradication des gobelins avec des procédés extrêmes.*\n`
      )
      .addField(
        '**Shounen genres : Action, Adventure, Fantasy**',
        `Un anime qui choque énormement par ses scènes de violences extrème, mais qui prend par les émotions et est très complexe à regarder. L\'anime reste incroyable à regarder (interdit au moins de 18ans bien entendu) et personnes fragiles s'abstenir.\n`+
        `**Date de diffusion :** 07/11/2018\n`+
        `**Disponibilité :** Netflix, Wakanim, Crunchyroll (hors Francophonie)\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://www.nautiljon.com/images/anime/00/30/goblin_slayer_fr_7603.jpg?1566319504")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/3/38/Goblin_Slayer_Logo.png")
    await message.channel.send(embed)
    await message.delete()
  }
}