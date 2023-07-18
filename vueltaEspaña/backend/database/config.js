const mongoose= require('mongoose');
const connectionDB = async ()=>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`HOST:${connectDB.connection.host},PORT${connectDB.connection.port}`);
    } catch (error) {
        console.log(error);
    }
} 