module.exports = function restart(message){

    if (message.author.id === '308540889754501120') {

        message.delete().then(() => process.exit(0))
    }
}

module.exports.aliases = ['exit']
module.exports.description = "redémarre le bot (ADMINISTRATOR)"