//i am going to create the server in the expressja

const express=require("express");
const app=express();
//this function is known as the request handler


/*
//this is call directly localhost:port
app.use("/test",(req,res)=>{
res.send("hello from server!");
});
*/

//in this there is the certain change
app.use("/movie",(res,res)=>{
    res.send("this movie is avilable at the location")
});
app.use("/test",(req,res)=>{
res.send("hello from server! i am going to response it");
});

//another request handler
app.use("/hello",(res,req)=>{
    res.send("hello hello hello");
})
app.listen(3000,()=>{
console.log("server is successfully listening on port 3000...");
});



