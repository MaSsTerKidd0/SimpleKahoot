const mongoose = require('mongoose');
const models = require('./models');

const {User,Score,Game,Answer,Question} = models;

mongoose.connect('mongodb://localhost:27017/kahoot');
    
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = {
    db,
    models,
};
