const express= require('express');
const app= express();
const reqFilter=require('./middleware');
const route=express.Router();
//middleware
// const reqFilter=(req,resp,next)=>{
// console.log('reqFilter');
//  next(); // if next not use load hota rahega hota rahega
// }
// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age)
//     {
//         resp.send("Please provide age")
//     }
//     else if(req.query.age<18)
//     {
//         resp.send("You are not eligible,you cannot access this page")
//     }

//     else{
//         next();
//     }
   
// }
//app.use(reqFilter); //application malware
//----middle ware user in seperate file name middleware.js see again
route.use(reqFilter);// when app->route vala system ayega
app.get('/',(req,resp)=>{
    resp.send('welcome to home page');
   
})
//jis pr reqFilter will put bs usi pr middle ware will work baki kisi mei bhi nahi
app.get('/user',(req,resp)=>{
    resp.send('welcome to user page')
})
// app.get('/about',reqFilter,(req,resp)=>{
//     resp.send('welcome to about page')
// })
//------ as bht sare mai middleware lagana h then app ko route se replace kr denge
route.get('/about',reqFilter,(req,resp)=>{
        resp.send('welcome to about page')
     });
     route.get('/contact',reqFilter,(req,resp)=>{
        resp.send('welcome to contact page')
     })
// app.get('/contact',reqFilter,(req,resp)=>{
//     resp.send('welcome to contact page')
// })
app.use('/',route); // used when app k jagha route.get is used vrna nahi
app.listen(3000);