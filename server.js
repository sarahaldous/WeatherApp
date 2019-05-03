const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000
const path = require("path")


// Middlewares that fire on every request
app.use(express.json()) //Parses objects - req.body
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

//DB Connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/packingDB", {useNewUrlParser: true}, () => {
    console.log("[@] Connected to the DB")
})

//Routes
app.use("/auth", require('./routes/authRoutes.js'))
app.use("/api", expressJwt({secret:process.env.SECRET}))
app.use("/api/weather", require('./routes/locationRouter.js'))
app.use("/api/locations", require('./routes/locationRouter.js'))



//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`[*] Server is running on Port ${PORT}`)
})