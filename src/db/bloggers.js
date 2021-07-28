const mongoose = require("mongoose");

mongoose.connect(" mongodb://localhost:27017/bloggersapi", {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true},
()=>{
    console.log("connection to mongodb is successful");
});