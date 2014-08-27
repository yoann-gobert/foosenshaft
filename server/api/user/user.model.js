'use strict';

var mongoose = require('mongoose'),
crypto = require('crypto'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    active: Boolean
});

UserSchema.virtual('md5').get(function () {
    return crypto.createHash('md5').update(this.email).digest("hex");
});
UserSchema.virtual('name.full').get(function () {
    return this.name.first + ' ' + this.name.last;
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
