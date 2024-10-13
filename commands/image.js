var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true,
    },
});
module.exports = {
    name: 'image',
    cooldown: 10,
    permissions: [],
    aliases: ['img'],
    description: 'Sends an image from google.',
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Specificera bilden du vill se.');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}