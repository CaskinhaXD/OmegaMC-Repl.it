const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        Prefix: o!
        Commands:
        o!fds
        o!emoji
        o!avatar
        o!ideia
        o!ping
        o!say
        o!uptime
        o!coinflip
        o!requesitos
        o!solicitartag
        o!yts
        o!ip
        o!dev
        o!avaliar
  `)
  }
}