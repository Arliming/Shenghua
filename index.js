const Discord = require("discord.js")
const Akairo = require("discord-akairo")

const client = new Discord.Client()
const akairo = new Akairo.Framework(client, {
  ownerID: "ID",
  prefix: "a,",
  commandDirectory: "./commands/",
})

akairo.login(require("./token.json")).then(() => {
  console.log("I'm back !")
})
