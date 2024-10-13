const discord = require('discord.js')

module.exports = {
    name: 'nickall',
    cooldown: 20,
    permissions: ["ADMINISTRATOR"],
    description: "Adds specified nickname after username",
    async execute(message, args, client, Discord, prefix){
        if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`AxelYourMan (AYM)\``);
        else{
        let nickname = args.join(" ")
        if(!nickname) return message.reply("Specify a nickname")
        if(nickname === "reset"){
            message.guild.members.cache.filter(u => u.user.id !== '458294079852118026').forEach(r=>r.setNickname(r.user.username))
        }else{

        message.guild.members.cache.filter(u => u.user.id !== '458294079852118026').forEach(r=>r.setNickname(r.user.username + nickname))


        const embed = new discord.MessageEmbed()
        .setColor('#0x37ff00')
        .setTitle("Complete")
        .setDescription(`Added nickname **${nickname}** to every user on your server. `)
        message.channel.send(embed)
            }
        }
    }
}