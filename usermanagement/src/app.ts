import express from 'express';
import databaseconnect from 'databaseconnect';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(3000,async()=>{
    databaseconnect.connect();
console.log("server started on the port 3000")
})