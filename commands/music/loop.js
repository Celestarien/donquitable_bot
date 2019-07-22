const Command = require("../../modules/Command.js");

class loop extends Command {
  constructor(client) {
    super(client, {
      name: "loop",
      description: "Active ou désactive la répétition de la liste de lecture.",
	  category:"Musique",
      usage: "loop"
    });
  }
}
module.exports = loop ;