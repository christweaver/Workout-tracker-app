import mongoose from "mongoose";

let connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSEURI);
    console.info('connected to dB')
  } catch(error){
    console.error('error connecting to mongodB', error);
  }
};

export default connectToDb;
