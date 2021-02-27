const Discord = require('discord.js');
const getCommands = require('./helper/getCommands');
const { token } = require('./config.json');

const client = new Discord.Client();
getCommands(client);

client.once('ready', () => {
	console.log('🤖 Successfully initialized!');
});

client.on('message', (msg) => {
	// const args = msg.content.slice(prefix.length);
	// Ignore bot messages
	if (msg.author.id !== '815228310513778729') {
		//
		if (!client.commands.has(msg.content)) {
			return console.log(`"${msg.content}" is not a valid command`);
		}
		try {
			client.commands.get(msg.content).execute(msg, []);
		} catch (err) {
			console.log(err);
		}
	}
});

client.login(token);
