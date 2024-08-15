// models/index.js
const User = require('./user');
const Score = require('./score');
const Question = require('./question');
const Game = require('./game');
const Answer = require('./answer');

module.exports = {
  User,
  Score,
  Game,
  Question,
  Answer,
};

