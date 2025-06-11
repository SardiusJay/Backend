const express = requires("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World from our cool app")

})

app.listen(3000)