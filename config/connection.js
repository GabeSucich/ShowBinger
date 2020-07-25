var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "netflix_db"
})

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

module.exports = connection;