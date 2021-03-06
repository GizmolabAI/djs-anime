const Discord = require('discord.js');
const axios = require('axios');
class Quote {
    constructor(options) {



        if (!options.embedTitle) throw new TypeError('Missing argument embedTitle')
        if (typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be a string')

        if (!options.embedColor) throw new TypeError('Missing argument embedColor')
        if (typeof options.embedColor !== 'string') throw new TypeError('embedColor must be a string')
        if (!options.message) throw new TypeError('Missing argument: message')

        this.message = options.message;

        this.embedTitle = options.embedTitle
        this.embedColor = options.embedColor
        this.title = options.title

    }

    //Random Quote
    async random() {


        const url = 'https://animechan.vercel.app/api/random';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setDescription(data.quote)
            .setColor(this.embedColor)
            .setFooter(`Anime: ${data.anime} | Character: ${data.character}`)

        await this.message.channel.send({ embeds: [embed] })
    }
    async anime() {

        const url = `https://animechan.vercel.app/api/quotes/anime?title=${this.title}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }
        const index = Math.floor(Math.random() * data.length);
        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setDescription(data[index].quote)
            .setFooter(`Anime: ${data[index].anime} | Character: ${data[index].character}`)

        await this.message.channel.send({ embeds: [embed] })
    }
}
module.exports = Quote;