const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'earrape',
    cooldown: 15,
    permissions: ["ADMINISTRATOR", "MUTE_MEMBERS", "PRIORITY_SPEAKER"],
    description: 'The bot joins a vc and fucking rapes your ears.',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;
            if(!voiceChannel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
            const persmissions = voiceChannel.permissionsFor(message.client.user);
            if(!persmissions.has('CONNECT')) return message.channel.send('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```');
            if(!persmissions.has('SPEAK')) return message.channel.send('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```');
            if(!args.length) return message.channel.send('Du måste ju säga vad jag ska spela upp fucking klappträ.');

            const validURL = (str) =>{
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(!regex.test(str)){
                    return false;
                } else {
                    return true;
                }
            }

            if(validURL(args[0])){
                const connection = await voiceChannel.join();
                const stream = ytdl(args[0], {filter: 'audioonly'});

                connection.play(stream, {seek: 0, volume: 50})
                .on('finish', () =>{
                    voiceChannel.leave();
                    message.channel.send('Jag drar nu :smiling_face_with_tear:')
                });

                await message.reply(`:boom: BOOM, du lyssnar nu på: ***${video.title}***`)

                return
            }    

            const connection = await voiceChannel.join();

            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            }

            const video = await videoFinder(args.join(' '));

            if(video){
                const stream = ytdl(video.url, {filter: 'audioonly'});
                connection.play(stream, {seek: 0, volume: 50})
                .on('finish', () =>{
                voiceChannel.leave();
                });

                await message.reply(`:loudspeaker: FACK, dina öron blöder nu till: ***${video.title}***`)
            }
            else{
                message.channel.send('Det du söker FINNS INTE');
                message.reply('Din outbildade chimpans.');
            }
    }
}