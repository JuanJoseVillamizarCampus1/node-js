import mysql from "promise-mysql";
import config from "../database/config.js";

const connection = mysql.createConnection({
    host:config.host,
    database: config.database,
    user : config.user,
    password : config.password,
});

const getConnection = async ()=>{
    return await connection;
};

export default getConnection;
