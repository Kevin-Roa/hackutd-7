const Discord = require('discord.js');
const loadCommands = require('./helper/loadCommands');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
loadCommands(client);

client.once('ready', () => {
	console.log('🤖 Successfully initialized!');
});

client.on('message', (msg) => {
	// Ignore any messages that dont start with prefix or are from bot
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	if (!client.commands.has(cmd)) {
		return console.log(`"${cmd}" is not a valid command`);
	}
	try {
		client.commands.get(cmd).execute(client, msg, args);
	} catch (err) {
		console.log(err);
	}
});

// client.on('guildMemberAdd', member => {
// 	member.guild.channels.cache.get()
// })

client.login(token);
