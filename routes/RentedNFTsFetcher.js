import express from "express";
import { Address } from "../Contract.js";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const router = express.Router();
const sdk = new ThirdwebSDK("goerli");
const contract = await sdk.getContract(Address());

router.get("/", async (req, res) => {
  const data = await contract.call(
    "getEscrowsByAddress",
    "0xfD72C8923EF3236aFf248aAAecdA956e78824a95"
  );
  res.send(data);
});

router.post("/", async (req, res) => {
  let addresses = req.query;

  let data = {};
  let tokenIds = [];
  let filteredTokenIds = [];
  let arrayTokenIds = [];
  try {
    data = await contract.call("getEscrowsByAddress", addresses.walletaddress);
    tokenIds = Object.entries(data);

    for (let x = 0; x < tokenIds.length; x++) {
      if (addresses.contractaddress == tokenIds[x][1][2]) {
        filteredTokenIds.push(tokenIds[x][1][1]);

        arrayTokenIds.push(
          parseInt(Object.values(filteredTokenIds[x])[0].slice(3))
        );
      }
    }
  } catch {
    tokenIds = "No Results. Address you entered may have no records or invalid";
  }
  arrayTokenIds.push(
    parseInt(
      Object.values(filteredTokenIds[filteredTokenIds.length - 1])[0].slice(3)
    )
  );
  console.log(arrayTokenIds);
  res.send(arrayTokenIds);
});

export default router;
