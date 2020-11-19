module.exports = new Akairo.Command(
  "invitation",
  async function (message) {
    let said = message.content || "Bite"

    await message.channel.send(`${said}`)

    await message.delete()
  },

  {
    aliases: ["dis", "dire", "parle"],
  }
)
