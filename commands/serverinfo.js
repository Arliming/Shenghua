const Discord = require('discord.js')
const moment = require('moment')
const { trimArray } = require("../utils")

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydney: 'Sydney',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = async function serverinfo(message) {

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString())
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

    const embed = new Discord.MessageEmbed()
        .setColor(message.guild?.me.roles.color?.color ?? "#c800ff")
        .setTitle(`Infos du Serveur "${message.guild.name}"`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('General', [
            `**• Name :** ${message.guild.name}`,
            `**• ID :** ${message.guild.id}`,
            `**• Owner :** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
            `**• Région :** ${regions[message.guild.region]}`,
            `**• Boost Tier :** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            `**• Explicit Filter :** ${filterLevels[message.guild.explicitContentFilter]}`,
            `**• Verification Level :** ${verificationLevels[message.guild.verificationLevel]}`,
            `**• Date de Création :** ${moment(message.guild.createdTimestamp).format('HH:mm')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
            '\u200b'
        ])

        .addField('Statistiques', [
            `**• Role Count :** ${roles.length}`,
            `**• Emoji Count :** ${emojis.size}`,
            `**• Regular Emoji Count :** ${emojis.filter(emoji => !emoji.animated).size}`,
            `**• Animated Emoji Count :** ${emojis.filter(emoji => emoji.animated).size}`,
            `**• Nombre de Membres :** ${message.guild.memberCount}`,
            `**• Utilisateurs :** ${members.filter(member => !member.user.bot).size}`,
            `**• Bots :** ${members.filter(member => member.user.bot).size}`,
            `**• Text Channels :** ${channels.filter(channel => channel.type === 'text').size}`,
            `**• Voice Channels :** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**• Boost Count :** ${message.guild.premiumSubscriptionCount || '0'}`,
            '\u200b'
        ])

        .addField(`Roles [${roles.length - 1}`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? trimArray(roles) : 'None')
        .setTimestamp();

    message.channel.send(embed)
}