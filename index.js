const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())      // WAJIB
app.use(express.urlencoded({ extended: true })) // optional tapi bagus

const userRoute = require("./routes/user.route")
const diskonRoute = require("./routes/diskon.route")

app.use("/user", userRoute)
app.use("/diskon", diskonRoute)

app.listen(8000, () => {
    console.log("Server jalan")
})