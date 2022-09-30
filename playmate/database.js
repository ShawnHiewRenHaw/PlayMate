//username: playmate   password: playmate123
const { MongoClient } = require('mongodb');

async function main(){

    const uri = "mongodb+srv://playmate:playmate123@cluster0.zixx18l.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await createUser(client,{
            name: "Test",
            email: "test@test.com",
            password: "tester123"
        })

    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function createUser(client, newUser){
    const result = await client.db("name").collection("userlist").insertOne(newUser);

    console.log(`New User created: ${result.insertId}`);
}

async function listDatabases(client){
    const databasesLiist = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesLiist.databases.forEach(db =>{
        console.log(`-&{db.name}`);
    })
}