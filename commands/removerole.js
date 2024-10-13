const Discord = require('discord.js');

module.exports = {
    name: 'removerole',
    description: 'Removes a role to a user',
    permissions: ["ADMINISTRATOR"],

    async execute(message, args, cmd, client, Discord) {
        let user = message.guild.members.cache.get(args[0]) || message.mentions.members.first();

        if(!user) return message.channel.send('User is missing!')

        let findrole = args.slice(1).join(' ');
        const role = message.guild.roles.cache.find(r => r.name.includes(findrole));

        if(!role) return message.channel.send('Could not find that role!')

        user.roles.remove(role.id);
        message.channel.send(`${user} no longer has the ${role.name} role!`);
    }
}