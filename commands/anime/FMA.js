const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("FMA", {
      aliases: ["FMA", "FullMetalAlchemist"],
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
      .setTitle("FullMetal Alchemist Brotherhood 鋼の錬金術師")
      .addField("Synopsis :",
        `*Edward Elric et son frère Alphonse sont de jeunes Alchimistes. En tentant de ramener leur mère à la vie, ils ont payé un lourd tribut, et ils tentent désormais de récupérer ce qu'ils ont perdu. Pour cela, Edward est devenu Alchimiste d'État : le Fullmetal Alchemist. Mais au cours de leurs recherches, bien des épreuves attendent les deux frères.*\n`
      )
      .addField(
        '**Seinen genres : Aventure, Steampunk, Fantasy**',
        `**Studio :** Studio Bones\n`+
        `**Réalisateur :** Yasuhiro Irie\n`+
        `**Compositeur :** Akira Senju\n`+
        `**Scénariste :** Hiroshi Ohnogi\n`+
        `**Date de diffusion :** 5/ 4/ 2009\n`+
        `**Disponibilité :** Netflix\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://cdn.discordapp.com/attachments/555103223619518494/612338473436839984/458fc1c853af8ed76f6c0c91c4afc9611467424119_full.jpg")
      .setThumbnail("https://cdn.discordapp.com/attachments/555103223619518494/612337856588939473/FMA_Brotherhood.png")
    await message.channel.send(embed)
    await message.delete()
  }
}