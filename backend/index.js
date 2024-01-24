const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const StudentRouter=require("../backend/Router/StudentRouter")
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(StudentRouter);
mongoose.connect('mongodb://127.0.0.1:27017/mybikes')

app.listen(8082,()=>{
    console.log("Server started!!!")
});
