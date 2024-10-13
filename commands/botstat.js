const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'botstat',
    cooldown: 5,
    permissions: [],
    async execute(message, args, cmd, client, Discord) {
        let embed = new MessageEmbed()
        .setColor('#FFF000')
        .setAuthor('Stats of the bot')
        .setDescription(`Status of the bot **${client.user.username}**`)
        .addField('SERVERS', client.guilds.cache.size, true)
        .addField('ID', client.user.id, true)
        .addField('STATUS', client.user.presence.status, true)
        .addField('USERS', client.users.cache.size)
        message.channel.send(embed)
    }
}