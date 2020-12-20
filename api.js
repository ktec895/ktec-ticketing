const router = require('express').Router()
const Ticket = require('./models/Ticket')
const Update = require('./models/Update')

router.post('/', async (req, res) => {
  try {
    const { summary, description, category } = req.body

    if (!summary || !description || !category)
      throw new Error('Missing required attributes')

    const newTicket = new Ticket({
      summary,
      description,
      category,
      status: 'OPEN',
      timestamp: new Date(),
    })

    await newTicket.save()

    res.status(201).json(newTicket)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
})

router.get('/open', async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 5

    const { docs } = await Ticket.paginate({ status: 'OPEN' }, { page, limit })

    res.status(200).json(docs)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/closed', async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 5

    const { docs } = await Ticket.paginate(
      { status: 'CLOSED' },
      { page, limit }
    )

    res.status(200).json(docs)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const ticket = await Ticket.findById(id)

    res.status(200).json(ticket)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/:id/updates', async (req, res) => {
  try {
    const { id } = req.params

    const docs = await Update.find({ ticketId: id })

    res.status(200).json(docs)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
