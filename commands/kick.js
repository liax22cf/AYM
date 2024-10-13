module.exports = {
    name: 'kick',
    cooldown: 10,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "KICK_MEMBERS"],
    description: "This command kicks a member",
    execute(message, args, client, Discord){
        const member = message.mentions.users.first();
        if(member.id == '458294079852118026' || member.id == '869690819769163807'){message.reply('Tror du att du kan kicka **𝔸𝕐𝕄**?')}
        else{
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.reply("__Målet eliminerat__")
            }else{
                message.channel.send('Du måste tagga personen som ska yeetas.')
            }
        }
    }
}