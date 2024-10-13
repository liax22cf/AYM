module.exports = {
    name: 'thanosi',
    cooldown: 3,
    permissions: [],
    description: "thanos info",
    execute(message, args, cmd, client, Discord){
         const newEmbed = new Discord.MessageEmbed()
        .setColor('#5516ba')
        .setTitle('thanos')
        .setURL('https://youtu.be/9KopxmpFRkg')
        .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd1%2F38%2F9e%2Fd1389ee7455458cf51e506424a50d8ec.jpg&f=1&nofb=1', 'https://discord.gg/vKwjyVnXK5')
        .setDescription('test')
        .setThumbnail('https://media.istockphoto.com/vectors/onion-icon-vector-sign-and-symbol-isolated-on-white-background-onion-vector-id1000863438?k=20&m=1000863438&s=170667a&w=0&h=lxW9g4kYVO6tgtmxrF5obPydkFt2A3yS3Vk2NQdxhPw=')
        .addFields(
            {name: 'Thanos 1', value: 'Become thanos'},
            {name: 'Thanos 2', value: 'Become aids'},
            {name: 'Thanos 3', value: 'Become kaiser'},
            {name: 'Thanos 4', value: 'Become epic'}
        )
        .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD0mYsFwX0AYn0gg.jpg&f=1&nofb=1')
        .setFooter('Thanos ending yessir');

        message.channel.send(newEmbed);
    }
}