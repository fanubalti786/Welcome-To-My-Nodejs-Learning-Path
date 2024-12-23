const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.get('/users', (req,res)=>
{
    let users = {
        name : "irfan",
        rollno: "3843",
        class: "BSSE-IV"
    }

    res.json(users)
})




app.listen(port, ()=>
{
    console.log(`Example app listning on port : ${port}`)
})