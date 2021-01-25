const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {
  constructor() {
    super("CowboyBebop", {
      aliases: ["CowboyBebop", "CowB"],
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
      .setTitle("Cowboy Bebop カウボーイビバップ")
      .addField("Synopsis :",
        `*En 2071, l'équipage du vaisseau spatial Bebop voyage dans le système solaire à la recherche de primes. Dans l'argot de l'époque, ces chasseurs de primes sont appelés « cowboys ». La plupart des épisodes tournent autour d'une prime ; cependant, le centre de l'histoire concerne le passé de chaque personnage et d'anciens évènements plus généraux, qui se connectent au fur et à mesure que la série progresse.*\n`
      )
      .addField(
        '**Shounen genres : Action, Adventure, Comedy, Drama, Sci-Fi, Space**',
        `Il est réalisée dans un style fortement influencé par la culture cinématographique américaine et la musique jazz, en particulier le mouvement bebop des années 40 - 60. L\'anime a un succes monstre dans le monde entier ! Même auteur que Samurai Champloo.\n`+
        `**Date de diffusion :** 03/04/1998\n`+
        `**Disponibilité :** Canal+\n`
      )
      .setColor('#F8E000')
      .setFooter("Made by Arliming")
      .setImage("https://cdn.myanimelist.net/images/anime/4/19644.jpg")
      .setThumbnail("https://upload.wikimedia.org/wikipedia/fr/thumb/c/c6/Cowboy_Bebop_Logo.svg/langfr-1024px-Cowboy_Bebop_Logo.svg.png")
    await message.channel.send(embed)
    await message.delete()
  }
}