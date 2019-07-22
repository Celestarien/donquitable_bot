const Command = require("../../modules/Command.js");

class queue extends Command {
  constructor(client) {
    super(client, {
      name: "queue",
      description: "Vous indique la liste de lecture.",
	  category:"Musique",
      usage: "queue"
    });
  }
}
module.exports = queue;