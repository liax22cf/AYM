module.exports = {
    name: 'youtube',
    cooldown: 2,
    permissions: [],
    aliases: ['yt'],
    description: "Sends AxelYourMan youtube link",
    execute(message, args, client, Discord){
        message.channel.send('https://www.youtube.com/channel/UC0M5URj4VT259qQFBghMMAw');
    }
}