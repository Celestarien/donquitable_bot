const Command = require("../modules/Command.js");

class poll extends Command {
  constructor(client) {
    super(client, {
      name: "poll",
      description: "créé un sondage",
      usage: "poll <question>",
      category: "utilisateur",
	  permLevel: "Utilisateur"
    });
  }
	async run(message, args) {
	try {
	const args = message.content.split(" ").slice(1);
    const thingToEcho = args.join(" ");
    const find = 
    message.delete();
    message.channel.send(`${message.author} propose comme sondage`)
	const embed ={
		"color": 12431,
  "timestamp": `${new Date}`,
  "footer": {
    "text": "TestBot | V.1.0 | Doquitable Dev"
  },
  "author": {
    "name": "Sondage"
  },
  "fields": [
    {
      "name": `${thingToEcho}`,
      "value": "Répondre avec :white_check_mark: ou :x:"
    }
  ]
};
		message.channel.send({embed})
        .then(function(message) {
            message.react("✅");
            message.react("❌");
        }).catch(function() {
        });
    console.log("sondage envoyé")
	} catch (e) {
		console.log(e)
	}
}}
	module.exports = poll;