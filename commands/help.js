const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  ''
];

var rand = list[Math.floor(Math.random() * list.length)];
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .setColor('#000000')
        .setDescription(`
        Prefix: o!
        Commands:
        o!fds
        o!emoji
        o!avatar
        o!ideia
        o!ping
        o!say
        o!uptime
        o!coinflip
        o!requesitos
        o!solicitartag
        `)
        .setThumbnail(avatar)
        .setFooter('I help You!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}