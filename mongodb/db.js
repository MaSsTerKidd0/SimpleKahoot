const mongoose = require('mongoose');
const models = require('./models');

const {User,Score,Game,Answer,Question} = models;

mongoose.connect('mongodb://localhost:27017/kahoot');
    
