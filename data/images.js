const Discord = require('discord.js');
const axios = require('axios');

class Anime {
    constructor(options) {

        if (!options.embedFooter) throw new TypeError('Missing argument embedFooter')
        if (typeof options.embedFooter !== 'string') throw new TypeError('embedFooter must be a string')

        if (!options.embedTitle) throw new TypeError('Missing argument embedTitle')
        if (typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be a string')

        if (!options.embedColor) throw new TypeError('Missing argument embedColor')
        if (typeof options.embedColor !== 'string') throw new TypeError('embedColor must be a string')
        if (!options.message) throw new TypeError('Missing argument: message')

        this.message = options.message;
        this.embedFooter = options.embedFooter
        this.embedTitle = options.embedTitle
        this.embedColor = options.embedColor
    }
    //Random Cuddle
    async cuddle() {


        const url = 'https://api.waifu.pics/sfw/cuddle';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random hug
    async hug() {


        const url = 'https://api.waifu.pics/sfw/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random Kiss
    async kiss() {


        const url = 'https://api.waifu.pics/sfw/kiss';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random Smile
    async smile() {


        const url = 'https://api.waifu.pics/sfw/smile';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random lick
    async lick() {


        const url = 'https://api.waifu.pics/sfw/lick';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random wave
    async wave() {


        const url = 'https://api.waifu.pics/sfw/wave';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random handhold
    async handhold() {


        const url = 'https://api.waifu.pics/sfw/handhold';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random wink
    async wink() {


        const url = 'https://api.waifu.pics/sfw/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }
    //Random poke
    async poke() {


        const url = 'https://api.waifu.pics/sfw/poke';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Dance
    async dance() {


        const url = 'https://api.waifu.pics/sfw/dance';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Cringe
    async cringe() {


        const url = 'https://api.waifu.pics/sfw/cringe';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Kill
    async kill() {


        const url = 'https://api.waifu.pics/sfw/kill';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Slap
    async slap() {


        const url = 'https://api.waifu.pics/sfw/slap';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random bite
    async bite() {


        const url = 'https://api.waifu.pics/sfw/bite';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Highfive
    async highfive() {


        const url = 'https://api.waifu.pics/sfw/highfive';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Blush
    async blush() {


        const url = 'https://api.waifu.pics/sfw/blush';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random pat
    async pat() {


        const url = 'https://api.waifu.pics/sfw/pat';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random smug
    async smug() {


        const url = 'https://api.waifu.pics/sfw/smug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random bonk
    async bonk() {


        const url = 'https://api.waifu.pics/sfw/bonk';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Cry
    async cry() {


        const url = 'https://api.waifu.pics/sfw/cry';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Bully
    async bully() {


        const url = 'https://api.waifu.pics/sfw/bully';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Yeet
    async yeet() {


        const url = 'https://api.waifu.pics/sfw/yeet';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Happy
    async happy() {


        const url = 'https://api.waifu.pics/sfw/happy';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

    //Random Kick
    async kick() {


        const url = 'https://api.waifu.pics/sfw/kick';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send({ embeds: [embed] })
    }

}
module.exports = Anime;