const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("SamuraiChamploo", {
      aliases: ["SamuraiChamploo", "SamuC"],
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
      .setTitle("Samuraï Champloo サムライチャンプル")
      .addField("Synopsis :",
        `*L'histoire se déroule dans une version fictive de l'ère Edo au Japon. Une jeune fille, Fuu, recherche le samouraï qui sent le tournesol et se fait accompagner par deux individus originaux, Mugen l'extravagant, ancien pirate devenu vagabond, et Jin le samouraï (rōnin) impassible, à la suite d'un pari qu'elle a « gagné » contre ces deux derniers qui allaient s'entre-tuer.*\n`
      )
      .addField(
        '**Shounen genres : Action, Aventure, Comédie, Historique, Samouraï**',
        `L\'anime à un fond humoristique qui nous empêche pas d'apprecier les caractères fort différents des 3 protagonistes, on peut aimer la profondeur des scènes tout en rigolant de leurs absurdités ! Le plus interessant c'est qu\'il est construit entièrement sur une rythmique un peu rap voir bitbox et que chaque répliques et chaque scènes sont qualibrées avec ce rythme, c'est très impressionant !! (même auteur que Cowboy Bebop) \n`+
        `**Date de diffusion :** 19/05/2004\n`+
        `**Disponibilité :** Netflix\n`+
        `**COUP DE COEUR** :heart:\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("http://film-like.com/images/film/full/f7/43687.jpg")
      .setThumbnail("https://www.critikong.com/wp-content/uploads/2018/01/featured-sc.jpg")
    await message.channel.send(embed)
    await message.delete()
  }
}