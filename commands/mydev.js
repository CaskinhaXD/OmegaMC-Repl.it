const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber sobre o nosso dev delicioso*

        *O nosso dev foi o Caskinha_XD ou Caskinha_XD#6412*
  `)
  }
}