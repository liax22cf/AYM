module.exports = {
    name: 'status',
    cooldown: 20,
    permissions: ["ADMINISTRATOR"],
    description: 'Changes the bot`s activity status',
    execute(message, args, cmd, client, Discord){
        if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`AxelYourMan (AYM)\``);
        else{
if (args[0] === "playing"){
    types = 0
} else if (args[0] === "streaming") {
    types = 1
} else if (args[0] === "listening") {
    types = 2
} else if (args[0] === "watching") {
    types = 3
} else if (args[0] === "competing") {
    types = 5
} else if (args[0] === "reset") {

    return message.channel.send('Status changed succesfully')

} else {
    return message.channel.send('Invalid activity type.')
}
    args.shift()
    content = args.join(' ')
    client.user.setPresence({
        activity: {
            name: content,
            type: types
        }
    })
    message.channel.send('Status changed succesfully')
        

        }
    }
}