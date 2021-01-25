const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("CodeGeass", {
      aliases: ["CodeGeass", "CG"],
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
      .setTitle("Code Geass: Lelouch of the Rebellion サムライチャンプル")
      .addField("Synopsis :",
        `*Le 10 juin 2010 du calendrier impérial, le Nouvel Empire de Britannia a écrasé les forces japonaises et a conquis le pays en moins d'un mois grâce à ses mechas nommés Knightmare. Le Japon a perdu sa liberté et a été renommé Zone 11 tandis que les japonais ont perdu leur identité et sont appelés "Elevens". Ces derniers sont forcés de vivre dans des ghettos tandis que les colons britanniens occupent la majeure partie du territoire. Pourtant, des mouvements rebelles naissent et les nationalistes japonais continuent la lutte pour l'indépendance. Un jeune homme nommé Lelouch s'est juré de détruire l'empire de Britannia depuis que son père, l'empereur lui-même, n'a rien fait pour pourchasser les terroristes qui ont tué sa mère et estropié sa jeune sœur.*\n`
      )
      .addField(
        '**Shounen genres :  Action, Military, Sci-Fi, Drama, Mecha**',
        `L\'intrigue de l\'anime se base sur l\'évolution de Lelouch dans le temps et également de ses méthodes et de ses idées, son idéologie avant-gardiste, mais aussi le point de vue de Suzaku qui est plus attaché à la morale... Les émotions des personnages sont importantes car elles témoignent de la dureté des évènements.\n`+
        `**Date de diffusion :** 05/11/2006\n`+
        `**Disponibilité :** Netflix\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://fr.web.img6.acsta.net/pictures/19/07/02/09/59/3177609.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/8/85/Logo_Code_Geass.png")
    await message.channel.send(embed)
    await message.delete()
  }
}