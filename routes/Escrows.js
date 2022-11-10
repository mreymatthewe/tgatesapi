import express from "express";
import { Address } from "../Contract.js";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const router = express.Router();
const sdk = new ThirdwebSDK("goerli");
const contract = await sdk.getContract(Address());

router.get("/", async (req, res) => {
  res.send("Please Enter the Wallet Address");
});

router.get("/:id", async (req, res) => {
  let address = req.params;
  let data = null;
  try {
    data = await contract.call("getEscrowsByAddress", address.id);
  } catch {
    data = "No Results. Address you entered may have no records or invalid";
  }
  res.send(data);
});

export default router;
