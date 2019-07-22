const Command = require("../../modules/Command.js");

class Play extends Command {
  constructor(client) {
    super(client, {
      name: "play",
      description: "recherche une musique sur youtube puis la diffuse sur un channel Vocal",
      usage: "play <nom ou lien de la musique>",
	  category:"Musique",
      aliases: ["p"]
    });
  }
}
module.exports = Play;