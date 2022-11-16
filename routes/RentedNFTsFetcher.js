import express from "express";
import { Address } from "../Contract.js";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const router = express.Router();
const sdk = new ThirdwebSDK("goerli");
const contract = await sdk.getContract(Address());

router.get("/", async (req, res) => {
  res.send("Please Enter the Wallet Address");
});

router.post("/", async (req, res) => {
  let addresses = req.query;

  let data = {};
  let tokenIds = [];
  let filteredTokenIds = [];
  try {
    data = await contract.call("getEscrowsByAddress", addresses.walletaddress);
    tokenIds = Object.entries(data);
    for (let x = 0; x <= tokenIds.length; x++) {
      if (tokenIds[x][1][2] == addresses.contractaddress) {
        filteredTokenIds.push(tokenIds[x][1][1]);
      }
    }
  } catch {
    tokenIds = "No Results. Address you entered may have no records or invalid";
  }

  res.send(filteredTokenIds);
});

export default router;
