const Command = require("../../../modules/Command.js");

class testlobbyadd extends Command {
  constructor(client) {
    super(client, {
      name: "testlobbyadd",
      description: "test le message de bienvenue du bot.",
      usage: "testlobbyadd",
      category: "Développement"
    });
  }

  async run(message, client) {
      this.client.emit(
          "guildMemberAdd",
          message.member || (await message.guild.fetchMember(message.author))
      );

}
}
      module.exports = testlobbyadd; 