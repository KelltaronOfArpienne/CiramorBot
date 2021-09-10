const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'wiki',
	description: "Show the card.",
	usage: '[hero name]',
	cooldown: 1,
	async execute(message, args) {
    Cards.findOne({
            name: args[0],
        }, async (err, cardwanted) => {
            if(err) console.log(err);

            if(cardwanted){
                let cardembed = await new Discord.MessageEmbed()
                .setColor(cardwanted.guild_color)
                .setTitle(cardwanted.fullname.replace(/\!/g,"\'"))
                .setThumbnail(cardwanted.shibi)
                .addFields(
                    { name: 'Guild', value: cardwanted.guild.replace(/\!/g,"\'"), inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Class', value: cardwanted.heroclass, inline: true },
                    { name: 'Race', value: cardwanted.race, inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Style', value: cardwanted.style, inline: true },
                    { name: 'Rarity', value: cardwanted.rarity, inline: true },
                    { name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Release Date', value: cardwanted.release, inline: true },
                )
                message.channel.send(cardembed);
            }
        });
    }
};