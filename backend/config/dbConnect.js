const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try{
        const conn = mongoose.connect("mongodb+srv://admin:admin@cluster0.fkhpkhr.mongodb.net/")
        console.log("datatbase connected successfully")
    }catch(error){
        console.log("Database error")
    }
   
}

module.exports= dbConnect