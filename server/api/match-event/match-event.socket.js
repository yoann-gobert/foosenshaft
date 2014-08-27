/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var MatchEvent = require('./match-event.model');

exports.register = function(socket) {
  MatchEvent.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  MatchEvent.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('match-event:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('match-event:remove', doc);
}