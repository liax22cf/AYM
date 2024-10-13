const { Discord } = require("discord.js")
const { drawCard, Gradient } = require('discord-welcome-card')

module.exports = {
    name: 'imgtest',
    permissions: ["ADMINISTRATOR"],
    description: "testar lite",
    async execute(message, args, cmd, client, Discord){

        const image = await drawCard({
            text: {
                title: '\t     ­Välkommen!',
                 text: `\t${message.member.user.tag}`,
                subtitle: `\n    ­Antal medlemmar: ${message.member.guild.memberCount}`,
                /* color: "#800000", */
                color:  new Gradient("linear", {
                     color: "#000000",
                    offset: 0
                    }, {
                    color: "#8067f5",
                     offset: 100
                     })
            },
            avatar: {
                image: message.member.user.avatarURL({ format: 'png' })
            },
            /* background: "./image.png", */
            blur: true,
            border: true,
            rounded: true
        })
    /* message.channel.send(`<@${guildMember.user.id}>\t\t${guildMember.user.tag}`) */
    message.channel.send(new Discord.MessageAttachment(image, 'custom.png'))
    }
}