import express from "express"
import dotenv from 'dotenv'
import Connection from "./dbConfig.js";
import userRoute from './Routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import adminRoute from './Routes/adminRoutes.js'
import doctorRoute from './Routes/doctorRoutes.js'




const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  return res.status(200).send("server is running");
});



const port = 8000;


app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRoute);

Connection().then(
  app.listen(port, () => console.log(`this server started at port ${port}`)));