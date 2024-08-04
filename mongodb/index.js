import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODBURL, {
      dbName: "Cluster0",
    });

    isConnected = true;

    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error);
  }
};
