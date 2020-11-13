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

module.exports.invitation = function (guild) {
  return guild.fetchInvites().then(guildInvites => {
      let valides = guildInvites.filter(invite => {
        return invite.expiresTimestamp < Date.now()
      })
      return valides[0]
  })
}

module.exports.resolveMember = async function (message, text = null) {
  if(message.mentions.members.size > 0)
      return message.mentions.members.first()

  text = text || message.content

  if(typeof text !== "string")
      throw new TypeError("text parameter must bu a string!")

  if(text.length < 3) return message.member

  text = text.toLowerCase()

  const members = await message.guild.members.fetch({ query: text })
  
  if(members.size > 0) return members.first()

  return message.member
}

module.exports.trimArray = function (arr, maxLen = 10) {
  if (arr.length > maxLen) {
      const len = arr.length - maxLen;
      arr = arr.slice(0, maxLen);
      arr.push(`${len} more...`);
  }
}