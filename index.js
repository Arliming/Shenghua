const Discord = require("discord.js")
const Akairo = require("discord-akairo")

const akairo = new Akairo.AkairoClient( {
  ownerID: "308540889754501120",
  prefix: "a,",
  commandDirectory: "./commands",
})

akairo.login(require("./token.json")).then(() => {
  console.log("I'm back !")
})
