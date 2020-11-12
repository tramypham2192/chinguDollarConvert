const express = require("express")
const app = express()
const bodyParser = require("body-parser")

let centConvert = 0

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {hienThiCent: centConvert})
})

app.post("/", (req, res) => {
    const dollar = req.body.dollar
    centConvert = dollar*100
    res.redirect("/")
})

app.listen(10000, () => {
    console.log("server is running on port 10000")
})