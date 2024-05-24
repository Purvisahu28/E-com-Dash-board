// console.log("try code step by step");
// console.log(100+20);
// const http=require('http');
// const data=require('./data');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'content-Type':'applicatio\json'});
// resp.write(JSON.stringify(data));
//resp.write(JSON.stringify({
//     name:'Purvi Sahu',
//     email:'PurviSahu@123.com'
// }));

// resp.end();
// }).listen(5000);

//lec-12
//consoe.log(process);
//console.log(process.argv);
// console.log(process.argv[3]);
//start k 2 index 0 and 1 will come by default vale he baki new input vale

//to create a file:
// module import
// const fs=require('fs');
// const input = process.argv;
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log("invalid input");
// }
//input on line:-node index.js add orange.txt 'this is a color'
//node index.js remove orange
//jo file txxt se banegi vo txt se he remove hogi or jo ni bani hogi txt se vo bina txt k he remove hogi
// const fs= require('fs');
// fs.writeFileSync('apple.txt' ,'this is a apple file');
const fs=require('fs');
const path = require('path');
//const dirPath=path.join(__dirname) ---for current directory
const dirPath= path.join(__dirname,'files');
//console.warn(dirPath);
for(i=0;i<5;i++){
fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
//fs.writeFileSync(`hello${i}.txt`,"a simple text file is created");L
}
fs.readdir(dirPath,(err,files)=>{
    //console.warn(files);   // will give array as output
    files.forEach((item)=>{   
        console.log("file name is :",item);
    })   // ----- they give elemnt as output


}
);
