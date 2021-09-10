const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'addone',
	description: "Show the progress.",
	usage: '[guild]',
	cooldown: 1,
	async execute(message, args) {
        Cards.findOneAndUpdate({
            guildname: args[0]
        },{
            $inc : { quantity: 1 }
        }).then(item => console.log(item));
    }
};