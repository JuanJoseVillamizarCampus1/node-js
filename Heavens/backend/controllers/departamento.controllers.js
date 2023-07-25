import getConnection from "../database/database.js"

const getDepartamento = async(req,res)=>{
    try {
        const connection=await getConnection();
        const result = await connection.query("SELECT * FROM Departamento");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }  
}
const postDepartamento = async (req, res) => {
    try {
      const { nombre_departamento } = req.body;
      const departamento = { nombre_departamento };
      const connection = await getConnection();
      const existeDepartamento = await connection.query(
        "SELECT * FROM Departamento WHERE nombre_departamento = ?",
        [nombre_departamento]
      );
  
      if (existeDepartamento.length > 0) {
        return res.status(400).json({ error: "Departamento ya registrado" });
      }
  
      const result = await connection.query("INSERT INTO Departamento SET ?", departamento);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const metodosHTTP ={
    getDepartamento,
    postDepartamento
}