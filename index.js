import express from "express";
import bodyParser from "body-parser";
import Escrows from "./routes/Escrows.js";

const app = express();

app.use(bodyParser.json());

app.use("/Escrows", Escrows);

app.get("/", (req, res) => {
  res.send("Index");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
