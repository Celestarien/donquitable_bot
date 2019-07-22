var bannedUsers = {};
const MAX_WARNINGS = 2;

module.exports = {
  doleOutPunishment: function(client, member, guild) {
    if (!bannedUsers[guild.id]) {
      bannedUsers[guild.id] = {};
    }
    var warnings = bannedUsers[guild.id][member.id];
    if (!warnings) {
      this.warnUser(client, member);
      bannedUsers[guild.id][member.id] = 1;
    } else if (warnings < MAX_WARNINGS) {
      this.warnUser(client, member);
      bannedUsers[guild.id][member.id]++;
    } else if (warnings == MAX_WARNINGS) {
      this.banUser(member);
      bannedUsers[guild.id][member.id] = 0;
    }
  },

  banUser: function(member) {
    member.user.send("Vous avez été banni pour profanité.");
    member.ban(7).catch(console.error);
  },

  warnUser: function(client, message, member) {
    client
      .fetchUser(member.id)
      .then(user =>
        user.send(
          "Votre message a été supprimé et vous êtes maintenant averti (vous êtes ban au 4ème avertissement)."
        )
      );
  },

  checkProfanity: function(message, bannedWords) {
    var words = message.split(" ");
    for (var word of words) {
      if (bannedWords.indexOf(word) > -1) return true;
    }
    return false;
  }
};