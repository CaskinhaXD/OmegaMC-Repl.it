const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, Requesitos YT:
  - [YT+]
• Requer 800 inscritos.
• Requer 7 minutos de vídeo no mínimo. 
• Recebe 250 de cash a cada 1 episódio.

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:


- [YT]
• Requer 400 inscritos.
• Requer 5 minutos de vídeo no mínimo. 
• Recebe 150 de cash a cada 1 episódio. 

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:


- [MiniYT]
• Requer 100 inscritos.
• Requer 5 minutos de vídeo no mínimo. 
• Recebe 75 de cash a cada 1 episódio. 

Na descrição deve conter as seguintes informações!

• Nick:
• IP: 
• Discord:
  `)
}
}