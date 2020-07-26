var express = require('express')


var PORT = process.env.PORT || 3000;

app = express()

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

var exphb = require('express-handlebars')

app.engine("handlebars", exphb({
    defaulyLayout: "main",
    helpers: {
        isPlatform(platform, name) {
            if (platform === name) {
                return true
            }
            else if (platform !== "netflix" && platform !== "hulu" && name === "other") {
                return true
            }
            else {
                return false
            }
        }
    }
})
)
app.set("view engine", 'handlebars')

var routes = require("./controllers/showcontroller.js")

app.use(routes)

app.listen(PORT, function() {
    console.log("Server listening on localhost:" + PORT)
})

