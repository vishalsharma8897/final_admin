import mongoose from "mongoose";
const mongoUri = "mongodb+srv://vishalsharma19052001:TRfE2yvjHO69xyrk@cluster0.zptw4x5.mongodb.net/Admin-database"// connection string

const  connectToMongo= async()=>{
   await mongoose.connect(mongoUri).then(()=>{
    console.log(" Database connected succesfully");
   }).catch((err)=>{
       console.error("Db could not connect due to " + err);
   })
   
}

export default connectToMongo;
