const Command = require("../../modules/Command.js");

class volume extends Command {
  constructor(client) {
    super(client, {
      name: "volume",
      description: "Permet de réglé le volume.",
	  category:"Musique",
      usage: "volume"
    });
  }
}
module.exports = volume ;