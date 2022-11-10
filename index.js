import express from "express";
import bodyParser from "body-parser";
import Escrows from "./routes/Escrows.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/Escrows", Escrows);

app.get("/", (req, res) => {
  res.send("Index");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
