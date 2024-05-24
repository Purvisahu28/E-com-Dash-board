const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'curd');
//curd folder ka proper path de dega
const filePath=`${dirPath}/apple.txt`;
//--to create file:
// fs.writeFileSync(filePath,'This is a simple text file');

//--to read file:
//if utf8 not used we will get buffer as output and not the output wwe want
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })
 
//--to update file:
// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err)
//     console.log('file is updated');
// });

 //-- to rename the file:
//  fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
//  })

//--to dlete file:
// fs.unlinkSync(`${dirPath}/fruit.txt`);