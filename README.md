# Scroll Test

A test script to test scroll proof verification

## Running test

```
gh repo clone makoto/scrolltest
cd scrolltest
yarn
yarn test
```

## Output

```
tmp/scrolltest - (master) > yarn test
yarn run v1.22.19
warning package.json: No license field
warning ../../package.json: No license field
warning ../../../../package.json: No license field
$ ts-node src/index.ts
1
2 {
  account: '0x5f5e99139a17c56eadc3b1d01535224d003b7e5b',
  storage: '0x0000000000000000000000000000000000000000000000000000000000000000'
}
3 {
  "address": "0x5f5e99139a17c56eadc3b1d01535224d003b7e5b",
  "accountProof": [
    "0x09289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa613",
    "0x0905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba0",
    "0x0917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981",
    "0x091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd47",
    "0x09209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e4",
    "0x0927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce",
    "0x090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b7",
    "0x09290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee2",
    "0x09157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc",
    "0x0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237",
    "0x091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc",
    "0x090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5",
    "0x090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426",
    "0x092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e",
    "0x09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d",
    "0x0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1",
    "0x092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f",
    "0x091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473",
    "0x092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf0",
    "0x08037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad",
    "0x0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c",
    "0x0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b000000000000000000000000",
    "0x5448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449"
  ],
  "balance": "0x0",
  "poseidonCodeHash": "0x2074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca",
  "keccakCodeHash": "0x4a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e922",
  "codeSize": "0x143",
  "nonce": "0x1",
  "storageHash": "0x0cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a1",
  "storageProof": [
    {
      "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "value": "0x3",
      "proof": [
        "0x041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e94428422010100000000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000",
        "0x5448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449"
      ]
    }
  ]
}
4 {
  accountProof: [
    '0x09289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa613',
    '0x0905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba0',
    '0x0917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981',
    '0x091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd47',
    '0x09209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e4',
    '0x0927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce',
    '0x090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b7',
    '0x09290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee2',
    '0x09157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc',
    '0x0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237',
    '0x091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc',
    '0x090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5',
    '0x090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426',
    '0x092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e',
    '0x09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d',
    '0x0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1',
    '0x092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f',
    '0x091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473',
    '0x092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf0',
    '0x08037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad',
    '0x0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c',
    '0x0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b000000000000000000000000',
    '0x5448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449'
  ]
}
5 {
  storageProof: [
    '0x041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e94428422010100000000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000',
    '0x5448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449'
  ]
}
6 {
  compressedProof: Uint8Array(1789) [
     23,   9,  40, 156, 252, 178, 192, 230,  96, 196,  41,  58,
    209, 229, 221, 223, 175, 230, 200, 203,  19,  75, 107, 173,
     58,   8,  90, 161, 143, 255, 161, 211,  68, 189,  44,  90,
    155, 114, 216, 165,  88, 110, 163,  70, 165, 174, 141, 238,
     25, 107,  97, 248,  11,  45, 235, 250,  35,  28,  71,  20,
    151, 180, 239,  42, 166,  19,   9,   5, 209,  11,  47, 101,
     90, 202, 222, 238, 189,  78, 232, 193, 123, 238, 202, 231,
     82,  13, 143, 238,  62, 181,  79, 252,  90, 115, 139,  80,
    244,  75, 174,  28,
    ... 1689 more items
  ]
}
Error: missing revert data in call exception; Transaction reverted without a reason string [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (data="0x", transaction={"to":"0x64cb3A0Dcf43Ae0EE35C1C15edDF5F46D48Fa570","data":"0x61016dc40000000000000000000000005f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000006fd1709289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa6130905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba00917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd4709209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e40927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b709290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee209157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf008037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d317252586750327870444902041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e944284220101000000000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449000000","accessList":null}, error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":45,\"error\":{\"code\":-32000,\"message\":\"execution reverted\"}}\n","error":{"code":-32000},"requestBody":"{\"method\":\"eth_call\",\"params\":[{\"to\":\"0x64cb3a0dcf43ae0ee35c1c15eddf5f46d48fa570\",\"data\":\"0x61016dc40000000000000000000000005f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000006fd1709289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa6130905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba00917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd4709209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e40927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b709290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee209157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf008037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d317252586750327870444902041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e944284220101000000000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449000000\"},\"latest\"],\"id\":45,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://sepolia-rpc.scroll.io"}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:66:16)
    at JsonRpcProvider.<anonymous> (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'missing revert data in call exception; Transaction reverted without a reason string',
  code: 'CALL_EXCEPTION',
  data: '0x',
  transaction: {
    to: '0x64cb3A0Dcf43Ae0EE35C1C15edDF5F46D48Fa570',
    data: '0x61016dc40000000000000000000000005f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000006fd1709289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa6130905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba00917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd4709209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e40927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b709290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee209157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf008037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d317252586750327870444902041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e944284220101000000000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449000000',
    accessList: null
  },
  error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":45,\"error\":{\"code\":-32000,\"message\":\"execution reverted\"}}\n", error={"code":-32000}, requestBody="{\"method\":\"eth_call\",\"params\":[{\"to\":\"0x64cb3a0dcf43ae0ee35c1c15eddf5f46d48fa570\",\"data\":\"0x61016dc40000000000000000000000005f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000006fd1709289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa6130905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba00917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd4709209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e40927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b709290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee209157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf008037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d317252586750327870444902041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e944284220101000000000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449000000\"},\"latest\"],\"id\":45,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://sepolia-rpc.scroll.io", code=SERVER_ERROR, version=web/5.7.1)
      at Logger.makeError (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
      at Logger.throwError (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
      at /Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/src.ts/index.ts:341:28
      at step (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:33:23)
      at Object.next (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:14:53)
      at fulfilled (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:5:58)
      at processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'processing response error',
    code: 'SERVER_ERROR',
    body: '{"jsonrpc":"2.0","id":45,"error":{"code":-32000,"message":"execution reverted"}}\n',
    error: Error: execution reverted
        at getResult (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:142:28)
        at processJsonFunc (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/src.ts/index.ts:383:22)
        at /Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/src.ts/index.ts:320:42
        at step (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/makotoinoue/work/ens/tmp/scrolltest/node_modules/@ethersproject/web/lib/index.js:5:58)
        at processTicksAndRejections (node:internal/process/task_queues:95:5) {
      code: -32000,
      data: undefined
    },
    requestBody: '{"method":"eth_call","params":[{"to":"0x64cb3a0dcf43ae0ee35c1c15eddf5f46d48fa570","data":"0x61016dc40000000000000000000000005f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000006fd1709289cfcb2c0e660c4293ad1e5dddfafe6c8cb134b6bad3a085aa18fffa1d344bd2c5a9b72d8a5586ea346a5ae8dee196b61f80b2debfa231c471497b4ef2aa6130905d10b2f655acadeeebd4ee8c17beecae7520d8fee3eb54ffc5a738b50f44bae1c149aef78bf6f14a431535650a650fd58ef67d9c6efae226c260eb4fb5daba00917ba7605735373c0040abd8d0fa8b72dbfc7c37db2774eb7791d668ac574995f09e259c8a11c07450412368880d290d824fabb91e2e460af3ae67c90d2049981091fdda7cf286d0f1e16a96afb11239ca561b3023984182f9c246153ad7964a1572f7246186a2b70332b0dde67d3184c7c14aaedccbc67459ade3f152e11b5fd4709209c458eb74a9bbea41a2f25a1f23e502defc98e075ce4f8bc4424194ba33dad24ead38aac3e96577f8e75c0f752723ec3d01c3a529a977065a45bd39641c4e40927455c72175d9cb441fdcf21e3fdae7a287a72ca7bf05af4c2dcce79f9f964ee099b964e17645db014c76585b4c638bec9bb323e92a2f65011a2948b897b61ce090cdab7e2c53237975822056e67bed14aa89573459aeff4e2235ee45937b31fd51a74f2d88ad4ddcb1bcbe2db89a67b2502bb24118f1d9b26f3654b2e3ae399b709290438fecddb47e4339d8047ce07cdbdff66295e50f2ec2ed020327a2a9a459d01cffb1c6b5c4c20fc8d48308e4f6a427f79329048d94156dc6bbb27b3665ee209157db11fb986975f85a9e22655f4f9d4d94a3024cd1bd70f16da36d93ca7521104edfc7d038acf2371d9e1bbd6367affba929d4584d9c4bcc2ad50d279326cdc0911f70543e4eb57a3ead943e44806cbc4dafdcef6af45e80ee9c749429b50573f07f58435d433c5909c1b734644160db86e59b229bf282608f5903c4a9410c237091f1aefb83d6c83c5780498b77f15175cdcb9d21980d63f3730fa72e6864e00ae123893cf7f450afbc5db8e43cdae5efeecfa8dfadb8d2a6c7f191ee8900688dc090682371e6ba1fc158e270276809c1edad0232a5cc0492dbee8e77d4545843c761168338c91abf6f351542752cc4996ab0f5b160956d7dec6f47f8386501510e5090591e65945dd2d4994e86dd9b7bba364849bbed709a42f68e28ef1e9b86e8639169da5e0a4deccd9da615b0521c92c9531385d50c8df23dddcf86fe74bc18426092c850c7a6cf7b1458103d08ad8b0bc16d45adcf9c18808d09e2c6ac3d2eff03826fd17db532bac01f6d74244ec19224fc65d78dcd876ddac787695240bbddc8e09184242467934bf44ce5ee06db3fba86a79da6ce8046612faa8349402deec43c80a0ad150ca36ab5554ff99003af796d48959f342a05542d3b24d4bc3709ff14d0915ae9baf469ad336da960f4b9549a24bbdca3930e44829fae425c6289a2814830432e85b89f9fc70a7087ad56264f48c1b9c2e0cd3c0eab67d9d47080125f5d1092071f6cc893dd197b4faf1c3caaeca8406c3bc8651b7f4dae664634ca9d099d60d01ff24b6fa8dd39204794ea4a5add074452bb125281cbb299efae26bf9ae5f091d7c1d7ae3d4220159d835eac1b919480df6da2a9f3527f485c2bba6b55b9d4928171ba10f1fdbc2a1ec4b525e25f0cd493eca84c2d6566ae1fd73c2566be473092aaed28e0c1bce50ef7d026eb6ed2da08f7c80fd759a07d3d3ef276fe0153a0711017e16cdf773ec997ed9d8f5480d1f240192dc67164e4e71ac5b026f4a3cf008037d567db28782df33142d584e8b19164d4f0775d50263042a70a70d0cdd184b1460e75eb90aba05652c1f14d25e7b7d5c90a66819b5a8c79dcfbdad5b041dad0620c7efefe4c71208c742955250923544cf6eeaf22a78a92c413e35072576fd7f25af7856bd2584ea92508c8b885616cdee40f02c7335d8e16067f40e7f16a99c0425d4bb4c05d0e6f9a8af66df22d0b8e3cf38717c1b59137e0c9d7f911ad4046705080000000000000000000000000000000000000000000000000143000000000000000100000000000000000000000000000000000000000000000000000000000000000cebb333477db78ebb52bb709800a7809be35e14389a7ec346d662c040c726a14a48573a9e2ab3960c69d5bb13c5fc3f7849d8be8f7a3a5eac0e7fe1dfc7e9222074d890456f7b46ad0186f4636992e61a31fd25118015b5a827b275ee6f84ca205f5e99139a17c56eadc3b1d01535224d003b7e5b0000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d317252586750327870444902041d3c5f8c36e5da873d45bfa1d2399a572ac77493ec089cbf88a37b9e944284220101000000000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000005448495320495320534f4d45204d4147494320425954455320464f5220534d54206d3172525867503278704449000000"},"latest"],"id":45,"jsonrpc":"2.0"}',
    requestMethod: 'POST',
    url: 'https://sepolia-rpc.scroll.io'
  }
}
error Command failed with exit code 1.
```