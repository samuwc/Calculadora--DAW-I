const express = require("express")
const app = express()
var route = require("./routes/route")

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.set("view engine", "ejs")

app.use("/", route)

app.listen("3000", function() {
    console.log("Projeto Funcionando!")
})