const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.get('/users', (req,res)=>
{

    let users = [{
        name : "irfan",
        rollno: "3843",
        class: "BSSE-IV"
    }]

    try {
         res.status(201).json(
            {
                data: users,
                status: "success"
            }
         );
    } catch (error) {
        res.status(401).json(
            {
                data: [],
                status: "error"
            }
        )
        
    }
    

    res.status(201).json(users)
})
// hello



app.listen(port, ()=>
{
    console.log(`Example app listning on port : ${port}`)
})