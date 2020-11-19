module.exports = new Akairo.Command(
  "clear",
  async function (message, { deleteAmount }) {
    deleteAmount++
    const deleted = await message.channel.bulkDelete(deleteAmount)
    const msg = await message.channel.send(
      `${deleted.size - 1} messages purged!`
    )
    await msg.delete({ timeout: 5000 })
  },

  {
    aliases: ["purge"],
    userPermissions: "MANAGE_MESSAGE",
    clientPermissions: "MANAGE_MESSAGE",
    args: [
      {
        id: "deleteAmount",
        type: "number",
        min: 1,
        max: 100,
      },
    ],
  }
)
