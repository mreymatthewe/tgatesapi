export default function RentalMarketplaceABI() {
  return [
    {
      type: "error",
      name: "AlreadyListed",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
      ],
      outputs: [],
    },
    {
      type: "error",
      name: "NoProceeds",
      inputs: [],
      outputs: [],
    },
    {
      type: "error",
      name: "NotApprovedForMarketplace",
      inputs: [],
      outputs: [],
    },
    {
      type: "error",
      name: "NotListed",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
      ],
      outputs: [],
    },
    {
      type: "error",
      name: "NotOwner",
      inputs: [],
      outputs: [],
    },
    {
      type: "error",
      name: "PriceMustBeAboveZero",
      inputs: [],
      outputs: [],
    },
    {
      type: "error",
      name: "PriceNotMet",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
        {
          type: "uint256",
          name: "price",
          internalType: "uint256",
        },
      ],
      outputs: [],
    },
    {
      type: "event",
      name: "ItemBought",
      inputs: [
        {
          type: "address",
          name: "buyer",
          indexed: true,
          internalType: "address",
        },
        {
          type: "address",
          name: "nftAddress",
          indexed: true,
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          indexed: true,
          internalType: "uint256",
        },
        {
          type: "uint256",
          name: "price",
          indexed: false,
          internalType: "uint256",
        },
        {
          type: "address",
          name: "escrowAddress",
          indexed: false,
          internalType: "address",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "ItemCanceled",
      inputs: [
        {
          type: "address",
          name: "seller",
          indexed: true,
          internalType: "address",
        },
        {
          type: "address",
          name: "nftAddress",
          indexed: true,
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          indexed: true,
          internalType: "uint256",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "ItemListed",
      inputs: [
        {
          type: "address",
          name: "seller",
          indexed: true,
          internalType: "address",
        },
        {
          type: "address",
          name: "nftAddress",
          indexed: true,
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          indexed: true,
          internalType: "uint256",
        },
        {
          type: "uint64",
          name: "expiration",
          indexed: false,
          internalType: "uint64",
        },
        {
          type: "uint256",
          name: "price",
          indexed: false,
          internalType: "uint256",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          type: "address",
          name: "previousOwner",
          indexed: true,
          internalType: "address",
        },
        {
          type: "address",
          name: "newOwner",
          indexed: true,
          internalType: "address",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "function",
      name: "buyItem",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "cancelListing",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "ef",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "contract EscrowERC721Factory",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getActiveListings",
      inputs: [],
      outputs: [
        {
          type: "tuple[]",
          name: "",
          components: [
            {
              type: "uint256",
              name: "price",
              internalType: "uint256",
            },
            {
              type: "uint64",
              name: "expiration",
              internalType: "uint64",
            },
            {
              type: "address",
              name: "seller",
              internalType: "address",
            },
            {
              type: "uint256",
              name: "tokenId",
              internalType: "uint256",
            },
            {
              type: "address",
              name: "collectionAddress",
              internalType: "address",
            },
            {
              type: "address",
              name: "escrowAddress",
              internalType: "address",
            },
          ],
          internalType: "struct NftRentMarketplace.Listing[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getEscrowsByAddress",
      inputs: [
        {
          type: "address",
          name: "adr",
          internalType: "address",
        },
      ],
      outputs: [
        {
          type: "tuple[]",
          name: "",
          components: [
            {
              type: "address",
              name: "owner",
              internalType: "address",
            },
            {
              type: "uint256",
              name: "tokenId",
              internalType: "uint256",
            },
            {
              type: "address",
              name: "collectionAddress",
              internalType: "address",
            },
            {
              type: "address",
              name: "escrowAddress",
              internalType: "address",
            },
          ],
          internalType: "struct NftRentMarketplace.EscrowedNFT[]",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getListing",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "tuple",
          name: "",
          components: [
            {
              type: "uint256",
              name: "price",
              internalType: "uint256",
            },
            {
              type: "uint64",
              name: "expiration",
              internalType: "uint64",
            },
            {
              type: "address",
              name: "seller",
              internalType: "address",
            },
            {
              type: "uint256",
              name: "tokenId",
              internalType: "uint256",
            },
            {
              type: "address",
              name: "collectionAddress",
              internalType: "address",
            },
            {
              type: "address",
              name: "escrowAddress",
              internalType: "address",
            },
          ],
          internalType: "struct NftRentMarketplace.Listing",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getProceeds",
      inputs: [
        {
          type: "address",
          name: "seller",
          internalType: "address",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "listItem",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
        {
          type: "uint256",
          name: "price",
          internalType: "uint256",
        },
        {
          type: "uint64",
          name: "expiration",
          internalType: "uint64",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [
        {
          type: "address",
          name: "newOwner",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateListing",
      inputs: [
        {
          type: "address",
          name: "nftAddress",
          internalType: "address",
        },
        {
          type: "uint256",
          name: "tokenId",
          internalType: "uint256",
        },
        {
          type: "uint256",
          name: "newPrice",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawNFTfromEscrow",
      inputs: [
        {
          type: "uint256",
          name: "_index",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "withdrawProceeds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
  ];
}
