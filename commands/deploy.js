const { Command } = require("discord-akairo")
const exec = require("util").promisify(require("child_process").exec)

module.exports = class extends Command {
  constructor() {
    super("deploy", {
      ownerOnly: true,
      channel: "guild",
      cooldown: 1000 * 60 * 5,
      aliases: ["deploy", "reload"],
      category: "secret",
      description: "Déploie en production le dernier push",
    })
  }

  async exec(message) {
    const subject = await message.channel.send(
      "<a:wait:560972897376665600> En cours de déploiement..."
    )
    const timer = Date.now()

    try {
      await exec("git pull && npm i")
      await subject.edit(
        `Déploiement réussi ! <:yay:557124850326437888>\nEffectué en ${
          Date.now() - timer
        }ms`
      )
      process.exit(0)
    } catch (error) {
      await subject.edit(
        `Une erreur est survenue lors du déploiement <:why:557124850422906880>\nGo le faire à la main... ${app.code(
          `${error.name}: ${error.message}`,
          ""
        )}`
      )
    }
  }
}
