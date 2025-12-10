import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import "./src/db.js"; 
import router from "./src/routes/magazineRoutes.js";
dotenv.config();
const app = express();
app.use(express.static(__dirname)); 
app.use(express.json());
app.use(cors());
app.use("/", router);



app.listen(process.env.PORT, process.env.SERVER_ADDRESS, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})
