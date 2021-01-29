const { Command } = require("discord-akairo")
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
  constructor() {
    super("wasting", {
      aliases: ["wasted", "kill", "suicide"],
      channel: "guild",
      category: "Fun",
      description: {
        content:
          "envoie un gif aléatoire pour tuer quelqu'un O_O",
      },
    })
  }

  async exec(message) {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=wasted-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
      const embed = new MessageEmbed()

        .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
        .setTitle(`${message.author.username} a tué ${Members.user.username}`)
        .setImage(gif)
        .setFooter("wasted")
        .setTimestamp()

      await message.channel.send(embed)
    } else {
      const embed = new MessageEmbed()

        .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
        .setTitle(`${message.author.username} se suicide O_O`)
        .setImage(gif)
        .setFooter("wasted")
        .setTimestamp()

      await message.channel.send(embed)
    }
  }
}