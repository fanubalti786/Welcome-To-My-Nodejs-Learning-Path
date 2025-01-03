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



// 1. QUERY PARAMETER 

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



        
    // 2. ROUTING PARAMETER

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


        // 3. BODY PARAMETER

        app.get('/users/body', (req,res)=>
            {
        
                console.log("Body parameter recieve :", req.body)
            
                let users = [{
                    name : req.body.name,
                    rollno: req.body.email,
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

    

            // 4. HEADERS PARAMETER

            app.get('/users/headers', (req,res)=>
                {
            
                    console.log("Body parameter recieve :", req.headers)
                
                    let users = [{
                        auth : req.headers.authorization,
                        connection: req.headers.connection,
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


                // 5. COOKIE-PARSAR
                // 6. SOKETIO
                // 7. GRAPHQL
                // 8. SERVER ENVENT

