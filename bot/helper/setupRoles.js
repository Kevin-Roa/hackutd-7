const roles = [
	{
		name: 'everyone',
		color: 'GREY',
		permissions: 64
	},
	{
		name: 'member',
		permissions: 70377025
	}
];

module.exports = {
	setupRoles(guild) {
		roles.forEach((role) => {
			guild.roles.create({ data: role });
		});
	}
};
