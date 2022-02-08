const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
require("./db/conn");
const Student= require("./models/student");
const studentRouter=require("./routers/student")

const app= express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);




app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`);
})