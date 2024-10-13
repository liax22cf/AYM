module.exports = {
    name: 'unmute',
    cooldown: 10,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "MUTE_MEMBERS"],
    description: "This command unmutes a user.",
    execute(message, args, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '💲 Fans');
            let muteRole = message.guild.roles.cache.find(role => role.name === '💲 Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Har nu yttrandefrihet.`)
        }else{
            message.channel.send('Personen kan inte bli unmuted.');
        }
    }
}