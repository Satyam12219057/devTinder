//i am going to create the server in the expressja
/*
const express=require("express");
const app=express();
//this function is known as the request handler



//this is call directly localhost:port
app.use("/test",(req,res)=>{
res.send("hello from server!");
});
*/

//in this there is the certain change
//this function have the route "/" it mens in the url when '/' is coming it response

/*
//if this is at the top of the server code then in any link if / is there then it respose
//so the order of the router are very important

app.use("/",(req,res)=>{
    res.send("this is the response");
});




app.use("/movie",(req,res)=>{
    res.send("this movie is avilable at the location")
});
app.use("/test",(req,res)=>{
res.send("hello from server! i am going to response it");
});

//another request handler
app.use("/hello",(req,res)=>{
    res.send("hello hello hello");
});

//if i have a request hander like that
app.use("/hello/2",(req,res)=>{
    res.send("i m waiting for response");
});
app.use("/",(req,res)=>{
    res.send("this is the response");
});
app.listen(3000,()=>{
console.log("server is successfully listening on port 3000...");
});

*/

 //can i handle the different api call 
 //here i want to lern about the different protocol
 const express=require("express");
 const app =express();
 //this will onlu handle get call to /user
 app.get("/user",(req,res)=>{
    res.send({firstName:"Satyam",lastName:"singh"})
 });


 //i handle post protocol
 app.post("/user",(req,res)=>{
    res.send("data is successfully posted")
 });

 //if i want to delete the user
 app.delete("/user",(req,res)=>{
    res.send("data is deleted successfully");
 });

 //this call will match all the http method api call to /test

 app.use("/test",(req,res)=>{
    res.send("hello from the server");
 });

 //to start the server
 app.listen(3000,()=>{
    console.log("server is successfully listen on the port 3000!");
 })



