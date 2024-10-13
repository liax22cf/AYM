module.exports = {
    name: 'emojilist',
    cooldown: 10,
    permissions: [],
    description: 'Lists all the emojis in the guild',
    execute(message, args, cmd, client, Discord){
        const emojiList = message.guild.emojis.cache.map((e, x) => `${x} = ${e} | ${e.name}`).join("\n");
        message.channel.send(emojiList);
    }
}