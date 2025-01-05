require('dotenv').config()
const jwt = require('jsonwebtoken')
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
app.get('/verify', (req,res)=>
{
    const auth = req.headers['authorization'];
    if(!auth)
    {
        return res.status(403).json({
            message: "Unauthorized, jwt token is require"

        })
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        console.log(decoded)
        if(decoded)
        {
          return res.status(204).json({
            message: "verify done",
            success: true
          })
        }

        if(!decoded)
          {
            return res.status(403).json({
              message: "not valid",
              success: false
            })
          }
        
        
    } catch (error) {
        return res.status(403).json({
            message: error,
            success: false
        });
    }
})

// app.use("/api/v1",aaosdfj)

app.listen(port,()=>{
  console.log(`server is running on : ${port}`)
})// 