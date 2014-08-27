'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MatchSchema = new Schema({
    name: String,
    timestamp: Number,
    players: [{type: Schema.Types.ObjectId, ref: 'User'}],
    score: [Number],
    time: Number
});

module.exports = mongoose.model('Match', MatchSchema);
