var express = require('express')

var router = express.Router()

var Show = require('../models/show.js')

router.post('/api/shows/new', (req, res) => {
    var new_show = req.body
    Show.addShow(req.body.title, req.body.seasons, req.body.episodes, req.body.minutes, req.body.runtime, req.body.platform, data => {
        console.log("New show added")
        res.end()
    })
})

router.put('/api/shows/:id', (req, res) => {
    var id = parseInt(req.params.id)
    Show.bingeShow(id, data => {
        console.log("Show binged!")
        res.end()
    })
})



router.delete('/api/shows/:id', (req, res) => {
    var id = parseInt(req.params.id)
    Show.deleteShow(id, data => {
        console.log("Show deleted!")
        res.end()
    })
})

router.get('/api/shows/all', (req, res) => {
    Show.getAllShows(data => res.json(data))
})

router.get('/', (req, res) => {
    Show.getAllShows(data => {
        var totalTime = 0
        for (const show of data) {
            console.log(show)
            if (show.watched) {
                totalTime += show.runtime
            }
        }
        res.render("index", {
            shows: data,
            time: totalTime
        })
    })
})

module.exports = router