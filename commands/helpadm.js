const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        Prefix: o!
        Commands:
        o!ban (Em Breve)
        o!mute (Em Breve)
        o!clear
        o!aviso
  `)
  }
}