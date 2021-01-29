const { Command } = require("discord-akairo")
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
  constructor() {
    super("shooting", {
      aliases: ["shoot", "kill", "tire"],
      channel: "guild",
      category: "Fun",
      description: {
        content:
          "envoie un gif aléatoire pour tirer sur quelqu'un :/",
      },
    })
  }

  async exec(message) {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=shoot-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members) {
      const embed = new MessageEmbed()

        .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
        .setTitle(`${message.author.username} tire sur ${Members.user.username}`)
        .setImage(gif)
        .setFooter("shoot")
        .setTimestamp()

      await message.channel.send(embed)
    } else {
      const embed = new MessageEmbed()

        .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
        .setTitle(`${message.author.username} se suicide o_o`)
        .setImage(gif)
        .setFooter("shoot")
        .setTimestamp()

      await message.channel.send(embed)
    }
  }
}