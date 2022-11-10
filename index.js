import express from "express";
import bodyParser from "body-parser";
import rentednfts from "./routes/RentedNFTsFetcher.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/rentednfts", rentednfts);

app.get("/", (req, res) => {
  res.send("Index");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
