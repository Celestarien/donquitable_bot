const Command = require("../../modules/Command.js");

class leave extends Command {
  constructor(client) {
    super(client, {
      name: "leave",
      description: "Le Bot quitte le salon Vocal",
	  category:"Musique",
      usage: "leave"
    });
  }
}
module.exports = leave;