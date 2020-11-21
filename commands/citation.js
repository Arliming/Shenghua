const { Command } = require("discord-akairo")
const db = require("../db.js")

module.exports = class extends Command {
  constructor() {
    super("citation", {
      cooldown: 5000,
      aliases: ["citation", "citations"],
      channel: "guild",
      category: "Fun",
      description: {
        content:
          "Dit une citation drôle ou intelligente aléatoirement (cooldown de 5s)",
      },
      args: [
        {
          id: "citation",
          type: "text",
          default: null,
        },
      ],
    })
  }

  async exec(message, { citation }) {
    if (citation) {
      if (citation === "list") {
        const citations = await db.globals.ensure("citations", [])
        return message.util.send(
          `${citations.length} citations.\n${citations
            .map((c) => "> " + c)
            .join("\n\n")}`
        )
      } else {
        if (message.author.id === "308540889754501120") {
          await db.globals.push("citations", citation)
          return message.util.send(
            "Nouvelle citation ajoutée c: \n> " + citation
          )
        } else {
          return message.util.send("T'es pas ma mère eh oh D:")
        }
      }
    } else {
      const citations = await db.globals.ensure("citations", [])
      if (citations.length > 0) {
        return message.util.send(
          "> " + citations[Math.floor(Math.random() * citations.length)]
        )
      } else {
        return message.util.send("Je ne connais pas de citation...")
      }
    }
  }
}
