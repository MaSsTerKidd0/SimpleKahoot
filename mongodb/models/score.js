const ScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User',  
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Quiz',  
    required: true,
  },
  score: {
    type: Number,
    required: true,  
  },
  date: {
    type: Date,
    default: Date.now,  
  },
});

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;
