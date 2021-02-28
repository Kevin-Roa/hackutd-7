const db = require('../firebase');
// import db from '../firebase';
// import execute from '../helper/execute';

module.exports = {
	name: 'init',
	desc: 'Initialize the server',
	execute: (client, msg, args) => {
		// Add server to database
		const serverRef = db.collection('servers').doc(msg.guild.id);
		serverRef.get().then(async (snapshot) => {
			// if (snapshot.exists) {
			// 	msg.channel.send('This server has already been initialized.');
			// } else {
			// Add server to database
			const serverName = msg.guild.toString();

			const createChannel = async (name, options) => {
				return msg.guild.channels.create(name, options);
			};

			// const channels = msg.guild.channels;
			const parentChannel = await createChannel(serverName, { type: 'category' });
			const channels = [
				'welcome',
				'rules-and-info',
				'announcements',
				'events',
				'reminders',
				'roles',
				'giveaway',
				'find-a-server',
				'news',
				'resources',
				'commands'
			];
			const childConfig = { type: 'text', parent: parentChannel };

			const ids = channels.map(async (channel) => {
				const created = await createChannel(channel, childConfig);
				return await msg.guild.channels.resolveID(created);
			});

			Promise.all(ids).then(async (ids) => {
				// Get welcome channel
				const channel = msg.guild.channels.cache.get(ids[0]);
				// Generate persistent invite
				const invite = await channel.createInvite({ maxAge: 0 });
				const url = await invite.toString();

				Promise.resolve(url).then((url) => {
					serverRef
						.set({
							name: serverName,
							desc: msg.guild.description,
							inviteUrl: url
						})
						.then(() => {
							msg.channel.send(`${serverName} has been initialized.`);
						});
				});
			});
		});
		// }
	}
};
