require("dotenv").config();
const express =require("express");

const app =express();

app.listen(8001,() => {
  console.log("Server run on port 8001"); 
})