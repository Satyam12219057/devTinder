
//detailed about the route handlers
const express=require("express");
const app=express()
/*

app.use("/user",(req,res)=>{
   console.log("router is ready ro response");
   res.send("handling the route user");
},(req,res)=>{
  console.log("route is ready  to handle response2");
  res.send("response2");
});
*/

//now if we ahve two request handels in the in the same
//as a developer we should never follow this pattern

app.use("/user",[(req,res,next)=>{
   console.log("handling the route user1!!");
   next();
   //res.send("response");
   
},(req,res,next)=>{
   console.log("reading response 2");
   //res.send("second response");
   next()
}]
,(req,res,next)=>{
   console.log("reading response 3");
   //res.send("second response3");
   next();
},(req,res,next)=>{
   console.log("reading response 4");
   next(); //beacuse there is no middleware present so the function give resopnse of these
   //res.send("second response 4");
},(req,res,next)=>{
   console.log("reading response 2");
   res.send("second response");
}
);

app.use("/movie",(req,res)=>{
   res.send("this is handle all kind of request");

});

app.use("/colo?r",(req,res)=>{
   res.send("this is handle all kind of request");

});

//we have right to wrapping the routes inside the array is possible
app.listen(3000,()=>{
console.log("server is successfully listening on the port 3000");

});