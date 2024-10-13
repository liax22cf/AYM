const { User } = require("discord.js")

module.exports = {
    name: 'test',
    permissions: ["ADMINISTRATOR"],
    description: "testing testing 1 2 1 2",
    execute(message, args, client, Discord){
        message.user.send("test completed");
    }
}