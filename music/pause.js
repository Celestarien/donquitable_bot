const Command = require("../../modules/Command.js");

class pause extends Command {
  constructor(client) {
    super(client, {
      name: "pause",
      description: "Met en pose la musique.",
	  category:"Musique",
      usage: "pause"
    });
  }
}
module.exports = pause;