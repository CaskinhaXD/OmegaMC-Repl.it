const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos gerais*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **o!avatar** :frame_photo: : *Mostra o avatar do player que você citar*

        :white_small_square: **o!convite** :envelope: : *O bot te mostra um convite para você enviar a seus amigos*

        :white_small_square: **o!ideia / o!sugestao** :envelope_with_arrow: : *Você envia uma sugestão para o server*

        :white_small_square: **o!ip** :pencil: : *Mostra o ip do server*
  `)
  }
}