
const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    cooldown: 10,
    permissions: [],
    aliases: ['minecraft', 'mccheck', 'mcstat', 'mcserverstat'],
    description: 'Get info about a minecraft server.',
    execute(message, args, cmd, client, Discord){
        if(cmd === 'mcserver' || cmd === 'mcstat' || cmd === 'mcserverstat' || cmd === 'mccheck'){
            if(!args[0]) return message.channel.send('Skriv in en riktig Minecraft server **Ip**');
            if(!args[1]) return message.channel.send('Skriv in en riktig Minecraft server **Port**');
    
            util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
                console.log(response);
                const embed = new Discord.MessageEmbed()
                .setColor('#61371F')
                .setAuthor('­Online status', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*nZ9VwHTLxAfNCuCjYAkajg.png&f=1&nofb=1')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version},
                )
                .setFooter('MC server util by AYM');
    
                message.channel.send(embed);
            })
            .catch ((error) =>{
                message.channel.send('Server is offline.');
                throw error;
            })
        }
        
        if(cmd === 'minecraft'){
            message.channel.send('*Steve is calling you...*');
        }
    }
}