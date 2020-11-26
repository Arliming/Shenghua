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
    if (!target) target = message.member
    else if (typeof target === "string") {
      try {
        target = await message.guild.members.fetch(target)
      } catch (err) {
        target = message.member
      }
    } else {
      target = await message.guild.members.fetch(target.id)
    }
    await target.user.fetch()

    const rolescount = target.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString())

    const embed = new MessageEmbed()
      .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle(`Voici les Infos de ${target.displayName}`)
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))

      .addFields(
        {
          name: "Nom :",
          value: `${target.user.tag}`,
          inline: true,
        },
        {
          name: "Pseudo :",
          value: `${target.displayName}`,
          inline: true,
        },
        {
          name: "ID :",
          value: `${target.user.id}`,
          inline: true,
        }
      )
      .addFields({
        name: "Compte créé le :",
        value: `${dayjs(target.user.createdTimestamp).format(
          "HH:mm DD/MM/YYYY"
        )} | ${dayjs(target.user.createdTimestamp).fromNow()}`,
      })
      .addFields({
        name: "Rejoin le serveur le :",
        value: `${dayjs(target.joinedAt).format(" HH:mm DD/MM/YYYY")} | ${dayjs(
          target.joinedAt
        ).fromNow()}`,
      })
      .setDescription(
        `**Rôles [${rolescount.length - 1}]**
        ${target.roles.cache
          .array((roles) => roles.name)
          .sort((a, b) => b.position - a.position)
          .filter((r) => r.id !== message.guild.id)
          .join("")}`
      )
      .setTimestamp()
    await message.channel.send(embed)
  }
}
