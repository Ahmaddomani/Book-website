import mongoose from "mongoose";
import dotEnv from "dotenv";

dotEnv.config({ path: "../config.env" }); // To Access to The config.env File

console.log(process.env.CONN_STRING);
const connectionString = process.env.CONN_STRING;

if (!connectionString) {
  console.error("CONN_STRING is missing in .env file");
  process.exit(1);
}

const connectToDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected To Db Successfully");
    console.log("CONN_STRING value is:", process.env.CONN_STRING);
  } catch (err) {
    console.log("SomeThing Got Wrong Connecting To Db");
    process.exit(1);
  }
};

export default connectToDb;

// mongoose.connect()
