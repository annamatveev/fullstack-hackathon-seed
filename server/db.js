const { MongoClient } = require('mongodb');

const state = {
  db: null,
};

exports.connect = function(url, done) {
  if (state.db) return done();

  MongoClient.connect(url, function(err, client) {
    if (err) return done(err);
    state.db = client.db();
    done();
  });
};

exports.get = function(collection) {
  return state.db.collection(collection);
};

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
