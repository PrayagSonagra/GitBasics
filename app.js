require("dotenv").config()
const express = require("express");

const app = express();

app.use(express.json());

app.use("/api", require("./Routers/routers"))

app.use((req ,res )=>{
    res.send("<h2>$)$kgds</h2>")
})

app.listen(process.env.PORT, ()=>{
console.log(`server is running at http://${process.env.HOST}:${process.env.PORT}`)
})