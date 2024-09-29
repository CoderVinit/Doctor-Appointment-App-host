import express from "express"
import dotenv from 'dotenv'
import Connection from "./dbConfig.js";
import userRoute from './Routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import adminRoute from './Routes/adminRoutes.js'
import doctorRoute from './Routes/doctorRoutes.js'


const corsOption = {
  origin: ["http://localhost:5173", "http://localhost:3000", "https://chat-app-wft1.vercel.app", process.env.CLIENT_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}


const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  return res.status(200).send("server is running");
});



const port = process.env.PORT;


app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRoute);

Connection().then(
  app.listen(port, () => console.log(`this server started at port ${port}`)));