const Discord = require('discord.js');
const Akairo = require('discord-akairo');
 
const client = new Discord.Client();
const akairo = new Akairo.Framework(client, {
    ownerID: 'ID',
    prefix: '!',
    commandDirectory: './src/commands/',
    inhibitorDirectory: './src/inhibitors/',
    listenerDirectory: './src/listeners/'
});
 
akairo.login(require("./token.json")).then(() => {
    console.log('Started up!');
});
