const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ticket",{ 
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
},(error)=>{
    if (!error)
    {
        console.log("Connectiion Successful");

    }
    else{
        console.log("Error");
    }
});

const Course = require("./course.model");
