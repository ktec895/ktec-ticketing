const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')

const TicketSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['DJ', 'BROADCAST', 'STREAM', 'OTHER'],
    default: 'DJ',
    required: true,
  },
  status: {
    type: String,
    enum: ['CLOSED', 'OPEN'],
    required: true,
  },
})

TicketSchema.plugin(paginate)

module.exports = mongoose.model('Ticket', TicketSchema)
