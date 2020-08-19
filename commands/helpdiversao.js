const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos para Diversão*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **o!fds** :crossed_swords: : *Este comando faz com que você mande o foda-se para um player*

        :white_small_square: **o!coinflip** :moneybag: : *Este comando te da duas opções cara ou coroa e ele sorteia se vai cair cara ou coroa*

        :white_small_square: **o!sherek** :sparkles: : *Este comando sumona um sherek bem na sua tela*

        :white_small_square: **o!kiss** :kiss: : *Este comando faz com que você possa beijar um player*
        `)
  }
}