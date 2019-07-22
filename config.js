const config = {
  defaultSettings: {
    prefix: "test.",
    modLogChannel: "logs-bot",
	adminRole: "new roleztzeat",
    systemNotice: true
  },
  permLevels: [
    { level: 0, name: "Utilisateur", check: () => true },
	{
		level: 1,
		name: "new roleztzeat",
		check: message => {
			try {
				const adminRole = message.guild.roles.find(
				r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
				);
				if (adminRole && message.member.roles.has(adminRole.id)) return true;
			} catch (e) {
				return false;
			}
		}
	},

    {
      level: 2,
      name: "Donquitalebot",
      check: message => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
