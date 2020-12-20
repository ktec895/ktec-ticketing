const mongoose = require('mongoose')

const UpdateSchema = new mongoose.Schema({
  ticketId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['IN PROGRESS', 'DONE'],
    required: true,
  },
})

module.exports = mongoose.model('Update', UpdateSchema)
