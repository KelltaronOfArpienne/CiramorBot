const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'filter',
	description: "Show the card with the filter.",
	usage: '[hero name]',
	cooldown: 1,
	async execute(message, args) {
        if (args[0]=="Event"||args[0]=="Basic"||args[0]=="Exclusive"||args[0]=="Evolution"||args[0]=="Survival"){
            
            Cards.find({
                rarity: args[0],
            },{
                fullname:1,
                name:1,
                _id: 0
            }).sort({fullname: 1}).then(filtered => {
                let result = '';
                result += filtered+"";
                
                result = result.replace(/\{ fullname: \'/g,'')
                result = result.replace(/\', name: \'/g,' (')
                result = result.replace(/\' \},/g,')\n')
                result = result.replace(/\' \}/g,')')
                result = result.replace(/\!/g,"\'")

                if(result.length > 0 & result.length < 2000){
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
        }else if (args[0]=="ava"||args[0]=="sap"||args[0]=="kot"||args[0]=="noz"||args[0]=="neh"||args[0]=="zil"||args[0]=="nom"||args[0]=="mer"||args[0]=="run"||args[0]=="sto"||args[0]=="tem"||args[0]=="win"||args[0]=="pir"){
            var guildname = "";
            if(args[0]=="ava"){
                guildname="Avalonians";
            }
            if(args[0]=="sap"){
                guildname="Sap Hearts";
            }
            if(args[0]=="kot"){
                guildname="Kotoba";
            }
            if(args[0]=="noz"){
                guildname="Noz!Dingard Envoys";
            }
            if(args[0]=="neh"){
                guildname="Nehantists";
            }
            if(args[0]=="zil"){
                guildname="Zil Warriors";
            }
            if(args[0]=="nom"){
                guildname="Desert Nomads";
            }
            if(args[0]=="mer"){
                guildname="Mercenaries";
            }
            if(args[0]=="run"){
                guildname="Runic Legion";
            }
            if(args[0]=="sto"){
                guildname="Stonelinkers";
            }
            if(args[0]=="tem"){
                guildname="Tempus";
            }
            if(args[0]=="win"){
                guildname="Winter Tribes";
            }
            if(args[0]=="pir"){
                guildname="Pirates";
            }
            Cards.find({
                guild: guildname,
            },{
                fullname:1,
                name:1,
                _id: 0
            }).sort({fullname: 1}).then(filtered => {
                let result = '';
                result += filtered+"";
                
                result = result.replace(/\{ fullname: \'/g,'')
                result = result.replace(/\', name: \'/g,' (')
                result = result.replace(/\' \},/g,')\n')
                result = result.replace(/\' \}/g,')')
                result = result.replace(/\!/g,"\'")

                if(result.length > 0 & result.length < 2000){
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
        }else if (args[0]=="Beast"||args[0]=="Unkrace"||args[0]=="Undead"||args[0]=="Solarian"||args[0]=="Iceelf"||args[0]=="Human"||args[0]=="Homchai"||args[0]=="Guemelite"||args[0]=="Golem"||args[0]=="Eltarite"||args[0]=="Dragon"||args[0]=="Elfine"||args[0]=="Demon"||args[0]=="Dais"){
            var racename = "";
            if(args[0]=="Unkrace"){
                racename = "Unknown";
            }else if(args[0]=="Iceelf"){
                racename = "Ice Elf";
            }else{
                racename = args[0];
            }
            Cards.find({
                race: racename,
            },{
                fullname:1,
                name:1,
                _id: 0
            }).sort({fullname: 1}).then(filtered => {
                let result = '';
                result += filtered+"";
                
                result = result.replace(/\{ fullname: \'/g,'')
                result = result.replace(/\', name: \'/g,' (')
                result = result.replace(/\' \},/g,')\n')
                result = result.replace(/\' \}/g,')')
                result = result.replace(/\!/g,"\'")

                if(result.length > 0 & result.length < 2000){
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
        }else if (args[0]=="Bard"||args[0]=="Berserker"||args[0]=="Colossus"||args[0]=="Marauder"||args[0]=="Mage"||args[0]=="Priest"||args[0]=="Warrior"||args[0]=="Unkclass"){
            var classname = "";
            if(args[0]=="Unkclass"){
                classname = "Unknown";
            }else{
                classname = args[0];
            }
            Cards.find({
                heroclass: classname,
            },{
                fullname:1,
                name:1,
                _id: 0
            }).sort({fullname: 1}).then(filtered => {
                let result = '';
                result += filtered+"";
                
                result = result.replace(/\{ fullname: \'/g,'')
                result = result.replace(/\', name: \'/g,' (')
                result = result.replace(/\' \},/g,')\n')
                result = result.replace(/\' \}/g,')')
                result = result.replace(/\!/g,"\'")

                if(result.length > 0 & result.length < 2000){
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
        }else{
            Cards.find({
                skills: args[0],
            },{
                fullname:1,
                name:1,
                _id: 0
            }).sort({fullname: 1}).then(filtered => {
                let result = '';
                result += filtered+"";
                
                result = result.replace(/\{ fullname: \'/g,'')
                result = result.replace(/\', name: \'/g,' (')
                result = result.replace(/\' \},/g,')\n')
                result = result.replace(/\' \}/g,')')
                result = result.replace(/\!/g,"\'")

                if(result.length > 0 & result.length < 2000){
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
    }
};