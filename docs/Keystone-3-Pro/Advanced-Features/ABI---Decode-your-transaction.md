---
title: ABI - Decode your transaction
sidebar_position: 5
slug: /e698ed37-2754-45e1-bb0c-61fe9b47b61e
---



# **Decoding DeFi Transactions with Keystone Hardware Wallet** {#da8db84681d840bcbf4eeaa94cdfd75d}


## **I. What is an ABI?** {#71be20dd8cda415b907fca12fefcf0dd}


An ABI (Application Binary Interface) is a crucial interface that facilitates communication between two binary program modules. In the Ethereum ecosystem, an ABI serves as a tool for decoding DeFi (Decentralized Finance) transactions.


For more information, check out Keystone's [blog](https://blog.keyst.one/are-you-at-risk-using-defi-with-your-hardware-wallet-8a3d81a27572).


## **II. Why Implement ABI Decoding?** {#2f3dd87dc6de4e3a8d7b31e19629921b}


Keystone, driven by a commitment to enhance transaction security and reliability, recognized the need for safeguarding DeFi projects against potential risks such as [blind signing](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6). To address this, Keystone has developed a feature that implements an ABI on a microSD card. Further details are provided in their [blog](https://blog.keyst.one/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572).


## **III. Keystone's Solution** {#96b6e8814a674571a3d9b804abfb7155}


To decode DeFi transactions using ABI via a microSD card, ensure you have:


### **A. Preparation** {#54e0f1f0a3f84d5bba0f9927ee9a7847}

1. Firmware version 0.9.0 or newer on Keystone Essential or Pro. Refer to the [firmware upgrade guide](https://support.keyst.one/getting-started/firmware-upgrading) for assistance.
1. Bind "MetaMask Extension" with Keystone Hardware Wallet. Follow the [tutorial](https://support.keyst.one/3rd-party-wallets/altcoin-wallets/bind-metamask).
1. MicroSD card (Default FAT32 format, capacity not exceeding 512GB). Keystone can format microSD cards to FAT32 using [this tutorial](https://support.keyst.one/getting-started/firmware-upgrading/how-to-format-a-microsd-card-to-fat32).
1. MicroSD card reader (Not necessary if your laptop has an in-built one).

### **B. Decoding DeFi Transactions** {#3ca80bc3f3664d8cae13d4db24d736b3}

1. Bind "MetaMask Extension" with Keystone Hardware Wallet. Refer to the [tutorial](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone).
1. Insert the microSD card into your computer and download the [latest ABI Pack from Keystone's GitHub](https://github.com/KeystoneHQ/Smart-Contract-Metadata-Registry/releases). Unzip the "contracts.zip" file to the microSD card's root directory.

  :::tip
  
  **Tips:** Verify ABI data using an open-source tool from [GitHub > README](https://github.com/sqlitebrowser/sqlitebrowser).
  
  :::
  


1. Insert the microSD card into Keystone and turn the device on.
1. Create a DeFi transaction and obtain the unsigned transaction data in QR code format. Follow the steps in [this guide](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone).
1. On Keystone, navigate to [Menu] &gt; [Watch-only Wallet] &gt; [MetaMask / DeFi / Web3] &gt; [Confirm]. Select the "scan" icon and scan the QR code from the "MetaMask Extension."

  :::tip
  
  **Tips:** 
  Keystone supports switching wallet paths (ETH) to Ledger Live and Legacy formats. Check the [tutorial](https://support.keyst.one/advanced-features/how-to-switch-eth-path-to-ledger-live-legacy-format) for details.
  
  :::
  


1. Keystone will locate the relevant ABI and decode your transactions, displaying transaction details.

  :::tip
  
  **Attention:**
  Keep the microSD card plugged during verification.
  
  Even if Keystone previously read the necessary ABI, you must insert the microSD card each time you sign a transaction.
  
  :::
  


