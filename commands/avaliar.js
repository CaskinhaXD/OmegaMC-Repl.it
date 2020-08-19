const Discord = require("discord.js");
const config = require("../config.json");
const prefixo = (config.prefix);
    module.exports.run = async (client, message, args) => {
      message.delete()  

      const eb = new Discord.MessageEmbed()      
      .setDescription(`Use ${prefixo}avaliar (nota) (motivo) (staff)`)
      .setColor(`RANDOM`)
      let target = message.author
      if (!args[0]) return message.channel.send(eb);
      if (isNaN(args[0])) return message.channel.send(`Isso não é um número!`);
      let motivo1 = args.slice().join(' ');
      if(!motivo1) return message.channel.send(`Especifique o motivo da nota`);
      let staff1 = args.slice(2).join(' ');
      if(!staff1) return message.channel.send(`Especifique o Staff para a nota`);
            const embed = new Discord.MessageEmbed()
            .setTitle(`:military_medal:  Avaliação`)
            .setDescription(`**Nota:**\`\`\`${args[0]}\`\`\` \n**Motivo:**\`\`\`${motivo1}\`\`\` \n**Staff Avaliado:**\`\`\`${staff1}\`\`\``)
            .setFooter(`Avaliado por por: ${target.username}`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setTimestamp()
            .setThumbnail(client.user.avatarURL())
            
            client.channels.cache.get('745597770223845396').send(embed)//aqui fica o id do canal que é para enviar;
            
            };
    
exports.help = { //exportanto para a handler
    name: 'avaliar',
    aliases: ['avaliacao']
}
