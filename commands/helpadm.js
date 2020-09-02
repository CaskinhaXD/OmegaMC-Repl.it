const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos de Administrador*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **o!clear** :broom: : *Este comando limpa uma parte do chat você pode escolher entre 1 e 99 mensagens*

        :white_small_square: **o!aviso** :incoming_envelope: : *Este comando envia um aviso para o chat de Aviso*

        :white_small_square: **o!ping** :ping_pong: : *Mostra a latência do server e da API*

        :white_small_square: **o!say** :speaker: : *Mostra uma mensagem que o staff escrever apos o comando falando que o bot que enviou ela*

        :white_small_square: **o!unmute** :book: : *Este comando permite o staff desmutar um player*

        :white_small_square: **o!mute** :book: : *Este comando permite o staff mutar um player*

        :white_small_square: **o!templock** :lock: : *Este comando da um templock em um chat*
        `)
  }
}