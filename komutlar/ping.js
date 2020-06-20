const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
 

  const embed = new Discord.RichEmbed()
    .setDescription(`${client.ping} ms.`) 
    .setColor("BLUE")
  message.channel.send(embed)
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'ping',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
