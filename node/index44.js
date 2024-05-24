const express=require('express');
const multer=require('multer');
const app= express();
const upload = multer({
    storage:multer.diskStorage({
        //cb -call back any other name can also give
        destination:function(req,file,cb)
        {//upload-folder jaha file upload karni h 
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");
app.post("/upload",upload,(req,resp)=>{
resp.send("File Uploaded")
});
app.listen(5000);