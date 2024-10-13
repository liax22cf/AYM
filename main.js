const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: [], partials: ["MESSAGE", "CHANNEL", "REACTION"]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', async() => {
    client.user.setActivity('AYM', {type: 'LISTENING'});
})


/* client.on('guildMemberAdd', async (guildMember, member) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '💲 Gäst');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('900103964916334706').send(`Välkommen <@${guildMember.user.id}>! Här luktar det lök. :onion:`);

    await client.channels.cache.get('877816719102591047').setName(`Tot: ${member.guild.memberCount}`)
    await client.channels.cache.get('917892633173573642').setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    await client.channels.cache.get('917892653654364220').setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)

});

client.on('guildMemberRemove', async (member) => {
    await client.channels.cache.get('877816719102591047').setName(`Tot: ${member.guild.memberCount}`)
    await client.channels.cache.get('917892633173573642').setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`)
    await client.channels.cache.get('917892653654364220').setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`)
}); */

client.login(process.env.DISCORD_TOKEN);