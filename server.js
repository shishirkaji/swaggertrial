const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 3000;

app.use(express.json({extended:false}));
// app.use("/",(req,res)=>{res.send("Api running ")}); 
app.use("/api/members",require("./api/member"));
app.use("/api/test",require("./api/test"));
app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

connectDB();
app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})
