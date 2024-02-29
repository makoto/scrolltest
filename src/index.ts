import { BigNumber, ethers } from 'ethers'
import dotenv from 'dotenv'
dotenv.config()
const rollupAbi = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "batchID",
				"type": "bytes32"
			}
		],
		"name": "batches",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "batchHash",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "parentHash",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "batchIndex",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "verified",
						"type": "bool"
					}
				],
				"internalType": "struct IZKRollup.Layer2BatchStored",
				"name": "batch",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "blockHash",
				"type": "bytes32"
			}
		],
		"name": "blocks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "parentHash",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "transactionRoot",
						"type": "bytes32"
					},
					{
						"internalType": "uint64",
						"name": "blockHeight",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "batchIndex",
						"type": "uint64"
					}
				],
				"internalType": "struct IZKRollup.Layer2BlockStored",
				"name": "block",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "batchIndex",
				"type": "uint256"
			}
		],
		"name": "finalizedBatches",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "batchID",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_blockHash",
				"type": "bytes32"
			}
		],
		"name": "isBlockFinalized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_blockHeight",
				"type": "uint256"
			}
		],
		"name": "isBlockFinalized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastFinalizedBatchID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const fooAbi = [{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bar","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBar","inputs":[{"type":"uint256","name":"_bar","internalType":"uint256"}]}]

const l1url = `https://prealpha.scroll.io/l1`
const l1provider = new ethers.providers.JsonRpcProvider(l1url);
const l2url = `https://prealpha.scroll.io/l2`
const l2provider = new ethers.providers.JsonRpcProvider(l2url);
console.log({l1url, l2url})

// l2 addresses
const fooAddress = '0x2A0d1702421E1B18FCb83176E6Cf4F96853cc208'
const foo = new ethers.Contract(fooAddress, fooAbi, l2provider);

// l1 addresses
const rollupAddress = '0x27b5ce7d020545653488eF0FF0D25f362CE36f95'

const rollup = new ethers.Contract(rollupAddress, rollupAbi, l1provider);

async function main(){
  console.log(1, await foo.bar())
  const batchID = await rollup.lastFinalizedBatchID()
  console.log(2, {batchID})
  const batch = await rollup.batches(batchID)
  const {batchHash} = batch
  console.log(3, {batch, batchHash})
  const block = await rollup.blocks(batchHash)
  console.log(4, {block})
// const slot = '0x0000000000000000000000000000000000000000000000000000000000000000'
//   const blockHash = 

//   const l2blockRaw = await l2provider.send('eth_getBlockByHash', [
//     blockHash,
//     false
//   ]);
//   console.log(4, {l2blockRaw})

  //   const stateroot = l2blockRaw.stateRoot
//   const blockarray = [ 
//     l2blockRaw.parentHash, 
//     l2blockRaw.sha3Uncles, 
//     l2blockRaw.miner, 
//     stateroot, 
//     l2blockRaw.transactionsRoot,
//     l2blockRaw.receiptsRoot,
//     l2blockRaw.logsBloom,
//     BigNumber.from(l2blockRaw.difficulty).toHexString(),
//     BigNumber.from(l2blockRaw.number).toHexString(),
//     BigNumber.from(l2blockRaw.gasLimit).toHexString(),
//     BigNumber.from(l2blockRaw.gasUsed).toHexString(),
//     BigNumber.from(l2blockRaw.timestamp).toHexString(),
//     l2blockRaw.extraData,
//     l2blockRaw.mixHash,
//     l2blockRaw.nonce,
//     BigNumber.from(l2blockRaw.baseFeePerGas).toHexString(),
//     ]
//   console.log(blockarray)
//   const calculated_blockhash = ethers.utils.keccak256(ethers.utils.RLP.encode(blockarray))
//   console.log(calculated_blockhash)
//   console.log(calculated_blockhash === blockHash)
// //   ParentHash  common.Hash    `json:"parentHash"       gencodec:"required"`
// //   UncleHash   common.Hash    `json:"sha3Uncles"       gencodec:"required"`
// //   Coinbase    common.Address `json:"miner"`
// //   Root        common.Hash    `json:"stateRoot"        gencodec:"required"`
// //   TxHash      common.Hash    `json:"transactionsRoot" gencodec:"required"`
// //   ReceiptHash common.Hash    `json:"receiptsRoot"     gencodec:"required"`
// //   Bloom       Bloom          `json:"logsBloom"        gencodec:"required"`
// //   Difficulty  *big.Int       `json:"difficulty"       gencodec:"required"`
// //   Number      *big.Int       `json:"number"           gencodec:"required"`
// //   GasLimit    uint64         `json:"gasLimit"         gencodec:"required"`
// //   GasUsed     uint64         `json:"gasUsed"          gencodec:"required"`
// //   Time        uint64         `json:"timestamp"        gencodec:"required"`
// //   Extra       []byte         `json:"extraData"        gencodec:"required"`
// //   MixDigest   common.Hash    `json:"mixHash"`
// //   Nonce       BlockNonce     `json:"nonce"`
// //   // BaseFee was added by EIP-1559 and is ignored in legacy headers.
// //   BaseFee *big.Int `json:"baseFeePerGas" rlp:"optional"`

//   // ^ with these, the L1 contract now know the state root (from the blockhash)

//   // For the last steps, you need to 
//   // 1. prove the account is in the state root
//   // 2. prove the storage is in the account root
//   const proof = await l2provider.send('eth_getProof', [
//     fooAddress,
//     [slot],
//     {blockHash}
//   ]);
//   console.log(proof)
//   const proofKey = ethers.utils.keccak256(proof.address)
//   const accountProof = ethers.utils.RLP.encode(proof.accountProof)
//   console.log(7, {
//     address:proof.address,
//     proofKey, accountProof, stateroot
//   })
//   const [acctExists, acctEncoded] = await verifier.get(
//     proofKey, accountProof, stateroot
//   )
//   // decodeEVMAccount
//   const storageRoot = ethers.utils.RLP.decode(acctEncoded)[2]
//   console.log({acctExists, storageRoot})

//   const slotKey = ethers.utils.keccak256(slot)
//   const storageProof = ethers.utils.RLP.encode((proof.storageProof as any[]).filter((x)=>x.key===slot)[0].proof)
  
//   const [storageExists, storageEncoded] = await verifier.get(
//     slotKey, storageProof, storageRoot
//   )

//   console.log({storageEncoded: storageEncoded})

//   const storageValue = ethers.utils.RLP.decode(storageEncoded)
//   const actualValue = await l2provider.getStorageAt(fooAddress, slot, l2block.number) // should use blockhash here but some bug with the alchemy rpc
//   const actualValueRemoveLeading0 = BigNumber.from(actualValue).toHexString()
//   console.log({storageValue: storageValue, actualValue: actualValueRemoveLeading0, equal: storageValue===actualValueRemoveLeading0})

//   // 1. Proof a certain l2 block hash correspond to a node/rblock state with the assertion
//   // 2. Proof the state root belong to the l2 block hash by supplying the blockheader
//   // 3. Proof the account storage inside the state root
//   // 4. Proof the storage slot is in the account root
}
main()