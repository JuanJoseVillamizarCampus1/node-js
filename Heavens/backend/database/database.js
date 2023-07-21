import mysql from "promise-mysql";
import config from "../database/confi.js";

const connection = mysql.createConnection({
    host:config.host,
    databes: config.database,
    user : config.user,
    password : config.password

});

const getConnection = async ()=>{
    return await connection
}

export default getConnection;
