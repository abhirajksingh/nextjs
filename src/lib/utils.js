import mongoose from "mongoose";
const connection = {};

export const connectionDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0]._readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
