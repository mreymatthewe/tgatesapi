import express from "express";
import { Address } from "./Contract.js";
import ABI from "./ABI.json" assert { type: "json" };
import Web3 from "web3";
const router = express.Router();

router.get("/", (req, res) => {
  let w3 = new Web3();

  w3.setProvider(new w3.providers.HttpProvider("https://goerli.infura.io/v3/"));
  w3.eth.defaultChain = "goerli";
  let escrowContract = null;
  let Contract = new w3.eth.Contract(ABI, Address());
  Contract.methods
    .getEscrowsByAddress("0xfd72c8923ef3236aff248aaaecda956e78824a95")
    .then((assets) => {
      escrowContract = assets;
    });

  res.send("Hi");
});

export default router;
