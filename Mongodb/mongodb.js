
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'College';
const Client = new MongoClient(url);

const dbConnect = async () => {
    try {
        const result = await Client.connect();
        const db = await result.db(database);
        return db.collection('Profile');
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error; // Propagate the error to the caller
    }
};

module.exports = dbConnect;