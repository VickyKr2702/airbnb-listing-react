require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan');
const data = require('./data.json')

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))

app.get("/", (req, res)=>{
    res.send('working')
})

app.get("/api/fetchData", (req, res)=>{
    res.json(data)
})

app.get("/api/fetch", )

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))