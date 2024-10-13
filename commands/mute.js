const ms = require('ms');
module.exports = {
    name: 'mute',
    cooldown: 10,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "MUTE_MEMBERS"],
    description: "Mutes a user for a specified time.",
    execute(message, args, client, Discord){
        const target = message.mentions.users.first();
        if(target.id == '458294079852118026' || target.id == '869690819769163807'){message.reply('Tror du att du kan få **𝔸𝕐𝕄** att hålla käften? think again')}
        else{
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '💲 Fans');
                let muteRole = message.guild.roles.cache.find(role => role.name === '💲 Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]){
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> Är nu tyst.`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> Håller numera käften i ${ms(ms(args[1]))}`);

                setTimeout(function(){
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            }else{
                message.channel.send('Råttan kan inte bli muted.');
            }
        }
    }
}