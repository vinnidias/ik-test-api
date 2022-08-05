import express from "express";

const app = express();

const port = 3330

app.listen(port, ()=> console.log(`server is runnig on port: ${port}`))