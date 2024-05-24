const express=require('express');
const path=require('path');
const app= express();
const publicPath=path.join(__dirname,'public');
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});
app.get('/aboutme',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`);
});
//* for all the page and keywowrds which are not defined
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404error.html`);
});
app.listen(5500);