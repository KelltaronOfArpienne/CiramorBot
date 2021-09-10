const Discord = require('discord.js');
const Cards = require("../models/cards.js");
const client = new Discord.Client();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kelltaron:kelltaron@ciraclus.tdddv.mongodb.net/EACards", { useFindAndModify: false });
module.exports = {
	name: 'progress',
	description: "Show the progress.",
	usage: '[guild]',
	cooldown: 1,
	async execute(message, args) {

        const sap = message.guild.emojis.cache.find(emoji => emoji.name === "sap");//("782200695394795541");
		const kot = message.guild.emojis.cache.find(emoji => emoji.name === "kot");//("782200695394795541");
		const neh = message.guild.emojis.cache.find(emoji => emoji.name === "neh");//("782200695394795541");
		const noz = message.guild.emojis.cache.find(emoji => emoji.name === "noz");//("782200695394795541");
		const zil = message.guild.emojis.cache.find(emoji => emoji.name === "zil");//("782200695394795541");
		const pir = message.guild.emojis.cache.find(emoji => emoji.name === "pir");//("782200695394795541");
		const nom = message.guild.emojis.cache.find(emoji => emoji.name === "nom");//("782200695394795541");
		const run = message.guild.emojis.cache.find(emoji => emoji.name === "run");//("782200695394795541");
		const tem = message.guild.emojis.cache.find(emoji => emoji.name === "tem");//("782200695394795541");
		const ava = message.guild.emojis.cache.find(emoji => emoji.name === "ava");//("782200695394795541");
		const mer = message.guild.emojis.cache.find(emoji => emoji.name === "mer");//("782200695394795541");
		const win = message.guild.emojis.cache.find(emoji => emoji.name === "win");//("...");
		const sto = message.guild.emojis.cache.find(emoji => emoji.name === "sto");//("...");

        var nozd = 0;
        Cards.findOne({
            guildname: "nozd",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                nozd = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Noz!Dingard Envoys" }).then(counting => {
                message.channel.send(`${noz} = ${counting} of ${nozd}`);
            }); 
        });
        var saph = 0;
        Cards.findOne({
            guildname: "saph",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                saph = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Sap Hearts" }).then(counting => {
                message.channel.send(`${sap} = ${counting} of ${saph}`);
            }); 
        });
        var koto = 0;
        Cards.findOne({
            guildname: "koto",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                koto = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Kotoba" }).then(counting => {
                message.channel.send(`${kot} = ${counting} of ${koto}`);
            });
        });
        var neha = 0;
        Cards.findOne({
            guildname: "neha",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                neha = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Nehantists" }).then(counting => {
                message.channel.send(`${neh} = ${counting} of ${neha}`);
            }); 
        });
        var zilw = 0;
        Cards.findOne({
            guildname: "zilw",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                zilw = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Zil Warriors" }).then(counting => {
                message.channel.send(`${zil} = ${counting} of ${zilw}`);
            }); 
        });
        var noma = 0;
        Cards.findOne({
            guildname: "noma",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                noma = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Desert Nomads" }).then(counting => {
                message.channel.send(`${nom} = ${counting} of ${noma}`);
            }); 
        });
        var pira = 0;
        Cards.findOne({
            guildname: "pira",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                pira = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Pirates" }).then(counting => {
                message.channel.send(`${pir} = ${counting} of ${pira}`);
            }); 
        });
        var runi = 0;
        Cards.findOne({
            guildname: "runi",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                runi = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Runic Legion" }).then(counting => {
                message.channel.send(`${run} = ${counting} of ${runi}`);
            }); 
        });
        var merc = 0;
        Cards.findOne({
            guildname: "merc",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                merc = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Mercenaries" }).then(counting => {
                message.channel.send(`${mer} = ${counting} of ${merc}`);
            }); 
        });
        var ston = 0;
        Cards.findOne({
            guildname: "ston",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                ston = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Stonelinkers" }).then(counting => {
                message.channel.send(`${sto} = ${counting} of ${ston}`);
            }); 
        });
        var aval = 0;
        Cards.findOne({
            guildname: "aval",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                aval = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Avalonians" }).then(counting => {
                message.channel.send(`${ava} = ${counting} of ${aval}`);
            }); 
        });
        var wint = 0;
        Cards.findOne({
            guildname: "wint",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                wint = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Winter Tribes" }).then(counting => {
                message.channel.send(`${win} = ${counting} of ${wint}`);
            }); 
        });
        var temp = 0;
        Cards.findOne({
            guildname: "temp",
        }, (err, guildwanted) => {
            if(err) console.log(err);

            if(guildwanted){
                temp = guildwanted.quantity;
            }
            Cards.countDocuments({ guild: "Tempus" }).then(counting => {
                message.channel.send(`${tem} = ${counting} of ${temp}`);
            }); 
        });
        
        
         
        

        
    }
};