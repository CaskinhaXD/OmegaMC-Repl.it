const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, o Dev do Bot do nosso discord foi o Caskinha_XD#6412`)
}
}