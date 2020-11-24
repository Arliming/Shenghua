const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const { resolveRegion } = require("../utils")

const filterLevels = {
  DISABLED: "Off",
  MEMBERS_WITHOUT_ROLES: "No Role",
  ALL_MEMBERS: "Everyone",
}
const verificationLevels = {
  NONE: "None",
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "(╯°□°）╯︵ ┻━┻",
  VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
}

module.exports = class extends Command {
  constructor() {
    super("serverinfo", {
      aliases: ["serverinfo", "guild", "si"],
      category: "Util",
      description: {
        content: "affiche des statistiques sur le discord",
      },
    })
  }

  async exec(message) {
    const rolese = message.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString())

    const guild = await message.guild.fetch()

    const {
      members: { cache: members },
      channels: { cache: channels },
      emojis: { cache: emojis },
    } = guild

    const embed = new MessageEmbed()

      .setColor(guild?.me.roles.color?.color ?? "#c800ff")
      .setTitle(`Infos du Serveur "${guild.name}"`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addField("Géneral", [
        `**• Name :** ${guild.name}`,
        `**• ID :** ${guild.id}`,
        `**• Owner :** ${await guild.members.fetch(guild.ownerID)}`,
        `**• Région :** ${resolveRegion(guild.region)}`,
        `**• Boost Tier :** ${
          guild.premiumTier ? `Tier ${guild.premiumTier}` : "None"
        }`,
        `**• Explicit Filter :** ${filterLevels[guild.explicitContentFilter]}`,
        `**• Verification Level :** ${
          verificationLevels[guild.verificationLevel]
        }`,
        `**• Date de Création :** ${moment(guild.createdTimestamp).format(
          "HH:mm"
        )} ${moment(guild.createdTimestamp).format("LL")} ${moment(
          guild.createdTimestamp
        ).fromNow()}`,
        "\u200b",
      ])
      .addField("Statistiques", [
        `**• Role Count :** ${rolese.length}`,
        `**• Emoji Count :** ${emojis.size}`,
        `**• Regular Emoji Count :** ${
          emojis.filter((emoji) => !emoji.animated).size
        }`,
        `**• Animated Emoji Count :** ${
          emojis.filter((emoji) => emoji.animated).size
        }`,
        `**• Nombre de Membres :** ${guild.memberCount}`,
        `**• Utilisateurs :** ${
          members.filter((member) => !member.user.bot).size
        }`,
        `**• Bots :** ${members.filter((member) => member.user.bot).size}`,
        `**• Text Channels :** ${
          channels.filter((channel) => channel.type === "text").size
        }`,
        `**• Voice Channels :** ${
          channels.filter((channel) => channel.type === "voice").size
        }`,
        `**• Boost Count :** ${guild.premiumSubscriptionCount || "0"}`,
        "\u200b",
      ])
      .setTimestamp()
    message.channel.send(embed)
  }
}
