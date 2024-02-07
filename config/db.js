import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDb Database ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error in MongoDb ${error}`.bgRed.white);
  }
};

export default connectDB;
