const Ghomap = require("ghomap")

// les citations sont globales par exmple, elle sont pas juste sur une guild
const globals = new Ghomap()

const prefixes = new Ghomap("prefixes")
const customCommands = new Ghomap("custom-commands")

module.exports = {
  globals,
  prefixes,
  customCommands,
}
