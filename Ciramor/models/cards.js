const mongoose = require("mongoose");

const cardsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: String,
    name: String,
    imagelink: String,
    heroclass: String,
    guild: String,
    guild_color: String,
    race: String,
    skills: [String],
    style: String,
    shibi: String,
    rarity: String,
    release: String,
    guildname: String,
    quantity: Number,
    kills: Number,
    killsplayer: String,
    killsproof: String,
    max: Number,
    maxplayer: String,
    maxproof: String,
    total: Number,
    totalplayer: String,
    totalproof: String
    });

module.exports = mongoose.model("EACards", cardsSchema);