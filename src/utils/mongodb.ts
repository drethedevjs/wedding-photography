import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Missing Mongodb connection string");
}

type MongooseGlobal = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// cache across hot reloads in dev
const globalForMongoose = globalThis as unknown as {
  mongoose?: MongooseGlobal;
};
globalForMongoose.mongoose = globalForMongoose.mongoose || {
  conn: null,
  promise: null
};

export async function connectToDatabase() {
  const cache = globalForMongoose.mongoose as MongooseGlobal;

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI!);
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
