const express = require('express')
const app = express()
const port = 9000;

app.listen(port,()=>
{
    console.log(`Example app listening on port : ${port}`)
})

app.get('/users', (req,res)=>
    {

        console.log("Query parameter recieve :", req.query)
    
        let users = [{
            name : req.query.name,
            rollno: req.query.rollno,
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
            
    })



    app.get('/users/:id', (req,res)=>
        {
    
            console.log("dynamic Routing parameter recieve :", req.params)
        
            let users = [{
                name : req.query?.name,
                rollno: req.query?.rollno,
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
                
        })
    