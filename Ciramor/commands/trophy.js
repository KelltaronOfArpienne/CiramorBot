const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'trophy',
	description: "Add trophy to the card.",
	usage: '[function-optional] [hero name] [imagelink-optional]',
	cooldown: 1,
	async execute(message, args) {
        

        if(args[0]=="kill"){
            var fullname = args[3].replace(/@/g," ");
            Cards.findOneAndUpdate({
                name: args[1],
            },{
                kills: args[2],
                killsplayer: fullname,
                killsproof: args[4],
            }).then(item => console.log(item));
        }else if(args[0]=="max"){
            var fullname = args[3].replace(/@/g," ");
            Cards.findOneAndUpdate({
                name: args[1],
            },{
                max: args[2],
                maxplayer: fullname,
                maxproof: args[4],
            }).then(item => console.log(item));
        }else if(args[0]=="total"){
            var fullname = args[3].replace(/@/g," ");
            Cards.findOneAndUpdate({
                name: args[1],
            },{
                total: args[2],
                totalplayer: fullname,
                totalproof: args[4],
            }).then(item => console.log(item));
        }else if(args[0]=="proof"){
            if(args[1]=="kill"){
                Cards.findOne({
                    name: args[2],
                }, (err, cardwanted) => {
                    if(err) console.log(err);

                    if(cardwanted){
                        message.channel.send(cardwanted.killsproof);
                    }
                });
            }else if(args[1]=="max"){
                Cards.findOne({
                    name: args[2],
                }, (err, cardwanted) => {
                    if(err) console.log(err);

                    if(cardwanted){
                        message.channel.send(cardwanted.maxproof);
                    }
                });
            }else if(args[1]=="total"){
                Cards.findOne({
                    name: args[2],
                }, (err, cardwanted) => {
                    if(err) console.log(err);

                    if(cardwanted){
                        message.channel.send(cardwanted.totalproof);
                    }
                });
            }
        }else if(args[0]=="list"){
        
            var guildname = "";
            if(args[1]=="ava"){
                guildname="Avalonians";
            }
            if(args[1]=="sap"){
                guildname="Sap Hearts";
            }
            if(args[1]=="kot"){
                guildname="Kotoba";
            }
            if(args[1]=="noz"){
                guildname="Noz!Dingard Envoys";
            }
            if(args[1]=="neh"){
                guildname="Nehantists";
            }
            if(args[1]=="zil"){
                guildname="Zil Warriors";
            }
            if(args[1]=="nom"){
                guildname="Desert Nomads";
            }
            if(args[1]=="mer"){
                guildname="Mercenaries";
            }
            if(args[1]=="run"){
                guildname="Runic Legion";
            }
            if(args[1]=="sto"){
                guildname="Stonelinkers";
            }
            if(args[1]=="tem"){
                guildname="Tempus";
            }
            if(args[1]=="win"){
                guildname="Winter Tribes";
            }
            if(args[1]=="pir"){
                guildname="Pirates";
            }

            if(args[2]=="kills"){
                Cards.find({
                    guild: guildname,
                },{
                    fullname:1,
                    kills:1,
                    _id: 0
                }).sort({fullname: 1}).then(filtered => {
                    let result = '';
                    result += filtered+"";
                    
                    result = result.replace(/\{ fullname: \'/g,'')
                    result = result.replace(/\', kills: /g,' (')
                    result = result.replace(/ \},/g,')\n')
                    result = result.replace(/ \}/g,')')
                    result = result.replace(/\!/g,"\'")
                    result = result.replace(/\'\)/g,'')
    
                    if(result.length < 2000){
                        message.channel.send(result);
                    }else if (result.length >= 2000 & result.length < 4000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                    }else if (result.length >= 4000 & result.length < 6000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        var result3 = result.substring(4000,5000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                        message.channel.send(result3);
                    }
                }); 
            }else if(args[2]=="max"){
                Cards.find({
                    guild: guildname,
                },{
                    fullname:1,
                    max:1,
                    _id: 0
                }).sort({fullname: 1}).then(filtered => {
                    let result = '';
                    result += filtered+"";
                    
                    result = result.replace(/\{ fullname: \'/g,'')
                    result = result.replace(/\', max: /g,' (')
                    result = result.replace(/ \},/g,')\n')
                    result = result.replace(/ \}/g,')')
                    result = result.replace(/\!/g,"\'")
                    result = result.replace(/\'\)/g,'')
    
                    if(result.length < 2000){
                        message.channel.send(result);
                    }else if (result.length >= 2000 & result.length < 4000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                    }else if (result.length >= 4000 & result.length < 6000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        var result3 = result.substring(4000,5000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                        message.channel.send(result3);
                    }
                }); 
            }else if(args[2]=="total"){
                Cards.find({
                    guild: guildname,
                },{
                    fullname:1,
                    total:1,
                    _id: 0
                }).sort({fullname: 1}).then(filtered => {
                    let result = '';
                    result += filtered+"";
                    
                    result = result.replace(/\{ fullname: \'/g,'')
                    result = result.replace(/\', total: /g,' (')
                    result = result.replace(/ \},/g,')\n')
                    result = result.replace(/ \}/g,')')
                    result = result.replace(/\!/g,"\'")
                    result = result.replace(/\'\)/g,'')
    
                    if(result.length < 2000){
                        message.channel.send(result);
                    }else if (result.length >= 2000 & result.length < 4000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                    }else if (result.length >= 4000 & result.length < 6000){
                        var result1 = result.substring(0,2000);
                        var result2 = result.substring(2000,4000);
                        var result3 = result.substring(4000,5000);
                        message.channel.send(result1);
                        message.channel.send(result2);
                        message.channel.send(result3);
                    }
                }); 
            }
        }else{
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
                        { name: 'Kills', value: cardwanted.kills, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Player', value: cardwanted.killsplayer, inline: true },
                        { name: 'Damage Record', value: cardwanted.max, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Player', value: cardwanted.maxplayer, inline: true },
                        { name: 'Total Damage', value: cardwanted.total, inline: true },
                        { name: '\u200B', value: '\u200B', inline: true },
                        { name: 'Player', value: cardwanted.totalplayer, inline: true },
                    )
                    message.channel.send(cardembed);
                }
            });
        }
        //?trophy [kill/max/total] [number] [player] [imagelink]
        //?trophy [list] [guild] [player] [kills/max/total]
    }
};