const Command = require("../modules/Command.js");

class ppc extends Command {
  constructor(client) {
    super(client, {
      name: "ppc",
      description: "envoie pierre, papier ou ciseaux",
      usage: "ppc"
    });
  }

  async run(message) {
    try {
      var number = 3;
	  var random =Math.floor (Math.random() * ( number -1 + 1 )) + 1;
	  var random2 =Math.floor (Math.random() * ( number -1 + 1 )) + 1;
	  switch (random2) {
		case 1: message.channel.send("Pierre"); break;
		case 2: message.channel.send("Papier"); break;
		case 3: message.channel.send("Ciseaux"); break;
	  }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ppc;
