import express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js"

const app = express();
dotenv.config()
const PORT = process.env.PORT;
conectarDB()
console.log(PORT);

app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`);
})