import express from 'express';

const app = express();


app.get("",(req,res) =>{
    res.send("Backend is working")
})

app.listen(4000,() =>{
    console.log("server is running")
})