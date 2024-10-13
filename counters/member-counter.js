module.exports = async (client) =>{
    const guild = client.guilds.cache.get('823179880106819595');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('877816719102591047');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        console.log(`Updated MemberCount = ${memberCount})`);
    }, 5000);
}