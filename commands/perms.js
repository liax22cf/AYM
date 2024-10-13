module.exports = {
    name: 'perms',
    cooldown: 5,
    permissions: [],
    description: "vilka perms har du?",
    execute(message, args, client, Discord){
        
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

            if(message.member.permissions.has("ADMINISTRATOR")){
            var ADMINISTRATOR = "true";
        }   else{
            var ADMINISTRATOR = "false";

        }   if(message.member.permissions.has("CREATE_INSTANT_INVITE")){
            var CREATE_INSTANT_INVITE = "true";
        }   else{
            var CREATE_INSTANT_INVITE = "false";

        }   if(message.member.permissions.has("KICK_MEMBERS")){
            var KICK_MEMBERS = "true";
        }   else{
            var KICK_MEMBERS = "false";
        }
            if(message.member.permissions.has("BAN_MEMBERS")){
            var BAN_MEMBERS = "true";
        }   else{
            var BAN_MEMBERS = "false";
        }   
            if(message.member.permissions.has("MANAGE_CHANNELS")){
            var MANAGE_CHANNELS = "true";
        }   else{
            var MANAGE_CHANNELS = "false";
        }
        if(message.member.permissions.has("MANAGE_GUILD")){
            var MANAGE_GUILD = "true";
        }   else{
            var MANAGE_GUILD = "false";
        }
        if(message.member.permissions.has("ADD_REACTIONS")){
            var ADD_REACTIONS = "true";
        }   else{
            var ADD_REACTIONS = "false";
        }
        if(message.member.permissions.has("VIEW_AUDIT_LOG")){
            var VIEW_AUDIT_LOG = "true";
        }   else{
            var VIEW_AUDIT_LOG = "false";
        }
        if(message.member.permissions.has("PRIORITY_SPEAKER")){
            var PRIORITY_SPEAKER = "true";
        }   else{
            var PRIORITY_SPEAKER = "false";
        }
        if(message.member.permissions.has("STREAM")){
            var STREAM = "true";
        }   else{
            var STREAM = "false";
        }
        if(message.member.permissions.has("VIEW_CHANNEL")){
            var VIEW_CHANNEL = "true";
        }   else{
            var VIEW_CHANNEL = "false";
        }
        if(message.member.permissions.has("SEND_MESSAGES")){
            var SEND_MESSAGES = "true";
        }   else{
            var SEND_MESSAGES = "false";
        }
        if(message.member.permissions.has("SEND_TTS_MESSAGES")){
            var SEND_TTS_MESSAGES = "true";
        }   else{
            var SEND_TTS_MESSAGES = "false";
        }
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            var MANAGE_MESSAGES = "true";
        }   else{
            var MANAGE_MESSAGES = "false";
        }
        if(message.member.permissions.has("EMBED_LINKS")){
            var EMBED_LINKS = "true";
        }   else{
            var EMBED_LINKS = "false";
        }
        if(message.member.permissions.has("ATTACH_FILES")){
            var ATTACH_FILES = "true";
        }   else{
            var ATTACH_FILES = "false";
        }
        if(message.member.permissions.has("READ_MESSAGE_HISTORY")){
            var READ_MESSAGE_HISTORY = "true";
        }   else{
            var READ_MESSAGE_HISTORY = "false";
        }
        if(message.member.permissions.has("MENTION_EVERYONE")){
            var MENTION_EVERYONE = "true";
        }   else{
            var MENTION_EVERYONE = "false";
        }
        if(message.member.permissions.has("USE_EXTERNAL_EMOJIS")){
            var USE_EXTERNAL_EMOJIS = "true";
        }   else{
            var USE_EXTERNAL_EMOJIS = "false";
        }
        if(message.member.permissions.has("VIEW_GUILD_INSIGHTS")){
            var VIEW_GUILD_INSIGHTS = "true";
        }   else{
            var VIEW_GUILD_INSIGHTS = "false";
        }
        if(message.member.permissions.has("CONNECT")){
            var CONNECT = "true";
        }   else{
            var CONNECT = "false";
        }
        if(message.member.permissions.has("SPEAK")){
            var SPEAK = "true";
        }   else{
            var SPEAK = "false";
        }
        if(message.member.permissions.has("MUTE_MEMBERS")){
            var MUTE_MEMBERS = "true";
        }   else{
            var MUTE_MEMBERS = "false";
        }
        if(message.member.permissions.has("DEAFEN_MEMBERS")){
            var DEAFEN_MEMBERS = "true";
        }   else{
            var DEAFEN_MEMBERS = "false";
        }
        if(message.member.permissions.has("MOVE_MEMBERS")){
            var MOVE_MEMBERS = "true";
        }   else{
            var MOVE_MEMBERS = "false";
        }
        if(message.member.permissions.has("USE_VAD")){
            var USE_VAD = "true";
        }   else{
            var USE_VAD = "false";
        }
        if(message.member.permissions.has("CHANGE_NICKNAME")){
            var CHANGE_NICKNAME = "true";
        }   else{
            var CHANGE_NICKNAME = "false";
        }
        if(message.member.permissions.has("MANAGE_NICKNAMES")){
            var MANAGE_NICKNAMES = "true";
        }   else{
            var MANAGE_NICKNAMES = "false";
        }
        if(message.member.permissions.has("MANAGE_ROLES")){
            var MANAGE_ROLES = "true";
        }   else{
            var MANAGE_ROLES = "false";
        }
        if(message.member.permissions.has("MANAGE_WEBHOOKS")){
            var MANAGE_WEBHOOKS = "true";
        }   else{
            var MANAGE_WEBHOOKS = "false";
        }
        if(message.member.permissions.has("MANAGE_EMOJIS")){
            var MANAGE_EMOJIS = "true";
        }   else{
            var MANAGE_EMOJIS = "false";
        }
        message.channel.send('```Your permissions ▶\n' + '\n⋆ Administrator = ' + ADMINISTRATOR + '\n⋆ Create Instant Invite = ' + CREATE_INSTANT_INVITE + '\n⋆ Kick Members = ' + KICK_MEMBERS + '\n⋆ Ban Members = ' + BAN_MEMBERS + '\n⋆ Manage Channels = ' + MANAGE_CHANNELS + '\n⋆ Manage Guild = ' + MANAGE_GUILD + '\n⋆ Add Reactions = ' + ADD_REACTIONS + '\n⋆ View Audit Log = ' + VIEW_AUDIT_LOG + '\n⋆ Priority Speaker = ' + PRIORITY_SPEAKER + '\n⋆ Stream = ' + STREAM + '\n⋆ View Channel = ' + VIEW_CHANNEL + '\n⋆ Send Messages = ' + SEND_MESSAGES + '\n⋆ Send TTS Messages = ' + SEND_TTS_MESSAGES + '\n⋆ Manage Messages = ' + MANAGE_MESSAGES + '\n⋆ Embed Links = ' + EMBED_LINKS + '\n⋆ Attach Files = ' + ATTACH_FILES + '\n⋆ Read Message History = ' + READ_MESSAGE_HISTORY + '\n⋆ Mention Everyone = ' + MENTION_EVERYONE + '\n⋆ Use External Emojies = ' + USE_EXTERNAL_EMOJIS + '\n⋆ View Guild Insights = ' + VIEW_GUILD_INSIGHTS + '\n⋆ Connect = ' + CONNECT + '\n⋆ Speak = ' + SPEAK + '\n⋆ Mute Members = ' + MUTE_MEMBERS + '\n⋆ Deafen Members = ' + DEAFEN_MEMBERS + '\n⋆ Move Members = ' + MOVE_MEMBERS + '\n⋆ Use VAD = ' + USE_VAD + '\n⋆ Change Nickname = ' + CHANGE_NICKNAME + '\n⋆ Manage Nicknames = ' + MANAGE_NICKNAMES + '\n⋆ Manage Roles = ' + MANAGE_ROLES + ' \n⋆ Manage Webhooks = ' + MANAGE_WEBHOOKS + '\n⋆ Manage Emojies = ' + MANAGE_EMOJIS + '```');
    }
}