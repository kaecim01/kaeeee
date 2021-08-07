const Discord = require('discord.js')

exports.run = function(client, message, args) {


const kinda = new Discord.MessageEmbed()

.setTitle("KaeXDD")
.setDescription("**Botun Davet Linki :** [Davet Et](ananınamı.com)\n**Botun Destek Sunucusu :** [Katıl](31.com)")
.setColor("GREEN")
//lrowsxrd
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0

};

exports.help = {
name: 'davet'
};
