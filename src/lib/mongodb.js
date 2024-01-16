import mongoose from "mongoose";
// const MONGO_URL="mongodb+srv://new_user21:mongodb@mongocluster.yjukacp.mongodb.net/";

export const connectMongoDB= async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Helath",
    });

    console.log("Connected to MongoDB successfully!");
    
  } catch (error) {
    console.error("Failed to connect to the database");
    console.error(error);
  }
};
