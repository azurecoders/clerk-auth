import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGO_URI!;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  try {
    if (cached.conn) return cached.conn;

    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "clerk-auth",
        bufferCommands: false,
        connectTimeoutMS: 30000,
      });

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
