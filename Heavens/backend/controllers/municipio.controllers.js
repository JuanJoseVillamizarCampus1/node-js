import getConnection from "../database/database.js";

const getMunicipios = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM Municipio');
        res.json(result);
    } catch (error) {
        res.status(404);
        res.send(error.message);
    }
};

export const  metodosHTTP={
    getMunicipios
}