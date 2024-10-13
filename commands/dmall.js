const { MessageEmbed }= require('discord.js');

module.exports = {
    name : 'dmall',
	cooldown: 20,
    permissions: [],
    description : 'dma all users',
    execute(message, args, cmd, client, Discord) {
		if(message.author.id !== '458294079852118026') message.reply('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```'), message.channel.send(`Specifically:  \`AxelYourMan (AYM)\``);
        else{
		function sleep(ms){
			
				return new Promise(resolve => setTimeout(resolve, ms));
			
		}

        async function dm(){
			
			var dmGuild = message.guild;
			var memberArray = dmGuild.members.cache.array();
			var memberCount = memberArray.length;
			var botCount = 0;
			var successCount = 0;
			
			console.log(`[+] Now sending a message to all ${memberCount} members of ${dmGuild.name}.\n\n`);
			
			for(var i = 0; i < memberCount; i++){
				
				var member = memberArray[i];
                const inviteEmbed = new Discord.MessageEmbed()
                .setColor('#0x37ff00')
                .setTitle('✦ Ｌöｋｌｉｇａｎ ✦')
                .setURL('https://discord.gg/6wJWT6jP4r')
                .setAuthor('by AxelYourMan', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthanos.app%2Fthanos.png&f=1&nofb=1', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setDescription('Ｄｉｓｃｏｒｄ ­  ­ ­Ｉｎｖｉｔｅ  🧅')
                .setThumbnail('https://i.imgur.com/f7XOoRL.png')
                .addFields(
                    {name: '­', value: '­', inline: false},
                    {name: 'Du har blivit utvald att komma med i denna discord server.', value: 'Joina via länken nedan :)', inline: false}
                )
                .setFooter('mvh ✦ Ｌöｋｌｉｇａｎ ✦', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F56091%2Fonion-emoji-clipart-md.png&f=1&nofb=1')
				
                if(member.user.bot){
					
					console.log(`[-] Skipping bot with name ${member.user.username}.\n\n`);
					botCount++;
					continue;
					
				}
				
				var timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
				await sleep(timeout);
				
				if(i == (memberCount - 1)){
					console.log(`[*] Waited ${timeout}ms.\t\\/\tNow DMing ${member.user.username}.\n`);
				}
				else {
					console.log(`[*] Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}.`);
				}
				try{
					member.send(inviteEmbed);
                    member.send("https://discord.gg/6wJWT6jP4r");
                    message.channel.send("Successfully sent dm to one member.")
					successCount++;
				} catch(error){
					console.log("Failed to send DM: " + error);
				}
			}
			console.log(`Succesfully sent ${successCount} messages. ${botCount} bots were skipped.`);
		}
		dm();
    }
}
}