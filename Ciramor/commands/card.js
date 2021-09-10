const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'card',
	description: "Manage the card.",
	usage: '[function-optional] [hero name] [imagelink-optional]',
	cooldown: 1,
	async execute(message, args) {
		const sayMessage = args.join(' ');

        


        if(args[0]=="add"){

            var fullname = args[1].replace(/@/g," ");
            var guildname = args[2].replace(/@/g," ");
            var releasedate =  args[9].replace(/@/g," ");
            var shibiurl = "https://www.eredan-arena.com/images/HD/shibi/"+args[10]+".png"
            var skillray = args[11].split("#");

            const newcard = new Cards({
                _id: mongoose.Types.ObjectId(),
                fullname: fullname,
                guild: guildname,
                guild_color: "#"+args[3],
                heroclass: args[4],
                imagelink: args[5],
                name: args[6],
                race: args[7],
                rarity: args[8],
                release: releasedate,
                shibi: shibiurl,
                skills: skillray,
                style: args[12]
            });

            newcard.save()
            .then(result => console.log(result))
            .catch(err => console.log(err));

            message.reply(fullname+" Added");
        }else if(args[0]=="update"){
            Cards.findOneAndUpdate({
                name: args[1],
            },{
                imagelink: args[2],
            }).then(item => console.log(item));
            //message.reply("card updated.");
        }else{
            Cards.findOne({
                name: args[0],
            }, (err, cardwanted) => {
                if(err) console.log(err);

                if(cardwanted){
                    message.channel.send(cardwanted.imagelink);
                }
            });
        }
    }
};