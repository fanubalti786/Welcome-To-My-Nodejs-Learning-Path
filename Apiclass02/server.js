const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 9000;

app.listen(port,()=>
{
    console.log(`Example app listening on port : ${port}`)
})


// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

app.use((req,res,next) => 
{
    console.log('Time:', Date.now());
    console.log('Request', req.method, req.query, req.params)
    // res.json("by default return without any api calling stricktly")
    next()
    
})



// QUERY PARAMETER 

app.get('/users', (req,res)=>
    {

        console.log("Query parameter recieve :", req.query)
    
        let users = [{
            name : req.query.name,
            rollno: req.query.rollno,
            class: "Query"
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
            
    })



        
    // ROUTING PARAMETER

    app.get('/users/:id/:dog', (req,res)=>
        {
    
            console.log("dynamic Routing parameter recieve :", req.params)
        
            let users = [{
                name : req.query?.name,
                rollno: req.query?.rollno,
                class: "Routing"
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
                
        })


        // BODY PARAMETER

        app.get('/users/dog', (req,res)=>
            {
        
                console.log("Body parameter recieve :", req.body)
            
                let users = [{
                    name : req.query?.name,
                    rollno: req.query?.rollno,
                    class: "Body"
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
                    
            })

    

