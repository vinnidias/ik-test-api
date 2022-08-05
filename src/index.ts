import express from "express";

const createTask = require("./routes/createTask") 

const app = express();

const port = 3330

app.listen(port, ()=> console.log(`server is runnig on port: ${port}`))

app.use(express.json());

app.use("/tasks", createTask)
