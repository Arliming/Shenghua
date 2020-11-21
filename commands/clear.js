const { Command, Argument } = require("discord-akairo")
const db = require("../db.js")

module.exports = class extends Command {
  constructor() {
    super("clear", {
      aliases: ["clear", "purge", "delete"],
      userPermissions: "MANAGE_MESSAGES",
      clientPermissions: "MANAGE_MESSAGES",
      channel: "guild",
      category: "Modération",
      description: {
        content: "permet de supprimer un nombre de message",
        usage: "[nombre de message]",
        examples: "5",
      },
      args: [
        {
          id: "deleteAmount",
          type: Argument.range("number", 1, 99),
          default: 1,
        },
        ],
    })
  }

  async exec(message, { deleteAmount }) {
    deleteAmount = deleteAmount ?? 1
    deleteAmount ++
    const deleted = await message.channel.bulkDelete(deleteAmount)
    const msg = await message.channel.send(
      `${deleted.size - 1} messages purged!`
    )
    await msg.delete({ timeout: 4000 })
  }
}
