const dbConnection = require('./mongodb');
const deleteData=async ()=>{
    //console.log("function called");
    let data = await dbConnection();
    //let result = await data.deleteOne({name:'note 6'})
    let result = await data.deleteMany({name:'note 8'})
    console.warn(result);
    if(result.acknowledged && result.deletedCount){
        console.log('deleted successfully')
    }
    else {
        console.log('data not found in your data base --Sorry ')
    }

}
deleteData();