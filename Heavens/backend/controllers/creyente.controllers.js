import getConnection from "../database/database.js"

const getCreyente = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM Creyente')
}

export  const metodosHTTP ={
    getCreyente
}