const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routers/AuthRouter')
require('dotenv').config()
require('./Models/db');




const app = express()
const port = process.env.PORT // 5000



app.use(bodyParser.json());
app.use(cors())
app.use('/auth', AuthRouter)

app.listen(port,()=>{
  console.log(`server is running on : ${port}`)
})// 