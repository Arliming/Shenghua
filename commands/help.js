const { stripIndents } = require("common-tags")
const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class HelpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "h"],
      args: [
        {
          id: "command",
          type: "commandAlias",
          default: null,
        },
      ],
      category: "Util",
      description: {
        content: "Donne une information à propos d'une commande",
        usage: "[command]",
        examples: ["ping"],
      },
    })
  }

  exec(message, { command }) {
    const prefix = this.handler.prefix
    const embed = new MessageEmbed().setColor(
      message.guild?.me.roles.color?.color ?? "#c800ff"
    )

    if (command) {
      embed
        .setColor(3447003)
        .addField(
          "❯ Usage",
          `\`${command.aliases[0]} ${
            command.description.usage ? command.description.usage : ""
          }\``
        )
        .addField(
          "❯ Description",
          command.description.content || "No Description provided"
        )

      if (command.aliases.length > 1) {
        embed.addField("❯ Aliases", `\`${command.aliases.join("`, `")}\``)
      }
      if (command.description.examples && command.description.examples.length) {
        embed.addField(
          "❯ Examples",
          `\`${command.aliases[0]} ${command.description.examples.join(
            `\`\n\`${command.aliases[0]} `
          )}\``
        )
      }
    } else {
      embed
        .setTitle("❯ Commands")
        .setDescription(
          stripIndents`
					A list of available commands.
					For additional info on a command, type \`${prefix}help <command>\`
					<> mean required, [] mean optional
					Numbers represent modules
					`
        )
        .setFooter(
          `${this.handler.modules.size} Modules`,
          this.client.user.displayAvatarURL()
        )

      for (const category of this.handler.categories.values()) {
        embed.addField(
          `❯ ${category.id.replace(/(\b\w)/gi, (lc) => lc.toUpperCase())} - ${
            category.size
          }`,
          `${category
            .filter((cmd) => cmd.aliases.length > 0)
            .map((cmd) => `\`${cmd.aliases[0]}\``)
            .join(", ")}`
        )
      }
    }

    return message.channel.send(embed)
  }
}

module.exports = HelpCommand
