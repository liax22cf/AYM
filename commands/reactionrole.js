module.exports = {
    name: 'reactionrole',
    permissions: ["ADMINISTRATOR"],
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`AxelYourMan (AYM)\``);
        else{
        const channel = '876075671250669619';
        const role1 = message.guild.roles.cache.find(role => role.name === "Jultomten");
        const role2 = message.guild.roles.cache.find(role => role.name === "Trädkramare");
        const role3 = message.guild.roles.cache.find(role => role.name === "Sten");
 
        const emoji1 = '🎅';
        const emoji2 = '🌲';
        const emoji3 = '👵';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#5516ba')
            .setTitle('Välj')
            .setDescription('Du kommer få en ful roll, reagera din mupp.\n\n'
                + `${emoji1} Jultomten\n`
                + `${emoji2} Trädkramare\n`
                + `${emoji3} Sten`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(emoji1);
        messageEmbed.react(emoji2);
        messageEmbed.react(emoji3);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
                if (reaction.emoji.name === emoji3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
                if (reaction.emoji.name === emoji3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
                }
            } else {
                return;
            }
        }); 
        
        
        }
    }
 
}   