module.exports = {
    name: 'annoy',
    cooldown: 10,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: 'Mass pings a user',
    execute(message, args, cmd, client, Discord){
        if(message.author.id == '300522248396210176'){message.reply('```Du har överanvänt kommandot Carl :)```')}
        else{
        const member = message.mentions.users.first();
        if(member.id == '458294079852118026'){message.reply('Trodde du på riktigt att det skulle funka?')}
        else{
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            for(let i = 0; i < 2; i++){
                message.channel.send(`${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}\t${memberTarget}`);
            }
        }else{
            message.channel.send('Du måste tagga personen som vi ska irritera.');
        }
    }
}   
}
}