const Discord = require("discord.js");

    exports.run = async (client, message, args) => {
      message.delete()    
      let reason = args.slice(1).join(' ');
      let target = message.author
      if (reason.length < 0) return message.channel.send('Você deve fornecer um texto para o aviso.');
      if(!message.member.roles.cache.find( r => r.name === "*")) {
        return //precisa desse cargo com nome * para poder funcionar é para permissao se quier troca o nome do cargo so mudar o * pelo nome
message.reply("**Você não tem permissão para isso.**");
      } else {
        message.reply("**Anúncio enviado com sucesso**");{
            const text = args.slice(0).join(" ");
            const embed = new Discord.MessageEmbed()
            .setColor(`#5b00a8`)
            .setTitle(`:bell: AVISO`)
            .setDescription(`${text}`)
            .setFooter(`Postado por: ${target.username}`, message.author.displayAvatarURL())
            .setColor(`#5b00a8`)
            .setTimestamp()
            .setThumbnail(client.user.avatarURL())
            
            client.channels.cache.get('750841499301707826').send('@everyone/@here',embed)//aqui fica o id do canal que é para enviar
;
            
            };
      }
    };
exports.help = { //exportanto para a handler
    name: 'aviso',
    aliases: ['anunciar', 'alerta']
}