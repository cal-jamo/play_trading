const MongoClient = require('mongodb').MongoClient;
const ServerApiVersion = require('mongodb').ServerApiVersion;
const teamData = require('./data');

const colName = 'teams';
const dbName = 'play-trade';

const url = "mongodb+srv://calvinjameson02:FishBrainsAreGood2@play-trade.erubr.mongodb.net/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function main() {
    const client = new MongoClient(url, { serverApi: ServerApiVersion.v1 });
    try {
        await client.connect();
        console.log("Connected to the server");

        const result = await client.db(dbName).collection(colName).insertMany(teamData);
        console.log(`${result.insertedCount} documents were inserted`);

    } finally {
        await client.close();
    }
}

main().catch(console.error);