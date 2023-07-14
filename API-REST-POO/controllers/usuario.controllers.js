const getUsers= (req,res)=>{
    res.json({"message":"home page"})
}
const postUsers=(req,res)=>{
    res.json({
        "message":"post api"})
}
const deleUsers=(req,res)=>{
    res.json({
        "message":"delete api"})
}
const addUsers=(req,res)=>{
    res.json({
        "message":"put api"})
}
const updateUsers=(req,res)=>{
    res.json({
        "message":"patch api"})
}
module.exports = {getUsers,postUsers,deleUsers,addUsers,updateUsers}