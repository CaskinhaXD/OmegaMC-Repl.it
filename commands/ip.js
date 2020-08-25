const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ip do Server')
        .setColor('#000000')
        .setDescription(`
        Ip do server:
        1° IP: Play.omegamc.xyz
        2° IP: jogar.omegamc.xyz
        3° IP: omegamc.mine-sv.xyz
        `)
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}