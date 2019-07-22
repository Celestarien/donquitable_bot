const Command = require("../../modules/Command.js");

class nowplaying extends Command {
  constructor(client) {
    super(client, {
      name: "nowplaying",
      description: "Vous indique la musique joué actuellement",
	  category:"Musique",
      usage: "nowplaying"
    });
  }
}
module.exports = nowplaying;