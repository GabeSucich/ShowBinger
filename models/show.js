var orm = require('../config/orm.js')

var Show = {
    getAllShows: function(cb) {
        orm.getAll('shows', data => cb(data))
    },

    getAllBingedShows: function(cb) {
        orm.getByAttribute("shows", "watched", true, data => cb(data))
    },

    addShow: function(title, seasons, episodes, minutes, runtime, platform, cb) {
        orm.addNew("shows", ['title', 'seasons', 'episodes_per_season', 'minutes_per_episode', 'runtime', 'platform'], [title, seasons, episodes, minutes, runtime, platform], data => cb(data))
    },

    bingeShow: function(id, cb) {
        orm.updateByAttribute('shows', "watched", true, "id", id, data=>cb(data))
    },

    deleteShow: function(id, cb) {
        orm.deleteByAttribute("shows", "id", id, data => cb(data))
    }

}

module.exports = Show
