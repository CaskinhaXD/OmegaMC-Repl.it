const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, Requesitos YT:
- [YT]
• Requer 400 inscritos.
• Requer 5 minutos de vídeo no mínimo. 
• Recebe 1 real para gastar em nossos produtos por vídeo de divulgação
Na descrição deve conter as seguintes informações!

• Nick:
• Discord:
  `)
}
}