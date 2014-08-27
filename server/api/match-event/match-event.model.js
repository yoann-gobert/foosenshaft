'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MatchEventSchema = new Schema({
    type: String,
    timestamp: Number,
    match: {type: Schema.Types.ObjectId, ref: 'Match'},
    matchtime: Number,
    data: Schema.Types.Mixed,
    active: Boolean
});

module.exports = mongoose.model('MatchEvent', MatchEventSchema);
