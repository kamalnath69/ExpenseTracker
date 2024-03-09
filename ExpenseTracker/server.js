// const http=require('http')
// const fs = require('fs')
// http.createServer(function(request,response){
//      response.writeHead(200,{
//          'Content-type':'text/plain'
//      })
//      const file =fs.readFileSync("./index.html")
//      response.write(file)
//      response.end()
//  }).listen(4000,function(){
//      console.log("port 4000 is loading")
//  })

// const express =require('express')
// const bodyParser = require('body-parser')
// const { default: mongoose } = require('mongoose')
// const app= express()
// app.use(bodyParser.json())
// app.get('/',function(request,response){
//     response.send("welcome")
// })
// app.get('/java',function(request,response){
//     response.status(200).json({
//         "about":"java"
//     })
// })
// app.post('/validate-user',function(request,response){

//     if(request.body.username=="abcd" && request.body.password=="1234"){
//     response.status(200).json({
//         "status":"valid user"
//     })}
//     else{
//         response.status(200).json({
//             "status":"invalid user"
//         })
//     }
// })
// app.listen(4000,function(){
//     console.log('listening on port 4000..')
// })

//forage,ms future skills program,ats friendly,over leaf(resume)

const express=require("express")
const bp=require("body-parser")
const cors=require("cors")
const {Expense} =require("./schema.js")
const mongoose=require("mongoose")
const app=express()
app.use(bp.json())
app.use(cors())

async function connection(){
    try{
    await mongoose.connect("mongodb+srv://yuvaraj:yuvaraj123@mohanmavan.qi78uk0.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=mohanmavan")
    const port=process.env.PORT || 4000
    app.listen(port,function(){
        console.log(`Listening on port ${port}`)
    })
    console.log("DB connected successfully")
    }
    catch(e){
    console.log("Error shfidd"+e)
    }
}
connection()
app.post("/add-expense",async function(request,response){
    console.log(request.body)
    try{
        await Expense.create({
        "amount":request.body.amount,
        "category":request.body.category,
        "date":request.body.date
    })
    response.status(201).json({
        "status":"success",
        "message":"entry created"
    })}
    catch(e){
        response.status(500).json({
            "status":"success",
            "message":"entry created"
    })
}
})
app.get("/get-expense",async function(request,response){
    const expensesData =await Expense.find()
    response.status(200).json(expensesData)
    console.log("Got successfully")
})
app.delete("/delete-expense/:xyz",async function(request,response){
    try{
        console.log(request.params)
        const expEntry = await Expense.findById(request.params.xyz)
        
        if(expEntry){
            await Expense.findByIdAndDelete(request.params.xyz)
            response.status(200).json({
                "status":"success",
                "message":"entry deleted successfully"
            })
        }
        else{
            console.log("Failed to delete")
            response.status(404).json({
                "status":"failure",
                "message":"could not find an entry"
            })
        }
    }
    catch(e){
        console.log("Failed to delete due to some err")
        response.status(404).json({
            "status":"failure",
            "message":"entry not deleted"
    })
    }
})

app.patch("/update-expense/:xyz",async function(request,response){
    try{
        console.log(request.params)
        const expEntry = await Expense.findById(request.params.xyz)
        
        if(expEntry){
            await expEntry.updateOne({
                "amount":request.body.amount,
                "category":request.body.category,
                "date":request.body.date
            })
            response.status(200).json({
                "status":"success",
                "message":"entry updated successfully"
            })
        }
        else{
            console.log("Failed to delete")
            response.status(404).json({
                "status":"failure",
                "message":"could not find an entry"
            })
        }
    }
    catch(e){
        console.log("Failed to update due to some err")
        response.status(404).json({
            "status":"failure",
            "message":"entry not updated"
    })
    }
})
