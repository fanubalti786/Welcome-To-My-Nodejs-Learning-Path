const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 1000

app.listen(port,()=>
{
    console.log(`Example App listening on port :${port}`)
})

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

app.get('/',(req,res)=>
{
    console.log("server is running")
    try {
        
    } catch (error) {
        res.status(440).json({
            data: [],
            status:"error"

        })
    }
})

app.get('/todos',(req,res)=>
{
    console.log("Get all todos List Through DB")
    try {
        
    } catch (error) {
        res.status(440).json({
            data: [],
            status:"error"

        })
    }
})

app.get('/todos/:id',(req,res)=>
{
    console.log("Get todo according to id through DB")
    try {

    } catch (error) {
        res.status(440).json({
            data: [],
            status:"error"

        })
    }
})


app.post('/todos/create',(req,res)=>
{
    console.log("Creating todos list through DB")
    try {
        
    } catch (error) {
        res.status(402).json({
            data: [],
            status: "error",
            error: error
        })
    }
})



app.patch('/todos/update/:id',(req,res)=>
    {
        console.log("update the previous list of todo through DB")
        try {
            
        } catch (error) {
            res.status(402).json({
                data: [],
                status: "error",
                error: error
            })
        }
    })



    app.delete('/todos/delete/:id',(req,res)=>
        {
            console.log("delete the previous list of todo through DB")
            try {
                
            } catch (error) {
                res.status(402).json({
                    data: [],
                    status: "error",
                    error: error
                })
            }
        })

