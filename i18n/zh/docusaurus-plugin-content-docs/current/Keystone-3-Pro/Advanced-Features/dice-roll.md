---
title: 骰子助记词
sidebar_position: 4
slug: /dice-roll
---



Keystone引入了骰子助记词功能，可以生成标准助记词（如12或24个单词）或Shamir备份钱包。


在本示例中，我们将重点介绍如何使用骰子创建一个24个单词的标准助记词。


## **第1步：准备工作** {#1aac1da3d3434f6b8f70cad89e81df4c}


在开始之前，请确保您具备以下条件：

- Keystone 3 Pro，版本1.2.6或更新版本。如需更新，请前往[固件升级页面](https://keyst.one/firmware)。
- 至少一颗赌场级别的骰子。

## **第2步：访问Keystone 3 Pro上的骰子助记词** {#ad46a30046e54f3cb6ccaa1eb5adc6b8}


**打开 [Device Settings] 页面：**

1. 点击Keystone 3 Pro 主页右上角的三个点；
1. 找到 [Device Settings] → [Wallet Settings] → [Add Wallet]；
1. 输入密码。

**创建新钱包：**

1. 阅读提示并选择 [Create Wallet]；
1. 设置新钱包的密码，命名新钱包；
1. 进入“Backup Options”页面。

**进入骰子助记词页面：**

1. 点击右上角的三个点；
1. 选择 [Change Entropy]，此时您就进入了“骰子助记词”的生成步骤内。

## **第3步：骰子助记词生成** {#d505bb19ac6b42bab91b27496aff011c}


**选择骰子助记词：**

1. 在“Change Entropy”页面上，选择“Dice Rolls”；
1. 阅读说明并打开它。

**掷骰子：**

1. 至少掷50次骰子。**为了增强安全性，建议掷99次以获得256位熵。**

**备份您的助记词：**

1. 一旦满意您的骰子投掷次数，点击右下角的勾号进入“Backup Your Seed”页面；
1. 您的设备将基于从骰子投掷中获得的熵生成一个24个单词的助记词。

:::tip

如果需生成12个单词的助记词，可以在“Backup Your Seed”页面的右上角进行切换。

:::




以上就是使用骰子生成助记词的全部内容！

