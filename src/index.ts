import { JsonFragment } from "@ethersproject/abi";
import { constants, Contract, providers } from "ethers";
import { concat } from "ethers/lib/utils";

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
      { internalType: "bytes32", name: "batchHash", type: "bytes32" },
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
  const account = constants.AddressZero;
  const storage = constants.HashZero;
  const batchHash = constants.HashZero;

  // Note that currently, the public rpc does not support `eth_getProof` method.
  const provider = new providers.JsonRpcProvider("https://alpha-rpc.scroll.io/l2");
  const proof = await provider.perform("getProof", [account, [storage], "latest"]);
  const accountProof: Array<string> = proof.accountProof;
  const storageProof: Array<string> = proof.storageProof[0].proof;

  const compressedProof = concat([
    `0x${accountProof.length.toString(16).padStart(2, "0")}`,
    ...accountProof,
    `0x${storageProof.length.toString(16).padStart(2, "0")}`,
    ...storageProof,
  ]);

  const verifier = new Contract("0xc64003ea32fafd75aa4c99664a688635560cf98b", abi, provider);

  // this will used to extract stateRoot and storageValue from compressedProof.
  console.log(await verifier.callStatic.verifyZkTrieProof(account, storage, compressedProof));
  // This will be used to check whether the compressedProof is valid under the batch whose hash is `batchHash`.
  console.log(await verifier.callStatic.verifyStateCommitment(batchHash, account, storage, compressedProof));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});