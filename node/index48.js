const mysql=require("mysql");
const conn=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",//by default blank depend on whaht we putted
        database:"test"

    });
conn.connect(()=>{
    if(err)
    {
        console.warn("error")
    }
    else{
        console.warn("connected")
    }
});