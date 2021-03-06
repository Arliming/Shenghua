const { Command } = require("discord-akairo")
const db = require("../db.js")

module.exports = class extends Command {
  constructor() {
    super("custom", {
      cooldown: 5000,
      userPermissions: "MANAGE_MESSAGES",
      aliases: ["custom", "command", "cmd", "cc"],
      channel: "guild",
      category: "custom",
      description: {
        content:
          "permet de créer une commande custom (maximum de 10 commandes)",
        usage:
          "add *nom de la cmd* *texte* \n[cmd] use *nom de la cmd* \n[cmd] list \n[cmd] remove *nom de la cmd*",
      },
      args: [
        {
          id: "key",
          type: [
            ["add", "push", "new"],
            ["remove", "rm", "delete", "del", "suppr"],
            ["use", "call"],
            ["list", "all"],
          ],
          default: "use",
        },
        {
          id: "name",
          type: /\S{4,15}/,
        },
        {
          id: "content",
          type: "text",
          match: "rest",
        },
      ],
    })
  }

  async exec(message, { key, name: regexResult, content }) {
    const commands = await db.customCommands.ensure(message.guild.id, [])

    switch (key) {
      case "remove":
        if (commands.length > 9)
          return message.util.send(
            "Il y a trop de commandes dans ce serveur, supprimez-en."
          )
      case "use":
      case "add":
        if (!regexResult || !regexResult.match) {
          return message.util.send("Il faut indiquer le nom de la commande !")
        }
        break
      default:
        // list
        if (commands.length > 0) {
          return message.util.send(
            commands.map((c) => `**${c.name}**: ${c.content}`).join("\n\n")
          )
        } else {
          return message.util.send("Il n'y a aucune commande sur ce discord")
        }
    }

    const name = regexResult.match[0]
    const command = commands.find((c) => c.name === name)

    if (key !== "add" && !command) {
      return message.util.send(`Aucune commande ne s'appelle ${name} :(`)
    }

    switch (key) {
      case "remove":
        commands.splice(commands.indexOf(command), 1)
        await db.customCommands.set(message.guild.id, commands)
        return message.util.send(`Commande ${name} supprimée !`)
      case "use":
        return message.util.send(command.content)
      case "add":
        if (!content)
          return message.util.send("Il faut un contenue à la commande !")
        await db.customCommands.push(message.guild.id, { name, content })
        return message.util.send(
          `La commande ${name} a été rajoutée !\n\nRéponse:\n${content}`
        )
    }
  }
}
