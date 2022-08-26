const express = require('express')
const router = express.Router()
const cors = require('cors')
const Books = require('../models/bookSchema.js')
const { application } = require('express')

//=====>WHAT WE'RE USING
router.use(cors())
router.use(express.json())


//=====>CREATE ROUTE
router.post('/', (req, res) => {
    Books.create(req.body, (err, data) => {
        res.json(data)
    })
})

//=====>READ ROUTE
router.get('/', (req, res) => {
    Books.find({}, (err, data) => {
        res.json(data)
    })
})

//=====>UPDATE ROUTE
router.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.json(data)
    })
})

//=====>DELETE ROUTE
router.delete('/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, data) => {
        res.json(data)
    })
})

//=====>Exporting

module.exports = router
