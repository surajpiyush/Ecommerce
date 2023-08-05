const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());

const product = require("./routes/productRoutes");
const user= require("./routes/userRoutes")
app.use("/api/v1", product);
//app.use("/app/v1",user)
app.use(errorMiddleware);
module.exports = app;
