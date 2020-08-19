const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos para saber mais sobre mim*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **o!mydev** :desktop: : *Mostra quem construiu esse bot lindo, quem construiu é mais lindo ainda.

        :white_small_square: **o!uptime** :computer: : *Mostra a quanto tempo eu estou on-line ou a quanto tempo eu não tenho atualização*
  `)
  }
}