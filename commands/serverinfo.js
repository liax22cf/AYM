module.exports = {
    name: 'serverinfo',
    cooldown: 5,
    permissions: [],
    description: 'Asks a question and let the bot determine your fate :sparkler:',
    async execute(message, args, cmd, client, Discord) {
        let embed = new Discord.MessageEmbed()
            .setColor("#810d8f")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`**${message.guild}**'s information`)
            .addField("Owner", `The owner of this server is **${message.guild.owner}**`)
            .addField("Member Count", `This server has **${message.guild.memberCount}** members`)
            .addField("Emoji Count", `This server has **${message.guild.emojis.cache.size}** emojis`)
            .addField("Roles Count", `This server has **${message.guild.roles.cache.size}** roles`)
            

        message.channel.send(embed)
    }
}