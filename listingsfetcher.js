import express from "express";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Contract, ABI, Address } from "./Contract.js";
let Web3 = require("web3");

let w3 = new Web3(ethereum);
w3.eth.defaultChain = "goerli";

let Contract = new w3.eth.Contract(Address(), ABI());
setMarketplaceContract(Contract);
