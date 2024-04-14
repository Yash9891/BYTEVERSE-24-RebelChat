import mongoose from 'mongoose';
const connectToMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to mongo db");
    }catch(error){
        console.log("Error shittt ",error.message);

    }
  
}
export default connectToMongoDB;