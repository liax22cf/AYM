module.exports = {
    name: 'ban',
    cooldown: 10,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "BAN_MEMBERS"],
    description: "This command bans a member",
    execute(message, args, cmd, client, Discord){
        const member = message.mentions.users.first();
        if(member.id == '458294079852118026' || member.id == '869690819769163807') return message.reply('Tror du att du kan banna **𝔸𝕐𝕄**?')
        else{
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.reply("__Målet eliminerat för gott__")
            }else{
                message.channel.send('Du måste tagga personen som ska yeetas.')
            }
        }
    }
}