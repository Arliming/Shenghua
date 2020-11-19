const Akairo = require("discord-akairo")

const client = new Akairo.AkairoClient( {
  ownerID: "308540889754501120",
});
  client.commandHandler = new Akairo.CommandHandler(client, {
    commandDirectory: "./commands",
    prefix: "a,",
  })
client.login(require("./token.json")).then(() => {
  console.log("I'm back !")
})