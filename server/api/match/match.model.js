'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MatchSchema = new Schema({
    name: String,
    timestamp: Number,
    players: Array,
    score: Array,
    timer: Number,
    data: Array

});

module.exports = mongoose.model('Match', MatchSchema);
