module.exports = {
    name: 'avatar',
    cooldown: 5,
    permissions: [],
    aliases: ['icon', 'pfp', 'profilepic'],
    description: 'Return a user(s) avatar picture!',
    execute(message, args, cmd, client, Discord) {

        if (!message.mentions.users.size) {
            return message.channel.send(`**Your Avatar ⤵️**\t\tlink: ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `**${user.username}'s Avatar ⤵️**\t\tlink: ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
    }
}