module.exports = {
	channels: [
		'welcome',
		'rules-and-info',
		'g-announcements',
		'g-events',
		'reminders',
		'roles',
		'giveaway',
		'find-a-server',
		'news',
		'resources',
		'commands'
	],

	// Provide an initial setup for the channel after it is created
	setupChannel(channel) {
		switch (channel.name) {
			case 'welcome':
				console.log('created welcome channel');
				return;
			case 'giveaway':
				hidden(channel);
				return;
			case 'find-a-server':
				sendPinnedMessage(
					channel,
					'To find a specific server simply enter ```!find name```'
				);
				return;
			case 'news':
				readonly(channel);
				sendMessage(
					channel,
					'https://www.dallasnews.com/news/politics/2021/02/26/dallas-county-judge-clay-jenkins-spars-with-the-state-over-north-texas-covid-19-vaccine-allocations/'
				);
				sendMessage(
					channel,
					'https://www.dallasnews.com/news/weather/2021/02/27/dallas-fort-worth-in-for-a-wet-weekend-with-thunderstorms-possible/'
				);
				sendMessage(
					channel,
					'https://www.dallasnews.com/news/2021/02/26/mckinney-firefighters-battled-four-fires-likely-sparked-by-lightning-strikes-thursday-night/'
				);
			case 'resources':
				return;
			case 'commands':
				hidden(channel);
				return;
			default:
				readonly(channel);
				return;
		}
	}
};

const readonly = (channel) => {
	let roles = channel.guild.roles.cache;
	roles.map((role) => {
		if (role.toString() !== 'admin') {
			return {
				id: role,
				deny: ['SEND_MESSAGES']
			};
		}
	});
	channel.overwritePermissions(roles);
};

const hidden = (channel) => {
	let roles = channel.guild.roles.cache;
	roles.map((role) => {
		if (role.toString() !== 'admin') {
			return {
				id: role,
				deny: ['VIEW_CHANNEL']
			};
		}
	});
	channel.overwritePermissions(roles);
};

const sendPinnedMessage = (channel, msg) => {
	channel.send(msg).then((msg) => msg.pin());
};

const sendMessage = (channel, msg) => {
	return channel.send(msg);
};
