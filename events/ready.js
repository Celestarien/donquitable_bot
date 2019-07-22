module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {
    await this.client.wait(1000);

    this.client.appInfo = await this.client.fetchApplication();
    setInterval(async () => {
      this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    // Vérification du dashboard
    //require("../modules/dashboard.js")(this.client);

    const channel = this.client.channels.get("598925830319636480");
    channel.send(":gear: Le bot a redémarré !");

    // Activité + lancement bot
    this.client.user.setActivity("test.");

    this.client.logger.log(
      `${this.client.user.tag} est prêt à espionner ${
        this.client.users.size
      } utilisateurs sur ${this.client.channels.size} salons.`,
      "ready"
    );
  }
};
