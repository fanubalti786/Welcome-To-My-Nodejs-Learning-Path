require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routers/AuthRouter')
const ProductRouter = require('./Routers/ProductRouter')

require('./Models/db');



const app = express()
const port = process.env.PORT // 5000



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/auth', AuthRouter)
app.use('/product', ProductRouter)

// app.use("/api/v1",aaosdfj)

app.listen(port,()=>{
  console.log(`server is running on : ${port}`)
})// 