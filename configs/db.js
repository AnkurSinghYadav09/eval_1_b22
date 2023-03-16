const mongoose=require("mongoose");

mongoose.set("strictQuery", true);

const connection= async()=>{
    // console.log("database connection established")
   await mongoose.connect("mongodb://localhost:27017/imdb")
}

module.exports=connection;