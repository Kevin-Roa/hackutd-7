const db = require('../firebase');

module.exports = {
	name: 'test',
	desc: 'test command',
	execute(msg, args) {
		db.collection('test')
			.doc('testdoc')
			.set({
				message: msg.content
			})
			.then(() => {
				msg.reply('saved to db');
			})
			.catch((err) => {
				console.log('couldnt save to db');
			});
	}
};
