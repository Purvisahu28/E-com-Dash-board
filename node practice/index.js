//import {x} from '.\app'
// const app = require('./app');
// console.log(app.z());
// console.log("subscribe");
// var a='10';
// var b=20;
// let c='10';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a+b+c);
// console.warn(a);
// console.error("woohhh");
// if(a===10)
// {
//     console.log("matched");
// }
// for(i=0;i<=10;i++)
// {
//     console.log(i);
// }
// const arr=[2,3,5,7,3,3];
// console.log(arr[0]);
// filter
// arr.filter((item)=>{
 //console.log(item)

// })
// let result=arr.filter((item)=>{
//     return item>=3
// })
// console.warn(result);
//-----METHOD 1:
const fs=require('fs');//recommendd to use on top but wi work anywhere else too
fs.writeFileSync("hello2.txt","Like And Subscribe");
console.log("-->",__dirname);
console.log("-->",__filename);
const gs=  require('fs').writeFileSync;
gs("xyz.txt","abc");


