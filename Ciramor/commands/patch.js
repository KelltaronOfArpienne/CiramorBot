const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'patch',
	description: "Patch the card.",
	usage: '[function-optional] [hero name] [imagelink-optional]',
	cooldown: 1,
	async execute(message, args) {
		const sayMessage = args.join(' ');

        var skillray = args[5].split("#");
        var fullname = args[1].replace(/@/g," ");

        Cards.findOneAndUpdate({
            name: args[0],
        },{
            fullname: fullname,
            imagelink: args[2],
            heroclass: args[3],
            race: args[4],
            skills: skillray,
            style: args[6],
            name: args[7],
        }).then(item => console.log(item));
        //?patch [short] [fullname] [imagelink] [class] [race] [skill-List] [style] [short2]
    }
};