---
title: Open Source Code Verification for Firmware
sidebar_position: 6
slug: /verify-checksum
---



# Open Source Code Verification for Firmware {#7888fdae59fc4a1dab6613a9854010b0}


:::tip

In version 1.2.0, we have introduced the "Verify Source Code" feature. Please note:

1. The core of ensuring firmware security lies in the fact that only firmware signed with the official private key can be recognized and installed by the device. Any suspicious firmware from unofficial sources cannot be successfully installed on the device.

2. The current "Verify Source Code" feature is conducted after the successful installation of the firmware, primarily aiming to validate the consistency between the official source code and the firmware package provided on the official website. If you need to verify the firmware checksum before installation, refer to this tutorial: [Verify Checksum](https://guide.keyst.one/docs/verify-checksum).

:::




If you have just installed the Keystone 3 Pro device and want to ensure that the firmware matches the open-source code on GitHub, follow the step-by-step instructions below.


## **Step 1: Download the Latest Firmware** {#0bafc585e55f43408fa67657e8dbf8f5}


Visit the official Keystone website to download 1.2.0 or newer for your Keystone 3 Pro device. You can find it at [https://keyst.one/firmware](https://keyst.one/firmware).


## **Step 2: Install the Firmware** {#48d430b326f44dee9632588fddb923fc}


Once the firmware is downloaded, install it on your Keystone 3 Pro device following the provided instructions.


## **Step 3: Access Device Information and Obtain Checksum** {#98113f9b99ce4ed78b184795f9013ba7}

1. Navigate to "Device Settings" -&gt; "About" -&gt; "Device info" -&gt; "Firmware Version" on your Keystone 3 Pro device.
1. This will take you to the "Verify Source Code" page. Click on "Show Checksum" to obtain the checksum for the installed firmware.

## **Step 4: Calculate Checksum for GitHub Source Code** {#81a167e6729e46979a4107f09f1a558b}

1. Visit [Keystone's open-sourced GitHub repo](https://github.com/KeystoneHQ/keystone3-firmware/blob/release/v1.2.4/docs/verify.md) page and manually calculate the checksum of the firmware as per the instructions.

## **Step 5: Compare Checksums** {#a94a5dda81734a2088721befb2a68372}

1. Compare the manually calculated checksum from Step 4 with the device checksum obtained in Step 3.
1. If the two checksums match, it indicates that the installed firmware is consistent with the open-source code on GitHub.

## FAQ: {#eb90e722d0654864aba0092722f6ba12}


**Q: Why does the checksum displayed on the "Verify Source Code" page differ from the one on the official website?**


A: The firmware file provided on our release page, named **`keystone3.bin`**, is a derived version of the **`mh1903.bin`** file. This transformation involves compressing the original file and incorporating our official signature for enhanced security and authenticity.
The "Source Code Verification" feature is designed to validate the legitimacy of the **`mh1903.bin`** file, while the "Official Firmware Verification" feature is intended to confirm the legitimacy of the **`keystone3.bin`** file. This will results in different checksums.

