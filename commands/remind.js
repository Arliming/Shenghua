const { Command } = require("discord-akairo")
const db = require("../db.js")
const dayjs = require("dayjs")

module.exports = class extends Command {
  constructor() {
    super("reminder", {
      args: [
        {
          id: "key",
          type: [
            ["add", "new", "set"],
            ["show", "display", "look", "lookup", "get"],
            ["remove", "rm", "delete", "suppr"],
            ["list"],
          ],
          default: "add",
        },
        {
          id: "duration",
          type: "text",
          otherwise: "Il manque une durée",
        },
        {
          id: "content",
          type: "text",
          match: "rest",
          otherwise: "Il manque un content",
        },
      ],
      aliases: ["remind", "rmd"],
      category: "Util",
      description: {
        content: "Met le rappel de votre choix \n y = année \n",
        usage: "[heure] *rappel*",
        examples: ["9min pasta"],
      },
    })
  }

  async exec(message, { key, content, duration }) {

    const parser = /^(\d+)(d|m|h|s|ms|mth|y)$/i
    const match = parser.exec(duration)
    if(!match) return message.reply(" Mauvais format de durée !")
    let [, count, unity ] = match
    count = Number(count)
// on converti en ms la durée
    switch(unity){
      case "y":
        count *= 1000 * 60 * 60 * 24 * 365
        break
      case "mth":
        count *= 1000 * 60 * 60 * 24 * 30
        break
      case "d":
        count *= 1000 * 60 * 60 * 24
        break
      case "h":
        count *= 1000 * 60 * 60
        break
      case "m":
        count *= 1000 * 60
        break
      case "s":
        count *= 1000
        break
    }

    const endingTimestamp = Date.now() + count

    const user = message.author.id

    const reminds = await db.globals.ensure("reminds", [])

      switch (key) {
        case "remove":
          if (reminds.length > 9)
            return message.util.send(
              "Tu as trop de reminds !"
            )
        case "add":
          break
        default:
          // list
          if (reminds.length > 0) {
            return message.util.send(
              reminds.map((c, i) => `\`${i}\` **${dayjs(c.endingTimestamp).format()}**: ${c.content.replace(/\s+/," ").slice(0, 150)}...`).join("\n")
            )
          } else {
            return message.util.send("Tu n'as aucun remind !")
          }
      }

    const remind = reminds.find((c) => c.name === content)

      if (key !== "add" && !remind) {
        return message.util.send(`Aucun remind ne contient ${content} :(`)
      }

      switch (key) {
        case "remove":
          reminds.splice(reminds.indexOf(remind), 1)
          await db.globals.set("reminds", reminds)
          return message.util.send(`remind ${content} supprimée !`)
        case "add":
          await db.globals.push("reminds", { user, endingTimestamp, content })
          return message.util.send(
            `La reminds pour ${dayjs(endingTimestamp).format()} à été rajoutée !\n\nRéponse:\n${content}`
          )
      }
  }
}