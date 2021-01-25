const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("KillLaKill", {
      aliases: ["KillLaKill", "KLK"],
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
      .setTitle("Kill la Kill キルラキル")
      .addField("Synopsis :",
        `*Nous découvrons une jeune fille de 17 ans , Ryuko Matoi, qui arrive dans une ville japonaise. Elle se balade avec une étrange mallette dans le dos qui contient une moitié d'une paire de ciseaux. Arrivant par les bidonvilles, elle est la cible de quelques pickpockets. Après les avoir corrigés, elle se renseigne sur la ville, qui est apparemment sous le joug d'une dictature. C'est au sein de l'Académie Honnōji que l'on retrouve la présidente du conseil des élèves, et meneuse du mouvement totalitaire, Satsuki Kiryūin. Matoi décide de s'inscrire à l'académie et de défier la présidente afin qu'elle lui en dise plus sur la mort de son père et pour retrouver son assassin, le détenteur de la seconde moitié de la paire de ciseaux, appelée, lorsque les moitiés sont réunies, le snipitisnips.*\n`
      )
      .addField(
        '**Ecchi genres :  Action, Comedy, Super Power, School**',
        `.\n`+
        `**Date de diffusion :** 03/11/2013\n`+
        `**Disponibilité :** Wakanim\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://cs8.pikabu.ru/post_img/big/2018/03/03/2/1520042089170516258.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kill_la_Kill_logo.svg/langfr-1920px-Kill_la_Kill_logo.svg.png")
    await message.channel.send(embed)
    await message.delete()
  }
}