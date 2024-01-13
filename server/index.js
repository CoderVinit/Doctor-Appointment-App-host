import express from "express"
import dotenv from 'dotenv'
import Connection from "./dbConfig.js";
import userRoute from './Routes/userRoutes.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import adminRoute from './Routes/adminRoutes.js'
import doctorRoute from './Routes/doctorRoutes.js'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
dotenv.config();


app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});



const port = 8000;


app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRoute);

Connection().then(
  app.listen(port, () => console.log(`this server started at port ${port}`)));