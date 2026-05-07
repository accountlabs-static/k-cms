---
title: 固件的开源代码验证
sidebar_position: 6
slug: /verify-checksum
---



# 固件的开源代码验证 {#2f9714c178cf47ea957ec6c86e0e8842}


:::tip

在版本1.2.2中，我们引入了“开源代码验证”功能，请注意：

1. 确保固件安全的核心在于，只有经过官方私钥签名的固件才能被设备辨识和安装。任何非官方渠道的可疑固件，无法在设备上安装成功。

2. 此“开源代码验证”功能是在成功安装固件后进行的，其主要目的是验证官方源代码与官方网站上提供的固件包的一致性。如果您需要在验证安装前的固件Checksum，请参考这篇教程：[https://guide.keyst.one/docs/verify-checksum](https://guide.keyst.one/docs/verify-checksum)

:::




如果您刚刚安装了 Keystone 3 Pro 设备并希望确保固件是与 GitHub 上的开源代码一致，请按照以下逐步说明执行校验操作。


## **第 1 步：下载最新固件** {#2e445d46f201445b8a4e2781324d70df}


访问官方 Keystone 网站，下载适用于您的 Keystone 3 Pro 设备的最新固件。您可以在 [https://keyst.one/firmware](https://keyst.one/firmware) 找到它。


## **第 2 步：安装固件** {#681bbf0f9ee34a8e990c17316f454458}


下载固件后，请按照提供的说明在您的 Keystone 3 Pro 设备上安装固件。


## **第 3 步：访问设备信息并获取 Checksum** {#2ee41c384f5244098f11dc2cebcd8560}

1. 在 Keystone 3 Pro 设备上导航到 "Device Settings" -&gt; "About" -&gt; "Device info" -&gt; "Firmware Version"。
1. 此时，就会进入"Verify Source Code"页面，然后点击 "Show Checksum" 以获取已安装固件的校验码。

## **第 4 步：计算 GitHub 上源代码的 Checksum** {#eab590cdaeab44fe8c14a22ee19f0514}

1. 进入 Keystone's open-sourced GitHub repo 页面，根据提示手动完成固件的Checksum计算。

## **第 5 步：比对**校验码 {#7169851c378b4f048fc8f30477ba23d2}

1. 将第 4 步手动计算得出的校验码与第 3 步获取的设备校验码进行比较。
1. 如果二者校验码匹配，则表示您安装的固件是与 GitHub 上的开源代码一致。

## **常见问题（FAQ）:** {#b9353e8a9aa846aba237e0d2f7ca6541}


**问: 为什么“Verify Source Code”页面上显示的校验和与官方网站上的不同？**


**答:** 官网上提供的固件文件，命名为 **`keystone3.bin`**，是由 **`mh1903.bin`** 文件衍生而来的。这一转换涉及对原始文件的压缩，并添加我们的官方签名，以增强安全性和真实性。
“Verify Source Code”功能用于验证 **`mh1903.bin`** 文件的真实性，而“官方固件验证”功能用于验证 **`keystone3.bin`** 文件的真实性。由于二者是根据不同的文件计算的，因此校验和也不同。

