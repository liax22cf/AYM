const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();
//queue(message.guild.id, queue_constructor object { voice channel, text channel, connection, song[]});

module.exports = {
    name: 'play',
    cooldown: 5,
    permissions: [],
    aliases: ['skip', 'stop', 'leave', 'join', 'p', 'pause', 'resume'],
    description: 'Music commands',
    async execute(message, args, cmd, client, Discord){
        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```');
        if(!permissions.has('SPEAK')) return message.channel.send('­                     :no_entry_sign: **ERROR** :no_entry_sign: ``` - your permissions are slacking                                                                                              fucking peasant```');

        const server_queue = queue.get(message.guild.id);

        if(cmd === 'play' || cmd === 'p'){
            if(!args.length) return message.channel.send('Du måste ju säga vad jag ska spela upp fucking klappträ.');
            let song = {};

            if(ytdl.validateURL(args[0])){
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {
                //If the vid is not a URL then use keywords to find vid.
                const video_finder = async (query) =>{
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0]: null;
                }

                const video = await video_finder(args.join(' '));
                if(video){
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send('Det du söker FINNS INTE');
                    message.reply('Din outbildade chimpans.');
                }
            }

            if(!server_queue){
            
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch(err){
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else{
                server_queue.songs.push(song);
                return message.channel.send(`⏳- **${song.title}** added to the queue!`);
            }
        }

        else if(cmd === 'skip') skip_song(message, server_queue);
        else if(cmd === 'stop') stop_song(message, server_queue);
        else if(cmd === 'leave') leave_channel(message, server_queue);
        else if(cmd === 'join') join_channel(message, server_queue);
        
        else if(cmd === "pause"){
            if(server_queue.connection.dispatcher.paused) return message.channel.send("Song is already paused!");//Checks if the song is already paused.
            server_queue.connection.dispatcher.pause();//If the song isn't paused this will pause it.
            message.channel.send("Paused the song!");//Sends a message to the channel the command was used in after it pauses.
          }
          
        else if(cmd === "resume"){
            if(!server_queue.connection.dispatcher.paused) return message.channel.send("Song isn't paused!");//Checks if the song isn't paused.
            server_queue.connection.dispatcher.resume();//If the song is paused this will unpause it.
            message.channel.send("Resume the song!");//Sends a message to the channel the command was used in after it unpauses.
          }
    }   
}

const video_player = async (guild, song) =>{
    const song_queue = queue.get(guild.id);

    if(!song){
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }

    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 1 })
    .on('finish', () =>{
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`🎶- Du lyssnar just nu på **${song.title}**`)
}

const skip_song = (message, server_queue) => {
    if(!message.member.voice.channel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
    if(!server_queue){
        return message.channel.send(`Nothing to skip, the queue is empty.`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if(!message.member.voice.channel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}

const leave_channel = async (message, server_queue) => {
    const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
        await voiceChannel.leave();
        await message.channel.send('Jag drar nu :smiling_face_with_tear:');
}

const join_channel = async (message, server_queue) => {
    const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('Du måste sitta i en vc din tomdunk.');
        await voiceChannel.join();
}










/* const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    cooldown: 2,
    aliases: ['p', 'pl'],
    description: 'The bot joins a vc and plays sound from a yt vid.',
    async execute(message, args, client, Discord){
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

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('Jag drar nu :smiling_face_with_tear:')
            });

            await message.reply(`:boom: BOOM, du lyssnar nu på: ***Den inmatade länken :arrow_heading_up:***`)

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
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`:boom: BOOM, du lyssnar nu på: ***${video.title}***`)
        }
        else{
            message.channel.send('Det du söker FINNS INTE');
            message.reply('Din outbildade chimpans.');
        }
    }
} */