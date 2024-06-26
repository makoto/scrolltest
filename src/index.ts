import { JsonFragment } from "@ethersproject/abi";
import { utils, Contract, providers } from "ethers";
import { toBeHex } from "ethersv6";
import { concat } from "ethers/lib/utils";

const scrollChainAbi: Array<JsonFragment> = [{"inputs":[{"internalType":"uint64","name":"_chainId","type":"uint64"},{"internalType":"address","name":"_messageQueue","type":"address"},{"internalType":"address","name":"_verifier","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ErrorZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"batchIndex","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"batchHash","type":"bytes32"}],"name":"CommitBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"batchIndex","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"batchHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"stateRoot","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"withdrawRoot","type":"bytes32"}],"name":"FinalizeBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"batchIndex","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"batchHash","type":"bytes32"}],"name":"RevertBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldMaxNumTxInChunk","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMaxNumTxInChunk","type":"uint256"}],"name":"UpdateMaxNumTxInChunk","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"UpdateProver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"UpdateSequencer","type":"event"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"addProver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"addSequencer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_version","type":"uint8"},{"internalType":"bytes","name":"_parentBatchHeader","type":"bytes"},{"internalType":"bytes[]","name":"_chunks","type":"bytes[]"},{"internalType":"bytes","name":"_skippedL1MessageBitmap","type":"bytes"}],"name":"commitBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"committedBatches","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_batchHeader","type":"bytes"},{"internalType":"bytes32","name":"_prevStateRoot","type":"bytes32"},{"internalType":"bytes32","name":"_postStateRoot","type":"bytes32"},{"internalType":"bytes32","name":"_withdrawRoot","type":"bytes32"}],"name":"finalizeBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_batchHeader","type":"bytes"},{"internalType":"bytes32","name":"_prevStateRoot","type":"bytes32"},{"internalType":"bytes32","name":"_postStateRoot","type":"bytes32"},{"internalType":"bytes32","name":"_withdrawRoot","type":"bytes32"},{"internalType":"bytes","name":"_aggrProof","type":"bytes"}],"name":"finalizeBatchWithProof","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"finalizedStateRoots","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_batchHeader","type":"bytes"},{"internalType":"bytes32","name":"_stateRoot","type":"bytes32"}],"name":"importGenesisBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_messageQueue","type":"address"},{"internalType":"address","name":"_verifier","type":"address"},{"internalType":"uint256","name":"_maxNumTxInChunk","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_batchIndex","type":"uint256"}],"name":"isBatchFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isProver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isSequencer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastFinalizedBatchIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"layer2ChainId","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumTxInChunk","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"messageQueue","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"removeProver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"removeSequencer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"_batchHeader","type":"bytes"},{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"revertBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxNumTxInChunk","type":"uint256"}],"name":"updateMaxNumTxInChunk","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"verifier","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawRoots","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]

const abi: Array<JsonFragment> = [
  {
    inputs: [
      { internalType: "address", name: "_poseidon", type: "address" },
      { internalType: "address", name: "_rollup", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "poseidon",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rollup",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "batchIndex", type: "uint256" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "storageKey", type: "bytes32" },
      { internalType: "bytes", name: "proof", type: "bytes" },
    ],
    name: "verifyStateCommitment",
    outputs: [{ internalType: "bytes32", name: "storageValue", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "storageKey", type: "bytes32" },
      { internalType: "bytes", name: "proof", type: "bytes" },
    ],
    name: "verifyZkTrieProof",
    outputs: [
      { internalType: "bytes32", name: "stateRoot", type: "bytes32" },
      { internalType: "bytes32", name: "storageValue", type: "bytes32" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function main() {
  // Should return `Satoshi`
  // const slots = [1n];
  // Should return `Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.`
  const slots = [
    72984518589826227531578991903372844090998219903258077796093728159832249402700n,
    20078987066573592807830010549854483640024192519558332002348594298392865432561n,
    20078987066573592807830010549854483640024192519558332002348594298392865432562n
  ];
  const hexSlots = slots.map((slot) => toBeHex(slot, 32))
  //   Sepolia
  //   const fooAddress ='0xadbb7d8ae892c017d387dd26ff24fce79212932c'
  //   Scroll Sepolia
  //   https://sepolia.scrollscan.dev/address/0x94fbce7ca1a0152cfc99f90f4421d31cf356c896#code
  // const fooAddress = '0x94fbce7ca1a0152cfc99f90f4421d31cf356c896'
  const fooAddress = '0x9B3f2e110e27EAe077B581b4880f5BD777121C66'
  const account = fooAddress;

  // Note that currently, the public rpc does not support `eth_getProof` method.
  const L1_PROVIDER_URL = process.env.L1_PROVIDER_URL;
//   console.log(1, L1_PROVIDER_URL)
  const l1provider = new providers.JsonRpcProvider(L1_PROVIDER_URL);
  const l2provider = new providers.JsonRpcProvider("https://sepolia-rpc.scroll.io");

  // get the finalized block number
  const block = await l2provider.send("eth_getBlockByNumber", ["finalized", false]);
  const blockNo = Number(block.number);
  console.log(21, {blockNo});

  // get the batch index given the block number
  // scroll mainnet url: https://mainnet-api-re.scroll.io/api/search
  const searchUrl = 'https://sepolia-api-re.scroll.io/api/search';
  const fetch = require('node-fetch');
  const resp = await fetch(`${searchUrl}?keyword=${blockNo}`)
  const obj = await resp.json()
  const batchIndex = obj.batch_index
  console.log(22, {batchIndex})
  console.log(23, [account, hexSlots, block.number])
  const proof = await l2provider.send("eth_getProof", [account, hexSlots, block.number]);
  // console.log(3, JSON.stringify(proof, null, 2))
  proof['storageProof'].map((sp:any, index:number) => {
    let buf = Buffer.from(sp.value.slice(2), "hex");
    let data = buf.toString("utf8");
    console.log(index, sp['value'], data)
  })
  const verifier = new Contract("0x64cb3A0Dcf43Ae0EE35C1C15edDF5F46D48Fa570", abi, l1provider);
  const accountProof: Array<string> = proof.accountProof;
  for (let index = 0; index < hexSlots.length; index++) {
    const storageProof: Array<string> = proof.storageProof[index].proof;
    const compressedProof = concat([
      `0x${accountProof.length.toString(16).padStart(2, "0")}`,
      ...accountProof,
      `0x${storageProof.length.toString(16).padStart(2, "0")}`,
      ...storageProof,
    ]);
  
    const slot = hexSlots[index];
    // console.log(61, {account, slot, compressedProof})
    const r = await verifier.callStatic.verifyZkTrieProof(account, slot, compressedProof)
    // console.log(71, r.storageValue.toString("utf8"));
    let buf = Buffer.from(r.storageValue.slice(2), "hex");
    let data = buf.toString("utf8");
    console.log(index, data);
    // This will be used to check whether the compressedProof is valid under the batch whose hash is `batchHash`.
    // console.log(8, (await verifier.estimateGas.verifyStateCommitment(batchIndex, account, slot, compressedProof)).toNumber());
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
