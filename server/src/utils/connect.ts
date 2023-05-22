import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_URI || null
const options = {}

if (!URI) throw new Error("Please add MongoDB URI to your .env.local")
let client = new MongoClient(URI, options)
let clientPromise:Promise<MongoClient>

if (process.env.NODE_ENV !== "production") {
    let globalWithMongo = global as typeof globalThis & {
        mongo: Promise<MongoClient>
    }
    if(!globalWithMongo.mongo) {
        globalWithMongo.mongo = client.connect()
    }
    clientPromise = globalWithMongo.mongo
} else {
    clientPromise = client.connect()
}

export default clientPromise