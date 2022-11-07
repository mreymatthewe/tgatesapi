import express from "express";
import data from "../listingsfetcher.js";
const router = express.Router();

const listings = [{ firstName: "John", lastName: "Doe", age: 25 }];

router.get("/", (req, res) => {
  res.send(data());
});

export default router;
