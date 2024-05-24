//npm install ejs
const express=require('express');
const path=require('path');
const app = express();
const publicPath=path.join(__dirname,'public');
app.set('view engine','ejs');
//views folder require for template engine we need views folder
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(req,resp)=>{
    // resp.render('profile');
    const user={
        name:'purvi sahu',
        email:'purvisahu28@gmail.com',
        mobile:'8871632618',
        country:'India',
        skills:['php','js','c++','node']
    };
    resp.render('profile',{user})
});
app.get('/login',(req,resp)=>{
    resp.render('login');
})
app.listen(5000);