module.exports = {
    name: 'clear',
    cooldown: 7,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "Clear messages",
    async execute(message, args, cmd, client, Discord){
            if(!args[0]) return message.reply("Säg hur många meddelanden som ska yeetas då.");
            if(isNaN(args[0])) return message.reply("Är du pantad? Skriv in __antalet__ meddelanden som ska bort.");
        
            if(args[0] > 99) return message.reply("Tror du jag är Thanos eller? Jag kan bara ta bort 100 meddelanden åt gången.");
            if(args[0] < 1) return message.reply("Du kan ju inte be mig ta bort ***" + args + "***  meddelanden!\n                                 Din handikappade kalli anka");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.reply('Successfully deleted ***' + args + '***  messages')
            });
    }
}