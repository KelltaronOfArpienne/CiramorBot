const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'count',
	description: "Count the cards with the filter.",
	usage: '[hero name]',
	cooldown: 1,
	async execute(message, args) {
        var guildname = "";
        if (args[0]=="ava"||args[0]=="sap"||args[0]=="kot"||args[0]=="noz"||args[0]=="neh"||args[0]=="zil"||args[0]=="nom"||args[0]=="mer"||args[0]=="run"||args[0]=="sto"||args[0]=="tem"||args[0]=="win"||args[0]=="pir"){
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
            Cards.countDocuments( { guild: guildname } ).then(counting => {
                message.channel.send("I have "+counting+" "+guildname+" cards.");
            }); 
        }else if(args[0]=="Beast"||args[0]=="Unkrace"||args[0]=="Undead"||args[0]=="Solarian"||args[0]=="Iceelf"||args[0]=="Human"||args[0]=="Homchai"||args[0]=="Guemelite"||args[0]=="Golem"||args[0]=="Eltarite"||args[0]=="Dragon"||args[0]=="Elfine"||args[0]=="Demon"||args[0]=="Dais"){
            var racename = "";
            if(args[0]=="Unkrace"){
                racename = "Unknown Race";
            }else if(args[0]=="Iceelf"){
                racename = "Ice Elf";
            }else{
                racename = args[0];
            }
            Cards.countDocuments( { race: racename } ).then(counting => {
                message.channel.send("I have "+counting+" "+racename+" cards.");
            }); 
        }else if(args[0]=="Bard"||args[0]=="Berserker"||args[0]=="Colossus"||args[0]=="Marauder"||args[0]=="Mage"||args[0]=="Priest"||args[0]=="Warrior"||args[0]=="Unkclass"){
            var classname = "";
            if(args[0]=="Unkclass"){
                classname = "Unknown Class";
            }else{
                classname = args[0];
            }
            Cards.countDocuments( { heroclass: classname } ).then(counting => {
                message.channel.send("I have "+counting+" "+classname+" cards.");
            }); 
        }else{
            Cards.countDocuments({ skills: args[0] }).then(counting => {
                message.channel.send("I have "+counting+" cards with "+args[0]+".");
            }); 
        }
    }
};