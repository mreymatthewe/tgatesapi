import express from "express";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ABI from "./ABI.js";

const sdk = new ThirdwebSDK("goerli");

const contract = await sdk.getContractFromAbi(
  "0x4411cB7c958F40e7B60548F64C0b4B497729f417",
  ABI()
);
