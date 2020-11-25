const { Command, Argument } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")
const dayjs = require("dayjs")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.locale("fr")
dayjs.extend(relativeTime)

module.exports = class extends Command {
  constructor() {
    super("userinfo", {
      args: [
        {
          id: "target",
          type: Argument.union("member", "user", "relevant", "text"),
        },
      ],
      channel: "guild",
      aliases: ["userinfo", "me", "ui"],
      category: "Util",
      description: {
        content: "Affiche des statistiques à propos de quelqu'un",
      },
    })
  }

  async exec(message, { target }) {
    if(!target) target = message.member
   else if (typeof target === "string") {
      try {
        target = await message.guild.members.fetch(target)
      } catch (err) {
        target = message.member
      }
    } else {
      target = await message.guild.fetch(target.id)
    }
    const embed = new MessageEmbed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle(`Voici les Infos de ${target.user.username}`)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))

      .addField(
        `Plus d'infos à propos de **${target.user.username}**`,
        `• Nom : ${target.user.tag}
        • ID : ${target.user.id}
        • Créé le : ${dayjs(target.user.createdTimestamp).format(
          "HH:mm DD/MM/YYYY"
        )} | ${dayjs(target.user.createdTimestamp).fromNow()}
        • Statue : ${
          target.user.presence.activities.length > 0
            ? target.user.presence.activities[0].name
            : "Aucun statue"
        }
        • Présence : ${target.user.presence.status.toUpperCase()}
        • Join date : ${dayjs(target.joinedAt).format(
          " HH:mm DD/MM/YYYY"
        )} | ${dayjs(target.joinedAt).fromNow()}`
      )
      .setDescription(
        `**Rôles :**
        ${target.roles.cache.array((roles) => roles.name).sort().join(", ")}`
      )
      .setTimestamp()
    await message.channel.send(embed)
  }
}