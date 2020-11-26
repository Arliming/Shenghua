const db = require("./db.js")
const { AkairoClient, CommandHandler } = require("discord-akairo")

const client = new AkairoClient({
  ownerID: ["308540889754501120", "352176756922253321"],
  disableMentions: "everyone",
})
client.commandHandler = new CommandHandler(client, {
  directory: "./commands/",
  prefix: ({ guild }) => {
    if (!guild) return "a,"
    return db.prefixes.ensure(guild.id, "a,")
  },
  commandUtil: true,
  fetchMembers: true,
})

client.commandHandler.loadAll()
;(async () => {
  await db.globals.open()
  await db.prefixes.open()
  await db.customCommands.open()
  await client.login(require("./token.json"))
})().then(() => {
  console.log("I'm back !")
})