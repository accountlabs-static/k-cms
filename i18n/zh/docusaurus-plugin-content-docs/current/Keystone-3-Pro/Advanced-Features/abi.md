---
title: ABI - 交易解析
sidebar_position: 5
slug: /abi
description: Keystone 3 Pro在签署交易时，支持将交易数据解析为真实数据，以便用户辨别交易的真实性。
---



# **使用Keystone硬件钱包解码DeFi交易** {#afde0a2d794043a7bc57761055266e4a}


## **I. 什么是ABI？** {#c7c7e38177b6478a82ec64d86f7d6696}


ABI（应用二进制接口）是两个二进制程序模块之间进行信息交流的关键接口。在以太坊生态系统中，ABI就像是解码DeFi交易的“工具”。


有关更多信息，请查看Keystone的[博客](https://blog.keyst.one/are-you-at-risk-using-defi-with-your-hardware-wallet-8a3d81a27572)。


## **II. 为什么实施ABI解码？** {#5dbe25ea5876479ab72be2a969957539}


Keystone的愿景和使命始终是使交易更安全可靠。考虑到DeFi项目的需求以及[盲签](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6)的潜在后果，Keystone开发了在 microSD 卡上实施ABI解码的功能。详细信息请参阅他们的[博客](https://blog.keyst.one/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572)。


## **III. Keystone的解决方案** {#432275977081410b9f284ea25f867700}


要使用 microSD 卡解码DeFi交易，确保您具备以下条件：


### **A. 准备** {#987a66afaff24af986972c2e13362c79}

1. 在Keystone 3 Pro上运行的固件版本 0.9.0 或更新版本。请参考[固件升级](https://support.keyst.one/getting-started/firmware-upgrading)以获取更多帮助。
1. 将“MetaMask扩展”与Keystone硬件钱包绑定。请按照[Tutorial](https://support.keyst.one/3rd-party-wallets/altcoin-wallets/bind-metamask)进行操作。
1. MicroSD 卡（默认FAT32格式，容量不超过512GB）。Keystone可以使用[Tutorial](https://support.keyst.one/getting-started/firmware-upgrading/how-to-format-a-microsd-card-to-fat32)将微型SD卡格式化为FAT32。
1. MicroSD 卡读卡器（如果您的笔记本电脑内置了读卡器，则无需此项）。

### **B. 解码DeFi交易** {#665c43e06996493ba82787a7b337aea6}

1. 将“MetaMask扩展”与Keystone硬件钱包绑定。请参考[Tutorial](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone)。
1. 将 microSD 卡插入计算机并从Keystone的[GitHub](https://github.com/KeystoneHQ/Smart-Contract-Metadata-Registry/releases)下载最新的ABI Pack。将“contracts.zip”文件解压缩到 microSD 卡的根目录。

  :::tip
  
  您可以使用来自[GitHub > REDEME](https://github.com/sqlitebrowser/sqlitebrowser)的开源工具验证ABI SQLite中的数据。
  
  :::
  


1. 将 microSD 卡插入Keystone并打开设备。
1. 创建DeFi交易并以二维码的格式获取未签名的交易数据。请按照[此指南](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone)的步骤进行操作。
1. 在Keystone上选择[Menu] &gt; [Watch-only Wallet] &gt; [MetaMask / DeFi / Web3] &gt; [Confirm]。然后选择“scan”图标并扫描“MetaMask扩展”显示的二维码。

  :::tip
  
  Keystone支持在MetaMask / DeFi / Web3模式中切换钱包路径（ETH）到Ledger Live和Legacy格式。请查看[此处](https://support.keyst.one/advanced-features/how-to-switch-eth-path-to-ledger-live-legacy-format)了解详细信息。
  
  :::
  


1. Keystone将找到相关的ABI并成功解码您的交易。Keystone还将显示交易详细信息。

  :::tip
  
  **注意：**
  1. 在验证过程中，请始终将 microSD 卡插在Keystone设备内。在完成所有签名步骤之前，请勿拔出 microSD 卡。
  
  1. 即使Keystone之前已读取了所需的ABI，它也不会记住。每次签署交易时，您仍然需要插入带有相关ABI列表的 microSD 卡才能使此功能正常工作。
  
  :::
  


1. 如果Keystone未能找到相关的ABI，它将显示交易的编码版本。
