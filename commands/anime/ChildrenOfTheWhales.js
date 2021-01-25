const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("TheChildrenOfTheWhales", {
      aliases: ["ChildrenOfTheWhales", "ChildrenOTW", "COTW"],
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
      .setTitle("Les Enfants de la baleine クジラの子らは砂上に歌う")
      .addField("Synopsis :",
        `*Un monde où le sable s’étend à perte de vue. Seul un gigantesque vaisseau, La Baleine de Glaise, vogue à la surface de cet océan de dunes. Les habitants de ce vaisseau sont divisés en deux catégories : les Marqués capables de manipuler le « saimia », un pouvoir qu'ils tirent de leurs émotions mais qui les condamne à mourir très jeunes, et les Non-marqués ayants une espérance de vie plus longue et s'occupant de la gestion de la Baleine. Ils vivent une vie paisible, mais coupée du monde, jusqu'au jour où le jeune Chakuro fait une étrange rencontre sur une île à la dérive…*\n`
      )
      .addField(
        '**Shoujo genres : Mystery, Drama, Fantasy**',
        `L\'anime tourne autour des émotions d\'un peuple isolé du monde, bloqué dans une mer de sable infinie. L\'animation et les graphismes sont splendides, l\'histoire racontée est vraiment touchante et fait énormement réfléchir, l\'anime est également reposant, je vous conseille de le voir pendant la tombée de la nuit avec une boisson chaude x)\n`+
        `**Date de diffusion :** 08/11/2017\n`+
        `**Disponibilité :** Netflix\n`+
        `**COUP DE COEUR** :heart:\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://cdn.myanimelist.net/images/anime/4/86661.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/thumb/2/23/Les_Enfants_de_la_Baleine_-_logo.png/310px-Les_Enfants_de_la_Baleine_-_logo.png")
    await message.channel.send(embed)
    await message.delete()
  }
}