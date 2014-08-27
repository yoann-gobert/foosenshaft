'use strict';

var _ = require('lodash');
var MatchEvent = require('./match-event.model');

// Get list of matchEvents
exports.index = function(req, res) {
    MatchEvent.find(function (err, matchEvents) {
        if(err) {
            return handleError(res, err);
        }
        return res.json(200, matchEvents);
    });
};

// Get a single matchEvent
exports.show = function(req, res) {
    MatchEvent.findById(req.params.id, function (err, matchEvent) {
        if(err) {
            return handleError(res, err);
        }
        if(!matchEvent) {
            return res.send(404);
        }
        return res.json(matchEvent);
    });
};

// Creates a new matchEvent in the DB.
exports.create = function(req, res) {
    MatchEvent.create(req.body, function(err, matchEvent) {
        if(err) {
            return handleError(res, err);
        }
        return res.json(201, matchEvent);
    });
};

// Updates an existing matchEvent in the DB.
exports.update = function(req, res) {
    if(req.body._id) {
        delete req.body._id;
    }
    MatchEvent.findById(req.params.id, function (err, matchEvent) {
        if(err) {
            return handleError(res, err);
        }
        if(!matchEvent) {
            return res.send(404);
        }
        var updated = _.merge(matchEvent, req.body);
        updated.save(function (err) {
            if(err) {
                return handleError(res, err);
            }
            return res.json(200, matchEvent);
        });
    });
};

// Deletes a matchEvent from the DB.
exports.destroy = function(req, res) {
    MatchEvent.findById(req.params.id, function (err, matchEvent) {
        if(err) {
            return handleError(res, err);
        }
        if(!matchEvent) {
            return res.send(404);
        }
        matchEvent.remove(function(err) {
            if(err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
