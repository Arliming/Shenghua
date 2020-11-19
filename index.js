const Akairo = require("discord-akairo")

const client = new Akairo.AkairoClient({
  ownerID: ["308540889754501120", "352176756922253321"],
})
client.commandHandler = new Akairo.CommandHandler(client, {
  directory: "./commands/",
  prefix: "a,",
  commandUtil: true,
})
client.commandHandler.loadAll()
client.login(require("./token.json")).then(() => {
  console.log("I'm back !")
})
