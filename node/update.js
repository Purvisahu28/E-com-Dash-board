const dbConnection=require('./mongodb');
const updateData= async ()=>{
    let data= await dbConnection();
    //update one mei agr same type k h toh bss ek mei he change aayega
    //where as update many mei sare jitte bhi match kr rahe h saabme change aayega
   // let result = await data.updateOne(
    let result = await data.updateMany(
        { name:'note 6'},{
            $set:{name:'note 6', brand:'apple'}
        }
    )
    console.warn(result)
}
updateData();