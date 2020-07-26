var mysql = require("mysql")

// FOR LOCAL TESTING

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "netflix_db"
// })

var MYSQL_URL = process.env.JAWSDB_URL || "mysql://root:password@localhost3306/netflix_db"

var connection = mysql.createConnection(MYSQL_URL)


connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

module.exports = connection;