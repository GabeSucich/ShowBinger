var mysql = require("mysql")

var MYSQL_URL = process.env.JAWSDB_URL || "mysql://root:password@localhost:3306/netflix_db"

var connection = mysql.createConnection(MYSQL_URL)

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

module.exports = connection;