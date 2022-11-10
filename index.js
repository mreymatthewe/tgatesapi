import express from "express";
import bodyParser from "body-parser";
import listingsfetcher from "./listingsfetcher.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/listingsfetcher", listingsfetcher);

app.get("/", (req, res) => {
  res.send("Index");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
});
