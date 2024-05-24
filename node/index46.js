const express=require("express");
const EventEmitter=require("events");
//EventEmitter is a class that is why we keep its first letter capital
const app=express();
//event : ek function which count all the clicks
const event=new EventEmitter();
let count=0;
//jitni bhi api call hogi na vo count increse ho jayegi
event.on("countAPI",()=>{
    count++;
    console.log("event called",count)
})
app.get("/",(req,resp)=>{
    resp.send("api called")
    event.emit("countAPI");//call event ....upr handle event hai
});
app.get("/search",(req,resp)=>{
    resp.send("search api called");
    event.emit("countAPI");
});
app.get("/update",(req,resp)=>{
    resp.send("update api called");
    event.emit("countAPI");
});
app.listen(5000);

