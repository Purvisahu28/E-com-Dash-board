const express =require('express');
const path=require('path');
const app = express();

const publicPath=path.join(__dirname,'public');
//console.log(publicPath);
//use expres ka  ek function hain,static function -static content kok load karta hai
app.use(express.static(publicPath));
app.listen(5000);