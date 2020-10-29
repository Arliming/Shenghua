const Discord = require("discord.js")
const path = require("path")

const { forFiles } = require("./utils.js")

const client = new Discord.Client()

client.prefix = "a,"

client.commands = new Discord.Collection()

forFiles(
  [path.join(__dirname, "commands")],
  function (filePath) {
    const cmdName = path.basename(filePath, ".js")
    client.commands.set(cmdName, require(filePath))
  }
)

client.login(require("./token.json"))

module.exports = client
