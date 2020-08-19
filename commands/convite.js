const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que um convite do nosso discord*

        *Aqui esta:*

        **https://discord.gg/5DaPHCc**
  `)
  }
}