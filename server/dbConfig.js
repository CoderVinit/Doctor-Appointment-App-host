import mongoose from "mongoose";



const Connection = async () => {
  const Url = "mongodb+srv://vinitpatel8896:vinitpatel8896@doctorapponitment.yjmpwjf.mongodb.net/DoctorApponitment"
  try {
    await mongoose.connect(Url)
    console.log('Databse Connected successfully');
  } catch (error) {
    console.log('Error while connecting with database', error.message);
  }
}

export default Connection;