---
title: 官网固件的校验和验证（Checksum）
sidebar_position: 3
slug: /firmware-checksum
---



# 官网固件的校验和验证（Checksum） {#c92b22e6606a4be5ad5018cd77b01be8}


:::tip

在版本 1.2.4 中，我们引入了“官网固件校验”的功能，请注意：

1. 此功能仅适用于 1.2.4 以上的版本； 

2. 该功能仅使用于校验 microSD 卡内的固件；

2. 确保固件安全的核心在于，只有经过官方私钥签名的固件才能被设备辨识和安装。任何非官方渠道的可疑固件，无法在设备上安装成功。

:::




欢迎来到Keystone 3 Pro固件验证教程！如果您最近获得了Keystone 3 Pro 设备，并希望确保安装的固件是来自官方且安全的，可以按照以下简单步骤执行校验和验证，保证您设备固件的完整性。


### 准备**：** {#7bebf33ce90a4c8cbc5b362b85acf41c}

- Keystone 3 Pro 设备
- MicroSD 卡
- 电脑

### **第一步：下载固件** {#f5acde4ab5ce4515aed5cfaf1133b9c3}


**将 MicroSD 卡插入您的 PC：**

- 取出 MicroSD 卡并插入您的计算机。

**访问官方 Keystone 网站：**

- 打开您的网络浏览器并访问官方 Keystone 网站：[https://keyst.one/firmware](https://keyst.one/firmware)。

**下载固件：**

- 选择'SD卡升级'选项。
- 下载固件文件并保存到您的 MicroSD 卡根目录下。确保文件名为'keystone3.bin'。

### **第二步：安装固件** {#f1ea8c8753b64cc7b948de78b46a16a1}


**将MicroSD卡插入Keystone 3 Pro：**

- 固件文件下载后，将 MicroSD 卡插入Keystone 3 Pro 设备。

### **第三步：比对校验和** {#d2fa9b383f6d4808853fb33de7fd624e}


**触发固件更新：**

- 在插入 MicroSD 卡后，您的 Keystone 3 Pro 上将出现“Update Available”的弹窗。
- 如果没出现弹窗，可以点击设备上的"Device Settings" -&gt; "About" -&gt; "Firmware" -&gt; "Via MicroSD Card"，点击 “Update”即可进入对应页面。

**查看校验和：**

- 点击弹窗中的 'Show Checksum'。

**等待计算：**

- 等待片刻，设备将计算校验值。

**比对校验和：**

- 将您Keystone 3 Pro上显示的计算出的校验值和与官方Keystone网站上（[https://keyst.one/firmware](https://keyst.one/firmware) 下载固件按钮旁边的 checksum 入口）提供的校验值进行比对。

**验证：**

- 如果两个校验和相匹配，恭喜您！您安装的固件是可信任的。

您已成功完成Keystone 3 Pro固件验证过程。这确保了您设备上的固件在下载或安装过程中没有被篡改，为您提供了一个安全而真实的环境。


通过遵循这些简单的步骤，即使是小白也可以确保其设备固件的真实性和完整性。如果遇到任何问题，请查阅联系Keystone支持寻求帮助。

