module.exports = new Akairo.Command(
  "clear",
  async function (message, { deleteAmount }) {
    deleteAmount ++
    await message.channel.bulkDelete(deleteAmount).then(deleted => {
      await message.channel.send(`${deleteAmount -1} messages purged!`).then(msg => msg.delete({ timeout: 5000 }));
    })
  },

  {
    aliases: ["purge"],
    userPermissions:("MANAGE_MESSAGE"),
    clientPermissions: ("MANAGE_MESSAGE"),
    args: [{
      id: "deleteAmount",
      type: "number",
      min: 1,
      max: 100
    }]
  }
)