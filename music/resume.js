const Command = require("../../modules/Command.js");

class resume extends Command {
  constructor(client) {
    super(client, {
      name: "resume",
      description: "Reprend la musique depuis le début.",
	  category:"Musique",
      usage: "resume"
    });
  }
}
module.exports = resume ;