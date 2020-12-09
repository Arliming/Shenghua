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
          id: "indicator",
          type: "text"
        },
        {
          id: "content",
          type: "text",
          match: "rest"
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

  async exec(message, { key, content, indicator }) {
    const reminds = await db.globals.ensure("reminds", [])
    const userReminds = reminds.filter(remind => remind.user === message.author.id)
    
    switch(key){
      case "add":
        if(!indicator) return message.reply(" Il manque l'indicateur de durée !")
        
        const parser = /^(\d+)(d|m|h|s|ms|mth|y)$/i
        const match = parser.exec(indicator)

        if(!match) return message.reply(" Mauvais format de durée !")
        if(!content) return message.reply(" Il manque le contenu !")

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
        
        await db.globals.push("reminds", {
          endingTimestamp,
          content,
          user: message.author.id
        })
        
        return message.util.send("remind saved")
      case "show":
        if(!indicator) return message.reply(" Il manque l'indicateur !")
        
        const index = Number(indicator)
        
        if(isNaN(index)) return message.reply(" Mauvais indicateur")
        if(!userReminds[index]) return message.reply(" Mauvais index")
        
        const remind = userReminds[index]
        
        return message.util.send(
          new Discord.MessageEmbed()
            .setDescription(remind.content)
            .setFooter("prévu pour")
            .setTimestamp(remind.endingTimestamp)
        )
      case "list":
        return userReminds.map((remind, i) => `[${i}] - ${dayjs(remind.endingTimestamp).format()} : ${remind.content.replace(/\s+/,"").slice(0,32)}`)
      case "remove":
        if(!indicator) return message.reply(" Il manque l'indicateur !")
        
        const index = Number(indicator)
        
        if(isNaN(index)) return message.reply(" Mauvais indicateur")
        if(!userReminds[index]) return message.reply(" Mauvais index")
        
        const remind = userReminds[index]
        
        reminds.splice(reminds.indexOf(remind))
        
        await db.globals.set("reminds", reminds)
        
        return message.util.send("le remind est supprimé")
    }
  }
}
