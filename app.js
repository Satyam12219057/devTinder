
const express=require("express");
const app=express();
app.use("/user",(req,res)=>{
   console.log("server sucessfully executed");
   res.send("this is the response");
});
app.listen(3000,()=>{
   console.log("ready");
})