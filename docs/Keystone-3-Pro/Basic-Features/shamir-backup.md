---
title: Shamir Backup
sidebar_position: 8
slug: /shamir-backup
description: Shamir Backup is a secure method for creating and recovering cryptocurrency wallets using Shamir's Secret Sharing algorithm. In this tutorial, we will explore what Shamir Backup is, its categorization, its purpose, and how to generate and import shard seed phrases using the Keystone wallet.
---



# **Shamir Backup** {#f4bfd127d47f47d182fc9b4fb2b01d01}


## **Introduction** {#305029ac0d61429f8875d745bdb60a7f}


Shamir Backup is a secure method for creating and recovering cryptocurrency wallets using Shamir's Secret Sharing algorithm. In this tutorial, we will explore what Shamir Backup is, its categorization, its purpose, and how to generate and import shard seed phrases using the Keystone wallet.


## **Section 1: What is Shamir Backup?** {#b7c059e1cca6430cad5163c5128283ba}


Shamir Backup, based on Shamir's Secret Sharing algorithm, allows you to create multi-signature wallets with distributed seed phrases. This ensures added security and redundancy, as multiple shares are required to access the wallet. The categorization of Shamir Backup depends on the number of shares (n) and the threshold (m) needed to access the wallet. For example, a 2-of-3 Shamir Backup wallet means that there are three shares, and any two of them are sufficient to access the wallet.


## **Section 2: How to Generate Shard Seed Phrases with Keystone** {#f6b934d61e64462fa53ba201cfdf838d}


### **Step 1: Accessing Wallet Settings** {#c3a785a5b80045fb8ead29e077f356a1}

1. Open the Keystone wallet and navigate to the main menu by clicking on the three dots icon (…).
1. Select "Device Settings," then choose "Wallet Settings," and finally, tap "Add Wallet."

### **Step 2: Creating a New Wallet** {#98984c4fb0004924852a9e3735d95ee9}

1. Unlock the wallet by entering your passphrase and reviewing any provided notices. Click "Got it" to proceed.
1. Choose "Create Wallet" to initiate the creation process. Set a new password for the wallet and confirm it. Ensure that this password is unique and not the same as your original wallet's password, as the device associates wallets with their respective passwords during unlocking.
1. Optionally, provide a name for the wallet (you can skip this step) and then select "Shamir Backup." Specify the desired number of shares and the threshold required to access the wallet. For example, if you want to divide the wallet into 3 shares and require any 2 to access it, choose 3 shares and a threshold of 2.

### **Step 3: Generating Shares** {#7c92e3fe78d74f0b8f25789cfc0d46af}

1. Follow the on-screen instructions to create the multi-signature wallet securely. Be sure to do this in a secure environment.
1. Proceed to the next step, where the first share's seed phrase will be displayed. Save it to your clipboard or transcribe it onto a secure physical backup, such as a mnemonic card.
1. Continue through the process, confirming the order of the seed phrases. If you make a mistake in the sequence, you can click the "reset" button in the top left corner to start over.
1. Repeat the process for the second and third shares if applicable. Once you've confirmed the sequence for all shares, your 2-of-3 Shamir Backup wallet will be successfully created.

## **Section 3: How to Import Shard Seed Phrases with Keystone** {#4484ccf2d73241c5966bf10d8f6a58d9}


### **Step 1: Accessing Wallet Settings** {#d8733687cd09458281382df1d5636e83}

1. Open the Keystone wallet and navigate to the main menu by clicking on the three dots icon (…).
1. Select "Device Settings," then choose "Wallet Settings," and finally, tap "Add Wallet."

### **Step 2: Importing a Wallet** {#de9a6655451f42b9860e73b4eb867efe}

1. Unlock the wallet by entering your passphrase and reviewing any provided notices. Click "Got it" to proceed.
1. Choose "Import Wallet" and select the word count corresponding to your shard seed phrases (e.g., 20 or 33).

### **Step 3: Entering Shard Seed Phrases** {#75da4c6d6ea94ff98f770464319b547a}

1. Enter your shard seed phrases in the correct order, starting with the first and second shares. Once entered correctly, you will gain access to your wallet.

By following these steps, you can create and import Shamir Backup wallets using the Keystone wallet, enhancing the security and recoverability of your cryptocurrency holdings.

