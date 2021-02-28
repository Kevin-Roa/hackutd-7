const db = require('../firebase');
const { setupChannel, channels } = require('../helper/setupChannels');
const { setupRoles } = require('../helper/setupRoles');

module.exports = {
	name: 'init',
	desc: 'Initialize the server',
	execute: (client, msg, args) => {
		const serverRef = db.collection('servers').doc(msg.guild.id);
		serverRef.get().then(async (snapshot) => {
			if (snapshot.exists && !args.includes('force')) {
				msg.channel.send('This server has already been initialized.');
			} else {
				// Generate the channels on the server
				channelIDs = await generateChannels(msg);

				// Once the channels have generated, save the server to the DB
				Promise.all(channelIDs).then(async (ids) => {
					saveServer(msg, ids, serverRef);
				});
			}
		});
	}
};

const generateChannels = async (msg) => {
	const createChannel = async (name, options) => {
		return msg.guild.channels.create(name, options);
	};

	// const channels = msg.guild.channels;
	try {
		const parentChannel = await createChannel(msg.guild.toString(), {
			type: 'category'
		});

		const childConfig = { type: 'text', parent: parentChannel };

		const ids = channels.map(async (channel) => {
			const created = await createChannel(channel, childConfig);
			setupChannel(created);
			return await msg.guild.channels.resolveID(created);
		});

		return ids;
	} catch (e) {
		msg.channel.post(
			'Something went wrong, the bot may not have the necessary permissions.'
		);
	}
};

const saveServer = async (msg, ids, serverRef) => {
	// Get welcome channel
	const channel = msg.guild.channels.cache.get(ids[0]);
	// Generate persistent invite
	const invite = await channel.createInvite({ maxAge: 0 });
	const url = await invite.toString();

	const serverName = await msg.guild.toString();

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
};
