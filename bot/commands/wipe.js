const Discord = require('discord.js');
const db = require('../firebase');

module.exports = {
	name: 'wipe',
	desc: 'test command',
	execute(client, msg, args) {
		const channels = msg.guild.channels.cache;
		channels.forEach((channel) => {
			if (channel.name != 'general') channel.delete();
		});
	}
};
