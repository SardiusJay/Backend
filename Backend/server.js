const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World from our cool app with starting with Backend!")

})

app.listen(3000)