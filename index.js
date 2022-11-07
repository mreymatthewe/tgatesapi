import express from "express";
import bodyParser from "body-parser";
import listingsRoutes from "./routes/listings.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/listings", listingsRoutes);

app.get("/", (req, res) => {
  console.log("TEST");

  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
});
