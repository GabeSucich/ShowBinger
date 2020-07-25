var express = require('express')

var router = express.Router()

var Show = require('../models/show.js')

router.post('/api/show/new', (req, res) => {
    var new_show = req.body
    Show.addNew()
})

module.exports = router