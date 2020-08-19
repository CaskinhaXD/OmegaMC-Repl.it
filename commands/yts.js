const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Youtebers Do Server:')
        .setColor('#000000')
        .setDescription(`
        Youtubers:
        `)
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}