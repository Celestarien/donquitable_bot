const Command = require("../../modules/Command.js");

class skip extends Command {
  constructor(client) {
    super(client, {
      name: "skip",
      description: "Passe à la musique suivante.",
	  category:"Musique",
      usage: "skip"
    });
  }
}
module.exports = skip;