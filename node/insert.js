const dbConnection = require('./mongodb');

const insert = async () => {
    
        const db = await dbConnection();
        //const result = await db.insertOne({ name: 'note 5', brand: 'vivo', price: 1000, category: 'mobile' });
        //console.log(result);
        const result = await db.insertMany(
            [
                // { name: 'note 5', brand: 'vivo', price: 1000, category: 'mobile' },
                // { name: 'note 6', brand: 'vivo', price: 1000, category: 'mobile' }
            ]
        )
        if(result.acknowledged)
        {
            console.log("data inserted")
        }

}
insert();
