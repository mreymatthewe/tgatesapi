import express from "express";
import data from "../listingsfetcher.js";
import bodyParser from "body-parser";
import listingsfetcher from "../listingsfetcher.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(listingsfetcher);
});

export default router;
