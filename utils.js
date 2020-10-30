const fs = require("fs").promises
const path = require("path")
const client = require("./client")

module.exports.forFiles = async function(pathList,callback) {
  for (const _path of pathList) {
    const dir = await fs.readdir(_path)
    for (const filename of dir) {
      const filePath = path.join(_path, filename)
      if ((await fs.stat(filePath)).isDirectory()) {
        await forFiles([filePath], callback)
      } else {
        await callback(filePath)
      }
    }
  }
}

module.exports.tag = member => `${member}`
//const { tag } = require("./utils.js")

module.exports.invitation = function (guild) {
  return guild.fetchInvites().then(guildInvites => {
      let valides = guildInvites.filter(invite => {
        return invite.expiresTimestamp < Date.now()
      })
      return valides[0]
  })
}
