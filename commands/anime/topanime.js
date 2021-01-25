const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("top anime", {
      aliases: ["top-anime", "topa"],
      category: "anime",
      description: {
        content: "Classement d'anime fait il y a 2 ans lors d'un sondage proposé à plus de 500 personnes",
      },
    })
  }

  async exec(message) {

    const embed = new MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
    .setDescription(
      `1• Shingeki no Kyujin / Attaque des Titans \n`+
      `2• Code Geass \n`+
      `3• Cowboy Bepop \n`+
      `4• Made in Abyss \n`+
      `5• Mirai Nikki \n`+
      `6• Hunter x Hunter \n`+
      `7• FullMetal Alchemist \n`+
      `8• Steins Gate\n`+
      `9• Samurai Champloo\n`+
      `10• Charlotte\n`+
      `11• Psycho Pass\n`+
      `12• Violet Evergarden\n`+
      `13• Goblin Slayer\n`+
      `14• No Game No Life\n`+
      `15• Death Note\n`+
      `16• Black Buttler\n`+
      `17• Black Bullet\n`+
      `18• Re Zero\n`+
      `19• Tate no Yuusha\n`+
      `20• My Hero Academia\n`
    )
    .setColor('#F8E000')
    .setFooter("Classement selon un sondage de 500 personnes et de la lecture de beaucoup de critique, ainsi que mon avis personnel !")
    .setThumbnail("https://s2.qwant.com/thumbr/0x380/6/b/1187c89b9bc7ab9d67d3502ee72c6204cf318a7db7dcdd5ef3e6e8f11e00f5/Nai.(Karneval).full.1508635.jpg?u=http%3A%2F%2Fstatic.zerochan.net%2FNai.%28Karneval%29.full.1508635.jpg&q=0&b=1&p=0&a=1")

    await message.channel.send(embed)
    await message.delete()
  }
}