const db = require("./db.js")
const { AkairoClient, CommandHandler, ListenerHandler } = require("discord-akairo")

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
});

client.listenerHandler = new ListenerHandler(client, {
  directory: './listeners/'
});

client.commandHandler.loadAll()
;(async () => {
  await db.globals.open()
  await db.prefixes.open()
  await db.customCommands.open()
  await client.login(require("./token.json"))
})().then(() => {
  console.log("I'm back !")
  setInterval(async () => {
    let triggered = false
    const reminds = await db.globals.ensure("reminds", [])
    for(const remind of reminds){
      if(remind.endingTimestamp < Date.now()){
        triggered = true
        const user = await client.users.fetch(remind.user)
        await user.send(remind.content)
        reminds.splice(reminds.indexOf(remind), 1)
      }
    }
    if(triggered) await db.globals.set("reminds", reminds)
  }, 5000)
})