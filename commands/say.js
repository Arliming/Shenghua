module.exports = function say(message){

  let said = message.content || "Bite"

  message.channel.send(`${said}`)

  message.delete()
}

module.exports.description = "Dit ce que vous souhaitez"
module.exports.longDescription = "Le bot peut dire tout, même les emojis animé (seulement celles présentes dans un discord où le bot est présent). Si vous n'écrivez rien, le bot dira ***Bite***"
module.exports.aliases = ['dis', 'dire']