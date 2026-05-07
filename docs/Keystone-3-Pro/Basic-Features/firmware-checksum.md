---
title: Firmware Checksum Verification
sidebar_position: 3
slug: /firmware-checksum
---



# **Firmware Checksum Verification** {#fa96bcd41ab2452da9518aaae3af7cbc}


:::tip

Note:

1. This feature is only applicable to version 1.2.4 or later.

2. This feature only applies for firmware update via microSD card.

3. The core of ensuring firmware security lies in the fact that only firmware signed with the official private key can be recognized and installed by the device. Any suspicious firmware from unofficial sources cannot be successfully installed on the device.

:::




Welcome to the Keystone 3 Pro Firmware Verification Tutorial! If you've recently acquired a Keystone 3 Pro device and want to ensure that the installed firmware is legit and secure, you're in the right place. Follow these simple steps to perform a checksum verification and guarantee the integrity of your device's firmware.


### **Prerequisites:** {#9a61a4eda9374da1b83570d0abbb8db2}

- Keystone 3 Pro device
- MicroSD card
- Access to a PC

### **Step 1: Download the Firmware** {#56145af8341d4157806b752d02460620}


**Insert MicroSD Card to Your PC:**

- Take your MicroSD card and insert it into your computer.

**Visit the Official Keystone Website:**

- Open your web browser and go to the official Keystone website: [https://keyst.one/firmware](https://keyst.one/firmware).

**Download the Firmware:**

- Choose the 'SD card Update' option.
- Download the firmware file and save it to your MicroSD card. Make sure the file is named 'keystone3.bin.'

### **Step 2: Install the Firmware** {#8aa9a5dee5574a7ca1c5ed510b358d80}


**Insert MicroSD Card to Keystone 3 Pro:**

- Once the firmware file is downloaded, insert the MicroSD card into your Keystone 3 Pro device.

### **Step 3: Compare Checksums** {#32afc92d64d14bd3a3082c03125f8976}


**Trigger the Firmware Update:1**

- After inserting the MicroSD card, a 'Update Available' pop-up will appear on your Keystone 3 Pro.
- If there is no pop-up, navigate to "Device Settings" -&gt; "About" -&gt; "Firmware" -&gt; "Via MicroSD Card" and tap “update”.

**View Checksum:**

- Tap on 'Show Checksum' in the pop-up.

**Wait for Calculation:**

- Wait for a few seconds as the device calculates the checksum.

**Compare Checksums:**

- Compare the calculated checksum displayed on your Keystone 3 Pro with the one provided on the official Keystone website.

**Verification:**

- If both checksums match, congratulations! Your installed firmware is considered trustworthy.
