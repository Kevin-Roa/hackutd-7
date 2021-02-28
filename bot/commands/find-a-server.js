const db = require('../firebase');
const Fuse = require('fuse.js');

module.exports = {
	name: 'find',
	desc: 'find a server in the database',
	execute(client, msg, args) {
		if (msg.channel.name === 'find-a-server') {
			db.collection('servers')
				.get()
				.then((snapshot) => {
					const servers = [];
					snapshot.forEach(async (doc) => {
						servers.push(doc.data());
					});

					// Fuzzy search
					const fuse = new Fuse(servers, {
						includeScore: true,
						keys: ['name', 'desc']
					});
					let result = fuse.search(args.join(' '));

					// If there is more than 1 valid result
					if (result.length > 1) {
						// Remove the servers that are not as close to the search
						// The closer the score is to 0, the closer the result
						console.log(result);
						result = result.filter((server) => server.score <= 0.2);
					}

					// If results != null
					if (result[0]) {
						result.forEach((server) => {
							msg.channel.send(server.item.inviteUrl);
						});
					} else {
						msg.channel.send(
							'There are no servers in the database that match your request.'
						);
					}
				});
		}
	}
};
