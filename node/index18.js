const express=require('express');
const app=express();
app.get('',(req,resp)=>{
    // console.log("data sent by browser =>>>",req.query.name);
    //     resp.send("<h1>Welcome : <h1>"+req.query.name)
    resp.send(`
        <h1>welcome,to home page</h1><a href="/about">Go To About Page</a>
    `)

});//provide routes black mean home page''
//html data
app.get('/about',(req,resp)=>{
    resp.send(`hello,this is about page
     <input type="text" placeholder="user name" value="${req.query.name}"/> 
     <button>Click</button>`)
     //back ticks use krke bht sari lies ka code likh sakte  hhtml ka propely


});
//json data
app.get('/help',(req,resp)=>{
    // resp.send({
    //     name:'purvi',
    //     email:"sahupurvi123@.com"
resp.send([

    {
        name:'purvi',
        email:"sahupurvi123@.com"
    },
    {
        name:'priya',
        email:"sahupriya111@.com"
    }
    
])
    });



app.listen(3000);