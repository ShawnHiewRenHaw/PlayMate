//import
import express from 'express'
import mongoose from "mongoose";
import Profiles from "dbProfiles";
import Pusher from "pusher";

const { MongoClient } = require('mongodb');

//application confiq
const app= express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1183684",
    key: "bf24836fad5569d93ee1",
    secret: "564dc13d04bf5fa5f561",
    cluster: "ap2",
    useTLS: true
});


//db confiq

const connectionUrl = 'mongodb+srv://admin:ezyvet@cluster0.0bqz5dt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB connected');

    async function main(){

        const uri = "mongodb+srv://playmate:playmate123@cluster0.zixx18l.mongodb.net/PLAYMATE-BACKEND?retryWrites=true&w=majority"
    
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

},

//???

//api route
app.get("/", (req, res) => res.status(200).send("Hello World")),

app.post("/profile/new", (req, res) => {
    const dbMessage = req.body;

    Profiles.create(dbProfiles, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
}),

app.get("/profile/sync", (req, res) => {
    Profiles.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
}),

//listen
app.listen(port, () => console.log(`Listening to port: ${port}`)))

