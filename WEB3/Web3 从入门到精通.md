# Web3 从入门到精通

> 一本面向零基础读者的实用手册：从概念理解到资产安全，从链上实操到交易投资，再到 DeFi 与项目研究，逐步走向独立判断风险与机会的能力。

---

## 前言

过去十几年，"加密货币"、"区块链"、"Web3" 这些词从极客圈蔓延到大众视野。对普通人而言，它既是新机会，也是新陷阱。本书的写作立场很简单：**把一件很新的事，用读者已有的生活经验讲明白，再把读者送上可以独立分析的台阶。**

本书不是一本投资建议合集，也不是一本单纯的技术教科书。它按照学习路径组织，每一章都围绕"你先得搞清楚什么"、"关键机制是什么"、"怎么动手做一次"、"别人常踩哪些坑"、"怎么检查自己是否学会了"这五个问题展开。

**阅读建议：**
- 第 1–5 章是每位读者都应完整读完的地基，尤其是安全部分。
- 第 6–8 章面向交易与投资管理，风格偏工具与纪律。
- 第 9–12 章进入链上应用世界，可按兴趣挑章阅读。
- 第 13–15 章偏方法与行动，适合复盘与进阶。
- 书末附录提供速查表、研究模板与 30/60/90 天计划。

**需要声明的三件事：**
1. 加密资产波动剧烈，本书所有例子只用于理解概念，不构成投资建议。
2. 监管、产品、协议都在快速迭代，书中涉及的具体规则、费率、功能可能已经变化，请以官方信息为准。
3. "自己掌握私钥，自己负责"是本书的底线原则，不会为了降低门槛而美化风险。

准备好了，我们开始。

---

## 第一章 站在入口处：Web3 到底是什么

> "每一次互联网的形态变迁，都重新定义了'谁拥有什么'。
> Web1 让我们拥有浏览信息的权利，Web2 让我们拥有发表内容的权利，
> Web3 试图让我们第一次真正拥有**数据和资产本身**。"

![Web3 概念插图](https://public.bnbstatic.com/static/academy/uploads/6b162ed8a4e34393b8a1540a10b837ff.png)

### 本章目标

- 用一套"生活化"的类比，彻底讲清 Web3、区块链、加密货币三者的关系
- 理解互联网从 Web1 到 Web3 的演进逻辑，以及它解决了什么问题
- 理解去中心化、账本、共识、网络效应和价值来源
- 亲手在区块链浏览器上验证一笔真实交易
- 识别这一领域最常见的 7 个概念误区

---

### 1.1 读者先要解决的问题：三个词的混用

很多人第一次接触这个行业，都会被三个同时出现又互相混用的词绕晕：

- **区块链 (Blockchain)**：一种**技术**——分布式账本。
- **加密货币 (Cryptocurrency)**：跑在区块链上的**资产**。
- **Web3**：一种**互联网形态**——让用户真正拥有数据与资产的下一代互联网。

有一个来自币安学院的经典类比——

> **网站**是用来分享信息的特殊技术。
> **搜索引擎**则是使用网站技术最流行且最普遍的方法。
> 反过来，**谷歌**又是最流行、最知名的搜索引擎。
>
> 同样地：
> **区块链**是一种用于记录信息的特殊技术。
> **加密货币**则是一种使用区块链技术最流行且最普遍的方式。
> 反过来，**比特币**则是一种最流行的加密货币。

如果非要一句话概括：**区块链是高速公路，加密货币是在路上跑的车，Web3 则是"人们用这套路网重新定义了出行方式"。** 三者不是替代关系，而是**层层堆叠**：

```
┌─────────────────────────────────────────────────────┐
│  Web3      (新一代互联网：用户拥有数据与资产)        │
│  ┌────────────────────────────────────────────┐    │
│  │  加密货币 / NFT / 稳定币 / 代币化 RWA      │    │
│  │  ┌──────────────────────────────────┐      │    │
│  │  │  区块链 (比特币 / 以太坊 / BSC…) │      │    │
│  │  │  ┌────────────────────────┐      │      │    │
│  │  │  │  密码学 + P2P 网络     │      │      │    │
│  │  │  └────────────────────────┘      │      │    │
│  │  └──────────────────────────────────┘      │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

读到这里请先别急着往下翻。**把这三个词各自用一句话在脑子里讲清楚**，这是后面一切内容的地基。

---

### 1.2 互联网的三次浪潮：Web1 → Web2 → Web3

要理解 Web3 的意义，必须先理解它在和什么东西对话。

#### Web1 (约 1990–2004)：只读的信息墙

Web1 时代的网页几乎全部是**静态 HTML**。用户能做的事只有一件：**读**。想发表内容？你得学会 HTML、租服务器、买域名。普通人是信息的接收者，不是参与者。

#### Web2 (约 2004–至今)：可读可写的平台

博客、YouTube、微博、推特、Facebook、抖音——用户第一次可以**大规模地创造、分享和互动**。Web2 的关键突破是**"平台"**这种商业模式：平台提供服务，用户免费使用，平台用用户的数据赚钱。

但 Web2 也埋下了一颗雷：
- 你的账号和数据，**属于平台不属于你**。
- 你的粉丝和内容，**平台一禁就没了**。
- 你创造的价值 (观看量、互动量)，平台用来卖广告，**你拿不到大头**。
- 平台可以**单方面改变规则**：改算法、封账号、下架内容、抽成从 20% 涨到 30%。

#### Web3 (约 2020–)：可读、可写、**可拥有**

Web3 的核心承诺：**把账号、数据、资产的所有权还给用户。**

实现这一点的底层技术就是**区块链**和**加密货币**。两者给 Web3 带来了 5 个关键能力：

| 能力 | 含义 |
| --- | --- |
| **去中心化** | 没有单一平台能关停、审查或修改 |
| **无需许可** | 任何人都能接入，不需要谁批准 |
| **去信任化** | 不用信任中介，只信任代码和网络 |
| **原生数字支付** | 账号自带"钱包"，转钱像发消息一样快 |
| **数字所有权** | NFT、代币证明了"这是我的，不是平台的" |

#### 三代互联网对照表

| 维度 | Web1 | Web2 | Web3 |
| --- | --- | --- | --- |
| **用户行为** | 只读 | 可读可写 | 可读可写**可拥有** |
| **内容生产者** | 少数网站主 | 平台用户 | 所有人 |
| **数据归属** | 网站所有者 | **平台** | **用户自己** |
| **身份** | 一个个网站账号 | 平台账号 (邮箱/手机号) | 加密钱包 / 链上身份 |
| **支付基础设施** | 无 | 支付宝/PayPal 等中心化支付 | 链上原生支付 |
| **组织形态** | 个人网站 | 互联网公司 | 协议 / DAO |
| **典型代表** | 静态主页、雅虎目录 | Google、Facebook、微博 | Ethereum、Uniswap、ENS |
| **信任机制** | 信任网站主 | 信任平台 | 信任代码与共识 |

#### 现实远比口号骨感

2026 年，Web3 还远不是大多数人的日常。一组可以参考的数字：

- 全球约有 **5.6 亿–8.2 亿** 人持有加密货币或 Web3 钱包，全球渗透率约 **10–15%**。
- 月活跃 Web3 应用 (DApp) 用户量级为 **千万级**，远低于主流 Web2 平台的十亿级。
- 采用最快的是**阿联酋 (31%)、新加坡 (24%)、土耳其 (25.6%)、巴西 (20.6%)** 这些"对本国法币或金融服务有强烈需求"的市场。
- 美国、欧盟、香港、新加坡、阿联酋等主要法域都已出台或落地加密资产监管框架 (如欧盟的 MiCA、美国的 GENIUS 法案)。

换句话说：**Web3 不再是空想，但也远没到"取代 Web2"的阶段。** 它更像 2005 年的移动互联网——基础设施正在快速就位，少数爆款应用开始出现，但大部分用户还在观望。

---

### 1.3 区块链：一本"谁都无法私自篡改的全球账本"

#### 1.3.1 一个直观的类比

把区块链想象成一本**全球共享、全员可见、不能撕页、只能往后翻的记账本**：

- 每一页叫一个 **区块 (Block)**，记录着最近一批交易。
- 每翻到新的一页，都会把**前一页内容的指纹 (哈希)** 写到页首。
- 一旦写上去并被足够多人抄录，任何人想偷偷改旧页，后面所有页的指纹都会对不上。
- 这本账本的**副本分布在全球上万台电脑 (节点) 上**，没人能一声令下把它烧掉。

这是区块链做的两件事：**记下每一笔**，然后**让它们谁都改不了**。

#### 1.3.2 区块链 = 分布式数据库 + 密码学 + 共识机制 + 经济激励

缺一不可：

- **分布式数据库**：账本的副本分散在所有节点上，任何人都能验证。
- **密码学**：每个区块用哈希函数 "指纹化"，改一字符，指纹完全变。
- **共识机制**：陌生人之间靠一套规则达成"下一页写什么"的共识 (PoW、PoS 等)。
- **经济激励**：通过发放代币奖励维护账本的节点/矿工，让"帮网络干活"变成一件划得来的事。

#### 1.3.3 区块的结构 (ASCII 图)

```
区块 N-1                  区块 N                    区块 N+1
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  区块头 Header  │       │  区块头 Header  │       │  区块头 Header  │
│  - 前一区块哈希 │ ─────►│  - 前一区块哈希 │ ─────►│  - 前一区块哈希 │
│  - Merkle 根    │       │  - Merkle 根    │       │  - Merkle 根    │
│  - 时间戳       │       │  - 时间戳       │       │  - 时间戳       │
│  - Nonce        │       │  - Nonce        │       │  - Nonce        │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│  交易 1         │       │  交易 1         │       │  交易 1         │
│  交易 2         │       │  交易 2         │       │  交易 2         │
│  ...            │       │  ...            │       │  ...            │
│  交易 N         │       │  交易 N         │       │  交易 N         │
└─────────────────┘       └─────────────────┘       └─────────────────┘
```

几个关键字段：
- **前一区块哈希 (Prev Hash)**：把新区块和上一块焊死在一起，这就是"链"。
- **Merkle 根 (Merkle Root)**：所有交易两两哈希、层层合并得到的"指纹之指纹"。它让你**不用下载全部交易，就能验证某一笔交易是否在某个区块里**——这也是手机钱包 (轻节点) 能工作的原因。
- **Nonce**：矿工调整以让整个区块哈希满足难度要求的变量。
- **时间戳**：该区块的生成时间。

![区块链结构示意](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/11aa306bf21843c985a5e77c07d01e9e.)

#### 1.3.4 一笔交易是如何被"写进历史"的

以一笔转账为例：

1. **发起**：你用私钥对"把 1 BTC 给 Alice"这条消息签名，广播到全网。
2. **验证**：节点检查签名、余额、交易格式是否合法。
3. **打包**：矿工 (PoW) 或验证者 (PoS) 把这批交易压进一个新区块。
4. **共识**：新区块被全网验证并接受。
5. **确认**：之后每多一个新区块，你这笔交易就多一次"确认"，被反悔/重写的概率指数级下降。

![区块链交易流程](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/b7a266783f8f4f418f1d2488ad197c8e.)

比特币一般等 **6 次确认 (约 1 小时)** 视为最终。以太坊 PoS 后每 12 秒出块，2 个 Epoch (约 13 分钟) 后视为**"终结化 (Finalized)"**。

#### 1.3.5 一张速览时间线：区块链简史

```
1991 ─── Haber & Stornetta 提出"用密码学给文档加时间戳" (区块链最早的理论雏形)
1992 ─── 引入 Merkle 树，让批量文档的验证变得可行
2004 ─── Hal Finney 做出 RPoW (可重复使用工作量证明) ─── 区块链的前身
2008 ─── 中本聪发布比特币白皮书《一种点对点电子现金系统》
2009 ─── 比特币创世区块被挖出；第一枚 BTC 从中本聪转给 Hal Finney
2013 ─── Vitalik Buterin 发表以太坊白皮书：引入智能合约与 EVM
2015 ─── 以太坊主网上线
2017 ─── ICO 与代币狂潮，NFT 概念初露
2020 ─── DeFi Summer，链上金融爆发
2021 ─── NFT 破圈 + L2 兴起
2022 ─── 以太坊完成 Merge，PoW → PoS
2024 ─── 美国现货比特币 ETF 获批，机构大规模入场
2025 ─── 稳定币 GENIUS 法案落地，RWA 走向主流
2026 ─── 全球加密用户突破 5–8 亿
```

区块链的发明不是一次"灵感乍现"——它是**信用、密码学、分布式系统、博弈论**几十年积累的汇流。

---

### 1.4 加密货币：在区块链上跑起来的"数字资产"

#### 1.4.1 定义与特性

**加密货币 (Cryptocurrency) = 采用密码学保护的数字资产，依托区块链，在点对点网络中被发送和接收。**

和法币相比，它有 5 个区别于传统货币的特性：

| 特性 | 含义 |
| --- | --- |
| **去中心化** | 没有中央银行能决定"增发多少"或"冻结谁的账户"。 |
| **高透明** | 所有交易在公共账本上可查。 |
| **不可篡改** | 一旦上链，几乎无法撤销。 |
| **可编程** | 以太坊等链上的代币可以通过智能合约自动执行逻辑 (DeFi、NFT、DAO)。 |
| **无国界** | 24 小时运行，跨境转账无需对公账户、SWIFT 等。 |

#### 1.4.2 市值 Top 5 与它们代表的东西

截至 2026 年，市值长期稳居前 5 的加密资产：

| 排名 | 代币 | 代表的叙事 |
| --- | --- | --- |
| 1 | **BTC** (比特币) | 数字黄金，价值储存。总量 2100 万，稀缺叙事最强。 |
| 2 | **ETH** (以太坊) | 世界计算机。智能合约平台，DeFi/NFT/L2 生态中枢。 |
| 3 | **USDT** (泰达币) | 美元稳定币，加密世界的"现金"。 |
| 4 | **BNB** | BNB Chain 原生代币 + 交易所生态代币，兼具实用与治理。 |
| 5 | **SOL** (Solana) | 高吞吐公链代表，主打"可用户级应用的链"。 |

市值的公式非常简单：

> **市值 = 流通供应量 × 当前价格**

但**千万别只看市值**。更应同时看完全稀释市值 (FDV)、解锁时间表、日活地址、手续费收入——这些决定了"现价背后有没有真实需求"。

#### 1.4.3 加密资产的价值从哪里来？

这是所有新手最难跨过的门槛。可以用四根支柱来理解：

```
    价值
     ▲
     │
     │   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
     │   │  稀缺性  │ │  网络效应│ │  效用    │ │  共识/信任│
     │   │          │ │          │ │          │ │          │
     │   │ BTC 2100 │ │ 用户越多 │ │ 支付Gas  │ │ 社区/文化│
     │   │ 万总量   │ │ 越有用   │ │ 质押收益 │ │ 品牌背书 │
     │   │ 减半机制 │ │ 开发者多 │ │ 治理权   │ │ 制度接纳 │
     │   └──────────┘ └──────────┘ └──────────┘ └──────────┘
     │
     └──────────────────────────────────────────────────►
                              时间
```

**并不存在"它就应该值多少钱"的硬规则。**加密资产的价值和法币一样，**最终都来自人群的共识与信任**——不同的是，加密资产把这种共识写进了代码和数学。

#### 1.4.4 加密货币的几种分类

初学者容易把所有链上资产都叫"币"，其实它们的用途和风险非常不同：

- **主网原生币 (Coins)**：BTC、ETH、SOL、BNB——用来付手续费、维护网络。
- **实用型代币 (Utility Tokens)**：用来在某个协议内解锁功能、领取奖励。
- **治理代币 (Governance Tokens)**：UNI、COMP 等，代表投票权。
- **稳定币 (Stablecoins)**：USDT、USDC、DAI——价格锚定法币或资产。
- **NFT**：非同质化代币，代表独一无二的数字资产 (图片、会员、土地、证书)。
- **代币化 RWA**：代币化国债、房产、商品等现实世界资产。
- **Meme 币**：主要由社群文化驱动，基本面弱，波动极大。

搞清楚你手里拿的是哪一种，比盯盘更重要。

---

### 1.5 Web3 的五大关键属性

前面讲了底层 (区块链) 和中间层 (加密货币)，现在把镜头拉到应用层：**Web3 到底给普通用户带来了什么？**

#### ① 去中心化 (Decentralization)

账号、数据、资金不再集中在单一平台手中。你在 Uniswap 上的交易历史、在 ENS 上绑定的域名、在 OpenSea 上买的 NFT——**都在链上，任何前端都能读取**。哪天 Uniswap 网站关闭，你在链上的 LP 份额依然还在，可以用其他前端赎回。

#### ② 无需许可 (Permissionless)

你不需要向任何人申请"允许使用"。一个 12 位助记词就是你进入所有链上应用的钥匙。对于银行账户开不下来、信用卡被拒、所在国外汇管制严格的人群，这一点有非常具体的意义。

#### ③ 去信任化 (Trustless)

**不是"不要信任"，而是"不需要信任某个中介"。**你信任的是代码和共识算法，而不是某家公司的高管。这并不意味着没有风险 (代码可能有 Bug、治理可能被攻击)，但它把风险**从"会不会跑路"转成了"代码是否正确"**。

#### ④ 数字所有权 (Digital Ownership)

你买的 NFT，是**链上你的地址名下的一条记录**，任何平台都无法把它从你这儿抢走。DApp 读取你的资产，只是把链上数据显示出来——钥匙始终在你手里。

#### ⑤ 抗审查 (Censorship Resistance)

比特币诞生的那一刻起，这就是它的核心承诺。2010 年维基解密被主流支付渠道封锁，是比特币早期最著名的支付用例。**这项能力同时是优点和争议**——它能保护异见者和小众群体，但也可能被用于规避制裁和洗钱。

#### Web3 ≠ 只有区块链

Web3 的愿景里还包括**虚拟现实 (VR)、增强现实 (AR)、物联网 (IoT)、人工智能 (AI)、去中心化存储**等一系列技术。区块链负责"权属与价值流转"，其他技术负责"新体验"。它们不是对立关系，是**互补**关系。

---

### 1.6 区块链的应用场景：远不止炒币

加密资产是区块链最先、最热的用例，但不是唯一。了解下面这些场景能让你对"这门技术能做什么"有更完整的判断。

| 场景 | 链带来的改变 | 代表案例 |
| --- | --- | --- |
| **跨境汇款** | 24/7、分钟级到账、手续费远低于 SWIFT | USDT 跨境、Stellar、Ripple |
| **供应链溯源** | 不可篡改的原产地/流通记录 | IBM Food Trust、沃尔玛生鲜追溯 |
| **慈善捐款透明化** | 每一笔钱的流向链上可查 | Binance Charity、GiveDirectly |
| **数字身份** | 自主可携带，跨平台可用 | Worldcoin、ENS、Lens |
| **电子政务/投票** | 防篡改、可审计 | 爱沙尼亚 e-Residency |
| **医疗数据** | 用户自主授权，跨机构共享 | MedRec、Medicalchain |
| **游戏道具** | 玩家真正拥有道具，可跨游戏使用 | Axie、Illuvium、Sandbox |
| **版权与分成** | 创作使用记录上链，自动分发版税 | Audius、Royal |
| **预测市场** | 公开可验证的集体预测 | Polymarket、Augur |
| **物联网 (IoT)** | 设备自动结算、数据防篡改 | Helium、IOTA |

> **什么时候该用区块链？**
> 一条朴素的判断准则：**"在多个互不信任的参与方之间，需要一份大家都承认的、不可篡改的记录"**——这是链的甜区。如果所有参与方都信任某一个中心化机构，用传统数据库更快更便宜。

---

### 1.7 一个完整的案例：亲手查一笔链上交易

读了这么多概念，最有效的消化方式是**动一次手**。下面是零成本、5 分钟可完成的练习。

#### 步骤 1：选一个区块链浏览器

| 公链 | 推荐浏览器 |
| --- | --- |
| 比特币 | [mempool.space](https://mempool.space)、[blockchain.com](https://blockchain.com) |
| 以太坊 | [etherscan.io](https://etherscan.io) |
| BNB Chain | [bscscan.com](https://bscscan.com) |
| Solana | [solscan.io](https://solscan.io) |
| Polygon | [polygonscan.com](https://polygonscan.com) |

![BscScan 浏览器界面](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/e95f7d97d9724bed86ca7ac2f03a3e80.)

#### 步骤 2：选个"有名的地址"来研究

用这个以太坊地址试试：

```
0xA910f92ACdAf488fa6eF02174fb86208Ad7722ba   (这是一个活跃的早期以太坊地址)
```

或者直接搜一个交易哈希 (TXID)，比如 [Vitalik 最近的转账](https://etherscan.io)。

#### 步骤 3：你会在浏览器里看到什么？

![交易详情](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/f60ee93ce6bf4f0490f0145e7eb5774d.)

一笔交易的关键字段：

| 字段 | 含义 |
| --- | --- |
| **Transaction Hash** | 这笔交易在全网唯一的"身份证" |
| **Status** | 成功 / 失败 / 待确认 |
| **Block** | 它被打包进了第几号区块 |
| **Timestamp** | 打包时间 |
| **From / To** | 发送方 / 接收方地址 |
| **Value** | 转账金额 |
| **Transaction Fee** | 付了多少 Gas 费 |
| **Gas Price / Gas Used** | 单价 × 用量 = 手续费 |
| **Nonce** | 这个地址的第几笔交易 |
| **Input Data** | 如果是智能合约调用，会显示调用的函数与参数 |

#### 步骤 4：体会三件"在银行不可能"的事

1. **你不需要登录任何系统**，就能查看别人的完整交易历史。
2. **你可以在几秒内验证一笔陌生人的转账**，而不需要信任任何中介。
3. **你查看的是"真账"**，不是别人告诉你的版本——这是区块链的核心魅力。

这一练习能让"去中心化"、"透明"、"不可篡改"这些抽象词第一次变成你亲手触达的现实。

#### 彩蛋：巨鲸观察 (Whale Watching)

专业分析师和链上侦探每天都在干的事就是**盯着大额地址的动作**：
- 某个交易所冷钱包往哪个地址挪了 1 万枚 BTC？
- 某个 VC 的代币解锁了，有没有马上转到交易所？
- 某个 DeFi 协议的金库今天在往哪里调仓？

工具：Arkham、Nansen、DeBank、Dune。这些数据**任何人都能看**，这是传统金融世界里不可想象的透明度。

---

### 1.8 常见误区与风险提醒

新手最容易踩的 7 个思维陷阱，每一条都值得读两遍：

#### 误区 1："区块链 = 比特币"
区块链是技术，比特币是最早也最著名的应用。两者是"引擎和第一辆车"的关系。现在路上跑的车 (链) 已经有几百种。

#### 误区 2："去中心化 = 绝对安全"
技术去中心化**不代表你的钱包安全**。绝大多数用户的损失来自自己私钥泄露、钓鱼链接、合约授权被骗——**和链本身有没有被攻破几乎无关**。链越安全，你自己那一道门就越关键。

#### 误区 3："区块链能存所有东西"
链上存储**极其昂贵** (以太坊主网每 KB 数据大约几美元)。所以真实的架构是**"链上存指纹/权属 + 链下存原始数据 (IPFS、Arweave)"**。NFT 图片几乎都不在链上。

#### 误区 4："Web3 = 赚钱"
Web3 是一种技术范式，投机是其中一个侧面，不是核心。过去每一轮牛市都会把"赚钱"叙事推到最前面，随后留下一地鸡毛；活下来的是那些**真的解决了某类用户问题的协议**。

#### 误区 5："链上是匿名的，所以很隐私"
**链上是"假名 (Pseudonymous)"，不是"匿名 (Anonymous)"。**你的地址没写你的名字，但一旦你在任何一家 KYC 过的交易所提现到这个地址，它就和你本人绑定了。链上分析公司能顺藤摸瓜查到你几年前的每一笔交易。

#### 误区 6："上链的东西永远无法修改"
**技术上**确实如此，但**社会上**存在"硬分叉"——参与者共识改变，一条链可以分成两条，历史可以被回滚。以太坊的 DAO 分叉 (产生了 ETH 和 ETC) 就是经典案例。

#### 误区 7："所有代币都有自己的区块链"
绝大多数代币 (ERC-20、BEP-20、SPL 等) 只是跑在以太坊、BNB Chain、Solana 等现成链上的**智能合约**。只有少数项目做了独立公链。判断一个代币的安全性，要看它依托的**底层链 + 合约代码**两层。

---

### 1.9 本章检查清单与练习

✅ **必做**
- [ ] 用一句话向身边非技术朋友解释"什么是区块链"——讲完不被反问才算合格。
- [ ] 写下三个非加密货币的区块链应用场景，并解释为什么链比传统数据库更合适。
- [ ] 在 Etherscan 或 BscScan 上随便找一个大额地址，查看它最近 5 笔交易，判断它是交易所、DEX 还是个人。
- [ ] 写下自己对"为什么要用 Web3"的三个理由——如果一个都写不出来，先别急着投入资金。

🎯 **进阶**
- [ ] 读完本章的"价值四支柱"后，为你最看好的一个加密资产写一份 300 字的"价值来源分析"。
- [ ] 在 Mempool.space 上观察比特币的**内存池 (Mempool)**，数一下现在有多少笔交易正在排队等待打包。
- [ ] 找一个新闻里提到过的链上事件 (比如某交易所被盗、某 DAO 通过提案)，用浏览器把整个事件的链上动作自己复现一遍。

🧠 **思考题 (没有标准答案)**
1. Web2 平台 (如微博、抖音) 在你生活中提供了哪些价值？哪些是 Web3 暂时无法替代的？
2. "去中心化"和"效率"是互相矛盾的，你愿意在哪些场景为去中心化支付效率代价？
3. 如果 Web3 十年后真的普及，你认为最先被颠覆的会是哪个行业？为什么？

> **本章结束。** 你已经拥有了进入这个世界的第一张地图。
> 下一章，我们要把地图放大——深入区块链内部，看清每一块积木到底是什么。

---

### 1.10 延伸阅读与引用

以下资料按主题分组，其中 `output/` 路径指向本书素材工程内收录的币安学院原文，外部链接是公开可访问的网络资源。**先读本章，再按兴趣进去深挖**，不必按顺序看。

#### 📚 区块链基础与历史

- [区块链概念及其运行方式介绍](../output/309-what-is-blockchain-and-how-does-it-work.md) — 最完整的入门长文，本章多处类比来源。
- [区块链技术综合指南](../output/585-what-is-blockchain-technology-a-comprehensive-guide-for-beginners.md) — 面向零基础的另一版叙述，补充视角。
- [区块链的历史](../output/664-history-of-blockchain.md) — 1991 到以太坊的完整时间线。
- [区块链与比特币的区别](../output/672-difference-between-blockchain-and-bitcoin.md) — "网站/搜索引擎/谷歌"类比的原始出处。
- [什么是节点？](../output/669-what-are-nodes.md) — 节点类型、全节点 vs 轻节点。
- [区块链的优点和缺点](../output/650-positives-and-negatives-of-blockchain.md) — 对区块链的局限性做了较坦率的总结。

#### 💰 加密货币与价值来源

- [加密货币的概念及其运作方式](../output/666-what-is-cryptocurrency.md) — 本章 Top 5 代币介绍的主要来源。
- [什么是比特币及其如何运作？](../output/571-what-is-bitcoin.md) — BTC 原生运作机制。
- [比特币为什么有价值？](../output/457-why-does-bitcoin-have-value.md) — "价值四支柱"概念的深入讨论。
- [比特币是否是一种价值储存手段？](../output/560-is-bitcoin-a-store-of-value.md) — 数字黄金叙事的正反辩论。
- [什么是加密货币白皮书？](../output/364-what-is-a-cryptocurrency-whitepaper.md) — 怎样读懂一份项目白皮书。
- [加密货币支付详解](../output/408-crypto-payments-explained.md) — 链上支付 vs 传统支付的对比。
- [什么是加密货币矿机？](../output/059-what-is-a-crypto-mining-rig.md) — 理解"挖矿"这件事的物理基础。

#### 🌐 Web3 与新一代互联网

- [区块链与 Web3 之间是什么关系？](../output/366-what-s-the-relationship-between-blockchain-and-web3.md) — 本章 1.2 节 "三代互联网" 对照的主要依据。
- [什么是 Web3 钱包？](../output/268-what-are-web3-wallets.md) — Web3 世界的唯一入口。
- [Web3 将如何改变体育界、音乐界和时尚界](../output/323-how-web3-is-transforming-sports-music-and-fashion.md) — 真实行业案例。
- [无代码工具如何改变 Web3 领域？](../output/287-how-are-no-code-tools-transforming-web3.md) — Web3 的使用门槛正在怎样降低。

#### 🧰 实操：区块链浏览器与链上分析

- [一文读懂区块链浏览器](../output/004-what-is-a-blockchain-explorer.md) — 本章 1.7 节的操作指南扩展版。
- [如何使用比特币区块链浏览器](../output/509-how-to-use-a-bitcoin-blockchain-explorer.md) — 手把手查比特币交易。
- 常用浏览器：[Etherscan](https://etherscan.io) · [BscScan](https://bscscan.com) · [Solscan](https://solscan.io) · [Mempool.space](https://mempool.space) · [Arkham](https://www.arkhamintelligence.com) · [DeBank](https://debank.com)

#### 🧱 区块链应用场景 (本章 1.6 节的原始出处)

- [Blockchain 应用案例](../output/629-blockchain-use-cases.md) — 总览。
- [区块链用例：供应链](../output/634-blockchain-use-cases-supply-chain.md)
- [区块链用例：汇款](../output/606-blockchain-use-cases-remittance.md)
- [区块链用例：游戏](../output/588-blockchain-use-cases-gaming.md)
- [区块链用例：医疗保健](../output/625-blockchain-use-cases-healthcare.md)
- [区块链用例：预测市场](../output/570-blockchain-use-cases-prediction-markets.md)
- [区块链用例：物联网 (IoT)](../output/620-blockchain-use-cases-the-internet-of-things.md)
- [区块链运用案例：电子身份](../output/610-blockchain-use-cases-digital-identity.md)
- [区块链运用案例：慈善](../output/633-blockchain-use-cases-charity.md)
- [区块链的应用案例：政府管治](../output/612-blockchain-use-cases-governance.md)

#### 🛡️ 安全与误区 (本章 1.8 节的延伸)

- [5 种常见的加密货币诈骗与防范策略](../output/552-5-common-cryptocurrency-scams-and-how-to-avoid-them.md)
- [什么保障了区块链的安全性？](../output/627-what-makes-a-blockchain-secure.md) — 系统性看"链本身"的安全与用户的安全是两件事。

#### 🔬 延伸主题 (进阶兴趣)

- [什么是去中心化科学 (DeSci)？](../output/258-what-is-decentralized-science-desci.md)
- [什么是去中心化自治组织 (DAO)？](../output/563-decentralized-autonomous-organizations-daos-explained.md)
- [什么是去中心化存储？](../output/330-what-is-decentralized-storage.md)
- [什么是加密货币领域的 DePIN？](../output/255-what-is-depin-in-crypto.md)
- [区块链与人工智能的关系](../output/277-the-relationship-between-blockchain-and-ai.md)
- [零知识证明概念及其对区块链的影响](../output/351-what-is-zero-knowledge-proof-and-how-does-it-impact-blockchain.md)
- [什么是区块链三元悖论？](../output/369-what-is-the-blockchain-trilemma.md) — 下一章会频繁引用的核心框架。

#### 🌏 外部数据与报告

本章 1.2 节"现实远比口号骨感"一段的数据来自以下公开资源，写作时间 2026-04，请以最新数据为准：

- [DemandSage — 2026 全球加密采用数据](https://www.demandsage.com/crypto-adoption-statistics/) — 国家/地区采用率。
- [CoinLaw — 2026 Web3 钱包用户增长](https://coinlaw.io/web3-wallet-user-growth-statistics/) — 活跃钱包与 DApp 使用数据。
- [CoinLaw — 2026 Web3 经济统计](https://coinlaw.io/web3-economy-statistics/) — 市场规模与融资情况。
- [Gitnux — 130+ Web3 统计报告](https://gitnux.org/web3-statistics/) — 综合性年度报告。
- [Market.us — Web 3.0 统计与用户画像](https://market.us/statistics/information-and-communication/web-3-0-statistics/)

#### 🧮 技术深读 (为好奇者准备)

- [中本聪：比特币白皮书 (中文版)](https://bitcoin.org/files/bitcoin-paper/bitcoin_zh_cn.pdf) — 2008 年原文，9 页，值得一读。
- [Learnmeabitcoin — Block Structure](https://learnmeabitcoin.com/technical/block/) — 用图讲清区块内部结构。
- [GeeksforGeeks — Blockchain Merkle Trees](https://www.geeksforgeeks.org/software-engineering/blockchain-merkle-trees/) — Merkle 树构造过程的清晰拆解。
- [Alchemy Docs — Merkle Trees in Blockchains](https://www.alchemy.com/docs/merkle-trees-in-blockchains) — 包含开发者视角的实现细节。
- [以太坊官方文档 — 以太坊简介](https://ethereum.org/zh/what-is-ethereum/) — 官方中文版。
- [Vitalik 博客](https://vitalik.eth.limo/) — 以太坊创始人的长期写作。

#### 🎓 系统性学习资源

- [币安学院 (中文)](https://academy.binance.com/zh-CN) — 本书大量素材的原始来源。
- [以太坊基金会学习路径](https://ethereum.org/zh/learn/) — 官方学习门户。
- [a16z Crypto Canon](https://a16zcrypto.com/posts/article/crypto-readings-resources/) — 硅谷顶级基金整理的加密阅读清单 (英文)。
- [Messari Research](https://messari.io/research) — 行业研究报告 (部分免费)。

> **阅读建议：** 不必一口气读完上面所有链接。把本章再读一遍，挑 1–2 篇你最感兴趣的深入下去，其他作为备查。**深度比覆盖面更重要。**

---

## 第二章 区块链的底层积木

### 本章目标
- 讲清区块、哈希、节点、共识、密码学、默克尔树这一整套底层积木
- 把"私钥签名 → 内存池 → 打包 → 确认"这条交易生命周期画到脑子里
- 用区块链浏览器自己动手验证一笔交易，把抽象概念落到具体动作

![区块链概念示意图](https://public.bnbstatic.com/static/academy/uploads/62e11b0019b144e880b3e0ce146197de.jpg)

### 2.1 读者先要解决的问题

第一章把"Web3 是什么"讲清楚了，但你只要打开 [Etherscan](https://etherscan.io)、[Mempool.space](https://mempool.space) 或者 [BscScan](https://bscscan.com)，立刻会撞见一堆术语：**区块高度 (Block Height)、哈希 (Hash)、Nonce、确认数、Gas、Merkle Root、TxID、Validator**。

这些不是炫技，每一个都对应区块链工程上一个具体的设计决策：

- 没有 **哈希**，区块链就无法证明"这一页账本没有被改过"；
- 没有 **公钥密码学**，你就没法在不告诉别人密码的情况下证明"这笔钱是我的"；
- 没有 **共识机制**，互不信任的几万台机器就没法对同一份账本达成一致；
- 没有 **默克尔树**，一个手机钱包就得下载几百 GB 的全部交易才能验证一笔转账；
- 没有 **三元悖论** 这个心智模型，你就分不清为什么有的链快、有的链贵、有的链"小而美"。

本章把它们一个一个拆开摆给你看。读完之后，区块链浏览器对你来说应该跟天气预报 App 一样朴素。

> **本章核心一句话：** 区块链 = "用哈希连起来的账本" + "用密码学签名的交易" + "用共识机制达成一致的多副本网络"。剩下的所有概念，都是这三件事的衍生产物。

---

### 2.2 从纸笔账本说起：为什么需要区块链

要理解区块链解决了什么问题，先想象一个简化版场景。

> 你和 4 个好友合开一个酒吧，决定共用一个记事本来记每个人的进出账：
> - **Alice 给 Bob 转 5 BTC；**
> - **Bob 给 Carol 转 2 BTC，资金来自 Bob 此前与 Alice 的那笔。**
>
> 5 个人都认识，谁拿笔记账都行——这本记事本就是一个去中心化的小账本。

问题来了：

1. **如何防止 Bob 把已经花出去的 2 BTC 再花一次？**（双花问题）
2. **如果群体扩大到 1 万人、彼此不认识，谁来当那个"拿笔的人"？**（共识问题）
3. **怎么保证记事本被人偷偷撕掉一页之后大家能立刻发现？**（防篡改问题）
4. **如何在不暴露你身份的情况下证明"这一笔确实是你授权的"？**（身份与签名问题）

中本聪在 2008 年的[比特币白皮书](https://bitcoin.org/bitcoin.pdf) 里，把这四个问题用一整套机制串起来解决了：哈希链 + 公钥密码学 + 工作量证明 + 经济激励。这套组合就是我们今天说的 **区块链**。这一节讲的"5 人记账本"类比的原型，可以在素材 [output/309-what-is-blockchain-and-how-does-it-work.md](../output/309-what-is-blockchain-and-how-does-it-work.md) 与 [output/663-proof-of-work-explained.md](../output/663-proof-of-work-explained.md) 找到完整的展开版。

---

### 2.3 哈希：区块链的"指纹"

哈希 (Hash) 是把任意长度数据压成一段定长字符串的**单向函数**。它有三个关键属性：

1. **确定性**：同样的输入永远得到同样的输出。
2. **雪崩效应**：输入改一个字符，输出完全不同。
3. **单向性**：从输出反推输入在计算上不可行。

以比特币使用的 SHA-256 为例：

| 输入 | SHA-256 输出 |
| --- | --- |
| `Binance` | `f1624fcc63b615ac0e95daf9ab78434ec2e8ffe402144dc631b055f711225191` |
| `binance` | `59bba357145ca539dcd1ac957abc1ec5833319ddcae7f5e8b5da0c36624784b2` |
| `Binance ` *(末尾多一个空格)* | 完全不同的另一段 64 位十六进制字符串 |

仅仅是首字母大小写不同，输出就南辕北辙。这一性质让哈希成了天然的"防篡改指纹"：只要文件被改过哪怕一个字节，它的哈希就会变。

**哈希在区块链里至少出现 5 个地方：**

- **区块哈希**：每个区块自己的"身份证"。
- **前一区块哈希**：把当前区块和前一个区块连起来。
- **交易哈希 (TxID)**：每笔交易的唯一编号，你在区块链浏览器输入的就是它。
- **默克尔根**：把区块里所有交易压成一个值（下一节细讲）。
- **挖矿目标值**：PoW 矿工要找到的那个"满足难度要求"的哈希。

> **小练习：** 打开 [SHA-256 在线工具](https://emn178.github.io/online-tools/sha256.html)，输入你的名字，再加一个空格，看输出怎么变。亲手感受一遍"雪崩效应"，下面所有的内容都好理解了。

---

### 2.4 区块与链：一个不可篡改的链表

一个 **区块 (Block)** 通常包含两部分：

- **区块头 (Block Header)**：固定大小，存元数据。包括：
  - 前一区块哈希 (`prevHash`)
  - 默克尔根 (`merkleRoot`)
  - 时间戳 (`timestamp`)
  - 难度目标 (`difficulty`)
  - 随机数 (`nonce`)
- **区块体 (Block Body)**：装这一区块包含的全部交易列表。

每个区块都引用前一个区块的哈希，于是它们首尾相连，形成一条**只能往前长、不能改中间**的链：

```
[创世区块]──hash──>[#1]──hash──>[#2]──hash──>[#3]──hash──> ... ──>[最新]
```

任何人想偷偷修改 `#2` 里的一笔交易，都会让 `#2` 自己的哈希变化，于是 `#3` 引用的 `prevHash` 对不上、`#4` 也对不上……要圆这个谎，攻击者必须把 `#2` 之后所有区块的哈希全部重新算一遍——而新的区块还在不停产生，他基本永远追不上。这就是"不可篡改"的数学来源，不是因为有人禁止你改，而是改了**没人会接受**。

---

### 2.5 默克尔树：让一个手机也能验证比特币

一个比特币区块里通常有几千笔交易。如果你每次想验证某笔转账有没有上链，都要下载整个区块，那手机和轻钱包就别玩了。

**默克尔树 (Merkle Tree)** 解决的就是这个问题。它由 1980 年代的密码学家 Ralph Merkle 提出，本质是一棵"哈希形成的二叉树"。

#### 怎么构造

把区块里的交易两两配对，做哈希；得到的结果再两两配对，做哈希；如此反复，直到只剩一个值——这个最顶端的哈希就叫 **默克尔根 (Merkle Root)**，存在区块头里。

![默克尔树构造示意图](https://image.binance.vision/editor-uploads/761c2fdb12a544aa873a9e9a3ada274f.png)

*把数据切成 8 份，分别哈希得到 hA…hH。*

![默克尔根逐层合并](https://image.binance.vision/editor-uploads/3dea212055754dd2b0741845c95d3d49.png)

*再两两合并哈希，直到得到唯一的默克尔根。*

#### 为什么重要

1. **轻钱包可以做 SPV 验证（简单支付验证）**。
   假设你只想确认一笔 TxID 为 hD 的交易在不在某个区块里。全节点会给你一条"默克尔证明"，只需 3 次哈希就能验证，不必下载整个区块体。

   ![默克尔证明示意图](https://image.binance.vision/editor-uploads/9e31057c05a84b49a35b477c4c2b9734.png)

   *红色为兄弟节点哈希。验证 hD 只需 hC、hAB、hEFGH 三个值即可重算根哈希。*

2. **挖矿提速**。矿工每次尝试新的 nonce 时，只需对**区块头**做哈希，而不是对几千笔交易重新哈希——因为它们已经被压缩到了默克尔根这一个值里。

3. **任何人篡改一笔交易，整棵树往上一路的哈希都会变**，根哈希就对不上区块头里的那个值。

> **类比：** 默克尔树就像图书馆的目录索引。你不必翻遍整本书来验证一个段落是否被篡改，只需顺着目录的几个章节标签做对比就够了。这一节的三张图与完整推导都来自素材 [output/541-merkle-trees-and-merkle-roots-explained.md](../output/541-merkle-trees-and-merkle-roots-explained.md)。

---

### 2.6 公钥密码学：你的私钥就是你的银行

哈希解决了"账本完整性"，但还没解决"谁有权动这笔钱"。这就是 **公钥密码学 (PKC)** 出场的地方。

每个加密货币钱包都生成一对密钥：

- **私钥 (Private Key)**：一串巨大的随机数，绝对不能外泄；
- **公钥 (Public Key)**：由私钥经数学单向运算导出，可以公开；
- **地址 (Address)**：再对公钥做一次哈希得到的字符串，就是别人转账给你的"账号"。

```
私钥 ──[椭圆曲线乘法]──> 公钥 ──[哈希]──> 地址
```

发起交易时：

1. 你用 **私钥** 对"我要把 1 ETH 发给 0xabc..." 这条交易做**数字签名**；
2. 把交易和签名一起广播到网络；
3. 任何节点都能用 **公钥** 验证签名是否有效——但他们没法从公钥反推出私钥；
4. 验证通过 = 这笔交易是合法主人发出的。

比特币和以太坊使用的是 **椭圆曲线数字签名算法 (ECDSA)**，一些更新的链（比如 Solana）使用 **Ed25519**。算法不同，本质都是"私钥签、公钥验"。想再下沉一层可读 [output/636-what-is-public-key-cryptography.md](../output/636-what-is-public-key-cryptography.md) 与 [output/605-what-is-a-digital-signature.md](../output/605-what-is-a-digital-signature.md)。

> ⚠️ **划重点：私钥 ≠ 密码。**
> - 银行密码忘了可以挂失重置；私钥丢了**没有任何人**能恢复。
> - 银行密码泄露还可冻结账户；私钥泄露的瞬间，钱已经在别人钱包里了。
>
> 这一点会在第 4、5 章反复强调。

---

### 2.7 节点与网络：数万份账本副本同时在跑

**节点 (Node)** 是运行区块链客户端软件的计算机。按职责分大致三类：

| 类型 | 干什么 | 例子 |
| --- | --- | --- |
| **全节点 (Full Node)** | 下载并验证完整账本，独立确认每笔交易合法 | 任何人都能跑，比特币 Core、Geth、Reth |
| **轻节点 (Light Node)** | 只下载区块头，靠默克尔证明验证交易 | 手机钱包、SPV 钱包 |
| **矿工/验证者节点** | 在全节点基础上参与出块和共识 | 比特币矿池、以太坊 Validator |

节点越多、地理分布越广，网络就越**抗审查**、越**抗单点故障**。截至 2026 年初，比特币网络在全球可见的可达全节点约有 1.7 万个，以太坊执行层节点过万。即便美国电网全停，世界其它地方的节点依然能让链继续生长。

这种 **点对点网络 (P2P Network)** 的结构跟 BT 下载是一脉相承的：没有中央服务器，节点之间互相把新区块、新交易传出去——这种"消息扩散"的过程在术语里叫 **Gossip Protocol（八卦协议）**。节点类型与 P2P 网络的细节见 [output/669-what-are-nodes.md](../output/669-what-are-nodes.md)。

---

### 2.8 共识机制：陌生人如何就账本达成一致

把账本复制成几万份只是第一步。新交易源源不断进来，到底谁有资格把"下一页"写进账本？这就是 **共识机制 (Consensus Mechanism)** 要回答的核心问题。

![中本聪共识示意图](https://public.bnbstatic.com/static/academy/uploads/c4a2869658e14d31951e9c8b227ceeb1.png)

#### ① 工作量证明 (PoW)

> "谁算力强、谁先把哈希凑出来，谁记账。"

矿工不停改 nonce 重新对区块头做哈希，直到找到一个**小于难度目标**的值。比特币每 10 分钟出一个块，难度每 2016 个区块（约 2 周）自动调整一次以维持节奏。

![工作量证明示意图](https://public.bnbstatic.com/static/academy/uploads/a4eb4711006748ccb823dd3376d0a853.jpg)

- **优点**：经过十多年实战，被认为是已知最稳健的共识；攻击成本高得离谱。
- **缺点**：能耗巨大、出块慢、TPS 低（比特币基础层 ~5 TPS）。
- **代表项目**：比特币、莱特币、狗狗币（合并挖矿）。

#### ② 权益证明 (PoS)

> "谁质押的代币多，谁有更高概率被随机选中记账。"

不再比算力，而是比"押金"。验证者锁定一定数量原生代币（以太坊要求 32 ETH 起步），按权重被随机抽中出块；如果作恶会被 **罚没 (Slashing)** 一部分质押。

- **优点**：能耗下降 99.9% 以上、出块更稳；经济上"作恶=自损"。
- **缺点**：富者愈富的隐忧；新协议尚需更长时间检验。
- **代表项目**：以太坊（2022 年 The Merge 后）、Solana、Cardano、BNB Chain（PoSA 变种）。

#### ③ 其他常见变种

| 名称 | 思路 | 代表 |
| --- | --- | --- |
| **DPoS（委托权益证明）** | 持币人投票选出固定数量的代表来出块 | EOS、TRON |
| **PoA（权威证明）** | 一组预先批准的、有声誉的节点轮流出块 | 一些联盟链、测试网 |
| **PoH（历史证明）** | 给时间打哈希戳，让节点对时间顺序达成共识 | Solana（搭配 PoS） |
| **PBFT 类** | 节点之间多轮投票直到 2/3 以上同意 | Hyperledger、Cosmos Tendermint |
| **DAG** | 不再是链，而是有向无环图 | IOTA、Hedera HBAR |

记住这一句：**共识没有"最优解"，只有"取舍"。** 这个取舍正是下面要讲的三元悖论。各类共识机制的横向对比可深读 [output/648-what-is-a-blockchain-consensus-algorithm.md](../output/648-what-is-a-blockchain-consensus-algorithm.md)；想深入 PoW / PoS 经济博弈，分别读 [output/663](../output/663-proof-of-work-explained.md) 与 [output/662](../output/662-proof-of-stake-explained.md)。

---

### 2.9 区块链三元悖论：为什么没有"完美"的链

![区块链三元悖论示意图](https://public.bnbstatic.com/static/academy/uploads/fe1bd4cc939f4bf38e82f6c1185c9ba8.jpg)

由以太坊创始人 Vitalik Buterin 提出的 **区块链三元悖论 (Blockchain Trilemma)**：一条链很难同时把以下三个属性做到最好——

- **去中心化 (Decentralization)**：节点多、分布广、不依赖少数人。
- **安全性 (Security)**：攻击成本远高于潜在收益。
- **可扩展性 (Scalability)**：高 TPS、低费用、低延迟。

提升一项，往往以另一两项为代价。几个对照样本：

| 链 | 去中心化 | 安全 | 可扩展性 |
| --- | --- | --- | --- |
| **比特币** | 极高 | 极高 | 低（~5 TPS） |
| **以太坊主网** | 高 | 高 | 中（~18 TPS） |
| **Solana** | 中（节点硬件门槛高） | 中（曾多次停摆） | 极高（数千 TPS） |
| **BNB Smart Chain** | 中（验证者数量少） | 较高 | 高（~3 秒块） |
| **联盟链 / Visa** | 几乎零 | 看运营方 | 极高 |

行业里目前的两条主要破局路径：

1. **Layer 2 / 模块化区块链**：把执行外包给 L2，主链只负责安全结算。代表：以太坊 + Arbitrum / Optimism / zkSync / Scroll / Linea。
2. **新共识 + 分片**：从底层重新设计。代表：NEAR Nightshade、Sui、Aptos 的并行执行。

这部分我们留到 [第十章 跨链、Layer2 与扩容世界] 系统展开。

---

### 2.10 一笔链上交易的完整生命周期

把上面所有积木装回去，看一笔以太坊 ETH 转账从你点"确认"那一刻到最终上链的全过程。

```
[1] 钱包                [2] 内存池 Mempool          [3] 区块构造
   │                          │                          │
   ▼                          ▼                          ▼
私钥签名 ──广播──>  节点验证签名/Nonce/余额  ──>  按 Gas 出价排序，被打包进候选区块
                                                          │
                                                          ▼
                                                      [4] 共识/出块
                                                  PoW 矿工算哈希 / PoS 验证者出块
                                                          │
                                                          ▼
                                                      [5] 全网广播
                                                  其他节点验证后接到自己的链上
                                                          │
                                                          ▼
                                                      [6] 确认数累积
                                              每多一个新块，被回滚的概率指数下降
```

**逐步详解：**

1. **发起 (Sign)**：钱包用私钥对一条交易做 ECDSA / Ed25519 签名。交易内容包括 from、to、value、Nonce、gasLimit、gasPrice / maxFeePerGas、data。
2. **进入内存池 (Broadcast → Mempool)**：节点收到后做合法性检查——签名对不对、Nonce 是不是单调递增、余额够不够付 `value + gas`。通过则进入待打包队列；不通过直接丢弃。
3. **被验证者挑中 (Selection)**：以太坊验证者倾向于优先选 **小费 (priority fee) 高** 的交易；过低的会一直留在内存池，几小时后被踢掉。
4. **打包进区块 (Inclusion)**：被装进新区块，区块头里默克尔根、prevHash、timestamp、Nonce 全部就位。
5. **广播与验证 (Propagation)**：新区块沿 Gossip 协议在 P2P 网络中扩散，其他节点重新跑一遍区块内的所有交易，验证状态转移合法后才接到自己的链上。
6. **确认 (Finality)**：每多一个新块，这笔交易就多 1 次确认。比特币习惯等 6 次（约 1 小时）；以太坊 PoS 引入了"槽位/纪元/最终性"概念，在 2 个 epoch（约 12.8 分钟）后达成 **Finalized**——理论上不可被回滚。

> **新手最容易踩的坑**：钱包里看到 "Pending"、"Submitted"、"Confirmed" 三种状态，**只有 Confirmed（且确认数到达目标）才算真的成功。** Pending 状态的交易可以被你自己用更高 Gas 的"加速 / 取消"覆盖掉。

---

### 2.11 区块链浏览器：链上世界的搜索引擎

区块链是公开账本，但原始数据是一堆十六进制。**区块链浏览器 (Blockchain Explorer)** 就是给账本配的"搜索引擎 + 翻译器"。

| 链 | 推荐浏览器 |
| --- | --- |
| **Bitcoin** | [Mempool.space](https://mempool.space) / [Blockstream Explorer](https://blockstream.info) |
| **Ethereum** | [Etherscan](https://etherscan.io) |
| **BNB Smart Chain** | [BscScan](https://bscscan.com) |
| **Solana** | [Solscan](https://solscan.io) / [Solana Explorer](https://explorer.solana.com) |
| **Tron** | [Tronscan](https://tronscan.org) |
| **Layer 2 (示例)** | [Arbiscan](https://arbiscan.io)、[Optimistic Etherscan](https://optimistic.etherscan.io) |

在浏览器里你可以搜：

- **TxID**：看一笔交易的状态、Gas、From/To、确认数；
- **地址**：看余额、交易历史、持有的代币列表；
- **区块高度**：看那一块包含哪些交易、矿工 / 验证者是谁；
- **合约地址**：看代码（已开源的）、调用历史、代币转账记录。

> **现学现用：** 复制下面这个比特币创世区块哈希到 Mempool.space，看看中本聪在 2009 年留下的彩蛋——
>
> `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`
>
> 区块的 coinbase 字段里写着一句新闻标题："*The Times 03/Jan/2009 Chancellor on brink of second bailout for banks*"，是中本聪对 2008 金融危机的辛辣回应。

浏览器使用的逐步图解可见 [output/004-what-is-a-blockchain-explorer.md](../output/004-what-is-a-blockchain-explorer.md) 与 [output/509-how-to-use-a-bitcoin-blockchain-explorer.md](../output/509-how-to-use-a-bitcoin-blockchain-explorer.md)。

---

### 2.12 安全边界：51% 攻击与"不可篡改"的真正含义

很多文章把"不可篡改"说成绝对，这并不准确。

**51% 攻击**（也叫多数攻击）：如果某实体掌握了一条 PoW 链 50% 以上的算力（或一条 PoS 链 50% 以上的质押），理论上可以：

- 阻止某些交易上链；
- 撤销自己最近发出的交易（造成双花）；
- **但** 仍然没法凭空发币、没法动别人的钱、没法回滚很久以前的交易。

为什么大家不太担心比特币和以太坊被 51% 攻击？因为成本天文级别——比特币要租到一半算力的硬件每天可能烧掉数千万美元，而成功之后比特币价格马上崩盘，攻击者持有的币和算力本身全部贬值，**经济上是负 EV 的**。

但小币种就不一样了。Bitcoin Gold (BTG)、Ethereum Classic (ETC)、Vertcoin、ZenCash 都有过被 51% 攻击导致用户双花损失的真实案例。

**你的实操结论：**
- 大额交易在主流大链上通常很安全；
- 在算力 / 质押量小的小币种链上接收资金，确认数要拉得更多；
- 任何"侧链"、"测试网"、"分叉新链"都默认风险更高。

51% 攻击的真实案例与防御机制可读 [output/678-what-is-a-51-percent-attack.md](../output/678-what-is-a-51-percent-attack.md)；与之伴生的 [双花问题详解](../output/573-double-spending-explained.md) 是入门时最容易被略读、却最该理解透的一篇。

---

### 2.13 常见误区与风险提醒

- ❌ **"交易已发出 = 已成功"** → 只是广播了。Pending 状态可以被你自己或他人通过高 Gas 替换 (Replace-by-Fee, RBF)。
- ❌ **"确认越多越安全"无限对** → 小额转账 1–3 个确认够了；大额、提现、跨所打款再多等会儿。**确认数是概率，不是绝对。**
- ❌ **"区块链 = 完全匿名"** → 错。比特币是 *伪匿名*：地址不带姓名，但所有交易公开可查，配合 KYC 数据能被还原。真正的隐私要靠 ZK、Tornado、Monero、Zcash 这类专门方案。
- ❌ **"手续费是平台收的"** → 不是。Gas 是给矿工 / 验证者的小费。链拥堵时费用暴涨是正常市场行为，平台没法 "降价"。
- ❌ **"所有链都用 SHA-256"** → 不是。比特币用 SHA-256，以太坊用 Keccak-256，不少 PoW 山寨币用 Scrypt、Ethash、RandomX 等。
- ❌ **"我把交易广播了，就一定能上链"** → 如果你给的 Gas 远低于市价，交易会一直在内存池里飘，最终被节点丢弃。

---

### 2.14 检查清单与练习

- [ ] 能用一句话向小白解释什么是哈希、什么是默克尔根。
- [ ] 能画出"私钥签名 → 内存池 → 出块 → 确认"的完整流程图。
- [ ] 能对比 PoW 和 PoS 的核心差异、各自的代价、各自的代表项目。
- [ ] **动手 1**：去 [Etherscan](https://etherscan.io) 搜一笔自己的交易（或随便找一笔），逐一指出 TxID、Block、Nonce、Gas Used、From、To 都意味着什么。
- [ ] **动手 2**：找到一笔 **失败 (Failed)** 的以太坊交易，看清楚为什么失败、Gas 还有没有被扣（剧透：扣了）。
- [ ] **动手 3**：在 [Mempool.space](https://mempool.space) 看比特币当前的内存池拥塞情况，记下当前的"下一区块预估手续费"。
- [ ] 解释一遍三元悖论，并指出你最常用的那条链在三角里偏向哪两端。

---

### 延伸阅读

以下资料按主题分组，其中 `output/` 路径指向本书素材工程内收录的币安学院原文（本章正文的所有概念、示例、图片均出自这些底稿），外部链接是公开网络资源。**先把本章读完，再按需深挖**——不必按顺序，挑你最不确定的那一节对应去读。

#### 哈希、密码学与默克尔树（对应 2.3 / 2.5 / 2.6）
- [区块链概念及其运行方式介绍](../output/309-what-is-blockchain-and-how-does-it-work.md) — 本章 2.2、2.4 的主框架来源，含 SHA-256 雪崩示例的原始版本。
- [什么是哈希运算？](../output/607-what-is-hashing.md) — 抗冲突性、抗原像性、抗第二原像性三大性质的最完整解释。
- [默克尔树与默克尔根详解](../output/541-merkle-trees-and-merkle-roots-explained.md) — 2.5 节三张图的原文，含 SPV 证明完整推导。
- [什么是公钥密码学？](../output/636-what-is-public-key-cryptography.md) — 私钥/公钥/地址派生链路的来源，含 RSA 与 ECDSA 对比。
- [什么是数字签名？](../output/605-what-is-a-digital-signature.md) — "签名 vs 加密"的差异讲得最透。
- [对称加密与非对称加密](../output/619-symmetric-vs-asymmetric-encryption.md) — 想再下沉一层可读这篇。
- [什么是对称密钥密码学？](../output/621-what-is-symmetric-key-cryptography.md) — 对照阅读。
- [零知识证明 (zk-SNARK / zk-STARK)](../output/630-zk-snarks-and-zk-starks-explained.md) — 进阶；理解"不暴露信息也能证明信息为真"是怎么做到的，第 10、11 章会再用到。

#### 节点、共识与博弈（对应 2.7 / 2.8）
- [什么是节点？](../output/669-what-are-nodes.md) — 全节点 / 轻节点 / 矿工节点对照的素材来源。
- [什么是区块链共识算法？](../output/648-what-is-a-blockchain-consensus-algorithm.md) — 共识机制的总览。
- [什么是工作量证明 (PoW)？](../output/663-proof-of-work-explained.md) — Nonce、难度、激励博弈的完整解释。
- [什么是权益证明 (PoS)？](../output/662-proof-of-stake-explained.md) — 质押、罚没机制的来源。
- [中本聪共识介绍](../output/238-what-is-the-nakamoto-consensus.md) — 2.8 节配图原文。
- [委托权益证明 (DPoS) 详解](../output/683-delegated-proof-of-stake-explained.md) — EOS / TRON 用的就是这个。
- [权威证明 (PoA) 详解](../output/659-proof-of-authority-explained.md)
- [混合 PoW/PoS 共识详解](../output/622-hybrid-pow-pos-consensus-explained.md)
- [延迟工作量证明 (dPoW) 详解](../output/668-delayed-proof-of-work-explained.md)
- [销毁证明 (PoB) 详解](../output/667-proof-of-burn-explained.md)
- [什么是 DAG（有向无环图）？](../output/537-what-is-a-directed-acyclic-graph-dag-in-cryptocurrency.md) — IOTA、Hedera 用的非链结构。
- [拜占庭容错 (BFT) 详解](../output/665-byzantine-fault-tolerance-explained.md) — Cosmos / Tendermint 类共识的理论基础。
- [博弈论与加密货币](../output/642-game-theory-and-cryptocurrencies.md) — 为什么"经济激励 + 密码学"组合能抗欺诈。
- [什么是哈希率？](../output/278-what-is-hash-rate.md) — 衡量 PoW 网络安全性的指标。

#### 交易、Gas 与区块链浏览器（对应 2.10 / 2.11）
- [加密货币交易如何验证](../output/068-how-are-cryptocurrency-transactions-verified.md) — 2.10 节生命周期六步的素材来源。
- [一文读懂区块链浏览器](../output/004-what-is-a-blockchain-explorer.md) — 2.11 节浏览器列表的扩展版，含 BscScan / Etherscan 截图。
- [如何使用比特币区块链浏览器](../output/509-how-to-use-a-bitcoin-blockchain-explorer.md) — 手把手版本。
- [以太坊 Gas 费机制](../output/114-how-do-gas-fees-work-on-ethereum.md) — base fee、priority fee、EIP-1559 的来源。
- [如何取消或替换待处理的以太坊交易](../output/464-how-to-cancel-or-replace-a-pending-ethereum-transaction.md) — Pending / RBF 的实操指南。
- [什么是区块链交易手续费？](../output/477-what-are-blockchain-transaction-fees.md)
- [什么是区块链网络拥塞？](../output/307-what-is-blockchain-network-congestion.md) — 解释"为什么链一拥堵就贵"。
- [比特币的手续费与奖励比率](../output/308-what-is-bitcoin-s-fee-to-reward-ratio.md) — 进阶，理解比特币减半之后的安全模型。
- [双花问题详解](../output/573-double-spending-explained.md) — 2.2 节四大问题之一的原始出处。

#### 安全、攻击面与三元悖论（对应 2.9 / 2.12）
- [什么是 51% 攻击？](../output/678-what-is-a-51-percent-attack.md) — 2.12 节真实案例（BTG / ETC）的来源。
- [女巫攻击 (Sybil Attack) 详解](../output/661-sybil-attacks-explained.md) — 节点身份伪造问题。
- [什么是区块链三元悖论？](../output/369-what-is-the-blockchain-trilemma.md) — 2.9 节的完整版，含 NEAR Nightshade / Layer 2 / 状态通道的全景方案。
- [是什么让区块链安全？](../output/627-what-makes-a-blockchain-secure.md) — 把"安全"这个抽象词拆成具体属性。
- [硬分叉与软分叉](../output/671-hard-forks-and-soft-forks.md) — 协议升级的两种姿势，第 3 章会再讲。

#### 比特币内部机制（进阶，可选）
- [比特币脚本简介](../output/539-an-introduction-to-bitcoin-script.md) — 比特币的"非图灵完备"语言长什么样。
- [Schnorr 签名对比特币的意义](../output/540-what-do-schnorr-signatures-mean-for-bitcoin.md) — Taproot 升级里替换 ECDSA 的新签名方案。

#### 重读基础（如果还想再补底）
- [区块链技术综合指南](../output/585-what-is-blockchain-technology-a-comprehensive-guide-for-beginners.md) — 面向零基础的另一版叙述。
- [区块链的历史](../output/664-history-of-blockchain.md) — 1991 → 比特币 → 以太坊的完整时间线。
- [区块链的优点和缺点](../output/650-positives-and-negatives-of-blockchain.md) — 对局限性做了较坦率的总结。

#### 外部参考（公开网络资源）
- 中本聪《Bitcoin: A Peer-to-Peer Electronic Cash System》白皮书原文：[bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)
- Vitalik Buterin 个人博客（三元悖论、Rollup、PoS 升级路线原始论述）：[vitalik.eth.limo](https://vitalik.eth.limo)
- 以太坊官方文档（中文）：[ethereum.org/zh/developers/docs/](https://ethereum.org/zh/developers/docs/)
- 实时内存池可视化：[Mempool.space](https://mempool.space)（比特币）/ [Etherscan Gas Tracker](https://etherscan.io/gastracker)（以太坊）

> **阅读建议：** 不要试图一次性把上面 30+ 篇全读完。**先按 2.3 / 2.5 / 2.8 / 2.10 / 2.12 五个最核心小节各挑 1 篇精读**，加在一起 5 篇就足以让你脑子里有清晰的主干。剩下的留作"以后看到陌生术语回头查"的弹药库——基础概念越往后翻越有用，比追新链新币耐用得多。

---

## 第三章 比特币、以太坊与主流公链

### 本章目标
- 读懂"公链"这个赛道里到底在比拼什么——共识机制、虚拟机、Gas 模型、生态规模、治理路线
- 把 BTC、ETH、BNB、SOL 四条主航道的定位、起源、关键升级和生态特征摸清楚
- 学会用一张坐标系判断一条新链值不值得看，避免"听到 TPS 高就冲"的小白陷阱
- 实战：在四条不同链上完成一次 USDT 转账并比较体验

![主流公链生态](https://public.bnbstatic.com/static/academy/uploads/4cef39bd553642038002c3ca3f5cda17.jpg)

### 3.1 读者先要解决的问题

打开 [CoinMarketCap](https://coinmarketcap.com) 或 [DefiLlama](https://defillama.com) 的"链 (Chains)"标签，你会看到上百条公链——而且每周都有新的。这种信息密度对新手是劝退级别的。

但其实你不需要全部认识，**有 4 条主航道是任何人都绕不开的**：

1. **比特币 (BTC)** —— 数字黄金 / 抗审查货币
2. **以太坊 (ETH)** —— 世界计算机 / 智能合约结算层
3. **BNB Chain** —— EVM 兼容 + 交易所流量入口
4. **Solana (SOL)** —— 高吞吐、新架构的代表

这 4 条链大约能解释市场上 80% 的真实活动。剩下的 Cosmos、Avalanche、Tron、TON、Sui、Aptos、NEAR、Polkadot……都是这 4 条主线在某个维度上的"变体"——要么模仿、要么改良、要么走完全不同的极端。

> **本章核心一句话：** 公链不是技术比赛，而是**生态、安全、成本、用户体验**这四件事的综合排名。读完本章，你应该能在面对任何"新链"叙事时反问自己 3 个问题——它在解决什么问题？代价是什么？谁在用？

---

### 3.2 公链坐标系：四种"灵魂"

如果你只能记住一张图，就记住下面这个二维坐标系：

```
        ↑ 灵活（智能合约 / 通用计算）
        │
        │
        │     • Solana            • Sui / Aptos
        │     • BNB Chain         • NEAR
        │     • Avalanche / Tron
        │     • Ethereum  ◀── 行业坐标原点
        │
        │
   ─────┼────────────────────────────────────────→ 高性能（TPS / 低 Gas）
        │
        │     • Litecoin                    
        │     • Bitcoin    
        │
        ↓ 极简（仅做转账 / 价值存储）
```

- **左下角的比特币**：刻意保守、只做"价值存储"。简单、稳固、十几年没出过严重 Bug。
- **左中的以太坊**：通用计算的标杆，但本身不追求高 TPS——它把性能外包给了 L2。
- **右中的 BNB / Solana / Avalanche / Tron**：用更激进的取舍换高 TPS 和低费用。
- **右上的 Sui / Aptos / NEAR**：从底层重构（并行执行、新虚拟机），属于"下一代"探索。

**每一种位置都有它的理由，没有"最好"的链。** 读公链先看它在坐标系里的位置，再看是哪些用户在用它。

---

### 3.3 比特币 (BTC)：数字黄金路线

![Bitcoin](https://public.bnbstatic.com/static/academy/uploads/bf5c53e534c941a581ea723fa2afe499.jpg)

#### 起源与定位

- **创始人**：化名 **中本聪 (Satoshi Nakamoto)**，身份至今成谜。
- **白皮书**：2008 年 10 月发布《Bitcoin: A Peer-to-Peer Electronic Cash System》，仅 9 页。
- **创世区块**：2009 年 1 月 3 日挖出，coinbase 字段写着对 2008 金融危机的辛辣回应——*"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"*。
- **首笔商业交易**：2010 年 5 月 22 日，程序员 Laszlo Hanyecz 用 1 万 BTC 买了两个披萨，被纪念为"比特币披萨日"。
- **核心定位**：**抗审查、稀缺、抗通胀的数字现金 / 价值存储**。它从来不是"跑应用"的链，跟以太坊根本不在同一赛道。

#### 货币政策：2100 万的硬上限

- **总供应量上限**：2,100 万枚，**协议层硬编码**，无法更改。
- **减半 (Halving)**：每挖出 21 万个区块（约 4 年），区块奖励减半。这是比特币模拟黄金"挖到越后越难"的核心机制。

| 时间 | 区块奖励 | 总流通量占比 |
| --- | --- | --- |
| 2009 | 50 BTC | 0% |
| 2012 | 25 BTC | ~50% |
| 2016 | 12.5 BTC | ~75% |
| 2020 | 6.25 BTC | ~87.5% |
| 2024-04 | 3.125 BTC | ~94% |
| 2028（预计） | 1.5625 BTC | ~96.9% |
| ~2140 | 0（最后一枚被挖出） | 100% |

截至 2025 年 8 月，已有约 **1991 万枚比特币**被挖出，占总供应量的 94.8%；其中据估算约 20% 因私钥遗失永久退出流通——这意味着实际流通量比账面更稀缺。详细演化见 [output/100-what-happens-after-all-bitcoins-are-mined.md](../output/100-what-happens-after-all-bitcoins-are-mined.md)。

#### 技术取舍：刻意"不图灵完备"

- **共识**：[工作量证明 (PoW)](../output/663-proof-of-work-explained.md)，平均每 10 分钟出一个块。
- **脚本语言**：Bitcoin Script 是一种栈式脚本，**故意不支持循环**。换来的是简单、可静态分析、攻击面极小——这跟以太坊的设计哲学是反着来的。详见 [output/539-an-introduction-to-bitcoin-script.md](../output/539-an-introduction-to-bitcoin-script.md)。
- **几次关键升级**：
  - **2017 SegWit**：把签名数据移出主区块，间接扩容、修复"交易延展性"。素材见 [output/590-a-beginners-guide-to-segretated-witness-segwit.md](../output/590-a-beginners-guide-to-segretated-witness-segwit.md)。
  - **2021 Taproot + Schnorr**：用 Schnorr 签名替换 ECDSA，提升隐私和效率。背景见 [output/499-what-is-taproot-and-how-it-will-benefit-bitcoin.md](../output/499-what-is-taproot-and-how-it-will-benefit-bitcoin.md)、[output/540-what-do-schnorr-signatures-mean-for-bitcoin.md](../output/540-what-do-schnorr-signatures-mean-for-bitcoin.md)。

#### 生态：远比你想的丰富

很多人误以为 BTC 链上"只有转账"，其实近三年在比特币上生长的东西并不少：

- **Ordinals / Inscriptions（铭文）**：2023 年初引入，用 Taproot 把任意数据"铭刻"到聪 (sat) 上，催生了 BRC-20 代币和 NFT 类玩法。
- **Runes（符文）**：2024 年比特币减半同日上线，是更高效的同质化代币协议。素材：[output/240-what-are-bitcoin-runes.md](../output/240-what-are-bitcoin-runes.md)。
- **Bitcoin Stamps**：把图片直接嵌进 UTXO 集，比 Ordinals 更"硬核"。素材：[output/256-what-are-bitcoin-stamps.md](../output/256-what-are-bitcoin-stamps.md)。
- **Layer 2**：闪电网络（小额支付）、Stacks、Hemi、Bitlayer 等等——把"通用计算"通过 L2 接到比特币上。素材：[output/263-what-are-bitcoin-layer-2-networks.md](../output/263-what-are-bitcoin-layer-2-networks.md)、[output/051-what-is-stacks-stx.md](../output/051-what-is-stacks-stx.md)。
- **比特币财政储备**：MicroStrategy 模式被多家上市公司复制，部分政府也开始建立"战略性比特币储备"。素材：[output/131-what-is-a-bitcoin-treasury-strategy.md](../output/131-what-is-a-bitcoin-treasury-strategy.md)、[output/155-what-is-a-strategic-bitcoin-reserve.md](../output/155-what-is-a-strategic-bitcoin-reserve.md)。
- **现货 ETF**：2024 年 1 月美国 SEC 批准比特币现货 ETF，机构入场加速。

> **常被忽视的事实**：比特币的算力（hashrate）和市值在 2025 年依然在创历史新高。它"过时了"是个 2017 年就出现、被打脸 8 年的论调。

---

### 3.4 以太坊 (ETH)：世界计算机路线

![Ethereum](https://public.bnbstatic.com/static/academy/uploads/1da5075574d64512b2c6b2d8d9eaad7a.jpg)

#### 起源与定位

- **创始人**：[Vitalik Buterin](../output/113-who-is-vitalik-buterin.md) 于 2013 年发表以太坊白皮书，2014 年 ICO，2015 年主网上线。
- **核心创新**：**EVM（以太坊虚拟机）+ Solidity 智能合约语言**，把区块链从"只能转账"扩展到"能跑任意代码"。
- **定位**：**世界计算机 / 通用结算层**。市值仅次于比特币，截至 2025 年 5 月约 2200 亿美元。

#### EVM 与智能合约

EVM 可以理解成"由全网节点共同维护的一台虚拟计算机"。任何人都能用 Solidity 写一段代码（合约），把它部署上去，全网节点都会按完全一样的方式执行——这是 DeFi、NFT、DAO 等所有上层应用的底座。

```solidity
// 一段最小合约：每被调用一次，计数器加 1
contract Counter {
    uint256 public count;
    function increment() public {
        count += 1;
    }
}
```

EVM 已经成为事实上的"区块链汇编语言"。BNB Chain、Polygon、Avalanche C-Chain、Arbitrum、Optimism、Base、Linea、Scroll 等等都兼容 EVM——开发者写一次合约能跑在十几条链上。EVM 的运作机制可读 [output/119-what-is-a-virtual-machine-vm.md](../output/119-what-is-a-virtual-machine-vm.md)。

#### Gas 与 EIP-1559：为什么以太坊费用经常波动

- 每笔操作消耗 **Gas**（按操作复杂度算）；
- Gas 单价以 **Gwei** 计（1 ETH = 10⁹ Gwei）；
- 2021 年 EIP-1559 后，Gas 费 = **base fee（销毁掉）** + **priority fee（给验证者的小费）**；
- base fee 会被销毁——这给了 ETH "通缩"叙事的基础。

机制全解见 [output/114-how-do-gas-fees-work-on-ethereum.md](../output/114-how-do-gas-fees-work-on-ethereum.md)；伦敦硬分叉的来龙去脉见 [output/461-what-is-the-ethereum-london-hard-fork.md](../output/461-what-is-the-ethereum-london-hard-fork.md)。

#### 升级路线图：一张表看懂

以太坊几乎每年都有升级，新手常被名词砸晕。下面这张表把里程碑拉直：

| 时间 | 升级名 | 核心变化 |
| --- | --- | --- |
| 2015-07 | Frontier / Homestead | 主网上线 |
| 2017 | Byzantium / Constantinople | EVM 优化、降低区块奖励 |
| 2020-12 | Beacon Chain 上线 | PoS 信标链，与主网并行 |
| 2021-08 | London | EIP-1559（base fee 销毁） |
| **2022-09** | **The Merge** | **从 PoW 转向 PoS，能耗下降 99.95%** |
| 2023-04 | Shanghai (Capella) | 开放质押 ETH 提现 |
| **2024-03** | **Cancun-Deneb (Dencun)** | **EIP-4844 引入 Blob，L2 成本骤降** |
| 2025-05 | Pectra | 单验证者上限提至 2048 ETH，账户抽象 EIP-7702 |
| 2025-12 | Fusaka | Gas 上限 4500 万 → 1.5 亿，引入 PeerDAS / Verkle 树 |

The Merge 的全过程见 [output/377-the-merge-ethereum-upgrade-all-you-need-to-know.md](../output/377-the-merge-ethereum-upgrade-all-you-need-to-know.md)；Dencun + Blob 见 [output/279-what-is-the-ethereum-cancun-upgrade.md](../output/279-what-is-the-ethereum-cancun-upgrade.md) 和 [output/342-what-is-eip-4844-in-ethereum-and-how-can-it-benefit-users.md](../output/342-what-is-eip-4844-in-ethereum-and-how-can-it-benefit-users.md)；Pectra 见 [output/195-what-is-the-ethereum-pectra-upgrade.md](../output/195-what-is-the-ethereum-pectra-upgrade.md)；Fusaka 见 [output/077-ethereum-fusaka-upgrade-all-you-need-to-know.md](../output/077-ethereum-fusaka-upgrade-all-you-need-to-know.md)。

#### "以汇总为中心"的路线

以太坊的官方扩容策略是 **rollup-centric roadmap**：

> 主网负责安全和最终结算，性能扩展由 L2（Arbitrum / Optimism / Base / zkSync / Scroll / Linea / Starknet）解决。

如今大多数 DeFi 活动其实跑在 L2 上，而 L2 通过 Blob 把数据压缩后回传主网。这跟 Solana 那种"在 L1 上把性能拉满"的路线是两种完全不同的哲学。第十章会专门讲。

#### 账户抽象（ERC-4337 / EIP-7702）

ERC-4337 让钱包本身就是合约，可以做"用 USDC 付 Gas"、"批量交易"、"社交恢复"这类高级功能。Pectra 升级中的 EIP-7702 把这些能力赋予了普通账户，是钱包易用性的一次大跃进。详见 [output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md](../output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md)。

---

### 3.5 BNB Chain：交易所背书的 EVM 高速公路

![BNB Chain](https://public.bnbstatic.com/static/academy/uploads/36c1e4ae3e6b419fbe4e6173358c815f.jpg)

#### 历史脉络

| 时间 | 事件 |
| --- | --- |
| 2017-07 | BNB 通过 ICO 发行，最初是 ERC-20 |
| 2019-04 | Binance Chain（Beacon Chain）上线，BNB 迁移为原生代币 |
| 2020-09 | Binance Smart Chain (BSC) 上线，**EVM 兼容、3 秒出块** |
| 2022 | 改名 BNB Chain，BSC + Beacon Chain 统一品牌 |
| 2023-09 | opBNB（基于 OP Stack 的 L2）主网上线 |
| 2024-04~06 | **BNB Chain Fusion**——Beacon Chain 关停，功能并入 BSC |
| 2025+ | BNB Chain Fusion 后，整个生态简化为 BSC + opBNB + Greenfield 三件套 |

详见 [output/266-what-is-bnb-chain.md](../output/266-what-is-bnb-chain.md) 与 [output/264-an-introduction-to-bnb-smart-chain-bsc.md](../output/264-an-introduction-to-bnb-smart-chain-bsc.md)。

#### 关键技术特征

- **共识**：**PoSA（Proof of Staked Authority）**——21 个由社区投票产生的活跃验证者轮流出块，3 秒一个块。这是兼顾"低延迟"和"开放参与"的折中方案。
- **EVM 兼容**：本质上是 Geth 的硬分叉。所有以太坊合约几乎能"零修改"部署到 BSC——这是它在 2021 年用户量爆发的关键。
- **代币标准**：BEP-20（对应以太坊 ERC-20）、BEP-721 / BEP-1155（对应 NFT 标准）。

#### BNB 代币

[BNB](../output/674-what-is-bnb.md) 在 BNB Chain 生态里身兼数职：

1. **支付 Gas**（在 BSC、opBNB、Greenfield 上）
2. **质押**：参与 PoSA 共识或委托给验证者
3. **治理**：对协议升级提案投票
4. **币安交易所内**：交易手续费折扣、Launchpool / Megadrop / HODLer 空投资格
5. **Auto-Burn**：每季度根据规则销毁 BNB，目标是把总供应从 2 亿压到 1 亿。详见 [output/417-what-is-bnb-auto-burn.md](../output/417-what-is-bnb-auto-burn.md)。

#### BSC vs Ethereum：实战对比

[output/454-binance-smart-chain-vs-ethereum-what-s-the-difference.md](../output/454-binance-smart-chain-vs-ethereum-what-s-the-difference.md) 把这件事讲得很透：

| 维度 | Ethereum 主网 | BSC |
| --- | --- | --- |
| 共识 | PoS（数十万验证者） | PoSA（21 个活跃验证者） |
| 出块 | 12 秒 | 3 秒 |
| 平均 Gas | 拥堵时 5–20 美元 | 0.05–0.5 美元 |
| 钱包地址 | 0x... | **完全相同的 0x...**（同一私钥可控两条链） |
| 去中心化 | 高 | 中（验证者数量少） |
| 开发者友好度 | 工具最齐全 | 高（合约直接复用以太坊代码） |
| 主要场景 | 大额结算、机构、L2 | 高频小额、零售用户、新兴市场 |

> ⚠️ **新手最常见的混淆**：BSC 和以太坊钱包地址格式完全相同，但**链不同**。你把 ERC-20 USDT 发到 BEP-20 地址不会"丢"，但需要走找回流程。详见第 4 章和 [output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md](../output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md)。

---

### 3.6 Solana (SOL)：高吞吐与并行执行

![Solana](https://public.bnbstatic.com/static/academy/uploads/821e1f22f90f4e5aace520a6b1e7ba86.jpg)

#### 起源与定位

- **创始人**：Anatoly Yakovenko（前 Qualcomm 工程师），2017 年构想，2020 年 3 月主网上线。
- **核心创新**：**PoH（历史证明）**——一种"内置时钟"机制，让节点不必反复就时间顺序投票。
- **定位**：**高频应用 / 支付 / Memecoin / NFT 大型市场**。截至 2025 年初市值超过 1200 亿美元，跻身前五。

#### 技术栈：为什么这么快

```
┌─────────────────────────────────────────────────┐
│              Solana Virtual Machine (SVM)        │  ← 智能合约执行
├─────────────────────────────────────────────────┤
│  Sealevel（并行执行）   Pipeline（流水线打包）     │
├─────────────────────────────────────────────────┤
│   Tower BFT（共识投票）       Turbine（区块传播） │
├─────────────────────────────────────────────────┤
│         Proof of History (PoH，时间戳)            │  ← 关键创新
└─────────────────────────────────────────────────┘
```

- **PoH**：用一条 SHA-256 哈希链当作"全局时钟"，节点不必再为"哪笔交易先发生"达成共识。详见 [output/463-what-is-solana-sol.md](../output/463-what-is-solana-sol.md)。
- **Sealevel 并行执行**：不冲突的交易可以同时跑在多个 CPU 核上——这是 Solana 性能远超 EVM 的核心原因。延伸阅读 [output/244-what-is-parallelization-and-how-does-it-work.md](../output/244-what-is-parallelization-and-how-does-it-work.md)。
- **SVM**：与 EVM 完全不同，使用 Rust / Anchor 框架编写程序。Solana 的代币标准是 SPL（对标 ERC-20）。

#### 实战表现 vs 代价

| 指标 | Solana | 以太坊主网 |
| --- | --- | --- |
| 出块时间 | ~0.4 秒 | 12 秒 |
| 平均费用 | $0.02 左右 | 拥堵时 $5–20 |
| 实测峰值 TPS | 数千 | ~18 |
| 验证者节点 | ~1700+（硬件门槛高） | 数十万 |
| 历史故障 | 多次网络停摆（2021、2022、2024） | 极少 |

**代价**：节点硬件门槛高（普通家用电脑跑不动）、历史上几次因恶意流量导致整网停摆数小时，是 Solana 反复被批评的"中心化倾向"和"稳定性"问题。

#### 生态特征

- **Memecoin 主战场**：2024–2025 年大量爆款 Memecoin（包括 TRUMP、WIF、BONK）出在 Solana。
- **DePIN / 移动**：Solana Mobile 推 Saga / Seeker 手机，DePIN 项目（Helium、Render）大量迁移到 Solana。
- **NFT**：Magic Eden 等大型市场长期 Solana 优先。
- **Solana 现货 ETF**：2024 年开始多家机构提交申请，详见 [output/217-what-is-a-solana-etf.md](../output/217-what-is-a-solana-etf.md)。

---

### 3.7 其他必须认识的公链

下面这几条不是"四大主航道"，但它们各占一个特定的生态位，至少要"听到名字知道是干嘛的"。

#### Tron (TRX)：稳定币结算高速公路

![Tron](https://public.bnbstatic.com/static/academy/uploads/e9da5728c73645f183c3bc39c717c45e.jpg)

- **创始人**：孙宇晨。
- **共识**：DPoS，27 个超级代表轮流出块。
- **杀手级应用**：**USDT 的最大流通网络**。截至 2025 年 8 月，Tron 上的 USDT 超过 780 亿美元，每日转账约 200 万笔——是新兴市场和小额跨境结算的事实标准。
- **手续费**：极低；2025 年 3 月上线 GasFree 后甚至支持用 USDT 直接付手续费。
- **争议**：高度中心化、创始人个人风格争议。
- 素材：[output/097-what-is-tron-trx.md](../output/097-what-is-tron-trx.md)。

#### Cosmos (ATOM)：链与链之间的互联网

![Cosmos](https://public.bnbstatic.com/static/academy/uploads/54dfcb871300419cb7a88578f7ac33f0.png)

- **创始人**：Jae Kwon、Ethan Buchman（2014）。
- **核心理念**：**不是一条链，而是一套"造链工具集"**——Cosmos SDK + Tendermint 共识 + IBC 跨链协议。每个 App 可以拥有自己的链 (Zone)，通过 IBC 互通。
- **代表生态项目**：dYdX v4、Celestia、Injective、Osmosis、Kava、Sei……都是用 Cosmos SDK 构建的独立链。
- 素材：[output/436-what-is-cosmos-atom.md](../output/436-what-is-cosmos-atom.md)。

#### Avalanche (AVAX)：子网架构

- **三链结构**：X-Chain（资产）+ C-Chain（EVM 智能合约）+ P-Chain（验证者协调）。
- **杀手锏**：**Subnet（子网）**——任何机构可以启动一条独立链，复用 Avalanche 的安全性。常见于游戏、企业链定制场景。
- 素材：[output/442-what-is-avalanche-avax.md](../output/442-what-is-avalanche-avax.md)。

#### NEAR / Sui / Aptos：新一代并行执行

- **NEAR**：Nightshade 分片，主打"链抽象"——把多链体验压缩成单一账户。素材：[output/398-what-is-near-protocol-near.md](../output/398-what-is-near-protocol-near.md)。
- **Sui**：基于 Move 语言（最早是 Meta 的 Diem 项目）。**对象模型**让大量交易能并行执行。素材：[output/176-what-is-sui-sui.md](../output/176-what-is-sui-sui.md)。
- **Aptos**：同样基于 Move，亚秒级最终性。素材：[output/211-what-is-aptos.md](../output/211-what-is-aptos.md)。

#### TON：搭着 Telegram 流量起飞

- 由 Telegram 创始人发起，后转交独立基金会运营。
- 2024 年 Hamster Kombat、Notcoin、DOGS 等"Telegram 小游戏代币"短期内带来上亿用户。
- 素材：[output/213-what-is-the-open-network-ton.md](../output/213-what-is-the-open-network-ton.md)、[output/203-what-is-hamster-kombat-hmstr.md](../output/203-what-is-hamster-kombat-hmstr.md)。

#### Hedera (HBAR)：DAG 路线

- 不是链，是有向无环图（DAG），共识机制叫 Hashgraph。
- 治理委员会由谷歌、IBM、波音等大型企业组成——**典型的"许可型公链"**。
- 素材：[output/103-what-is-hedera-hbar.md](../output/103-what-is-hedera-hbar.md)、[output/537-what-is-a-directed-acyclic-graph-dag-in-cryptocurrency.md](../output/537-what-is-a-directed-acyclic-graph-dag-in-cryptocurrency.md)。

#### 还需要知道的名字
- **Polkadot (DOT)**：平行链架构，Web3 基金会主导。素材：[output/493-what-is-polkadot-dot.md](../output/493-what-is-polkadot-dot.md)。
- **Litecoin (LTC)**：BTC 的早期"白银"分支，仍然是稳定运行的 PoW 链。素材：[output/427-what-is-litecoin-ltc.md](../output/427-what-is-litecoin-ltc.md)。
- **Ripple (XRP)**：跨境支付定位，争议最多但市值长期前十。素材：[output/644-what-is-ripple.md](../output/644-what-is-ripple.md)。
- **Internet Computer (ICP)**：DFINITY 主推的"链上托管整个网站"路线。素材：[output/085-what-is-internet-computer-icp.md](../output/085-what-is-internet-computer-icp.md)。

---

### 3.8 实战对比：同一笔 USDT 在不同链上的转账体验

把 100 USDT 从交易所提到自己钱包，下面是几条主流路线的真实差异（数据基于 2025–2026 年的常见区间）：

| 链 / 标准 | 平均费用 | 确认时间 | 优点 | 缺点 |
| --- | --- | --- | --- | --- |
| **Ethereum (ERC-20)** | 拥堵时 $5–20，平时 $1–3 | 1–3 分钟 | 流动性最深、机构标配 | 最贵、新手不友好 |
| **BNB Smart Chain (BEP-20)** | $0.05–0.5 | 数秒 | 便宜、生态丰富 | 验证者少 |
| **Tron (TRC-20)** | 接近 0（GasFree 模式 1 USDT 固定） | 数秒 | 亚洲场外 / 灰产事实标准 | 高度中心化 |
| **Solana (SPL)** | < $0.01 | < 1 秒 | 极快极便宜 | 历史多次停摆 |
| **Polygon (PoS)** | < $0.01 | 2 秒左右 | EVM 兼容 + 低费 | 流动性比主网薄 |
| **Arbitrum / Base 等 L2** | $0.1–0.5 | 数秒 | 继承以太坊安全 | 提到主网需等挑战期 |

**几个铁律：**

1. ⚠️ **每条链上的 USDT 是不同代币合约。** Ethereum 上的 USDT、Tron 上的 USDT、Solana 上的 USDT，三者**不能直接互转**。要换链得通过桥或交易所。
2. ⚠️ **从交易所提币时，"网络"选错是新手最容易犯的错误。** 比如选了 ETH 网络但填了 Tron 地址，资金会卡在 ETH 那条链上，找回流程繁琐。
3. ⚠️ **同样是 0x 开头地址，可能对应 Ethereum / BSC / Polygon / Avalanche / Arbitrum 等多条 EVM 链。** 提币前必须看清楚下拉框里选的是哪条网络。
4. **小额日常转账用 Tron / Solana / BSC；大额、机构、跨平台结算用 Ethereum 主网；DeFi / NFT 看具体协议在哪条链上。**

---

### 3.9 公链是怎么"生死"的：升级、分叉与生态迁移

公链不是上线就完事——它会通过升级（fork）、迁移、甚至分裂来演化。

#### 软分叉 vs 硬分叉

- **软分叉 (Soft Fork)**：协议规则**收紧**。老节点不升级也能继续工作，只是看不到新功能。例如比特币的 SegWit、Taproot。
- **硬分叉 (Hard Fork)**：协议规则**变更**导致两条链不兼容。要么所有节点升级（Ethereum 的伦敦、上海等），要么社区分裂出两条独立链（BTC 与 BCH、ETH 与 ETC）。

完整解释见 [output/671-hard-forks-and-soft-forks.md](../output/671-hard-forks-and-soft-forks.md)。

#### 怎么判断一条链还有没有生命力

不是市值，也不是 TPS，关键看四个指标：

1. **开发者活跃度**：GitHub 提交频率、新合约部署数。
2. **真实用户数**：日活地址、稳定币流通量、Gas 消耗（不是空投刷量）。
3. **生态深度**：有没有头部 DeFi / NFT / 游戏在用，TVL 是否稳定。
4. **节点 / 验证者数量与分布**：足够多才能称得上"公链"。

> 凡是只能给你看"空投撸毛攻略"和"K 线分析"，但没有真实交易和开发者活动的链，多半在凉。

---

### 3.10 常见误区与风险提醒

- ❌ **"TPS 越高越好"** → TPS 通常是用去中心化和稳定性换的。**支付场景看快、结算场景看可信**，目的不同选不同。
- ❌ **"比特币过时了"** → BTC 的定位从来不是"跑应用"。它是货币赛道，跟以太坊不是同一件事。
- ❌ **"把 ETH 发到 BSC 的 ETH 地址"** → 地址格式相同，但**网络不同**。需要通过桥跨链，或在交易所提币时选对网络。第 10 章详述。
- ❌ **"公链 = 项目方的公司"** → 大多数公链由基金会 + 核心开发组 + 社区共同推进。币安**不拥有也不控制** BNB Chain（详见 [output/266](../output/266-what-is-bnb-chain.md) 中相关章节）。
- ❌ **"新链一定比老链强"** → 安全性需要时间和真实攻击的检验。新链的 Bug 通常在上线一两年内才被发现。
- ❌ **"L2 = 山寨链"** → L2（Arbitrum / Optimism / Base 等）继承的是以太坊主网的安全性，不是独立公链。第 10 章详述。
- ❌ **"代币标准都通用"** → ERC-20、BEP-20、SPL、TRC-20 是不同链的代币标准；同一个项目（如 USDT）会在多条链上发行多个版本，**互不替换**。

---

### 3.11 检查清单与练习

- [ ] 能用一句话概括 BTC、ETH、BNB、SOL 各自的灵魂定位。
- [ ] 看懂一次以太坊主网转账的 Gas 费构成（base fee + priority fee），并说出 base fee 去哪了。
- [ ] 列出以太坊从 PoW 到 PoS 的关键 4 次升级（Beacon Chain、Merge、Shanghai、Dencun）和对应作用。
- [ ] **动手 1**：在币安提一笔 10 USDT（或其它小额）分别走 BSC、Tron、Solana 三条网络到自己钱包，记录费用和到账时间。
- [ ] **动手 2**：打开 [Etherscan](https://etherscan.io)、[BscScan](https://bscscan.com)、[Solscan](https://solscan.io)，分别找它们的"24h 交易量"、"活跃地址数"，比较一下。
- [ ] **动手 3**：去 [DefiLlama](https://defillama.com/chains) 看 TVL 排名前 10 的链，跟你刚才学的"主航道"对一对位置。
- [ ] 想清楚：你正在关注的某个项目，**为什么选这条链？换到另一条会出现什么问题？**

---

### 延伸阅读

以下资料按主题分组，`output/` 路径指向本书素材工程内收录的币安学院原文，正文中提到的所有概念、数据、案例均出自这些底稿。**先读本章，再按兴趣深挖。**

#### 比特币（对应 3.3）
- [什么是比特币及其如何运作？](../output/571-what-is-bitcoin.md) — BTC 入门最完整的一篇，本节叙述主框架来源。
- [比特币白皮书解读](../output/064-the-bitcoin-whitepaper-explained.md) — 9 页的白皮书逐段解读。
- [谁是中本聪？](../output/492-who-is-satoshi-nakamoto.md) — 身份谜团与主流候选人。
- [比特币为什么有价值？](../output/457-why-does-bitcoin-have-value.md) — "稀缺、网络效应、抗审查"价值四支柱。
- [比特币是否是一种价值储存手段？](../output/560-is-bitcoin-a-store-of-value.md) — 数字黄金叙事正反辩论。
- [比特币和库存流量比率模型](../output/561-bitcoin-and-the-stock-to-flow-model.md) — S2F 估值模型。
- [所有比特币都挖完后会发生什么？](../output/100-what-happens-after-all-bitcoins-are-mined.md) — 减半、2140 年与未来安全模型。
- [比特币减半概念及其对加密货币市场的影响](../output/465-how-to-mine-bitcoin.md) — 减半事件历史与市场反应。
- [一文读懂中本聪共识](../output/238-what-is-the-nakamoto-consensus.md) — BTC 的共识到底是什么。
- [比特币脚本简介](../output/539-an-introduction-to-bitcoin-script.md) — "不图灵完备"具体长什么样。
- [Schnorr 签名对比特币的意义](../output/540-what-do-schnorr-signatures-mean-for-bitcoin.md) — Taproot 升级核心。
- [什么是 Taproot？](../output/499-what-is-taproot-and-how-it-will-benefit-bitcoin.md)
- [关于隔离见证（SegWit）的初学者指南](../output/590-a-beginners-guide-to-segretated-witness-segwit.md)
- [什么是比特币 Layer 2 网络？](../output/263-what-are-bitcoin-layer-2-networks.md)
- [什么是闪电网络？](../output/680-what-is-lightning-network.md)
- [什么是 Bitcoin Runes？](../output/240-what-are-bitcoin-runes.md)
- [什么是比特币 Stamps？](../output/256-what-are-bitcoin-stamps.md)
- [什么是 Bitcoin Ordinals？](../output/328-what-are-ordinals-an-overview-of-bitcoin-nfts.md)
- [BRC-20 代币介绍](../output/262-what-are-brc-20-tokens.md)
- [什么是比特币储备策略？](../output/131-what-is-a-bitcoin-treasury-strategy.md)
- [什么是战略性比特币储备？](../output/155-what-is-a-strategic-bitcoin-reserve.md)
- [谁是 Michael Saylor？](../output/187-who-is-michael-saylor.md) — MicroStrategy 模式的代表人物。
- [比特币现货 ETF 与期货 ETF 对比](../output/293-bitcoin-spot-etf-vs-bitcoin-futures-etf-what-s-the-difference.md)
- [比特币领先指数简史](../output/368-a-brief-history-of-bitcoin-dominance.md)
- [比特币价格历史概况](../output/447-an-overview-of-bitcoin-s-price-history.md)
- [揭秘关于比特币的 15 大误解](../output/272-debunking-the-top-15-bitcoin-myths.md)

#### 以太坊（对应 3.4）
- [以太坊概念及其运作机制介绍](../output/567-what-is-ethereum.md) — 本节主框架来源。
- [一文读懂 Vitalik Buterin](../output/113-who-is-vitalik-buterin.md)
- [以太坊 Gas 费机制](../output/114-how-do-gas-fees-work-on-ethereum.md) — 必读。
- [一文读懂虚拟机 (VM)](../output/119-what-is-a-virtual-machine-vm.md)
- [什么是以太坊改进提案 (EIP)？](../output/038-what-is-an-ethereum-improvement-proposal-eip.md)
- [什么是以太坊 2.0？](../output/505-what-is-ethereum-2-0-and-why-does-it-matter.md)
- [以太坊合并升级的全面介绍](../output/377-the-merge-ethereum-upgrade-all-you-need-to-know.md) — Merge 来龙去脉。
- [以太坊转向权益证明：以太币持有者须知](../output/376-ethereum-on-proof-of-stake-what-ethereum-hodlers-need-to-know.md)
- [什么是以太坊伦敦硬分叉？](../output/461-what-is-the-ethereum-london-hard-fork.md) — EIP-1559 来源。
- [以太坊上海升级概念及其影响](../output/352-what-is-the-ethereum-shanghai-upgrade-and-how-will-it-affect-me.md)
- [什么是以太坊坎昆升级？](../output/279-what-is-the-ethereum-cancun-upgrade.md) — Dencun 全解。
- [什么是 EIP-4844（Proto-Danksharding）？](../output/342-what-is-eip-4844-in-ethereum-and-how-can-it-benefit-users.md)
- [一文读懂以太坊 Pectra 升级](../output/195-what-is-the-ethereum-pectra-upgrade.md)
- [一文读懂以太坊 Fusaka 升级](../output/077-ethereum-fusaka-upgrade-all-you-need-to-know.md)
- [什么是以太坊箭形冰川升级？](../output/420-what-is-the-ethereum-arrow-glacier-upgrade.md)
- [以太坊账户抽象解析（ERC-4337）](../output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md)
- [什么是 zkEVM？](../output/318-what-is-a-zkevm-and-how-can-it-enhance-the-ethereum-ecosystem.md)
- [ERC-20 代币介绍](../output/534-an-introduction-to-erc-20-tokens.md)
- [ERC-1155 介绍](../output/267-what-is-erc-1155-and-how-does-it-work.md)
- [Wrapped Ether (WETH) 介绍](../output/406-what-is-wrapped-ether-weth-and-how-to-wrap-it.md)
- [以太坊中的代币化比特币详解](../output/528-tokenized-bitcoin-on-ethereum-explained.md)
- [一文读懂以太坊 ETF](../output/222-what-is-an-ethereum-etf.md)
- [如何取消或替换待处理的以太坊交易](../output/464-how-to-cancel-or-replace-a-pending-ethereum-transaction.md)

#### BNB Chain 与 BSC（对应 3.5）
- [什么是 BNB Chain？](../output/266-what-is-bnb-chain.md) — 本节叙述主框架。
- [BNB Smart Chain (BSC) 介绍](../output/264-an-introduction-to-bnb-smart-chain-bsc.md)
- [币安智能链与以太坊有何不同？](../output/454-binance-smart-chain-vs-ethereum-what-s-the-difference.md) — 关键对比表来源。
- [什么是币安币 (BNB)？](../output/674-what-is-bnb.md)
- [什么是 BNB Greenfield？](../output/336-what-is-bnb-greenfield.md)
- [什么是 BNB Auto-Burn？](../output/417-what-is-bnb-auto-burn.md)
- [BNB Smart Chain 的最佳加密货币钱包](../output/448-the-best-crypto-wallets-for-binance-smart-chain-bsc.md)
- [关于 BNB Smart Chain 的 BNB 质押速览](../output/476-a-quick-guide-to-bnb-staking-on-binance-smart-chain-bsc.md)
- [将 MetaMask 关联至 BNB Smart Chain](../output/512-connecting-metamask-to-binance-smart-chain.md)
- [什么是 BscScan？](../output/431-what-is-bscscan-and-how-to-use-it.md)
- [如何在币安上找回转账到错误网络的数字货币](../output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md)

#### Solana（对应 3.6）
- [什么是 Solana (SOL)？](../output/463-what-is-solana-sol.md) — 本节主要素材。
- [什么是 Solana 虚拟机 (SVM)？](../output/248-what-is-the-solana-virtual-machine-svm.md)
- [什么是并行化？](../output/244-what-is-parallelization-and-how-does-it-work.md)
- [什么是 Solana ETF？](../output/217-what-is-a-solana-etf.md)
- [什么是 Phantom 钱包？](../output/177-what-is-phantom-wallet-and-how-to-use-it.md)
- [什么是 Solscan？](../output/404-what-is-solscan-and-how-to-use-it.md)

#### 其他主流公链（对应 3.7）
- [一文读懂 Tron (TRX)](../output/097-what-is-tron-trx.md)
- [什么是 Cosmos (ATOM)？](../output/436-what-is-cosmos-atom.md)
- [什么是 Avalanche (AVAX)？](../output/442-what-is-avalanche-avax.md)
- [什么是 NEAR Protocol？](../output/398-what-is-near-protocol-near.md)
- [什么是 Sui？](../output/176-what-is-sui-sui.md)
- [什么是 Aptos？](../output/211-what-is-aptos.md)
- [什么是 Polkadot (DOT)？](../output/493-what-is-polkadot-dot.md)
- [什么是 The Open Network (TON)？](../output/213-what-is-the-open-network-ton.md)
- [什么是 Hedera (HBAR)？](../output/103-what-is-hedera-hbar.md)
- [什么是 Internet Computer (ICP)？](../output/085-what-is-internet-computer-icp.md)
- [什么是 Litecoin (LTC)？](../output/427-what-is-litecoin-ltc.md)
- [什么是 Ripple？](../output/644-what-is-ripple.md)
- [什么是 Stellar (XLM)？](../output/106-what-is-stellar-xlm.md)
- [什么是 EOS？](../output/343-what-is-eos.md)
- [什么是 VeChain (VET)？](../output/482-what-is-vechain-vet.md)
- [什么是 Sonic (S)？](../output/093-what-is-sonic-s.md)
- [什么是 Berachain (BERA)？](../output/164-what-is-berachain-bera.md)

#### 升级、分叉与公链治理（对应 3.9）
- [硬分叉与软分叉](../output/671-hard-forks-and-soft-forks.md)
- [什么是模块化区块链？](../output/261-what-are-modular-blockchains.md)
- [什么是应用链 (App 专用区块链)？](../output/254-what-are-appchains-application-specific-blockchains.md)
- [什么是侧链？](../output/273-what-are-sidechains.md)
- [区块链分层 1 vs 分层 2](../output/387-blockchain-layer-1-vs-layer-2-scaling-solutions.md)
- [什么是 Layer 1？](../output/403-what-is-layer-1-in-blockchain.md)
- [私有链、公有链和联盟链有何区别？](../output/583-private-public-and-consortium-blockchains-whats-the-difference.md)

#### 外部参考（公开网络资源）
- 比特币白皮书原文：[bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)
- 以太坊官方文档：[ethereum.org/zh/developers/docs/](https://ethereum.org/zh/developers/docs/)
- BNB Chain 官方文档：[docs.bnbchain.org](https://docs.bnbchain.org)
- Solana 官方文档：[docs.solana.com](https://docs.solana.com)
- 公链 TVL / 活跃度数据：[DefiLlama](https://defillama.com/chains)
- 公链生态对比：[L2BEAT](https://l2beat.com)（侧重以太坊 L2）
- 链上活动数据看板：[Artemis](https://www.artemis.xyz)、[Token Terminal](https://tokenterminal.com)

> **阅读建议：** 本章涉及的素材最多，但**不要被吓到**。先把 [571-what-is-bitcoin](../output/571-what-is-bitcoin.md)、[567-what-is-ethereum](../output/567-what-is-ethereum.md)、[266-what-is-bnb-chain](../output/266-what-is-bnb-chain.md)、[463-what-is-solana](../output/463-what-is-solana-sol.md)、[454-bsc-vs-ethereum](../output/454-binance-smart-chain-vs-ethereum-what-s-the-difference.md) 五篇读完——这是 4 条主航道的"底盘"。剩下的延伸阅读，每次遇到一条不熟悉的链再回头查一篇。**生态在变，但选链的判断框架是稳定的——本章给你的就是这个框架。**

---

## 第四章 钱包、私钥与第一笔链上操作

### 本章目标
- 把"钱包"这件事从"App 图标"还原成"私钥管理 + 签名机器"，把心智模型校正过来
- 在托管、非托管、硬件、MPC、多签、智能合约钱包之间做出适合自己的取舍
- 掌握 5 个高频实操：创建钱包、备份助记词、添加网络、收款转账、给 DApp 授权
- 避开新手最容易栽跟头的 8 个坑（截图助记词、选错网络、Unlimited 授权、地址投毒……）

![加密货币钱包](https://public.bnbstatic.com/static/academy/uploads/b6fbbed3787945b6b9ca520d4a7fbac3.jpg)

### 4.1 读者先要解决的问题

很多人对"钱包"的第一印象是 MetaMask 那只小狐狸。这个印象一开始就是错的。

**钱包不存币。** 币永远在链上的账本里，钱包只是一把"钥匙串 + 签名机"。它替你做三件事：

1. **保管私钥**（这串随机数证明"这个地址里的钱属于你"）；
2. **构造和签名交易**（把"我要把 1 ETH 转给地址 X"变成一段被私钥签名的数据）；
3. **广播交易**（把签好的交易扔进 P2P 网络，让节点打包上链）。

理解这一点，你就会明白为什么本章里反复出现的那句话是：**备份助记词是 Web3 里最重要的一件事，没有之一。**

> **本章核心一句话：** 钱包的核心不是"哪个 App 漂亮"，而是"私钥放在哪里，丢了 / 被偷了怎么办"。这一章建立的不是产品对照表，而是一套"分级保管私钥"的方法论。

---

### 4.2 钱包的本质：账本不动，钥匙在手

回到第二章建立的心智模型——

```
私钥 ──[椭圆曲线乘法]──> 公钥 ──[哈希]──> 地址
                                          ↑
                                     别人转给你的"账号"
```

钱包做的所有事情，归根结底就是把私钥安全地保管起来，并在你需要发交易的时候用它生成一个数字签名。链上的账本根本不知道"你"是谁，只知道"哪个地址的余额是多少、哪条交易携带了正确的签名"。

这意味着两个铁律：

1. **谁拿到私钥（或助记词），谁就是这笔钱的合法主人。** 没有挂失、没有客服、没有反悔。
2. **同一组助记词在所有钱包 App 中通用。** 你用 MetaMask 创建的 12 词助记词，可以一字不差导入 Trust Wallet、Rabby、OKX 钱包、Phantom（同一类签名算法的链）、硬件钱包等等。**钱包 App 不是钱的家，私钥才是。**

钱包形态会变，私钥保管的逻辑不会。任何宣称"无需助记词、无需备份"的产品，背后一定是把"备份"这件事用别的方式完成了（MPC 分片 / 社交恢复 / 服务器托管），并不是真的取消了。

---

### 4.3 钱包大分类：从两条轴看清楚

市面上钱包多到让人犯晕。其实只要建立两条坐标轴就能把它们分得很清楚。

#### 轴一：谁掌控私钥？（托管 vs 非托管）

| 维度 | 托管钱包 | 非托管钱包 |
| --- | --- | --- |
| 私钥保管 | 第三方（交易所 / 服务商） | 你自己 |
| 找回密码 | ✅ 可以 | ❌ 不行（除非有助记词） |
| 适用场景 | 交易、新手入门、法币出入金 | DeFi、链上交互、长期持有 |
| 主要风险 | 平台跑路 / 被监管 / 被黑 | 你自己丢助记词 / 中招钓鱼 |
| 代表产品 | 币安、Coinbase、OKX | MetaMask、Trust Wallet、Phantom、Rabby |

经典论断："**Not your keys, not your coins**"——如果你不掌握私钥，你拥有的不是币，而是平台对你的"欠条"。这是 Mt. Gox、FTX 之后被反复印证的教训。

详细对比见 [output/396-custodial-vs-non-custodial-wallets-what-s-the-difference.md](../output/396-custodial-vs-non-custodial-wallets-what-s-the-difference.md)。

#### 轴二：私钥联不联网？（热钱包 vs 冷钱包）

| 维度 | 热钱包 (Hot) | 冷钱包 (Cold) |
| --- | --- | --- |
| 联网状态 | 联网 | 离线 |
| 速度 | 即时 | 每笔都要插设备/扫码 |
| 安全性 | 易受钓鱼 / 恶意网站攻击 | 高，物理隔绝网络风险 |
| 适用 | 小额、高频、DApp 交互 | 大额、长期持有 |
| 代表 | MetaMask、Phantom、Trust Wallet、币安账户 | Ledger、Trezor、SafePal、纸钱包、Air-gapped |

行业里**最务实的做法是两者结合**——少量资金放热钱包做日常操作，大额放冷钱包做"锁金库"。这条原则贯穿后面所有讨论。详细对比：[output/082-hot-vs-cold-wallet-which-crypto-wallet-should-you-use.md](../output/082-hot-vs-cold-wallet-which-crypto-wallet-should-you-use.md)。

#### 把两条轴叠在一起，就是 6 类典型产品

```
                       ↑ 冷
                       │
                       │  Ledger / Trezor   (硬件冷钱包)
                       │  纸钱包 / 金属板  (物理冷存)
                       │
   托管 ────────────────┼──────────────── 非托管
                       │
                       │  MetaMask / Trust  (软件热钱包)
                       │  Phantom / Rabby  
                       │
   币安 / Coinbase     │   币安 Web3 钱包  (混合 MPC)
   (托管热钱包)         │
                       ↓ 热
```

---

### 4.4 钱包形态全家福

下面把上面坐标系里每一个位置的代表产品都展开讲一下，让你明白各自适合什么场景。

#### ① 软件钱包（最常用）

##### MetaMask（小狐狸）
- 浏览器插件 + 移动 App，支持所有 EVM 链。
- 占据以太坊生态一半以上市场份额，几乎所有 DApp 都首先适配它。
- 缺点：默认 UI 不显示风险提示，新手容易被钓鱼网站骗签名。

##### Trust Wallet（币安生态）
- 移动端起家、2018 年被币安收购，70+ 条链、超 7000 万用户。
- 内置 DApp 浏览器、跨链兑换、staking。详见 [output/660-what-is-trust-wallet.md](../output/660-what-is-trust-wallet.md)。
- 浏览器插件版本支持 Chrome、Brave、Edge。

##### Phantom（Solana 主场）
- Solana 上的事实标准钱包，后来扩展到了以太坊和比特币。
- UI 极简、对 NFT 友好。Solana 用户的入门首选。详见 [output/177-what-is-phantom-wallet-and-how-to-use-it.md](../output/177-what-is-phantom-wallet-and-how-to-use-it.md)。

##### Rabby、OKX 钱包、Bitget Wallet、Coinbase Wallet 等
- Rabby 是 DeBank 团队出品的"钓鱼防护增强版" MetaMask；
- OKX / Bitget 钱包打通中心化交易所与链上；
- Coinbase Wallet 是 Coinbase 的非托管版本。

#### ② 硬件钱包（冷存储黄金标准）

![硬件钱包工作原理](https://image.binance.vision/editor-uploads/3db5049d8faf4b72af78f48b190e4997.png)

硬件钱包的核心思想：**私钥永不离开设备**。你在电脑/手机上构造好交易，把它"喂"进硬件钱包，硬件钱包内部签名后再把结果"吐"回来——私钥从头到尾没有接触过联网设备。

主流产品：

| 品牌 | 形态 | 特点 |
| --- | --- | --- |
| **Ledger Nano S+ / Nano X / Stax / Flex** | USB / 蓝牙 | 市场份额最大，2020 年发生过用户邮件库泄露事件 |
| **Trezor Model One / Safe 3 / Safe 5** | USB / 触屏 | 完全开源，欧洲品牌 |
| **SafePal S1 / X1** | 二维码扫描 / 蓝牙 | 币安生态投资，性价比高 |
| **Tangem** | NFC 智能卡 | 像信用卡，无电池、无屏幕 |
| **Keystone / Ngrave / GridPlus** | Air-gapped | 完全不联网，靠扫码签名 |

详见 [output/568-what-is-a-hardware-wallet.md](../output/568-what-is-a-hardware-wallet.md)、[output/306-what-is-an-air-gapped-wallet.md](../output/306-what-is-an-air-gapped-wallet.md)。

> ⚠️ **硬件钱包不是"无敌"**：它只保证私钥不泄露，不会替你审查"你正在签的交易"是不是恶意合约。后面 4.10 节会讲。

#### ③ MPC 钱包（无助记词的新形态）

**多方计算 (Multi-Party Computation)** 把私钥拆成多个"分片"，分别存在不同地方（你的设备、云端、服务商服务器）。任何一方都拿不到完整私钥，但凑够 2/3 即可签名。

代表：

- **币安钱包（原 Web3 钱包）**：3 个分片分别在用户设备、iCloud/Google Drive、币安服务器。无需助记词，但保留你的自托管权——任何单一方（包括币安）都不能动用你的资金。详见 [output/280-what-is-binance-web3-wallet-and-how-does-it-work.md](../output/280-what-is-binance-web3-wallet-and-how-does-it-work.md)。
- **ZenGo、Fireblocks、Coinbase Wallet（机构版）** 等都使用 MPC 架构。

MPC 把"助记词"这个最大的用户体验障碍消除了，同时保留自托管，是机构和企业资金管理的主流方案。详见 [output/284-what-are-multi-party-computation-mpc-wallets.md](../output/284-what-are-multi-party-computation-mpc-wallets.md)。

#### ④ 多签钱包（团队金库的标配）

**多签 (Multisig)** = 一个地址需要 N 个独立私钥中的 M 个签名才能动钱（例如 3/5、4/7）。

最广泛应用是 [Safe（前 Gnosis Safe）](https://safe.global)——以太坊上几乎所有 DAO、基金会、团队金库都用它。

适用场景：
- DAO / 项目方资金管理（避免"创始人跑路")；
- 大额个人资产（自己持有 2/3 个分散保管的密钥）；
- 第三方托管交易（Alice + Bob + 仲裁者 Charlie）。

详见 [output/646-what-is-a-multisig-wallet.md](../output/646-what-is-a-multisig-wallet.md)。

> ⚠️ **多签 ≠ MPC**：多签把多个签名拼在一起广播到链上（链上看得到 N/M 结构）；MPC 在链下计算出**一个**签名（链上看起来跟普通钱包一样）。

#### ⑤ 智能合约钱包 / 账户抽象（钱包的未来）

传统的"外部账户 (EOA)"完全由私钥控制——丢了就没了，没有任何弹性。**ERC-4337（账户抽象）** 让"账户本身就是一段智能合约"，允许：

- **社交恢复**：3 个朋友 + 设备 = 找回钱包；
- **限额**：每天最多花 1 ETH、超过需要二次确认；
- **批量交易**：一次签 5 笔操作；
- **用 USDC 付 Gas**：不必持有原生代币；
- **Session keys**：游戏 / DApp 登录后短期内不用每次签名。

2025 年 5 月以太坊 Pectra 升级中的 EIP-7702 把这些能力赋予了普通账户，是钱包易用性的重大跃进。代表产品：Argent、Safe v1.4、Coinbase Smart Wallet 等。详见 [output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md](../output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md)。

---

### 4.5 实操 1：从零设置一个非托管钱包（MetaMask 示例）

下面以 MetaMask 浏览器插件为例（手机版操作类似）。**不要急，每一步都仔细做。**

```
[1] 下载 ─────────► [2] 创建新钱包 ─────► [3] 设置本地密码
       ▲                                                │
       │                                                ▼
       └ 必须从官网                            [4] 显示 12 词助记词
       https://metamask.io                              │
       (任何"中文版""破解版"都是钓鱼)                    ▼
                                              [5] 物理抄写到纸/金属板
                                                        │
                                                        ▼
                                              [6] 重新选词验证 → 完成
```

**关键动作：**

1. **只从官网 metamask.io 下载**。Chrome 应用商店里有数十个"MetaMask"假冒插件，安装就被掏空。
2. **本地密码**：保护设备端，不能找回。可以用密码管理器存。
3. **12 词助记词** 是核心：
   - ✅ 用纸笔抄两份，物理分两处保存（家里 + 父母家 / 银行保险柜）；
   - ✅ 进阶：买金属板（Cryptotag、Cryptosteel）刻上去，防火防水防腐蚀；
   - ❌ **不要截图**（手机相册会自动同步到 iCloud / Google Photos）；
   - ❌ **不要存到云盘 / 微信收藏 / 邮件草稿**；
   - ❌ **不要拍照发给自己 / 家人**；
   - ❌ **不要输入到任何"导入向导"以外的输入框**（钓鱼网站会假装让你"恢复钱包"）。
4. 完成后，添加你常用的网络。详见 4.6。
5. **第一笔操作必须是测试转账**：从交易所提 10–20 美元等值币到这个新钱包，确认收到后再做大额。

详细全流程图文版：[output/206-how-to-set-up-a-crypto-wallet.md](../output/206-how-to-set-up-a-crypto-wallet.md)。

> 🔑 **助记词应急预案：写一份《私钥遗嘱》**
>
> 如果你今天发生意外，家人能按步骤找到资产吗？建议写一份纸质说明（不必带具体助记词），告诉信任的人：1) 助记词在哪一处保险柜；2) 如何使用；3) 资产在哪条链上。币圈"主人意外去世，资产永久冻结在链上"的故事每年都在重复。详见 [output/316-how-to-safely-pass-on-your-crypto-when-you-die.md](../output/316-how-to-safely-pass-on-your-crypto-when-you-die.md)。

---

### 4.6 实操 2：添加网络与自定义代币

MetaMask 默认只显示以太坊主网。要用 BNB Chain、Polygon、Arbitrum 等，需要手动添加。

#### 添加网络（以 BSC 为例）

1. 点击顶部网络下拉框 → "添加网络" → "手动添加网络"；
2. 填写：
   - 网络名称：`BNB Smart Chain`
   - RPC URL：`https://bsc-dataseed.binance.org/`
   - 链 ID：`56`
   - 货币符号：`BNB`
   - 区块浏览器：`https://bscscan.com`
3. 保存即可。

更省事的方法是去 [chainlist.org](https://chainlist.org)，点一下就能批量添加。

逐链教程：
- [output/512-connecting-metamask-to-binance-smart-chain.md](../output/512-connecting-metamask-to-binance-smart-chain.md)（BSC）
- [output/414-how-to-add-polygon-to-metamask.md](../output/414-how-to-add-polygon-to-metamask.md)（Polygon）
- [output/413-how-to-add-avalanche-to-metamask.md](../output/413-how-to-add-avalanche-to-metamask.md)（Avalanche）
- [output/390-how-to-add-arbitrum-to-metamask.md](../output/390-how-to-add-arbitrum-to-metamask.md)（Arbitrum）
- [output/468-connecting-trust-wallet-to-binance-smart-chain-bsc.md](../output/468-connecting-trust-wallet-to-binance-smart-chain-bsc.md)（Trust Wallet 接 BSC）

#### 添加自定义代币

钱包默认只显示原生代币（ETH、BNB、SOL 等）。其他代币需要手动 "Import Token" → 输入合约地址。

> ⚠️ **合约地址必须从官方文档 / CoinGecko / 区块链浏览器复制**——搜索引擎前几条经常是钓鱼网站。

---

### 4.7 实操 3：从交易所往钱包提币（含网络选择）

这是新手 95% 的资金损失源头。一定要慢。

```
币安账户 ──提现── ➜ 选币种 ➜ 粘地址 ➜ 选网络(!!) ➜ 输金额 ➜ 2FA ➜ 等到账
                              │              │
                              ▼              ▼
                     钱包二维码       与钱包当前网络匹配
```

**5 步标准动作：**

1. **登录币安 → 钱包 → 现货 → 提现**；
2. **选币种**：USDT 是最常见也最容易出错的——它在 ETH、BSC、Tron、Solana、Polygon 等好几条链上都有版本，**不能跨链使用**；
3. **粘贴地址**（直接复制，绝不手敲）；
4. **选网络**：必须和你钱包当前选中的网络一致——
   - ETH 主网 / ERC-20 ↔ MetaMask 选 Ethereum
   - BSC / BEP-20 ↔ MetaMask 选 BNB Smart Chain
   - Tron / TRC-20 ↔ Tron 系列钱包（如 TronLink）
   - Solana / SPL ↔ Phantom
5. **输金额 → 验证 2FA → 提交**。

**第一次走任何新地址、新网络组合，都先发一笔最小额度（1–5 美元）测试。** 每年因为"复制粘贴时复制错了一段地址"或"选错网络"造成的损失高达数亿美元。

提币教程：[output/224-your-guide-to-binance-deposit-withdrawal.md](../output/224-your-guide-to-binance-deposit-withdrawal.md)、[output/472-how-to-withdraw-bep20-tokens-on-binance-smart-chain.md](../output/472-how-to-withdraw-bep20-tokens-on-binance-smart-chain.md)。

#### 选错网络怎么办？

视具体情况而定：

- **目标链支持同一私钥**（如 ERC-20 USDT 误发到一个 BEP-20 地址，但这个地址背后是同一个 0x... 私钥）→ 可能可以通过"导入私钥到对应网络的钱包"取回；
- **目标链 / 地址格式完全不兼容**（如 ERC-20 USDT 发到 Solana 地址）→ 大概率永久丢失；
- **从币安提现错网络** → 通过工单提交《资产恢复申请》，**仅限部分场景且需缴费**。

完整找回流程：[output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md](../output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md)。

> **铁律：** 不要把"找回"当成兜底。**没有找回，才是常态。**

#### 进一步保护：地址白名单 + Satoshi 测试

- **提现地址白名单**：在币安"安全设置"里把常用地址加白名单，新地址必须等 24 小时才能用——能挡掉 90% 的"账号被入侵→秒提"。详见 [output/655-withdrawal-address-whitelist.md](../output/655-withdrawal-address-whitelist.md)。
- **Satoshi 测试 / 旅行规则**：合规要求下，向某些交易所提币时需证明"提币目标地址确实属于你"。常见做法是发一笔指定金额的极小转账（如 0.000123 BTC）。原理见 [output/138-what-is-the-satoshi-test-and-how-does-it-help-with-the-travel-rule.md](../output/138-what-is-the-satoshi-test-and-how-does-it-help-with-the-travel-rule.md)。

---

### 4.8 实操 4：第一次连接 DApp 并签名

DApp = 任何需要"Connect Wallet"按钮的网页（DEX、NFT 市场、借贷、游戏）。

```
[1] 打开 DApp ─➜ [2] 点 Connect Wallet ─➜ [3] 钱包弹窗 ─➜ [4] 看清 ✓ 后批准
                                                        │
                                                        ▼
                                            ⚠️ 只是连接 ≠ 签名转账
                                            连接只授权 DApp 看到你的地址
```

#### 三种"批准"的差别（最关键）

| 操作 | 实际发生了什么 | 风险 |
| --- | --- | --- |
| **Connect Wallet** | DApp 知道你的地址 | 几乎为零 |
| **Sign Message（签消息）** | 离线签名一段文本（如登录身份证明） | 中等——某些钓鱼站用恶意签名让你"签掉资产" |
| **Approve（授权 ERC-20）** | 允许某个合约从你这里调走某个代币 | **高**——这是被盗空的最常见原因 |
| **Send Transaction（发送）** | 实际转账，要花 Gas，链上记录 | 看你转给谁 |

#### Approve 的"额度"陷阱

很多 DApp 默认让你授权"Unlimited"额度——意味着这个合约今后可以**随时无上限**地调走你这种代币。如果合约日后被入侵，或本身就是钓鱼合约，整个余额秒变零。

**正确做法：**

- 每次都改成你"这次需要的金额"（比如要换 100 USDC，就授权 100 而不是 Unlimited）；
- 定期用 [revoke.cash](https://revoke.cash) 检查并撤销不再使用的授权（每条链都要检查）；
- Rabby、OKX 钱包等有内置的"风险标记"功能，能提示 "你将授权 unlimited 给一个新合约"，强烈推荐。

> **被盗模板复盘：** 用户在某个"空投领取页"上签了一笔看似无害的 Permit/Approve，几小时后 USDC 余额清零。这种钓鱼成本极低、回报极高，每天都在发生。

---

### 4.9 实操 5：地址簿、白名单、防地址投毒

#### 什么是地址投毒

攻击者用算力暴力生成一串和你常转的地址前后几位一模一样的"高仿地址"，再向你发一笔 0 元交易——这样这个高仿地址就出现在你的"最近交易"列表里。

下次你想给那个真地址转钱时，下意识从历史里挑了一个"看着对"的——其实就是高仿，钱直接进攻击者的口袋。

2024 年 5 月就有一位巨鲸误把 6800 万美元的 WBTC 发到这种高仿地址（前 6 位完全相同）。详见 [output/047-how-do-crypto-address-poisoning-attacks-work.md](../output/047-how-do-crypto-address-poisoning-attacks-work.md)。

#### 应对策略

1. **建立"白名单地址簿"**：常用地址给名字保存，发币只从地址簿里选；
2. **永远完整核对地址**——至少前 6 位 + 后 6 位 + 中间挑一段；
3. **大额转账先发 0.01 测试**到账后再发主币；
4. **使用 ENS / SNS / .bnb 等可读域名**：把 `vitalik.eth` 当作收款地址比 `0xd8dA...` 直观得多。

#### 多签骗局

骗子主动把"私钥"或"助记词"私信塞给你，让你"帮我提走里面的资金"。你导入钱包后看到余额、想转出，会发现需要 Gas，于是从自己钱包转 Gas 进去——结果 Gas 一到账被脚本秒转走。这是"老鼠仓"骗局，背后利用的是多签或 Permit 机制。详见 [output/193-what-are-multisig-scams-and-how-to-avoid-them.md](../output/193-what-are-multisig-scams-and-how-to-avoid-them.md)。

> **铁律：** 任何让你"导入陌生助记词"或"签陌生消息"的请求，默认是骗局。

---

### 4.10 钱包安全分级保管（推荐方案）

把所有币塞在同一个 MetaMask 里 = 把所有钱放在同一个钱包里走过夜车。

**推荐三仓制：**

```
[长期仓 / 70%]   硬件钱包 (Ledger / Trezor / SafePal)
                 ──── 永远不连不熟悉的 DApp，仅做收款和大额转出
                 
[活期仓 / 25%]   软件钱包 (MetaMask / Trust / 币安钱包)
                 ──── 日常 DeFi、NFT、链上交互
                 
[嗅探仓 / 5%]    "burner 钱包"
                 ──── 测试新协议、连可疑空投网站、
                      Mint 没听过的 NFT 时使用
                      被掏空也不心疼
```

**进阶（资产 > 10 万美元）**：用 Safe 多签或 MPC 方案——任何一台设备出问题都不会丢全部。

#### 硬件钱包的 10 个使用要点（精简版）

来自 [output/303-ten-tips-for-using-a-hardware-wallet-securely.md](../output/303-ten-tips-for-using-a-hardware-wallet-securely.md)：

1. 只从官网 / 官方旗舰店购买，**绝不买二手**（供应链攻击）；
2. 收到设备先看包装是否完好；
3. 自己生成助记词，不要用预生成的；
4. 助记词物理抄写，金属板优先；
5. 设置 PIN 码，不要用生日；
6. 每次签名前**核对屏幕上的接收地址**（恶意软件会篡改剪贴板）；
7. 固件升级要从官方 App，不要点邮件链接；
8. 大额操作前断开蓝牙、用 USB；
9. 备份多份助记词，分开存放；
10. 任何客服 / "钱包技术支持"问你要助记词的，100% 是骗局——**没有任何官方需要你的助记词**。

---

### 4.11 常见误区与风险提醒（升级版）

- ❌ **"把助记词截图保存"** → 截图自动同步到云相册，等于把家门钥匙贴在小区公告栏。
- ❌ **"我设了很强的本地密码所以很安全"** → 本地密码只保护设备端被偷时打开 App。助记词泄露，密码再强也没用。
- ❌ **"硬件钱包就绝对安全"** → 它只保护私钥不出门，不替你审查交易内容。在它上面签恶意合约一样会被清空。
- ❌ **"选错网络资产一定能找回"** → 取决于具体场景。**没有找回是常态，能找回是运气。**
- ❌ **"我的钱包地址只有我知道"** → 链上地址全公开。但**助记词必须保密**——这两件事不能混。
- ❌ **"用同一组助记词管理几十万美元 + 测试空投"** → 一旦你为了某个可疑空投签了恶意 Permit，全部资产蒸发。**用 burner 钱包做测试。**
- ❌ **"钱包 App 收费就一定安全"** → 没有这个等式。MetaMask 免费、Phantom 免费，恰恰是因为足够多人审计。
- ❌ **"链上地址越花哨越好（vanity address）"** → 全 0 开头、含名字的地址都需要爆破生成，可能是交给第三方生成的——**第三方就有你的私钥**。
- ❌ **"客服在 Telegram / Discord 私信我的"** → 100% 是骗局。所有官方都说过"我们不会主动私信"。
- ❌ **"我已经把所有 ERC-20 都转走了，旧钱包就不用管了"** → 错。可能还有未撤销的 Approve 授权挂在合约上。**用 [revoke.cash](https://revoke.cash) 清扫一遍再弃用。**

---

### 4.12 检查清单与练习

- [ ] 用一句话向小白解释：钱包到底存了什么？助记词为什么不能截图？
- [ ] 能说清 **"托管 vs 非托管"** 和 **"热 vs 冷"** 是两条独立的轴。
- [ ] **动手 1**：亲手在 MetaMask（或 Trust / 币安钱包）创建一个新钱包，**用纸笔物理抄写**助记词到两个不同地点。
- [ ] **动手 2**：在 [chainlist.org](https://chainlist.org) 添加 BSC、Polygon、Arbitrum 至少 2 条网络，并导入一个自定义代币。
- [ ] **动手 3**：从币安提一笔 5–10 USDT 到自己的钱包（先用 BSC / TRC-20 等便宜网络），全程把【币种、网络、地址、Gas 估算】各看 3 遍。
- [ ] **动手 4**：去 [revoke.cash](https://revoke.cash) 连接钱包，看自己历史授权过哪些合约。
- [ ] **动手 5**：查看一笔自己的转账在区块链浏览器上的完整数据（TxID → From → To → 状态 → 确认数）。
- [ ] 写一份《私钥应急预案》：手机丢了、设备坏了、自己出意外，家人能按几个步骤找到资产。
- [ ] 给自己设一条"提现 / 大额转账之前必须做"的清单（地址前后 6 位核对、网络匹配、先小额测试）。

---

### 延伸阅读

以下资料按主题分组，`output/` 路径指向本书素材工程内收录的币安学院原文，正文中提到的所有概念、流程、案例均出自这些底稿。**先读本章，再按兴趣深挖。**

#### 钱包总览与基础概念
- [什么是加密货币钱包？](../output/613-crypto-wallet-types-explained.md) — 本章 4.3 / 4.4 框架的主要素材，**必读**。
- [什么是 Web3 钱包？](../output/268-what-are-web3-wallets.md) — Web3 视角的钱包定位与产品全景。
- [托管型与非托管型钱包有何差异？](../output/396-custodial-vs-non-custodial-wallets-what-s-the-difference.md) — "Not your keys, not your coins" 的官方解释。
- [热钱包与冷钱包：应选择哪种？](../output/082-hot-vs-cold-wallet-which-crypto-wallet-should-you-use.md) — 4.3 节第二条轴的素材。
- [如何设置加密货币钱包](../output/206-how-to-set-up-a-crypto-wallet.md) — 含 4 类钱包（托管 / 非托管 / 币安钱包 / 硬件）的详细设置步骤截图版。

#### 主流钱包产品
- [一文读懂币安钱包](../output/280-what-is-binance-web3-wallet-and-how-does-it-work.md) — MPC 自托管钱包的代表。
- [什么是 Trust Wallet (TWT)？](../output/660-what-is-trust-wallet.md)
- [什么是 Phantom 钱包？](../output/177-what-is-phantom-wallet-and-how-to-use-it.md) — Solana 用户必装。
- [BNB Smart Chain 的最佳加密货币钱包](../output/448-the-best-crypto-wallets-for-binance-smart-chain-bsc.md)
- [将 MetaMask 关联至 BNB Smart Chain](../output/512-connecting-metamask-to-binance-smart-chain.md)
- [将 Trust Wallet 关联至 BSC](../output/468-connecting-trust-wallet-to-binance-smart-chain-bsc.md)
- [如何使用 Avalanche 钱包](../output/410-how-to-use-the-avalanche-wallet.md)

#### 硬件钱包与冷存储
- [为什么应该使用硬件钱包](../output/568-what-is-a-hardware-wallet.md) — 4.4 节硬件钱包配图来源。
- [安全使用硬件钱包的十大技巧](../output/303-ten-tips-for-using-a-hardware-wallet-securely.md) — 4.10 节素材。
- [什么是气隙钱包 (Air-Gapped Wallet)？](../output/306-what-is-an-air-gapped-wallet.md)

#### 多签、MPC 与智能合约钱包
- [什么是多重签名钱包？](../output/646-what-is-a-multisig-wallet.md)
- [什么是多方计算 (MPC) 钱包？](../output/284-what-are-multi-party-computation-mpc-wallets.md)
- [以太坊账户抽象解析（ERC-4337）](../output/329-what-is-erc-4337-or-account-abstraction-for-ethereum.md) — 智能合约钱包的未来。

#### 链上操作：充提与跨网络
- [币安存款与提现指南](../output/224-your-guide-to-binance-deposit-withdrawal.md) — 4.7 节流程素材。
- [如何在 BNB Smart Chain 提取 BEP-20 代币](../output/472-how-to-withdraw-bep20-tokens-on-binance-smart-chain.md)
- [如何充值（币安）](../output/651-how-to-deposit.md)
- [如何提现（币安）](../output/652-how-to-withdraw.md)
- [提现地址白名单](../output/655-withdrawal-address-whitelist.md) — 必开。
- [如何在币安上找回转账到错误网络的数字货币](../output/475-how-to-recover-crypto-transferred-to-the-wrong-network-on-binance.md)
- [什么是 Satoshi 测试与旅行规则？](../output/138-what-is-the-satoshi-test-and-how-does-it-help-with-the-travel-rule.md)

#### 添加网络与跨链
- [将 Polygon 添加到 MetaMask](../output/414-how-to-add-polygon-to-metamask.md)
- [将 Avalanche 添加到 MetaMask](../output/413-how-to-add-avalanche-to-metamask.md)
- [将 Arbitrum 添加到 MetaMask](../output/390-how-to-add-arbitrum-to-metamask.md)
- [如何使用 Polygon 桥](../output/411-how-to-use-the-polygon-bridge.md)

#### 安全与攻击防御
- [如何安全存储数字货币](../output/548-how-to-secure-your-cryptocurrency.md)
- [保护加密货币资产安全的 5 项建议](../output/271-5-tips-to-secure-your-cryptocurrency-holdings.md)
- [加密货币地址投毒攻击如何运作？](../output/047-how-do-crypto-address-poisoning-attacks-work.md) — 4.9 节素材。
- [什么是多签骗局？如何避免？](../output/193-what-are-multisig-scams-and-how-to-avoid-them.md) — 4.9 节素材。
- [手机端常见骗局](../output/616-common-scams-on-mobile-devices.md)
- [一文读懂网络钓鱼攻击](../output/675-what-is-phishing.md)
- [一文读懂键盘记录器](../output/676-what-is-a-keylogger.md)
- [一般安全准则](../output/677-general-security-principles.md)
- [如何安全地传承您的加密资产](../output/316-how-to-safely-pass-on-your-crypto-when-you-die.md)

#### 进阶（与第 5 章衔接）
- [币安账户的 5 项安全增强建议](../output/276-5-ways-to-improve-your-binance-account-security.md)
- [币安账户 7 步极简加固](../output/550-secure-your-binance-account-in-7-simple-steps.md)
- [一文读懂双重身份验证 (2FA)](../output/288-what-is-two-factor-authentication-2fa.md)
- [如何使用币安 2FA 验证策略](../output/092-how-to-use-binance-s-2fa-verification-strategy.md)

#### 外部参考（公开网络资源）
- 撤销 ERC-20 / NFT 授权：[revoke.cash](https://revoke.cash)
- 一键添加链到 MetaMask：[chainlist.org](https://chainlist.org)
- 多签 / 智能合约金库：[Safe (Gnosis Safe)](https://safe.global)
- 钱包真伪 & 钓鱼检查：[Scam Sniffer](https://scamsniffer.io)、[ScamAdviser](https://www.scamadviser.com)
- ENS 域名：[ens.domains](https://ens.domains)（把长地址变成 `yourname.eth`）
- 比特币 / 以太坊 / Solana 浏览器：[mempool.space](https://mempool.space)、[etherscan.io](https://etherscan.io)、[solscan.io](https://solscan.io)

> **阅读建议：** 这一章的素材最多，但**优先级很清楚**：先把 [613](../output/613-crypto-wallet-types-explained.md)、[206](../output/206-how-to-set-up-a-crypto-wallet.md)、[396](../output/396-custodial-vs-non-custodial-wallets-what-s-the-difference.md)、[082](../output/082-hot-vs-cold-wallet-which-crypto-wallet-should-you-use.md)、[047](../output/047-how-do-crypto-address-poisoning-attacks-work.md) 这 5 篇撸完——它们覆盖了"是什么、怎么选、怎么防"。剩下的延伸阅读，每次遇到一个具体问题再回头查一篇。**钱包是 Web3 的入口，把这一章的实操彻底走一遍，比读 100 篇文章都管用。**

---

## 第五章 安全是第一生产力

> Web3 最残酷的一点是：它把资产控制权交还给你，也把最后一道责任交还给你。
> 
> 银行转错账、银行卡盗刷、平台误扣款，现实世界里还可能有客服、冻结、仲裁和追偿。链上世界不一样，交易一旦确认，通常没有"撤回"按钮。安全不是附加题，而是入场券。

### 本章目标
- 识别钓鱼、授权骗局、地址投毒、多签骗局、社工攻击
- 读懂钱包弹窗里的危险关键词：`approve`、`permit`、`setApprovalForAll`、`increaseAllowance`
- 建立分仓、小额试转、冷钱包、权限检查、2FA、白名单等日常习惯
- 学会在出事后 10 分钟内做出正确处置，减少二次损失

### 5.1 读者先要解决的问题

很多人第一次听到"钱包被盗"，脑子里浮现的是黑客敲代码、攻破区块链、突破加密算法。真实情况常常更朴素，也更难受：**用户自己点了假链接，自己输入了助记词，自己签了授权，自己把钱转到了骗子地址。**

这并不是嘲笑用户不聪明。恰恰相反，真正成熟的安全观念要先承认两件事：

1. **人都会疲劳、贪心、着急、分心。**骗子不是在攻击你的智商，而是在攻击你的状态。
2. **链上操作的容错率很低。**一次错误签名、一笔错误转账、一个错误网络，可能就足以造成不可逆损失。

所以，本章不追求让你成为安全专家，而是帮你形成一套"默认安全"的肌肉记忆：

- 任何要求助记词、私钥、屏幕共享、远程控制的场景，直接判定为危险。
- 任何承诺高收益、免费空投、内部机会、客服协助转账的场景，先停 30 秒。
- 任何新地址、大额转账、陌生 DApp、陌生合约，先做小额测试。
- 钱包不是一个钱包，而是一组分层账户：日常钱包、交互钱包、冷钱包、交易所账户各司其职。

![加密资产安全总览](https://public.bnbstatic.com/static/academy/uploads/17daed200d5a4144b8f5cc5c99f55f42.png)

**为什么这一章要写得更细？**因为骗局正在工业化。FBI 在 2026 年 4 月发布的 2025 年互联网犯罪报告中提到，美国涉及加密货币的投诉达到 181,565 起，损失超过 110 亿美元；Chainalysis 在 2026 年 1 月的报告中估计，2025 年链上加密骗局至少收到 140 亿美元，并可能随着更多地址被识别而上修至 170 亿美元以上。换句话说，你面对的不是几个散兵游勇，而是一条越来越专业的黑产流水线。

本章的原则只有一句：**不要赌自己永远不会手滑，要设计一个手滑也不会全军覆没的系统。**

### 5.2 核心概念与最小知识包

#### 5.2.1 私钥、助记词和签名：到底什么东西最危险？

先把钱包安全的三件核心物品分清楚：

| 名称 | 它是什么 | 泄露后果 | 日常原则 |
| --- | --- | --- | --- |
| **助记词 / Seed Phrase** | 12/18/24 个单词，可恢复整个钱包 | 等于交出钱包所有权 | 只写在纸上或金属备份上，不拍照、不网盘、不发给任何人 |
| **私钥 / Private Key** | 控制单个地址资产的密钥 | 等于交出该地址控制权 | 不导入陌生工具，不复制到网页或聊天窗口 |
| **签名 / Signature** | 用私钥证明"我同意这件事" | 取决于签了什么，可能是登录，也可能是授权转走资产 | 每次签名前读清对象、权限和金额 |

很多新手以为只有"把助记词发出去"才危险。实际上，签名同样危险。因为签名不是一句"我登录一下"，它可能代表：

- 允许某个合约花掉你钱包里的 USDT。
- 允许某个交易市场转移你所有 NFT。
- 接受某个链上订单或挂单。
- 授权某个合约以后继续替你操作。

一个非常简化的链上签名流程长这样：

```text
你看到一个按钮
   |
   v
DApp 生成待签名内容
   |
   v
钱包弹窗展示请求
   |
   v
你确认签名
   |
   v
合约按签名内容执行
   |
   v
资产移动 / 权限变化 / 状态变化
```

安全检查的关键点在第三步：**钱包弹窗不是烦人的中间步骤，而是最后的刹车。**

#### 5.2.2 钓鱼 (Phishing)：最古老，也最有效

钓鱼是攻击者伪装成可信实体，诱导用户泄露敏感信息或执行危险操作。素材 [output/675](../output/675-what-is-phishing.md) 中把常见迹象总结得很清楚：可疑 URL、公共邮箱、紧迫感、索取个人信息、拼写错误、仿冒付款平台或金融机构。

![网络钓鱼示意](https://public.bnbstatic.com/static/academy/uploads/e4927b77c48c46838bed104d80fb6ab0.jpg)

在 Web3 里，钓鱼常见于这些场景：

- **假官网**：域名只差一个字母，例如 `unlswap` 冒充 `uniswap`。
- **假空投**：X、Discord、Telegram 里传播 "Claim now" 链接。
- **假客服**：声称可以帮你恢复钱包、解冻账户、处理提币。
- **假广告**：搜索引擎顶部的赞助链接仿冒真实 DApp。
- **假插件 / 假 App**：伪装成钱包、行情软件、交易工具。
- **假安全提醒**：告诉你账户异常，要求立刻连接钱包或转移资金。

钓鱼最常用的心理按钮是"赶紧"。赶紧领取、赶紧验证、赶紧转移、赶紧解冻。你只要愿意慢下来，已经赢了一半。

#### 5.2.3 授权骗局 (Approve Scam)：你没有转账，但你给了别人提款权

授权是 DeFi 的常规动作。例如你在 DEX 上用 USDT 换 ETH，DEX 合约必须先获得一定额度的 USDT 使用权。正常授权本身不是骗局，危险在于：

- 授权对象是恶意合约。
- 授权额度是无限额度。
- 授权内容被伪装成普通领取、登录或验证。
- 用户授权后长期不撤销，风险长期暴露。

常见危险函数包括：

| 弹窗关键词 | 可能含义 | 危险点 |
| --- | --- | --- |
| `approve` | 授权合约使用某种代币 | 无限授权可能让对方日后转走全部该代币 |
| `increaseAllowance` | 增加授权额度 | 原有授权基础上继续扩大风险 |
| `permit` | 通过签名完成授权 | 有时无需链上交易即可授予权限，容易被伪装 |
| `setApprovalForAll` | 授权某地址管理某类 NFT | 可能把整套 NFT 转移权交给对方 |
| `delegatecall` | 借用其他合约逻辑执行 | 对普通用户不友好，遇到陌生场景要格外谨慎 |

一个典型授权钓鱼不是"请把钱转给我"，而是"点一下 Claim"：

```text
假空投链接
   |
   v
连接钱包
   |
   v
点击 Claim / Verify / Mint
   |
   v
钱包弹出 approve / permit / setApprovalForAll
   |
   v
用户确认
   |
   v
攻击者获得转移权限
   |
   v
几分钟、几小时或几天后清空资产
```

**最小防御动作**：任何陌生网站弹出授权时，先问三句：我为什么要授权？授权给谁？额度是多少？

#### 5.2.4 地址投毒 (Address Poisoning)：骗的不是链，是你的眼睛

地址投毒攻击会生成与目标常用地址首尾相似的伪造地址，然后向目标钱包发送 0 金额或极小金额交易，让假地址出现在历史记录里。等用户下次从历史记录复制地址时，就可能把钱转到骗子那里。

![地址投毒攻击示意](https://public.bnbstatic.com/static/academy/uploads/1cb2b7a010c04083bd8b30057163077d.jpg)

素材 [output/047](../output/047-how-do-crypto-address-poisoning-attacks-work.md) 提到一个很有冲击力的案例：2024 年 5 月，一位巨鲸误将价值近 6,800 万美元的 WBTC 转入仿冒地址。这个案例之所以值得放进本章，是因为受害者不是小白，攻击也不是靠破解密码，而是利用了人类习惯：很多钱包界面只突出显示地址开头和结尾。

你要养成一个习惯：**地址不是看前 4 位和后 4 位，而是至少核对前 6 位、中间 4 位、后 6 位。**

更稳妥的做法是：

- 常用地址加入地址簿或白名单。
- 大额转账先做小额试转。
- 不从交易历史里复制地址。
- 收款地址从可信来源重新获取，例如对方官网、已验证聊天记录、硬件钱包屏幕。
- 对高频收款方使用 ENS、域名地址或交易所白名单，但首次设置仍要严格核对。

#### 5.2.5 多签骗局：安全工具也可以被反过来当陷阱

多签钱包本来是安全工具：一笔转账需要多个密钥共同授权。问题是，骗子可以利用"你只拥有部分权限"这件事来设局。

素材 [output/193](../output/193-what-are-multisig-scams-and-how-to-avoid-them.md) 里有一个典型套路：骗子在 YouTube、X、Telegram 留下一组助记词，钱包里看起来有 USDT，但缺少少量 TRX 支付手续费。受害者以为捡到便宜，往钱包里打入 TRX，结果发现自己只有部分签名权限，根本转不出 USDT，打进去的手续费反而被骗子拿走。

![多签钱包与骗局防范示意](https://public.bnbstatic.com/static/academy/uploads/926c6d868ae44f3b9d03e3d225aa95ad.png)

这里的关键教训不是"不要贪小便宜"这么简单，而是：**你导入的助记词不一定代表你拥有完整控制权。**

遇到下面几类情况，直接远离：

- 陌生人发你助记词、私钥、钱包文件。
- 钱包里有资产，但提示缺少 Gas。
- 对方说"你先转一点手续费进去就能提走"。
- 客服或网友要求把你加入某个多签或共享钱包。
- 钱包权限里出现你不认识的 owner、spender、operator。

#### 5.2.6 空投诈骗：免费最贵

空投本身是 Web3 项目的常见营销方式，但空投诈骗也最容易击中新手。素材 [output/251](../output/251-what-are-airdrop-scams-and-how-to-avoid-them.md) 总结了几个红旗：

- 承诺无需任何努力即可获得高额奖励。
- 要求连接钱包后签署复杂授权。
- 要求输入助记词、私钥或个人身份信息。
- 项目缺少透明团队、文档、合约地址和官方公告。
- 钱包里突然出现陌生 NFT 或代币，引导你去某个网站领取奖励。

收到陌生 NFT 或代币时，最安全的动作往往是：**别点、别卖、别转、别授权。**有些恶意资产的目的就是把你引到钓鱼站。

#### 5.2.7 社工攻击：攻击对象不是机器，是人

社会工程学利用的是人的情绪：恐惧、贪婪、好奇、羞耻、同情、权威服从。素材 [output/628](../output/628-what-is-social-engineering.md) 里提到，很多社工攻击并不依赖复杂技术，而是通过假身份、假紧急情况和假信任关系让受害者主动配合。

常见剧本包括：

| 剧本 | 对方怎么说 | 真正目的 |
| --- | --- | --- |
| 假客服 | "你的账户有风险，我帮你转到安全钱包" | 诱导你转账或共享屏幕 |
| 假管理员 | "你中奖了，连接钱包验证一下" | 诱导授权或钓鱼登录 |
| 假招聘 | "入职前先做链上任务/交保证金" | 骗取押金或诱导下载木马 |
| 假恋爱/投资 | "我带你做稳定收益" | 长周期杀猪盘 |
| 假执法/税务 | "你涉案了，要用加密货币保全资金" | 恐吓转账 |
| 假朋友 | "我换号了，急需周转" | 利用熟人信任 |

FTC 的消费者提醒有一句非常实用的话：**只有骗子会要求你用加密货币付款来解决问题、保护资金或获得工作机会。**正规企业和政府机构不会要求你把钱转到某个链上地址来"保全"。

#### 5.2.8 设备风险：键盘记录、恶意软件、公共 Wi-Fi

钱包安全不是只看链上。你的电脑、手机、浏览器、插件、剪贴板、Wi-Fi 都可能成为入口。

需要特别注意：

- **键盘记录器**：记录你输入的密码、私钥、助记词。
- **剪贴板劫持**：你复制地址后，粘贴出来却变成攻击者地址。
- **恶意浏览器插件**：读取网页内容、篡改 DApp 页面、监听钱包交互。
- **假钱包 App**：伪装官方应用，收集助记词。
- **公共 Wi-Fi 中间人攻击**：诱导访问假页面或拦截会话。
- **远程控制软件**：所谓客服让你开屏幕共享，实际观察验证码、地址和操作。

设备安全的基本线是：

- 钱包设备和娱乐设备分开。
- DeFi 浏览器 Profile 和日常浏览器 Profile 分开。
- 钱包插件只装必要的，定期清理。
- 不在陌生电脑登录交易所或钱包。
- 系统、浏览器、钱包插件保持更新。
- 大额资产使用硬件钱包或冷钱包。

#### 5.2.9 系统性风险：你没犯错，也可能踩坑

不是所有损失都来自用户误操作。项目、协议、跨链桥、预言机、治理、前端也可能出问题：

- **智能合约漏洞**：重入攻击、权限错误、价格计算错误。
- **跨链桥漏洞**：桥通常托管大量资产，是攻击高价值目标。
- **预言机操纵**：价格喂价被操纵，导致借贷清算或套利攻击。
- **闪电贷攻击**：攻击者临时借入巨额资金，操纵市场或合约状态。
- **前端劫持**：合约没变，网站前端被替换成恶意交互。
- **治理攻击**：攻击者短期获得投票权，改变协议参数。

这些风险和普通用户的关系是：**你不一定能修漏洞，但可以选择少暴露。**

选择项目时至少看：

- 是否有公开审计报告，且不是只贴一个 Logo。
- TVL 是否异常集中在少数地址。
- 管理员权限是否过大，是否有时间锁。
- 是否有 bug bounty。
- 是否有长期运行记录和公开事故响应。
- 前端域名、合约地址是否与官方渠道一致。

### 5.3 风险地图：把威胁放到正确位置

安全不是背概念，而是知道"我现在处在哪个风险层"。

```text
第 5 层：市场与法律风险
暴跌、监管、平台破产、资产冻结、税务

第 4 层：协议与项目风险
合约漏洞、跨链桥攻击、预言机失效、跑路

第 3 层：交互与授权风险
approve、permit、setApprovalForAll、假 DApp

第 2 层：账户与设备风险
密码泄露、2FA 被绕过、木马、剪贴板劫持

第 1 层：密钥风险
助记词泄露、私钥泄露、备份丢失、继承断档
```

越靠下，越是根基。第 1 层出问题，几乎没有补救；第 5 层出问题，还能通过仓位和分散降低冲击。

| 风险层 | 最坏情况 | 核心防御 |
| --- | --- | --- |
| 密钥风险 | 钱包被完全接管 | 离线备份、硬件钱包、永不输入助记词 |
| 账户与设备风险 | 交易所账户被盗、钱包被木马控制 | 强密码、2FA、独立设备、软件更新 |
| 交互与授权风险 | 某类代币或 NFT 被转走 | 小额钱包、读弹窗、定期撤销授权 |
| 协议与项目风险 | 项目被攻击、LP 或存款损失 | 查审计、看权限、分散协议敞口 |
| 市场与法律风险 | 资产价格暴跌或无法使用服务 | 仓位管理、合规意识、不要满仓单点 |

你不需要把每一层做到完美，但不能让任何一层成为"一击致命点"。

### 5.4 防御框架：12 条动作清单

#### 1. 分仓：让一次错误只损失一小格

最推荐的结构是四层：

| 钱包/账户 | 用途 | 放多少钱 | 典型工具 |
| --- | --- | --- | --- |
| **交易所账户** | 法币出入金、现货交易、临时托管 | 交易所需资金 | Binance 等合规平台 |
| **日常热钱包** | 小额支付、普通转账 | 丢了也不伤筋动骨 | MetaMask、Trust Wallet、Phantom |
| **交互钱包 / Burner** | 空投、Mint、新 DApp 测试 | 只放当次所需 Gas 和小额资产 | 独立钱包地址 |
| **冷钱包 / 金库钱包** | 长期持有大额资产 | 核心资产 | 硬件钱包、多签、离线备份 |

不要用同一个钱包做所有事。你不会把全部身家塞进裤兜去逛夜市，链上也一样。

#### 2. 助记词只离线保存

禁止清单：

- 不截图。
- 不拍照。
- 不存微信收藏、备忘录、邮箱、网盘。
- 不复制到剪贴板。
- 不输入到任何网页。
- 不发给"客服"。
- 不让别人远程看你的屏幕。

推荐做法：

- 纸质备份放在防水、防火、隐蔽位置。
- 大额资产考虑金属助记词板。
- 至少准备一份异地备份。
- 给家人留下继承说明，但不要让任何单个人轻易拿到完整密钥和操作路径。

#### 3. 小额试转先行

任何新地址、跨链桥、大额提币、首次收款方，都先试转一笔小额。

试转不是浪费 Gas，而是购买确认：

```text
复制地址
   |
核对前 6 位 + 中间 4 位 + 后 6 位
   |
小额转账
   |
等待到账
   |
从收款方确认地址无误
   |
再转大额
```

如果网络拥堵或手续费较高，试转更有价值，因为越贵的错误越应该先排雷。

#### 4. 地址白名单和地址簿

交易所和钱包如果支持提现白名单，建议开启。尤其是长期使用的冷钱包地址、家人地址、公司财务地址。

白名单的价值在于：即使账号被盗，攻击者也不能立刻提到任意地址。它牺牲一点灵活性，换来很大的安全缓冲。

#### 5. 授权最小化

授权时优先选择精确额度，而不是无限额度。很多钱包和 DApp 为了方便，会默认推荐无限授权。对小额高频交互可以接受，但对大额资产不要偷懒。

定期检查授权：

- EVM 链：使用 [revoke.cash](https://revoke.cash/) 或区块浏览器的 Token Approval 工具。
- 以太坊浏览器：Etherscan Token Approval。
- BNB Chain：BscScan Token Approval。
- Solana：使用支持权限检查的钱包和安全工具。

撤销授权也需要 Gas，所以建议每月或每次集中交互后统一清理。

#### 6. 只从书签进入常用 DApp

搜索引擎广告、短链接、群公告、私信链接都不适合作为入口。

正确习惯：

1. 第一次从项目官方 X、文档、GitHub、CoinGecko、DefiLlama 等多方交叉确认域名。
2. 确认后加入浏览器书签。
3. 以后只从书签进入。
4. 如果项目迁移域名，也要从多个官方渠道确认。

#### 7. 浏览器隔离

建议至少分两个浏览器 Profile：

| Profile | 用途 | 安装插件 |
| --- | --- | --- |
| 日常 Profile | 社交、视频、购物、邮件 | 日常插件 |
| Web3 Profile | 钱包、交易、DApp | 只装钱包和必要安全插件 |

这样即使某个日常插件被污染，也不容易直接影响钱包环境。

#### 8. 2FA 选择优先级

从强到弱大致如下：

1. **硬件安全密钥**：例如 YubiKey、Passkey。
2. **Authenticator / TOTP**：Google Authenticator、Authy、1Password 等。
3. **邮箱验证码**：取决于邮箱安全。
4. **短信验证码**：最弱，容易被 SIM Swap、短信劫持和社工攻击影响。

所有交易所、邮箱、密码管理器都应该开启 2FA。最重要的是邮箱，因为邮箱常常是重置其他账户的入口。

#### 9. 密码管理器 + 独立密码

每个交易所、邮箱、钱包服务、云服务都使用不同密码。不要用生日、手机号、常用昵称，也不要在多个平台重复使用。

密码管理器的作用不是"替你记密码"这么简单，而是：

- 生成高强度随机密码。
- 避免密码复用。
- 在假网站上不自动填充，从而帮助识别钓鱼域名。

#### 10. 硬件钱包用于大额资产

硬件钱包的核心价值是私钥不离开设备。即使电脑中毒，攻击者也难以直接拿到私钥。素材 [output/568](../output/568-what-is-a-hardware-wallet.md) 和 [output/303](../output/303-ten-tips-for-using-a-hardware-wallet-securely.md) 都强调了同一件事：硬件钱包不是让你免疫所有骗局，而是把"远程盗走私钥"这条路堵上。

但硬件钱包仍然需要正确使用：

- 从官方渠道购买。
- 收到后检查封装和初始化流程。
- 自己生成助记词，不使用预印助记词。
- 每次转账在硬件屏幕上核对地址和金额。
- 不把硬件钱包当交互热钱包频繁连陌生 DApp。

#### 11. 交互前做 30 秒项目检查

遇到陌生项目，先查：

- 官网域名是否来自官方渠道。
- 合约地址是否来自官方文档和区块浏览器验证页面。
- 是否有审计报告，审计报告是否能打开，是否只是营销图。
- 社区是否突然大量机器人刷屏。
- 收益是否明显高于同类项目。
- 是否要求不合理权限。
- 是否刚上线就催促限时参与。

你不需要每次写研究报告，但 30 秒足以避开许多粗糙骗局。

#### 12. "太好"和"太急"都暂停

两个最重要的红旗：

- **太好**：免费、保本、高收益、内部名额、无风险套利。
- **太急**：马上过期、账户冻结、最后机会、必须现在操作。

看到这两个信号，先离开屏幕，喝口水，再回来判断。安全里最便宜的动作就是暂停。

### 5.5 典型案例 1：一次授权钓鱼的完整还原

#### 场景

用户在 X 上看到一条热门帖子："某知名 Layer2 项目开启补领空投，早期交互用户可领取 1,200 枚代币。"帖子下方有很多账号回复 "已领到"，还有看起来像官方账号的转发。

#### 攻击链路

1. 用户点击链接，进入一个与官网极其相似的域名。
2. 页面要求连接钱包，显示"你有资格领取"。
3. 用户点击 `Claim`。
4. 钱包弹出签名请求，显示 `setApprovalForAll` 或 `permit`。
5. 用户没有细看，点击确认。
6. 恶意合约获得 NFT 或 ERC-20 代币操作权限。
7. 攻击者不一定立刻转走资产，可能等待用户放入更多资产或降低警惕。
8. 某一天，用户发现钱包里同类资产被清空。

#### 关键破绽

| 环节 | 本可发现的问题 | 正确动作 |
| --- | --- | --- |
| 链接来源 | 来自社交媒体，不是书签或官方文档 | 手动从书签进入官网 |
| 域名 | 多一个字母、少一个字母或奇怪后缀 | 对照官方渠道 |
| 签名内容 | 领取空投却要求授权全部 NFT | 拒绝签名 |
| 钱包选择 | 用主钱包交互陌生页面 | 使用 Burner 钱包 |
| 授权额度 | 无限授权 | 精确额度或不授权 |

#### 复盘结论

这类骗局不需要破解钱包。它只需要用户相信页面、忽略弹窗、赶时间确认。因此，防御点也很明确：**入口用书签，交互用小钱包，弹窗读关键词。**

### 5.6 典型案例 2：地址投毒为什么能骗到高手

#### 场景

你经常从交易所提 USDT 到自己的冷钱包。某天，你在钱包历史记录里看到一个地址，开头和结尾都很熟悉，于是复制过去提币。

#### 攻击链路

1. 攻击者扫描链上活跃地址，发现你经常和某个收款地址互动。
2. 攻击者批量生成相似地址，例如同样以 `0x7aC9` 开头、以 `91E4` 结尾。
3. 攻击者向你发送 0 USDT 或极小额代币，让假地址出现在历史记录。
4. 钱包界面只显示地址首尾，真假地址看起来几乎一样。
5. 你从历史记录复制了假地址。
6. 大额转账确认后，资金无法撤回。

#### 防御动作

- 不从历史记录复制收款地址。
- 地址簿里给常用地址写清标签。
- 交易所开启提现白名单。
- 大额转账前做小额试转。
- 核对前 6 位、中间 4 位、后 6 位。
- 如果使用硬件钱包，在设备屏幕再次核对地址。

这一类骗局尤其提醒我们：**高手也会被界面习惯骗。**安全系统不能只靠"我会小心"，而要靠流程。

### 5.7 典型案例 3：多签手续费陷阱

#### 场景

你在视频评论区看到一段助记词，有人说自己不会操作钱包，钱包里有 2,000 USDT，希望好心人帮忙。你导入钱包后，真的看见 USDT，但没有 TRX 支付手续费。

#### 攻击链路

1. 骗子公开一个受多签控制的钱包助记词。
2. 受害者导入后，以为自己能转走里面的资产。
3. 钱包提示缺少 Gas。
4. 受害者转入少量 TRX。
5. 由于钱包需要多个签名，受害者无法转出 USDT。
6. 骗子转走受害者打入的 TRX。

#### 这个骗局的心理设计

它利用的不是恐惧，而是"捡漏"。受害者往往不好意思求助，因为自己本来就带着占便宜心态。骗子正是利用这种沉默，反复收割小额 Gas。

#### 防御动作

- 不导入陌生助记词。
- 不碰来路不明的钱包。
- 不给陌生钱包打 Gas。
- 不相信"钱包里有钱但缺手续费"的故事。
- 看到公开助记词，默认是陷阱。

### 5.8 典型案例 4：假客服和"安全钱包"

#### 场景

你收到一条私信："我们检测到你的账户有异常登录，请立即配合转移资产到安全钱包。"对方头像、昵称、话术都像官方客服，还能说出你的部分邮箱或手机号。

#### 攻击链路

1. 攻击者通过数据泄露、社群信息或钓鱼表单获得你的基础资料。
2. 攻击者伪装成交易所、钱包、项目方客服。
3. 攻击者制造紧迫感：账户冻结、涉案、风控、税务、黑客入侵。
4. 攻击者要求你下载远程控制软件、共享屏幕、提供验证码，或把资产转到"安全地址"。
5. 一旦你转账或泄露验证码，资产被转走。

#### 防御动作

- 官方客服不会主动私信索要助记词、验证码、屏幕共享。
- 遇到安全提醒，退出聊天，从 App 或官网内置入口联系客服。
- 对方知道你的部分信息，不代表对方可信。数据泄露很常见。
- 任何"把钱转到安全钱包"都是高危话术。
- 家人如果持有资产，也要提前讲清楚这些规则。

### 5.9 DApp 交互前的 3 分钟检查表

在连接陌生 DApp 前，按顺序扫一遍：

| 检查项 | 通过标准 | 不通过时 |
| --- | --- | --- |
| 域名 | 来自官网、文档、官方社媒多方一致 | 不连接 |
| 钱包 | 使用交互钱包，不是主钱包 | 切换钱包 |
| 余额 | 钱包里只放当次所需资产 | 先转走多余资产 |
| 合约 | 合约地址与官方文档一致，浏览器已验证 | 暂停 |
| 审计 | 能打开审计报告，且报告不是空泛营销 | 降低仓位或不参与 |
| 权限 | 只请求必要权限 | 拒绝 |
| 收益 | 与市场水平相近，能解释来源 | 谨慎或放弃 |
| 社区 | 没有大量催促、刷屏、假客服 | 暂停观察 |

如果你只有 10 秒，至少问自己三句：

1. 我是不是从书签或官方渠道进来的？
2. 我是不是用了可以承受损失的小钱包？
3. 钱包弹窗是不是要求了超出当前操作的权限？

### 5.10 交易所账户安全：别让入口变成短板

很多人的链上钱包很谨慎，交易所账户却只用一个老密码加短信验证码。这会形成明显短板。

交易所账户建议配置：

- 强密码，且不与任何网站复用。
- Authenticator 或硬件安全密钥，避免短信 2FA 作为唯一验证。
- 防钓鱼码。交易所发来的官方邮件会显示你设置的识别码。
- 提现地址白名单。
- 设备管理和登录记录定期检查。
- API Key 不用则关闭；必须使用时限制 IP、限制权限、禁止提现。
- 邮箱本身也开启强 2FA。

素材 [output/276](../output/276-5-ways-to-improve-your-binance-account-security.md)、[output/550](../output/550-secure-your-binance-account-in-7-simple-steps.md)、[output/655](../output/655-withdrawal-address-whitelist.md) 都可以作为交易所账户安全的延伸材料。

### 5.11 家庭与继承：安全不只是防盗，也要防丢

很多人只担心被盗，却忽略另一个风险：自己出事后，家人完全不知道资产在哪里。

一个可执行的继承方案至少包含：

- 资产清单：交易所、钱包、链、主要资产类型。
- 操作说明：如何找到钱包、硬件设备、备份材料。
- 联系人：可信家人、律师、技术协助人。
- 风险提示：任何人索要助记词都要警惕。
- 分层权限：不要让单个不懂技术的人直接掌握完整助记词和大额资产操作。

可以把说明写成"给家人的一封信"，但不要在信里直接写完整助记词。更合理的方式是让说明、硬件钱包、助记词备份分开放置，并让可信人知道如何在必要时组合。

### 5.12 出事后的 10 分钟应急流程

如果你怀疑自己签错了、点了假链接、账户被盗，先不要在群里长篇描述，也不要继续和骗子沟通。按下面顺序做：

```text
发现异常
   |
   v
断开连接：离开网站，断网或关闭可疑设备
   |
   v
保护剩余资产：用干净设备创建新钱包
   |
   v
转移未受影响资产
   |
   v
撤销可疑授权
   |
   v
修改交易所、邮箱、密码管理器密码
   |
   v
保存证据：交易哈希、地址、网址、聊天记录
   |
   v
向平台、钱包、安全团队或执法渠道报告
```

#### 如果是助记词泄露

不要尝试"改密码"。链上钱包没有这种概念。正确做法是：

1. 用干净设备创建全新钱包。
2. 立刻把旧钱包剩余资产转走。
3. 旧钱包永久废弃。
4. 不再向旧钱包转入任何资产。

#### 如果是授权错了

1. 立刻用授权检查工具查看相关链上的 Token Approval。
2. 撤销可疑授权。
3. 把高价值资产转移到新钱包。
4. 记录恶意合约和交易哈希。

#### 如果是交易所账户异常

1. 立刻冻结账户或联系官方客服。
2. 从官网或 App 内进入客服，不点邮件链接。
3. 修改邮箱和交易所密码。
4. 检查 API Key、提现白名单、登录设备。
5. 保存登录 IP、邮件、短信、聊天记录。

#### 如果已经转账给骗子

链上转账通常无法撤回，但仍应：

- 记录交易哈希和对方地址。
- 联系使用过的交易所，尝试标记地址。
- 向当地执法部门或网络犯罪举报渠道提交材料。
- 不相信"追回团队"的二次诈骗。真正的追踪公司不会保证追回，也不会让你先付大额加密货币。

### 5.13 给不同用户的安全配置建议

#### 新手配置

- 一个主交易所账户，开启 Authenticator 2FA。
- 一个日常热钱包，只放小额。
- 助记词纸质备份。
- 常用 DApp 加书签。
- 每月检查一次授权。

#### DeFi 活跃用户配置

- 主钱包、交互钱包、空投钱包分开。
- 大额资产放硬件钱包。
- 每个生态单独钱包，例如 EVM、Solana、BTC 不混用。
- 使用 revoke.cash、区块浏览器、钱包安全提醒。
- 每次新协议只用小额试水。
- 浏览器 Profile 隔离。

#### 长期持有者配置

- 冷钱包或硬件钱包保存核心资产。
- 交易所只放需要交易的部分。
- 提现白名单。
- 助记词金属备份和异地备份。
- 家庭继承说明。
- 每季度做一次恢复演练：不用转账，只确认自己能找到设备、密码和流程。

#### 团队或公司配置

- 多签钱包，例如 2/3、3/5。
- 签名人分散，不集中在同一地点或同一设备。
- 大额支出设时间锁和审批流程。
- 财务地址白名单。
- 操作日志和交易复盘。
- 定期权限审计。

### 5.14 常见误区与风险提醒

#### 误区 1："我钱包里没多少钱，骗子看不上"

很多攻击是自动化扫描，不是人工挑选。小钱包也可能被批量收割。

#### 误区 2："有硬件钱包就绝对安全"

硬件钱包保护私钥，但你仍可能在硬件钱包上确认一笔错误交易。屏幕核对和交互隔离仍然必要。

#### 误区 3："官网就一定安全"

官网前端可能被劫持，DNS 可能出问题，官方社媒也可能被盗。大额操作时要交叉验证合约地址和公告。

#### 误区 4："审计过就不会出事"

审计降低风险，不消灭风险。审计范围、审计时间、修复状态、后续升级都很重要。

#### 误区 5："链上匿名，所以没人能找到我"

链上更接近"伪匿名"。地址、交易、时间、金额都公开，和交易所 KYC、社交信息、收货地址结合后，可能被画像。

#### 误区 6："撤销授权就能追回已经被转走的钱"

撤销授权只能阻止未来继续使用权限，不能逆转已经发生的转账。

#### 误区 7："客服主动找我，说明对方负责"

Web3 里主动私信你的"客服"大概率不是客服。真正的官方支持通常让你从官网或 App 内提交工单。

### 5.15 检查清单与练习

#### 今日必做

- [ ] 用 [revoke.cash](https://revoke.cash/) 或对应区块浏览器检查一次钱包授权，撤销至少一个不再使用的授权。
- [ ] 把常用 DApp 官网加入书签，删除从群聊或搜索结果保存的旧入口。
- [ ] 检查交易所 2FA，如果还在用短信作为唯一验证，升级为 Authenticator 或硬件密钥。
- [ ] 打开提现地址白名单，并加入自己的冷钱包地址。
- [ ] 检查浏览器插件，删除不再使用或来源不明的插件。

#### 本周练习

- [ ] 新建一个 Burner 钱包，并只转入少量 Gas。
- [ ] 找一笔自己过去的转账，在区块浏览器里核对发送方、接收方、金额、Gas、交易哈希。
- [ ] 做一次小额试转，完整走完"复制、核对、试转、确认、再转"流程。
- [ ] 给家人写一份不包含助记词的资产说明：有哪些账户、遇到问题找谁、不要相信什么。
- [ ] 观察钱包历史记录里是否出现陌生 0 金额交易或陌生 NFT，训练识别地址投毒和空投诱饵。

#### 每月复盘

- [ ] 授权清理。
- [ ] 交易所登录设备检查。
- [ ] API Key 检查。
- [ ] 钱包余额分仓检查。
- [ ] 系统和钱包插件更新。
- [ ] 重要地址白名单检查。

### 5.16 延伸阅读与引用

以下资料按主题分组。`output/` 路径是本书素材工程内收录的币安学院原文，外部链接用于补充公开数据、消费者提醒和举报渠道。

#### 账户、钱包与密钥安全

- [如何安全存储数字货币](../output/548-how-to-secure-your-cryptocurrency.md) → 本章分仓、助记词、DApp 授权的主要底稿。
- [保护加密货币资产安全的 5 项建议](../output/271-5-tips-to-secure-your-cryptocurrency-holdings.md)
- [加密货币钱包类型解析](../output/613-crypto-wallet-types-explained.md)
- [什么是硬件钱包？](../output/568-what-is-a-hardware-wallet.md)
- [安全使用硬件钱包的 10 个技巧](../output/303-ten-tips-for-using-a-hardware-wallet-securely.md)
- [什么是气隙钱包？](../output/306-what-is-an-air-gapped-wallet.md)
- [什么是双重身份验证 (2FA)？](../output/288-what-is-two-factor-authentication-2fa.md)

#### 钓鱼、社工与常见骗局

- [网络钓鱼的概念及其原理](../output/675-what-is-phishing.md)
- [什么是社会工程学？](../output/628-what-is-social-engineering.md)
- [常见的 5 种加密货币骗局及防范方法](../output/552-5-common-cryptocurrency-scams-and-how-to-avoid-them.md)
- [常见的比特币骗局及防范方法](../output/500-8-common-bitcoin-scams-and-how-to-avoid-them.md)
- [空投诈骗及其防范策略](../output/251-what-are-airdrop-scams-and-how-to-avoid-them.md)
- [多重签名骗局及其防范策略](../output/193-what-are-multisig-scams-and-how-to-avoid-them.md)
- [加密货币地址投毒攻击如何运作？](../output/047-how-do-crypto-address-poisoning-attacks-work.md)
- [移动设备上的常见诈骗](../output/616-common-scams-on-mobile-devices.md)
- [什么是键盘记录器？](../output/676-what-is-a-keylogger.md)
- [什么是勒索软件？](../output/682-ransomware-explained.md)
- [公共 Wi-Fi 为什么不安全？](../output/639-why-public-wifi-is-insecure.md)

#### 交易所与平台安全

- [五种方法提高币安账户安全性](../output/276-5-ways-to-improve-your-binance-account-security.md)
- [7 个简单步骤保护币安账户](../output/550-secure-your-binance-account-in-7-simple-steps.md)
- [提现地址白名单](../output/655-withdrawal-address-whitelist.md)
- [什么是 API Key 以及如何安全使用？](../output/355-what-is-an-api-key-and-how-to-use-it-securely.md)
- [如何安全进行 P2P 交易](../output/324-how-to-stay-safe-in-peer-to-peer-p2p-trading.md)

#### 协议、合约与系统性风险

- [什么是智能合约安全审计？](../output/400-what-is-a-smart-contract-security-audit.md)
- [如何识别 DeFi 骗局](../output/503-how-to-spot-scams-in-decentralized-finance-defi.md)
- [常见跨链桥安全漏洞](../output/327-what-are-common-bridge-security-vulnerabilities.md)
- [什么是闪电贷？](../output/522-what-are-flash-loans-in-defi.md)
- [什么是抢先交易？](../output/167-what-is-front-running.md)
- [什么是最大可提取价值 (MEV)？](../output/347-what-is-maximal-extractable-value-mev.md)
- [什么是 51% 攻击？](../output/678-what-is-a-51-percent-attack.md)
- [什么是日蚀攻击？](../output/580-what-is-an-eclipse-attack.md)
- [什么是重放攻击？](../output/635-what-is-a-replay-attack.md)
- [什么是女巫攻击？](../output/661-sybil-attacks-explained.md)
- [什么是 DoS 攻击？](../output/641-what-is-a-dos-attack.md)

#### 外部数据、提醒与举报渠道

- [FBI: Cryptocurrency and AI Scams Bilk Americans of Billions](https://www.fbi.gov/news/press-releases/cryptocurrency-and-ai-scams-bilk-americans-of-billions)（2026-04-06）→ 2025 年 IC3 报告摘要，涉及加密货币投诉 181,565 起，损失超过 110 亿美元。
- [Chainalysis: 2026 Crypto Crime Report, Scams](https://www.chainalysis.com/blog/crypto-scams-2026/)（2026-01-13）→ 2025 年加密骗局规模、冒充骗局和 AI 诈骗趋势。
- [Chainalysis: 2025 Crypto Crime Trends](https://www.chainalysis.com/blog/2025-crypto-crime-report-introduction/)（2025-01-15）→ 2024 年链上非法活动估算和资产分布。
- [FTC: What To Know About Cryptocurrency and Scams](https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams) → 加密货币骗局识别和举报建议。
- [FTC: Did someone insist you pay them with cryptocurrency?](https://consumer.ftc.gov/consumer-alerts/2023/08/did-someone-insist-you-pay-them-cryptocurrency) → "要求用加密货币付款"的典型诈骗提醒。
- [IC3 举报入口](https://www.ic3.gov/Home/FileComplaint) → 美国 FBI 网络犯罪投诉中心。
- [FTC ReportFraud](https://reportfraud.ftc.gov/) → 美国消费者欺诈举报入口。

> **阅读建议：** 如果只读 5 篇，优先读 [548](../output/548-how-to-secure-your-cryptocurrency.md)、[675](../output/675-what-is-phishing.md)、[047](../output/047-how-do-crypto-address-poisoning-attacks-work.md)、[193](../output/193-what-are-multisig-scams-and-how-to-avoid-them.md)、[251](../output/251-what-are-airdrop-scams-and-how-to-avoid-them.md)。本章真正想让你带走的不是恐惧，而是一套流程：分仓、核对、小额试转、读弹窗、撤授权、慢下来。

---

## 第六章 交易所、订单与市场微观结构

> "交易所看起来是一块屏幕、一个 App、几个按钮。
> 但它真正的样子，是一座**24 小时没有打烊**、由订单簿、撮合引擎、做市商、套利机器人共同维护的拍卖大厅。
> 你按下的每一次'买入'，都是在和成千上万只看不见的手同时讨价还价。"

![币安现货交易界面](https://public.bnbstatic.com/static/academy/uploads/e083469018c64adabe73cf6425500c47.png)

### 本章目标

- 把"交易所"从黑盒打开，理解订单簿、撮合引擎、做市商三者如何共同决定一笔成交
- 看懂市价单 / 限价单 / 限价挂单 / 止损单 / 止盈单 / OCO / OTO / OTOCO 各自的适用场景
- 用买卖价差和滑点计算"屏幕价"和"实际成交价"之间的隐藏成本
- 区分中心化交易所 (CEX) 与去中心化交易所 (DEX)，知道什么时候该用哪个
- 掌握仓位计算公式、止盈止损设置、风险回报率和交易日记四件套
- 识别幌骗、抢先交易、低流动性陷阱等典型微观结构风险

---

### 6.1 读者先要解决的问题：从"看价"到"下单"中间隔了什么

很多新手第一次打开交易所，会有一种"信息过载"的窒息感——闪烁的价格、几十种订单类型、深度图、K 线、永续、合约、杠杆、Earn……一屏挤下来，按下"买入"反而成了最难的一步。

更要命的是另一种相反的情绪：**"不就是买和卖吗，按下市价就完了"**。结果是新手第一次下大单，发现"屏幕显示 580、最终成交 587.4、还多扣了一笔吃单手续费"，再回头看才知道——那一份"看上去微不足道的差距"，本质上是市场微观结构在收他的认知税。

> **本章核心一句话：** 屏幕上的价格只是"最近一次成交价"，**真正决定你能不能、以什么价格成交的，是订单簿这本随时翻动的大账**。看懂订单簿，再回头看 K 线，整个交易就不一样了。

让我们先把心智模型校正一遍：

```
                     交易所的真实结构
   ┌──────────────────────────────────────────────────────┐
   │                  撮合引擎 (Matching Engine)           │
   │     按"价格优先 + 时间优先"撮合所有进入的订单         │
   └──────────────────────────────────────────────────────┘
            ▲                                    ▲
            │                                    │
   ┌────────┴─────────┐                ┌────────┴─────────┐
   │   买单队列(Bid)   │  ←── 价差 ──→  │   卖单队列(Ask)   │
   │   579.9  10 BNB   │                │   580.0  12 BNB   │
   │   579.8  35 BNB   │                │   580.1  20 BNB   │
   │   579.7  80 BNB   │                │   580.3  60 BNB   │
   │   ...             │                │   ...             │
   └───────────────────┘                └───────────────────┘
            ▲                                    ▲
            │                                    │
   做市商 / 算法 / 散户挂单           做市商 / 算法 / 散户挂单
```

这一章接下来要做的，就是把这张图里每一个箭头、每一行数字背后发生的事情讲清楚。

---

### 6.2 现货市场的本质：一手交钱、一手交币

在跑去看那些花里胡哨的合约和杠杆之前，请先把"现货"两个字真正搞懂——后面所有更复杂的产品，都建立在它之上。

**现货交易 (Spot Trading)** 是一种"即时直接"的买卖：你拿钱（USDT、法币），换来等额的资产（BTC、BNB、ETH），交易完成的那一刻，资产就属于你。**没有杠杆，没有到期日，没有强平**——这是现货最重要的三个"没有"。

#### 现货 vs 合约 vs 杠杆：三类交易，三种风险结构

| 维度 | 现货 (Spot) | 杠杆 (Margin) | 合约 (Futures / Perp) |
| --- | --- | --- | --- |
| 是否真持有资产 | ✅ 持有 | ✅ 持有，但部分是借的 | ❌ 持有的是"合约"，不是币 |
| 是否会强平 | ❌ 不会 | ✅ 会 | ✅ 会 |
| 是否有杠杆 | ❌ 1 倍 | ✅ 通常 3–10 倍 | ✅ 1–125 倍可调 |
| 适合人群 | 所有新手 | 有经验的交易者 | 专业 / 投机交易者 |
| 最坏情况 | 亏到归零 | 亏完保证金 + 倒欠平台 | 亏完保证金 + 极端时倒欠 |

> **黄金法则：先在现货里把一个完整的"看法 → 计划 → 下单 → 复盘"循环跑顺，再去碰任何带杠杆的产品。** 几乎所有"一夜爆仓"的故事，都不是输给了市场，而是输给了"还没学会走就开始跑"。

详细对比可见：[output/259-your-guide-to-binance-spot-trading.md](../output/259-your-guide-to-binance-spot-trading.md)、[output/399-what-is-leverage-in-crypto-trading.md](../output/399-what-is-leverage-in-crypto-trading.md)。

---

### 6.3 订单簿：一本随时翻页的大账

![订单簿示意图](https://public.bnbstatic.com/static/academy/uploads/b0de7203ef944f29a6286eedc7a45be4.jpg)

#### 6.3.1 订单簿到底是什么

**订单簿 (Order Book)** 是某个交易对（如 BTC/USDT）当前所有**未成交**买卖订单的实时清单。它分两半：

- **买单（Bid，绿色）**：从高到低排列。"卖给我吧，我愿意出 X 价。"
- **卖单（Ask，红色）**：从低到高排列。"想买就来吧，我至少要 X 价。"

两边最靠近中间的那两行——**最高买价 (Best Bid)** 和 **最低卖价 (Best Ask)**——之间的差，就是**买卖价差 (Bid-Ask Spread)**。

```
卖盘 (Ask)
580.30  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮  60 BNB
580.10  ▮▮▮▮▮▮              20 BNB
580.00  ▮▮▮▮                12 BNB   ← Best Ask
─────────── 价差 0.10 USDT ────────────
579.90  ▮▮▮                 10 BNB   ← Best Bid
579.80  ▮▮▮▮▮▮▮▮▮▮▮         35 BNB
579.70  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮  80 BNB
买盘 (Bid)
```

订单簿是**动态**的：在高流动性市场里它每秒翻动几十次，每一笔成交都会立刻把对应订单从簿子上抹掉，新的挂单又随时出现。它本质上是市场参与者**正在进行价格谈判**的实时画面。

#### 6.3.2 三件你能从订单簿上读出来的事

**① 流动性深浅**

把买一卖一加起来再看附近 5–10 档，就能感受流动性。BTC/USDT 这种主流盘，每档动辄几十上百枚 BTC；某些山寨币，整个买盘加起来都凑不出一万 U——后者就是"低流动性陷阱"，下单瞬间就会自己冲掉自己。

**② 支撑位与阻力位**

某个价格附近堆积着大量买单，叫**买墙 (Buy Wall)**——价格往下走可能会被这道墙顶住，是潜在**支撑位**。
反过来，大量卖单叫**卖墙 (Sell Wall)**，价格往上走可能被它压住，是潜在**阻力位**。

但**重要警告**：买卖墙可以挂上去也可以瞬间撤掉，部分大户用它来制造虚假供需信号（这就是 6.10 节要讲的"幌骗"）。所以墙是参考，不是证据。

**③ 深度图 (Depth Chart)**

把订单簿用面积图画出来，就是深度图：x 轴是价格，y 轴是累积订单量，绿色面积代表买单深度，红色代表卖单深度。

![深度图示意](https://public.bnbstatic.com/static/academy/uploads/49f32640cc134d94ade36200a8bcb602.jpg)

深度图最大的价值是"一眼看出大宗订单的分布"。比如某个价格出现一个突兀的台阶，那里大概率挂着一面墙——值不值得相信，得结合 K 线和资金流综合判断。

详见 [output/194-what-is-an-order-book-and-how-does-it-work.md](../output/194-what-is-an-order-book-and-how-does-it-work.md)。

---

### 6.4 撮合引擎：那只看不见的拍卖师

![撮合引擎概念图](https://public.bnbstatic.com/static/academy/uploads/8b448e388b0345019aece572732acfad.jpg)

订单簿告诉你"谁想买、谁想卖、价是多少"，**撮合引擎 (Matching Engine)** 才是那个**真正按规则把两边配对、敲下成交锤**的系统。

#### 6.4.1 撮合的核心规则：价格优先 + 时间优先

绝大多数交易所采用**先进先出 (FIFO)** 算法：

- **价格优先**：出价高的买单 / 要价低的卖单先被处理；
- **时间优先**：同一档价格，谁先挂上来谁先成交。

举个例子：现在 BTC 卖一价是 $40,000，挂着 1 BTC。如果三个买家几乎同时市价买 0.5 BTC，那么——

- 第一个吃掉 $40,000 的 0.5 BTC；
- 第二个把 $40,000 上剩下的 0.5 BTC 吃完；
- 第三个被推到下一档 $40,001，开始吃下一个挂单。

**滑点就是从这里来的。** 价格优先 + 时间优先听上去公平，但前提是"够快"和"挂得早"。这也是高频交易公司花重金把服务器机柜搬进交易所机房的原因——他们要的，是几微秒级别的下单优先权。

#### 6.4.2 其他算法：Pro-Rata 和 TWAP

- **Pro-Rata (按比例)**：同价同时间，按订单大小分配。机构市场常见，散户基本不接触。
- **TWAP (时间加权平均价)**：把一笔大单拆成很多小单，按一段时间均匀执行，减少冲击。币安的算法交易和"拆单工具"背后就用这类思路。

#### 6.4.3 中心化撮合 vs 去中心化撮合

| 维度 | 中心化撮合（CEX） | 去中心化撮合（DEX） |
| --- | --- | --- |
| 速度 | 微秒级 | 几秒到十几秒（受公链速度限制） |
| 性能 | 极高 | 有限 |
| 成本 | 平台手续费 | Gas + 滑点 |
| 透明度 | 黑箱（你看不到代码） | 链上可验证 |
| 抗审查 | 受平台和监管制约 | 抗审查 |

币安、Coinbase、OKX 都是中心化撮合；Uniswap、PancakeSwap 这类 DEX 用的是 AMM (自动做市商) 模型，没有传统订单簿，本章 6.9 节会单独对比。详见 [output/270-understanding-matching-engines-in-trading.md](../output/270-understanding-matching-engines-in-trading.md)。

---

### 6.5 价差与滑点：屏幕价之外的隐藏成本

许多新手会把交易成本简单理解成"手续费 0.1%"，结果实际操作时发现，**真正的成本里有一半根本没写在手续费栏**——它叫**价差 + 滑点**。

#### 6.5.1 买卖价差 (Bid-Ask Spread)

> 价差 = 最低卖价 (Ask) − 最高买价 (Bid)

价差越小，意味着市场流动性越强、做市商竞争越激烈。

**价差率 = (Ask − Bid) / Ask × 100%**

- BTC/USDT：价差经常只有 0.5–1 美元，价差率约 0.001%。
- 一些山寨 / Meme 币：价差几分钱看起来不大，但相对于币价已经是 0.1%–0.5%，加上手续费就是接近 1% 的隐性成本。

**价差从哪来？** 主要是**做市商**赚的：他们同时挂买单和卖单，靠一买一卖之间的微小价差，全天候赚"价差套利"。一个健康的市场，有大量做市商在背后竞争，你才能享受到丝滑的成交体验。

#### 6.5.2 滑点 (Slippage)：市价单的隐形税

**滑点**是"预期价"和"实际成交均价"的差。它在两类情况下尤其严重：

1. **大额市价单吃穿订单簿。** 你想市价买入 100 BTC，但卖一只挂了 0.5 BTC，你的订单会一路吃到卖五卖六……平均成交价远超卖一价。
2. **波动剧烈瞬间。** 行情急速拉升或瀑布时，订单簿被瞬间扫光，你以为按 100 美元成交，结果落地是 105。

#### 6.5.3 用一个例子算清楚滑点

假设你要市价买入 5 BTC，订单簿如下：

| 档位 | 卖价 | 数量 |
| --- | --- | --- |
| 卖一 | 40,000 | 1 BTC |
| 卖二 | 40,010 | 2 BTC |
| 卖三 | 40,030 | 2 BTC |

实际成交均价 = (1×40,000 + 2×40,010 + 2×40,030) / 5 = **40,016**。

相对于"屏幕显示 40,000"，你多付了 16 美元/BTC × 5 = 80 美元。这 80 美元不会显示为"手续费"，但它实实在在从你的本金里走掉了。

#### 6.5.4 减少滑点的四个动作

1. **拆单分批下**：化整为零，让每一笔都不超过订单簿前 2 档的深度。
2. **优先用限价单**：稍微等一等，用价格换确定性。
3. **避开低流动性时段**：周末凌晨、币种刚上线的几分钟。
4. **DEX 设置滑点容差**：在 Uniswap、PancakeSwap 上有个滑点容差 (Slippage Tolerance) 设置——太低会成交不了，太高会被三明治攻击 (Sandwich Attack) 利用。常见经验：主流币 0.5%、稳定币 0.1%、山寨币 1%–3%，并配合小额测试。

详见 [output/459-bid-ask-spread-and-slippage-explained.md](../output/459-bid-ask-spread-and-slippage-explained.md)。

---

### 6.6 订单类型全谱：从市价单到 OTOCO

![币安订单类型示意](https://public.bnbstatic.com/static/academy/uploads/8bacf03922574c85808dd760f0c5d5c2.png)

不同订单类型解决的是同一个问题在不同维度上的取舍——**速度 vs 价格控制 vs 风险管理**。下面这张表是你可以反复回来查的"备忘单"：

| 订单类型 | 是否立即成交 | 是否保证价格 | 主要用途 |
| --- | --- | --- | --- |
| 市价单 (Market) | ✅ | ❌ | 急于进出场 |
| 限价单 (Limit) | ❌ | ✅ | 有目标价位、不急成交 |
| 限价挂单 (Post-Only / Maker-Only) | ❌ | ✅ | 想吃 Maker 手续费返利 |
| 止损市价单 (Stop Market) | 触发后立即 | ❌ | 强制止损，宁可滑点也要出来 |
| 止损限价单 (Stop Limit) | 触发后挂限价 | ✅ | 止损时控制最差成交价 |
| 止盈单 (Take Profit) | 触发后立即/挂限价 | 视类型而定 | 自动锁利 |
| 跟踪止损 (Trailing Stop) | 动态触发 | ❌ | 趋势行情中保护已有利润 |
| OCO | 视触发情况 | 部分 | 同时挂止盈止损，二选一 |
| OTO | 主单成交后再挂 | 视类型 | 入场 + 离场策略一次设好 |
| OTOCO | 主单 + OCO 组合 | 视类型 | 完整一套"开仓 + 双向出场" |

#### 6.6.1 基础三件套：市价单、限价单、限价挂单

**市价单 (Market Order)**：以"最优可得"立刻成交。优点是速度快、几乎一定成交；缺点是滑点、Taker 手续费。**适合用在：你愿意为确定性付溢价的情境，比如有突发新闻、必须立刻进场。**

**限价单 (Limit Order)**：指定价格挂出，等市场走过来。优点是价格可控、做 Maker 手续费更低；缺点是可能永远不成交。**适合用在：你有明确的目标价位、可以耐心等。**

限价单还可以选择**有效期 (Time-in-Force)**：

- **GTC (Good-Til-Canceled)**：一直有效到你撤单或全部成交（最常用）。
- **IOC (Immediate-Or-Cancel)**：能成交多少就成交多少，剩下的立刻撤。
- **FOK (Fill-Or-Kill)**：要么全部立刻成交，要么直接撤。

**限价挂单 (Post-Only)**：保证你只做"挂单方 (Maker)"，如果你的限价单提交时会立刻吃掉对手单（变成 Taker），系统会自动撤销。**适合用在：手续费敏感的高频策略，或者纯做市策略。**

详见 [output/653-what-is-a-market-order.md](../output/653-what-is-a-market-order.md)、[output/654-what-is-a-limit-order.md](../output/654-what-is-a-limit-order.md)。

#### 6.6.2 离场利器：止盈、止损、跟踪止损

![止盈止损概念](https://public.bnbstatic.com/static/academy/uploads/60d27793d8fb499e816d53b9f02fa896.png)

**止损单 (Stop Loss, SL)** 在价格跌到设定值时触发。它防的是一件事：**当你的判断错了，把损失锁在可承受范围内**。

**止盈单 (Take Profit, TP)** 在价格涨到设定值时触发，把账面利润落袋为安。

**跟踪止损 (Trailing Stop)** 是一种动态止损：止损价随着市场朝你有利方向移动而上抬，但当行情回落超过设定幅度时触发。它的本意是——**让利润自己跑，但别让它跑回来**。

> 一个被反复印证的道理：**没有止损的交易，就是给市场无限免单。** 你不需要每一次止损都"严格命中分毫不差"，但你必须每一次进场前就知道——"哪个价位证明我看错了？" 这个价位就是失效点 (invalidation point)，止损必须挂在它附近。

#### 6.6.3 高级组合：OCO、OTO、OTOCO

**OCO (One-Cancels-the-Other) 二选一订单**

最实用的"懒人神器"。同时挂一个止盈限价单和一个止损单（通常是止损限价），**任一成交，另一自动撤销**。

举例：你在 BTC 40,000 入场 1 BTC——

- 止盈：挂限价 44,000 卖出 (+10%)
- 止损：触发价 38,500、限价 38,300 卖出 (-3.75%)

挂完 OCO 你就可以关掉电脑去睡觉。无论市场上涨打到 44,000 还是下跌打到 38,500，都会自动执行其中一个，并撤掉另一个。详见 [output/604-what-is-an-oco-order.md](../output/604-what-is-an-oco-order.md)。

**OTO (One-Triggers-Other) 主单触发挂单**

挂两笔订单：**只有第一笔成交后第二笔才生效**。比如你预期 BTC 会回调到 39,000 才入场，又想入场后立刻挂 +10% 的止盈——OTO 让你一次设置好。

**OTOCO (One-Triggers-OCO) 进一步组合**

OTO + OCO：主单成交后，自动挂出一个 OCO（止盈 + 止损）。这是**"一单到底"的完整开平仓策略**——预设入场点、入场后立刻保护起来。

详见 [output/102-what-order-types-can-you-use-on-binance.md](../output/102-what-order-types-can-you-use-on-binance.md)、[output/511-understanding-the-different-order-types.md](../output/511-understanding-the-different-order-types.md)。

---

### 6.7 实操：一次完整的现货买入演练

下面这个流程不是为了"教你按按钮"——按钮看一眼就会。它是为了让你把上面 6.2–6.6 节的概念**串成一个动作链**。

**场景：** 你账户里有 5,000 USDT，看好 BNB，计划用 1,000 USDT 买入。

#### 步骤一：检查市场状态（30 秒）

1. 打开 BNB/USDT 现货交易对。
2. 看深度图：买卖价差 0.10 USDT、卖一卖五累计深度 200+ BNB——流动性良好。
3. 看 K 线：处于盘整区间，今天波动 ±1.5%——非极端行情。
4. 看资金费率（如果你也开合约）：接近中性——没有明显多空压力。

**结论：** 不是冲突时点，可以正常下单。

#### 步骤二：定义"看法"和"失效点"（2 分钟）

这一步**没人盯着你做，但它决定 80% 的结果**。

- **看法：** BNB 在 575–585 区间盘整，预期突破 590 后上行至 620。
- **失效点：** 跌破 568（区间下沿向下假突破）。
- **目标位：** 620（前高附近阻力）。

#### 步骤三：用风险回报率筛掉不值得做的交易

入场 580：
- 风险 = 580 − 568 = 12 USDT/BNB
- 回报 = 620 − 580 = 40 USDT/BNB
- **风险回报率 = 12 : 40 ≈ 1 : 3.3**

> **门槛建议：1:2 是底线，1:3 以上才值得做。** 风险回报率 < 1:1.5 的交易，无论你"多有信心"都先放弃——长期看赢面太低。

#### 步骤四：用 1% 法则倒推仓位

账户 5,000 USDT，单笔最多损失 1%（即 50 USDT）。
失效点距入场 12/580 ≈ 2.07%。

**仓位大小 = 账户 × 风险% / 止损% = 5000 × 0.01 / 0.0207 ≈ 2,415 USDT。**

也就是说，从风控角度你**最多可以投 2,415 USDT**。计划买 1,000 比这个上限还低，安全。

> 原计划 1,000 USDT 是经验直觉，仓位公式是数学约束。**当直觉 < 公式，听直觉；当直觉 > 公式，听公式。**

#### 步骤五：选订单类型 + 下单

- 不急着追：挂 **限价单** @ 579.5 买入约 1.725 BNB（接近买一价等回踩）。
- 急着追：用 **市价单**，但只买 1,000 U 不会有明显滑点。

下单后，立刻挂一个 **OCO 离场单**：
- 止盈 @ 620
- 止损 @ 568（触发价）/ 567（限价）

到这一步，整个交易已经"自动驾驶"了。

#### 步骤六：写交易日记

不是要写得多长，**关键字段一行一笔**就够：

```
日期：2026-04-25 14:32
标的：BNB/USDT
方向：多
入场：579.5
仓位：1.725 BNB ≈ 1000 U
止损：568（-1.99%）
止盈：620（+6.98%）
RR：1:3.3
理由：区间盘整、575 支撑稳、宏观风险低
情绪：6/10（观望中性）
```

详见 [output/501-what-is-a-trading-journal-and-how-to-use-one.md](../output/501-what-is-a-trading-journal-and-how-to-use-one.md) 和 [output/259-your-guide-to-binance-spot-trading.md](../output/259-your-guide-to-binance-spot-trading.md)。

---

### 6.8 仓位管理：交易里最容易被低估的"那个变量"

![仓位管理](https://public.bnbstatic.com/static/academy/uploads/9960cebac78147efaea0e2670466a7bf.png)

> 普通交易者天天问"现在能买什么"；
> 优秀交易者只问一句话：**"如果我错了，我会损失账户的百分之多少？"**

#### 6.8.1 三个"账户级别"的概念

1. **账户大小 (Account Size)**：你愿意分配给这个交易策略的总资金。**别把准备 5 年长持的 BTC 算进来**——那是另一个独立账户。
2. **账户风险 (Account Risk)**：单笔交易最多愿意损失账户的多少比例。
3. **交易风险 (Trade Risk)**：从入场到止损，价格要走多少（用百分比表示）。

#### 6.8.2 仓位公式（请背下来）

```
仓位大小 = 账户大小 × 账户风险% / 交易风险%
```

举例：账户 10,000 U，1% 法则（账户风险），止损距离 5%（交易风险）。

**仓位 = 10,000 × 0.01 / 0.05 = 2,000 U。**

很多人会觉得"我只有 1% 的风险，结果只能用 20% 的仓位？" 没错，**风险 % 和仓位 % 不是一回事**——这是新手最常混淆的两件事。

#### 6.8.3 1% 法则 vs 2% 法则

传统市场常用 2% 法则。考虑到加密货币波动远大于股票/外汇，**新手强烈建议从 1% 起步**——市场会给你机会调高它，但前提是你先活下来。

| 单笔风险 | 连续亏损概率 (假设胜率 50%) | 资金回撤 |
| --- | --- | --- |
| 1% | 连亏 10 笔仅 0.1% | -9.6% |
| 2% | 同上 | -18.3% |
| 5% | 同上 | -40.1% |
| 10% | 同上 | -65.1% |

后两行解释了为什么"重仓 + 不止损"的交易者很难活过一个完整熊市。详见 [output/556-how-to-calculate-position-size-in-trading.md](../output/556-how-to-calculate-position-size-in-trading.md)、[output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md](../output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md)。

---

### 6.9 CEX vs DEX：两套世界，两套游戏规则

#### 6.9.1 中心化交易所 (CEX)

代表：币安、Coinbase、OKX、Kraken。

- **架构：** 订单簿 + 中心化撮合 + 平台托管资产。
- **优点：** 深度好、滑点低、撮合极快、法币出入金、中文 24×7 客服、强大的现货/合约/Earn 全家桶。
- **缺点：** 资产由平台保管 ("Not your keys, not your coins"，回顾第 4 章)，受监管约束。

#### 6.9.2 去中心化交易所 (DEX)

代表：Uniswap (以太坊)、PancakeSwap (BSC)、Raydium (Solana)、Aerodrome (Base)。

- **架构：** 多数采用 **AMM (自动做市商)** 模型，用流动性池替代订单簿；少数采用链上订单簿（如 dYdX v3 之前）。
- **优点：** 无需 KYC、自托管、抗审查、新币第一时间上线。
- **缺点：** Gas 费、滑点（取决于池子深度）、MEV 风险（抢先交易、三明治攻击）、需要自管钱包。

#### 6.9.3 同一笔交易，两种世界的对比

假设你想用 1,000 USDT 买入某个流动性中等的 ALT 代币——

| 维度 | CEX (币安) | DEX (Uniswap) |
| --- | --- | --- |
| 是否需要 KYC | 是 | 否 |
| 资金托管 | 平台 | 自托管 |
| 单笔成本 | 0.1% Taker 手续费 | 0.3% LP 手续费 + ~5–30 U Gas |
| 撮合速度 | 毫秒 | 秒级（看公链） |
| 滑点 | 极小 | 看池子大小 |
| MEV 风险 | 无 | 有 |
| 新币上线时间 | 滞后 | 上线即可交易 |

**实务建议：**
- 主流币、大额交易、刚入门 → CEX。
- 想交易尚未上线 CEX 的早期币、做链上策略、坚持自托管 → DEX，但**先用小额试水**，并理解滑点容差和 MEV。

DEX 与 AMM 的深入讨论会放在第 9 章 DeFi 部分。详见 [output/517-what-is-a-decentralized-exchange-dex.md](../output/517-what-is-a-decentralized-exchange-dex.md)、[output/515-what-is-an-automated-market-maker-amm.md](../output/515-what-is-an-automated-market-maker-amm.md)。

---

### 6.10 微观结构里的"对手"：幌骗、抢先交易和你看不见的算法

![幌骗示意](https://public.bnbstatic.com/static/academy/uploads/5a3ae78070d74e79a3ad3020a6192721.png)

#### 6.10.1 幌骗 (Spoofing)

定义：**故意挂出无意成交的大额订单，制造虚假供需信号，等市场反应后撤单**。

经典套路：
1. 在 BTC 关键阻力位 41,000 上方挂出 200 BTC 的卖单 ("看，前面有大墙！")。
2. 散户和算法看到大墙，纷纷做空或暂停买入。
3. 价格被压在 40,800 时，幌骗者已在低位完成现货买入。
4. 幌骗单在被吃到之前秒撤。

幌骗在美国《多德-弗兰克法案》之后已被定为非法（CFTC 监管），英国 FCA、欧洲也有类似法规。**主流 CEX 都有反幌骗算法**，但散户依然要警惕：**任何离当前价位较远的"巨型墙"，都不要轻易当作真实供需。**

详见 [output/483-what-is-spoofing-in-the-financial-markets.md](../output/483-what-is-spoofing-in-the-financial-markets.md)。

#### 6.10.2 抢先交易 (Front-Running) 与 MEV

在 DEX 上，你提交的交易要先进 mempool（待打包内存池）等几秒到几十秒。**MEV 机器人**会扫描 mempool，发现一笔将要把池子价格推高的大额买单后，**立刻用更高 Gas 抢在你之前买入、再以稍高价格卖给你**——这就是经典的"三明治攻击"。

防御方法：
- 设置合理滑点容差（不要写 5% 或 10% 这种）；
- 使用支持私有 mempool 的钱包（如 Flashbots Protect、Rabby 的反 MEV 模式）；
- 大额交易拆单或走聚合器（1inch、CowSwap 等会内置 MEV 保护）。

#### 6.10.3 一个心态前提

你正在跟一群比你更快、更专、设备更好、对市场结构理解更深的对手做生意。这不是说你不能赢——历史上散户里的确出过传奇——而是说**任何一个看上去"白送"的机会，要先问一句"那对面是谁"**。

---

### 6.11 交易心理：所有技术问题最终都是心理问题

![交易心理](https://public.bnbstatic.com/static/academy/uploads/fc4ce1aade764f7fa3e68176e5ac8a38.jpg)

技术指标可以学、订单类型可以背、仓位公式可以套，但**有一件事没人能替你完成——按下按钮的那一刻控制住自己**。

#### 6.11.1 两个最常见的情绪触发器

- **FOMO (Fear of Missing Out, 错失恐惧)：** "大家都在涨，我再不上车就来不及了。" 它通常出现在局部顶部。
- **FUD (Fear, Uncertainty, Doubt, 恐惧不确定与怀疑)：** "全网都在喊这个币要归零。" 它通常出现在局部底部。

经验丰富的交易者都熟悉一个反直觉的规律：**当你心里最确信"现在必须买"或"必须卖"时，大概率正是相反方向应该做的时候。**

#### 6.11.2 五条用来对抗自己的规则

1. **进场前写下完整计划**：入场价、止损、目标、仓位、理由。**没写完不下单**。
2. **挂出止损就走开**：盯盘只会增加你"手动撤止损"的概率。
3. **每天/每周设定亏损上限**：例如"今天累计亏损达账户 3% 立刻收手"。
4. **不相信"必胜系统"**：长期胜率超过 60% 已是顶尖。要靠盈亏比赢，不是胜率。
5. **休息也是一种策略**：连续亏损 3 笔、或连续盈利 5 笔之后，强制空仓 1–3 天。情绪和判断都需要冷却。

详见 [output/341-trading-psychology-how-to-trade-without-emotions.md](../output/341-trading-psychology-how-to-trade-without-emotions.md)、[output/596-the-psychology-of-market-cycles.md](../output/596-the-psychology-of-market-cycles.md)。

---

### 6.12 常见误区与陷阱

| # | 误区 | 真相 |
| --- | --- | --- |
| 1 | "市价单最公平、最即时" | 大单会吃穿订单簿，实际成交价可能远高于屏幕价 |
| 2 | "限价单挂得越远越赚" | 挂得太远基本不成交，等于没在场 |
| 3 | "止损被打就是平台的错" | 大多数情况是你设得太靠近正常波动区 |
| 4 | "止损会被庄家收割，所以不挂" | 不挂 = 把决定交给情绪，长期成本远大于"被收割" |
| 5 | "我能买到底、卖到顶" | 极少数人能做到，且都是事后才看出来的 |
| 6 | "杠杆放大收益" | 先放大波动，再放大情绪，最后才（可能）放大收益 |
| 7 | "山寨币现在没人买正好抄底" | 没人买往往代表流动性枯竭，进得去出不来 |
| 8 | "DEX 没有手续费所以更便宜" | Gas + 滑点 + MEV 加起来常常贵于 CEX |
| 9 | "反正长期持有就好，不用学交易" | 现货买入也涉及订单簿、滑点、时点选择，**完全不学才是真贵** |
| 10 | "做市商看得到我的止损所以收割我" | 你的单和别人的单一起放在订单簿里，并不会被特殊标记 |

---

### 6.13 检查清单与练习

- [ ] **看一次订单簿。** 打开 BTC/USDT，数一下卖一到卖五的累计深度，再切到一个市值排名 200+ 的币种，对比两者深度差几个数量级。
- [ ] **算一次滑点。** 假设你要市价买 50,000 U 的某个币，按当前订单簿算一下，从卖一吃到第几档？平均成交价比卖一高多少？
- [ ] **挂一笔限价单 + OCO。** 用 50–100 U 的小仓位实操一次，观察 OCO 在不同市场走势下的触发逻辑。
- [ ] **用仓位公式倒推一次仓位。** 选一笔你最近做的（或想做的）交易，按 1% 法则算"理论最大仓位"。和你实际的仓位对比。
- [ ] **抄一份交易日记模板。** 字段建议：日期、标的、方向、入场价、仓位、止损、止盈、RR、理由、情绪 1–10、复盘。坚持一周。
- [ ] **找一次"幌骗痕迹"。** 在某个币的盘口蹲 30 分钟，留意有没有"突然出现的巨墙、价格反应后又秒撤"的现象。
- [ ] **回答三个问题：**
  1. 你愿意为一次"看法错误"付多少账户百分比？
  2. 你的止损会按哪个原则设？（百分比 / 支撑位 / 移动平均线 / ATR）
  3. 你下单前写不写计划？

---

### 6.14 延伸阅读

#### 订单簿与撮合机制
- [订单簿及其运作方式简介](https://academy.binance.com/zh-CN/articles/what-is-an-order-book-and-how-does-it-work) ｜ [本地缓存](../output/194-what-is-an-order-book-and-how-does-it-work.md)
- [交易匹配引擎介绍](https://academy.binance.com/zh-CN/articles/understanding-matching-engines-in-trading) ｜ [本地缓存](../output/270-understanding-matching-engines-in-trading.md)
- [买卖价差和滑动价差详解](https://academy.binance.com/zh-CN/articles/bid-ask-spread-and-slippage-explained) ｜ [本地缓存](../output/459-bid-ask-spread-and-slippage-explained.md)

#### 订单类型与执行
- [币安支持的订单类型](https://academy.binance.com/zh-CN/articles/what-order-types-can-you-use-on-binance) ｜ [本地缓存](../output/102-what-order-types-can-you-use-on-binance.md)
- [理解不同的订单类型](https://academy.binance.com/zh-CN/articles/understanding-the-different-order-types) ｜ [本地缓存](../output/511-understanding-the-different-order-types.md)
- [什么是市价单](https://academy.binance.com/zh-CN/articles/what-is-a-market-order) ｜ [本地缓存](../output/653-what-is-a-market-order.md)
- [什么是限价单](https://academy.binance.com/zh-CN/articles/what-is-a-limit-order) ｜ [本地缓存](../output/654-what-is-a-limit-order.md)
- [什么是 OCO 订单](https://academy.binance.com/zh-CN/articles/what-is-an-oco-order) ｜ [本地缓存](../output/604-what-is-an-oco-order.md)

#### 现货交易实操
- [币安现货交易指南](https://academy.binance.com/zh-CN/articles/your-guide-to-binance-spot-trading) ｜ [本地缓存](../output/259-your-guide-to-binance-spot-trading.md)
- [币安充值与提币指南](https://academy.binance.com/zh-CN/articles/your-guide-to-binance-deposit-withdrawal) ｜ [本地缓存](../output/224-your-guide-to-binance-deposit-withdrawal.md)
- [什么是杠杆交易](https://academy.binance.com/zh-CN/articles/what-is-leverage-in-crypto-trading) ｜ [本地缓存](../output/399-what-is-leverage-in-crypto-trading.md)

#### 风险与仓位管理
- [仓位大小如何计算](https://academy.binance.com/zh-CN/articles/how-to-calculate-position-size-in-trading) ｜ [本地缓存](../output/556-how-to-calculate-position-size-in-trading.md)
- [止盈止损点及其计算方法](https://academy.binance.com/zh-CN/articles/what-are-stop-loss-and-take-profit-levels-and-how-to-calculate-them) ｜ [本地缓存](../output/379-what-are-stop-loss-and-take-profit-levels-and-how-to-calculate-them.md)
- [风险回报率及其使用方法](https://academy.binance.com/zh-CN/articles/what-is-the-risk-reward-ratio-and-how-to-use-it) ｜ [本地缓存](../output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md)
- [五种风险管理策略](https://academy.binance.com/zh-CN/articles/five-risk-management-strategies) ｜ [本地缓存](../output/363-five-risk-management-strategies.md)

#### 心理与日记
- [交易心理：如何避免情绪化交易](https://academy.binance.com/zh-CN/articles/trading-psychology-how-to-trade-without-emotions) ｜ [本地缓存](../output/341-trading-psychology-how-to-trade-without-emotions.md)
- [交易日记及其使用方法](https://academy.binance.com/zh-CN/articles/what-is-a-trading-journal-and-how-to-use-one) ｜ [本地缓存](../output/501-what-is-a-trading-journal-and-how-to-use-one.md)
- [市场周期心理学](https://academy.binance.com/zh-CN/articles/the-psychology-of-market-cycles) ｜ [本地缓存](../output/596-the-psychology-of-market-cycles.md)

#### CEX/DEX 与微观结构
- [什么是去中心化交易所 (DEX)](https://academy.binance.com/zh-CN/articles/what-is-a-decentralized-exchange-dex) ｜ [本地缓存](../output/517-what-is-a-decentralized-exchange-dex.md)
- [什么是自动做市商 (AMM)](https://academy.binance.com/zh-CN/articles/what-is-an-automated-market-maker-amm) ｜ [本地缓存](../output/515-what-is-an-automated-market-maker-amm.md)
- [什么是金融市场中的幌骗](https://academy.binance.com/zh-CN/articles/what-is-spoofing-in-the-financial-markets) ｜ [本地缓存](../output/483-what-is-spoofing-in-the-financial-markets.md)
- [什么是抢先交易](https://academy.binance.com/zh-CN/articles/what-is-front-running) ｜ [本地缓存](../output/167-what-is-front-running.md)
- [什么是最大可提取价值 (MEV)](https://academy.binance.com/zh-CN/articles/what-is-maximal-extractable-value-mev) ｜ [本地缓存](../output/347-what-is-maximal-extractable-value-mev.md)

> **本章一句话总结：** 交易所不是"按钮工厂"，而是一个由订单簿、撮合引擎、做市商、机器人共同维护的微观生态。把"价差、滑点、订单类型、仓位、止损、心理"这六件事真正搞懂，比再多看几张 K 线都管用——它们才是把"赌博"变成"交易"的那条分界线。

---

## 第七章 技术分析与交易策略入门

> "图表不会告诉你未来会发生什么。
> 它只是把过去所有买卖双方的博弈，画在了一张纸上。
> 你要做的，是判断**这个博弈现在站在哪一边**——而不是预言下一秒。"

![K 线图与技术分析示意](https://public.bnbstatic.com/static/academy/uploads/b33e9b2abb87475998e56c700e9a024b.png)

### 本章目标

- 把 K 线、趋势线、支撑阻力、均线、RSI、布林线、MACD、一目均衡图、斐波那契、VWAP 等常用工具讲到能上手用
- 区分**工具、策略、纪律、心理**这四件事——它们经常被新手混为一谈
- 从零写出一个**规则明确、可回测、可风控**的完整交易策略
- 学会用回溯测试把"自我感觉良好的想法"和"真正能赚钱的想法"区分开
- 识别 7 个最常坑掉新手账户的技术分析陷阱

---

### 7.1 读者先要解决的问题：技术分析到底在做什么

新手打开 K 线图往往是两种反应：一种是"全是红绿色的方块，看不懂直接放弃"；另一种是"觉得自己画几条线就能预测未来"。两种都错。

> **技术分析 (Technical Analysis, TA) 不是占卜。它是一套基于历史价格与成交量的"概率工具"，告诉你的是"这个位置上多空力量谁占优、风险/收益比是否值得下注"，而不是"下一根 K 线一定涨还是跌"。**

技术分析的三条根基性假设来自 19 世纪末的[道氏理论](https://academy.binance.com/zh/articles/an-introduction-to-the-dow-theory)：

1. **价格反映一切**：所有已知的基本面、新闻、情绪都已经被定价进图表。
2. **价格沿趋势运行**：上涨/下跌一旦形成，惯性会延续一段时间，直到被打破。
3. **历史会以"形态相似"的方式重演**：因为人性 (恐惧、贪婪、FOMO、踏空) 不变。

理解这三条假设之后，你就知道：

- 技术分析**不是预测**，而是**建立可重复执行的概率优势**。
- 一个"看起来很有信心"的形态，落到统计上可能也只有 55% 的胜率——但如果你每次都把盈亏比控制在 2:1 以上，长期就赚钱。
- **没有任何一个指标能 100% 有效**，组合使用 + 严格风控才是这门手艺的核心。

> **本章核心一句话：** 工具决定你**能看到什么**，策略决定你**怎么下注**，纪律决定你**能不能活到把好策略跑出来**。少一个都不行。

---

### 7.2 第一块基石：读懂 K 线图

K 线图 (Candlestick Chart) 起源于 18 世纪日本的米商**本间宗久 (Munehisa Homma)**，最初用于大阪堂岛米市的价格记录。300 年后的今天，全球所有主流的股票、外汇、加密货币交易终端默认都用它来呈现价格。

#### 7.2.1 一根 K 线的四个价格

每根 K 线代表一段固定时间（1 分钟、5 分钟、1 小时、1 天……）内的四个关键价格，统称 **OHLC**：

- **Open (开盘价)**：该时段的第一笔成交价
- **High (最高价)**：时段内的最高价
- **Low (最低价)**：时段内的最低价
- **Close (收盘价)**：该时段的最后一笔成交价

![OHLC 示意](https://image.binance.vision/editor-uploads/5c4c7f12d0df41eab1acae184450f914.png)

- **实体 (Body)**：开盘价与收盘价之间的矩形。**绿色 (阳线)** 表示收盘 > 开盘，**红色 (阴线)** 表示收盘 < 开盘。
- **影线 / 烛芯 (Wick / Shadow)**：实体上方/下方的细线，标出最高/最低价。
- **范围 (Range)**：最高价到最低价的总距离，反映该时段的**波动幅度**。

> **直观感觉**：实体短 + 影线长 = 多空在拉锯；实体长 + 影线短 = 一方完胜；上影线长 = 高位被打回去；下影线长 = 低位被托起来。

#### 7.2.2 一张速查表：12 种最常见的 K 线形态

K 线本身只是数据展示，**多根 K 线组合成的"形态"**才是分析的对象。下图是币安学院的 K 线形态速查表：

![K 线形态速查表](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/d7a3cdcd9b5f440eaa252430b7a8ab4d.)

按"看涨反转 / 看跌反转 / 趋势延续 / 悬而未决"四类来记，最容易：

**看涨反转形态**（出现在下跌末端，预示行情可能向上）

| 形态 | 特征 | 含义 |
| --- | --- | --- |
| **锤形线 (Hammer)** | 下影线长、实体小、几乎无上影线 | 价格被打到很低后被买盘强势托回 |
| **倒锤线 (Inverted Hammer)** | 上影线长、实体小、几乎无下影线 | 卖压减弱，多头试探上方阻力 |
| **三白兵 (Three White Soldiers)** | 三根连续大阳线，每根收在前一根高点之上 | 买方持续推升，趋势确认 |
| **看涨孕线 (Bullish Harami)** | 长阴线后跟一根包含在前一根实体内的小阳线 | 抛压衰竭，转折信号 |

![锤形线](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/907de85b126e4503b028ea2a0b947a1f.) ![三白兵](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/8ae3e484504f4d8a9c3edae7d83b9ae4.)

**看跌反转形态**（出现在上涨末端，预示行情可能向下）

| 形态 | 特征 | 含义 |
| --- | --- | --- |
| **吊颈线 (Hanging Man)** | 同锤形线，但出现在上涨末端 | 涨势疲态显现 |
| **流星线 (Shooting Star)** | 同倒锤线，但出现在上涨末端 | 高位被打回，卖压抬头 |
| **三只乌鸦 (Three Black Crows)** | 三根连续大阴线，每根收在前一根低点之下 | 卖方主导，趋势反转 |
| **乌云盖顶 (Dark Cloud Cover)** | 大阳线后跟一根高开低走、收盘跌破前阳线中点的阴线 | 多空力量易位 |

![流星线](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/984722aecd514d35b32b5e347c2e8313.) ![三只乌鸦](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/1f9828d501334921b4c874d952071eea.)

**趋势延续与悬而未决**

| 形态 | 含义 |
| --- | --- |
| **上升三法 / 下降三法** | 趋势中的小回调，预示原趋势将延续 |
| **十字星 (Doji)** | 开收盘几乎相同，多空势均力敌；在关键位置出现常预示反转 |
| **墓碑十字星** | 开/收盘都接近最低，长上影线 → 强烈看跌 |
| **蜻蜓十字星** | 开/收盘都接近最高，长下影线 → 强烈看涨 |

![十字星形态](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/7a2d39b2f306463fafa9b7d0abce10a9.)

> **重要提醒**：单根或单组 K 线**不是买卖信号**，只是"提示该位置可能有故事"。必须结合：①出现的位置（关键支撑/阻力？） ②成交量是否配合 ③大周期趋势方向 ④后一根 K 线是否确认。

#### 7.2.3 进阶：平均 K 线 (Heikin-Ashi)

普通 K 线在加密市场的"碎噪"特别多，新手容易被吓进吓出。**平均 K 线 (Heikin-Ashi，日语意为"平均标准线")** 用一组改良公式 (基于上一根的开收盘 + 当前的 OHLC) 重新画图，能显著平滑噪声：

- 几乎没有下影线的连续绿柱 → 强势上涨
- 几乎没有上影线的连续红柱 → 强势下跌
- 实体逐渐变小、上下影线变长 → 趋势可能转折

代价是它**不显示真实的开收盘价**，所以一般和普通 K 线**配合使用**：用 Heikin-Ashi 判趋势，用普通 K 线判精确入场点。

---

### 7.3 第二块基石：趋势线、支撑与阻力

如果说 K 线是"砖头"，那么趋势线和支撑阻力就是"墙"。它们是技术分析里最古老、最简单、也最有效的工具。

#### 7.3.1 支撑与阻力：地板与天花板

**支撑 (Support)** 是价格"很难跌破"的下方区域；**阻力 (Resistance)** 是价格"很难涨破"的上方区域。本质上：

- **支撑 = 需求区**：跌到这里就有买盘接走
- **阻力 = 供给区**：涨到这里就有卖盘抛压

![支撑区震荡示例](https://image.binance.vision/editor-uploads/ee9c96eb0940443880f079a921f164ae.png)

*价格在支撑区域反复震荡后突破。*

![阻力区压制示例](https://image.binance.vision/editor-uploads/8d41dbc6c8eb46bf86d1fa2eeabd6169.png)

*价格无法突破阻力区，下行趋势继续。*

> **关键概念：把支撑/阻力理解成"区间"，而不是"一根线"。** 市场里没有物理定律强制价格停在某个精确数字。一段价格区域被反复测试得越多，这个区域的"墙"越厚。

**支撑/阻力翻转 (Flip)**：被强力突破的支撑会变成新的阻力；被强力突破的阻力会变成新的支撑。这是技术分析里最实用的"再入场"信号之一。

![支撑翻转为阻力](https://image.binance.vision/editor-uploads/714acca4a2fc464fa49c9fb93f487390.png)

*被跌破的支撑区，在再次被测试时变成了阻力。*

支撑/阻力一般来自下面几个来源：

| 类型 | 解释 |
| --- | --- |
| **历史关键位** | 上一轮高点 / 低点、ATH (历史最高)、ATL (历史最低) |
| **整数心理位** | BTC 的 100,000、ETH 的 5,000、整数因为人类四舍五入习惯天然是关注点 |
| **均线** | 200 日 / 200 周 MA 在牛市常被当作"动态支撑" |
| **趋势线** | 见 7.3.2 |
| **斐波那契水平** | 见 7.7 |
| **VWAP** | 见 7.6 |

当**多种类型的支撑/阻力同时出现在同一价位**时，它的"墙厚度"成倍增加——这种现象叫**融合 (Confluence)**。融合区是技术分析里最有价值的入场设置之一。

#### 7.3.2 趋势线：把方向画出来

**趋势线**就是把图表上的高点或低点用直线连起来。规则很简单：

- **上升趋势线**：连接至少两个**抬高的低点**，斜率向上 → 多头主导
- **下降趋势线**：连接至少两个**降低的高点**，斜率向下 → 空头主导

![上升趋势线](https://image.binance.vision/editor-uploads%2F1567996260724-1567996260724.jpeg)

![下降趋势线](https://image.binance.vision/editor-uploads%2F1567996260816-1567996260816.jpeg)

绘制要点：

- **至少 3 次触碰**才算"具备分析意义"，2 次只能算"潜在趋势"。
- 趋势线**斜率不要太陡**——超过 60° 的趋势线通常很短命（常见于 meme 行情）。
- **触碰点用影线还是实体**？两种流派都有，关键是同一张图里要保持一致。
- **量表**：等差量表 vs 半对数量表。**长周期、跨数量级的图必须用半对数图**，否则趋势线会失真。

#### 7.3.3 一个 5 分钟练习：在图上画支撑、阻力和趋势线

打开任一交易终端 (TradingView、币安自带图表都行)，找到 BTC/USDT 周线图：

1. 用水平线工具，标出过去 2 年里**至少被价格反复测试 3 次**的两条水平价位。它们就是关键支撑/阻力。
2. 用趋势线工具，连接 2022 年熊市低点 → 2024 年回调低点。这条上升趋势线在牛市里被反复"踩"。
3. 标出整数位 (5 万、10 万)，看看有没有"价格刚到就反转"的迹象。
4. 思考：如果 BTC 此刻就在你画出的某个支撑上方，你的下一笔交易应该怎么布局？

这个练习每周做一次，半年后你看图的"手感"会完全不一样。

---

### 7.4 第三块基石：移动平均线 (MA / EMA)

**移动平均线 (Moving Average, MA)** 是把"过去 N 个周期"的价格平均后画出的一条平滑曲线。它最大的作用是**过滤噪声、揭示趋势方向**。

#### 7.4.1 SMA vs EMA

- **SMA (Simple MA)**：简单算术平均，所有数据点权重相同。反应慢但稳。
- **EMA (Exponential MA)**：指数加权，**越近的价格权重越高**。反应快但更容易被噪声拐到。

| 周期 | 别名 | 典型用法 |
| --- | --- | --- |
| MA7 / EMA9 | 短期均线 | 日内、短线交易 |
| MA25 / EMA20 | 中期均线 | 波段交易，常作为"小级别均线带" |
| MA50 / EMA50 | 中长期均线 | "牛熊分水岭"之一 |
| MA99 / EMA100 | 长期均线 | 长期趋势确认 |
| MA200 / EMA200 | 超长期均线 | 机构投资者最看重的"主趋势"分界线 |

> **传统市场里，跌破 MA200 通常被视为"进入熊市"的强信号。在 BTC 上，200 周均线 (≈ 4 年) 历史上几乎从未跌破过——它被很多人称作"比特币的灵魂线"。**

![200 周均线作为 BTC 价格的支撑](https://image.binance.vision/editor-uploads/31774141a13e4db6a8399effce2f3cb9.png)

#### 7.4.2 金叉与死叉

均线最经典的信号是**两条均线的交叉**：

- **金叉 (Golden Cross)**：短期 MA 自下而上穿过长期 MA → **看涨**信号
- **死叉 (Death Cross)**：短期 MA 自上而下跌破长期 MA → **看跌**信号

最经典的组合是 **MA50 / MA200 (日线)**。

![BTC 日线金叉](https://image.binance.vision/editor-uploads/89509a508506442abdd6c4e2309d28de.png)

*金叉出现，比特币展开新一轮上涨。*

![BTC 日线死叉](https://image.binance.vision/editor-uploads/301ceeacbc9b47f7a42b1e6e30ed18a1.png)

*死叉确认下跌趋势。*

> **金叉 / 死叉是滞后信号**：等它出现时趋势已经走了一段。它的真正用法是**"确认趋势 + 给出入场许可"**，而不是用来"预测拐点"。一个常见的误用是"周线金叉一出就梭哈"——历史上比特币也发生过"金叉之后立刻假突破回头"的情况，所以必须叠加成交量、关键位、风控。

#### 7.4.3 四种基于均线的策略

币安学院总结的四种均线策略，难度从易到难：

| 策略 | 核心思路 |
| --- | --- |
| **双均线交叉** | 等金叉/死叉出现做多/空。最简单，但延迟最大。 |
| **均线带 (MA Ribbon)** | 4–8 条不同周期 MA 叠加，"扇形扩散"=趋势加强，"收敛重叠"=趋势减弱。 |
| **均线包络线 (MA Envelope)** | 在中央 MA 上下固定百分比 (如 ±2.5%) 画通道，越上轨可能超买、跌下轨可能超卖。 |
| **MACD** | 实质是 EMA12 与 EMA26 之差，配合"DEA 信号线"和"柱状图"使用，下一节展开。 |

---

### 7.5 第四块基石：震荡指标 (RSI / Stoch RSI / MACD / 布林线)

均线告诉你**方向**，震荡指标告诉你**强弱**。

#### 7.5.1 RSI (相对强弱指数)

RSI 由 J. Welles Wilder 在 1978 年提出，公式简化为：

```
RSI = 100 - 100 / (1 + RS)
其中  RS = 周期内平均涨幅 / 周期内平均跌幅
```

默认周期 **14**。读数在 0–100 之间：

- **RSI > 70**：超买，可能短期回调
- **RSI < 30**：超卖，可能短期反弹
- **RSI 50** 附近：动能中性

但这只是入门用法。RSI 真正强大的地方在两个进阶用法：

**① 背离 (Divergence)**：

- **顶背离**：价格创新高，但 RSI 没有创新高 → 上涨动能在减弱，警惕反转
- **底背离**：价格创新低，但 RSI 没有创新低 → 下跌动能在减弱，警惕反弹

**② 趋势中的 RSI 阈值偏移**：

- **强势上涨趋势**中，RSI 经常在 40–80 区间运行——此时 30 不等于超卖
- **强势下跌趋势**中，RSI 经常在 20–60 区间运行——此时 70 不等于超买

> **新手最大误区**：把"RSI < 30 就买"当成机械信号。事实上在 2022 年熊市里，BTC 的 RSI 多次跌破 20 仍继续下挫。**单看 RSI 不够，必须叠加趋势判断。**

#### 7.5.2 Stoch RSI：RSI 的 RSI

**随机相对强弱指数 (Stochastic RSI)** 把 RSI 自身当成数据源，再做一次随机指标计算。它比 RSI **更敏感、更早预警**，但也**更多假信号**。常见用法：

- 在震荡盘里捕捉短期超买超卖
- 配合 RSI 做"二次过滤"

#### 7.5.3 MACD：经典的趋势 + 动能复合指标

**MACD (Moving Average Convergence Divergence)** 由三部分组成：

```
DIF (快线)  = EMA12 − EMA26
DEA (慢线)  = DIF 的 9 日 EMA
柱状图 (Bar) = DIF − DEA
```

读法：

- **DIF 上穿 DEA**：金叉信号，柱状图由负转正
- **DIF 下穿 DEA**：死叉信号，柱状图由正转负
- **柱状图缩短**：动能减弱
- **价格新高 / 新低 + MACD 不创新高 / 新低**：背离

MACD 的优势是**同时把趋势方向和动能强弱画在一张图里**，是机构最常用的指标之一。

#### 7.5.4 布林线 (Bollinger Bands)

**布林线**由 John Bollinger 在 1980 年代提出，三条线组成：

```
中轨 = 20 日 SMA
上轨 = 中轨 + 2 × 20 日标准差
下轨 = 中轨 − 2 × 20 日标准差
```

按统计学意义，约 **95%** 的价格会落在上下轨之间。布林线最有价值的两个观察：

- **价格触及上轨 + 量能放大** → 短期超买，但**强趋势中也可能"沿轨上行"**
- **布林带收窄到极致**（"挤压" / Squeeze）→ 波动率即将爆发，要么大涨要么大跌

> **新手误区**："涨到上轨就空、跌到下轨就多"——在强趋势里这套打法会让你亏到怀疑人生。布林线**配合趋势方向**用才有效。

#### 7.5.5 一目均衡图 (Ichimoku Cloud)

**一目均衡图**是 1969 年由日本记者 Goichi Hosada 经过 30 年研究推出的"全套"指标：转换线、基准线、先行带 A、先行带 B、迟行带，五条线一起画。

![一目均衡图示例](https://image.binance.vision/editor-uploads%2F1560131586233-1560131586233.jpeg)

最直观的用法是看**云带 (Kumo)**：

- 价格在云带上方 → 强势看涨
- 价格在云带下方 → 强势看跌
- 价格穿云 → 趋势变化的早期信号
- 云带越厚 → 该位置的支撑/阻力越强

它信息密度极高，需要一段时间适应；一旦熟练，单凭云图就能完成"趋势 + 动能 + 支撑阻力"三件事的判断。

---

### 7.6 第五块基石：成交量与 VWAP

> **价格没有成交量背书，通常是不可信的。** —— 这句话应该贴在每个交易者的桌前。

成交量是判断"信号是真是假"最朴素的尺子：

- **突破伴随放量** → 真突破的概率高
- **突破缩量** → 假突破的概率高
- **下跌缩量** → 抛压可能枯竭，反弹概率上升
- **上涨缩量** → 多头疲软，警惕回调

#### VWAP：成交量加权平均价格

**VWAP (Volume Weighted Average Price)** 是按成交量加权后的均价：

```
VWAP = ∑ (典型价格 × 成交量) / ∑ 成交量
其中  典型价格 = (最高价 + 最低价 + 收盘价) / 3
```

![VWAP 示例](https://image.binance.vision/editor-uploads/c48a6e55420b454ebbd0d695d53f629a.png)

VWAP 的几个重要用法：

- **机构日内基准**：大单买入若**低于 VWAP** 算"成交良好"，否则算"成交不佳"。
- **多空分界**：价格在 VWAP 上方 = 日内偏多，下方 = 日内偏空。
- **均值回归交易**：日内大幅偏离 VWAP 的价格，常会回归靠近 VWAP。

VWAP 通常按"交易日"重置（传统市场是 9:30 重置；加密市场常用日线 UTC 0 点重置），所以它本质是**日内 / 短线工具**，不要拿来做长线判断。

---

### 7.7 第六块基石：斐波那契回调

**斐波那契回调 (Fibonacci Retracement)** 用一段已经发生的趋势（高点 → 低点 或 低点 → 高点）作为基准，标出几个潜在的回调位：

```
0%  →  23.6%  →  38.2%  →  50%*  →  61.8%  →  78.6%  →  100%
                                  ↑
                       *50% 严格说不是斐波数列，但因"中点心理"被普遍使用
```

61.8% 来自数学中的**黄金比例**——把一个数除以它后一个斐波那契数得到的极限。这个比例在自然界（贝壳、星系、向日葵种子排列）和艺术（蒙娜丽莎、金字塔）里反复出现，金融市场里也表现出强烈的"心理共振"。

![斐波那契水平作为支撑/阻力](https://image.binance.vision/editor-uploads/cf24e594e4dd45898a1ba03d7e52b32b.png)

实操步骤：

1. 找到一段干净的趋势（最近的明显高低点）。
2. 用斐波那契工具从趋势起点拉到终点。
3. 看价格在哪几个回调位反复测试——这些就是你的潜在入场区。
4. **38.2% 和 61.8%** 是最常被尊重的两个水平。
5. 配合其他指标（成交量、RSI、均线），形成"融合区"再入场。

> **斐波那契不是魔法**。它的有效性来源于"足够多的交易者都在看同样的水平"——一个**自我实现的预言**。冷门小币上，因为关注的人少，斐波那契往往不灵。

---

### 7.8 第七块基石：先行 vs 滞后，市场情绪

#### 7.8.1 先行指标 vs 滞后指标

| 类型 | 特点 | 典型代表 |
| --- | --- | --- |
| **先行指标 (Leading)** | 提前给信号，但容易**假信号** | RSI、Stoch RSI、K 线反转形态 |
| **滞后指标 (Lagging)** | 信号迟一些，但**更可靠** | 移动平均线、MACD、金叉 / 死叉 |
| **同步指标 (Coincident)** | 几乎实时反映当前 | VWAP、成交量、当前价格 |

成熟策略往往**先行 + 滞后搭配**：先行指标给"可能要反转"的预警，滞后指标给"确认反转"的扣板机许可。

#### 7.8.2 加密恐惧与贪婪指数

技术分析的"宏观补丁"。**加密恐惧与贪婪指数 (Crypto Fear & Greed Index)** 由 Alternative.me 维护，把市场情绪量化到 0–100 的分值：

![加密恐惧与贪婪指数](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/a99512acf33c429fb7e0783cd027e0c3.)

| 分值 | 含义 | 历史意义 |
| --- | --- | --- |
| 0–24 | **极度恐惧** | 通常对应阶段性底部，是分批买入的好时机 |
| 25–49 | 恐惧 | 偏空情绪，逢低买入 |
| 50–74 | 贪婪 | 偏多情绪，注意获利了结 |
| 75–100 | **极度贪婪** | 通常对应阶段性顶部，警惕回调 |

它综合了**波动率、成交量、社交媒体情绪、市场份额、Google 趋势** 五大因子。最经典的用法来自巴菲特那句话：

> **"在别人贪婪时恐惧，在别人恐惧时贪婪。"**

但单独看这个指数不够，它需要和趋势结构、成交量一起用——大牛市里它能在 80+ 待几个月，大熊市里也能在 20- 待半年。

---

### 7.9 把工具串成策略：四种主流交易风格

工具学完了，但**什么时候用、用多久、用多大仓位**才是真正的"策略"。按持仓时间长短，主流加密交易策略有四种：

| 风格 | 持仓时间 | 主要工具 | 适合人群 |
| --- | --- | --- | --- |
| **超短线 / 剥头皮 (Scalping)** | 秒~分钟 | VWAP、订单簿、深度图 | 全职交易者、量化、巨鲸 |
| **日间交易 (Day Trading)** | 几小时~一天 | K 线形态、RSI、VWAP、关键位 | 经验丰富的活跃交易者 |
| **波段交易 (Swing Trading)** | 几天~几周 | 均线带、趋势线、斐波那契 | **大多数业余交易者最合适的起点** |
| **趋势 / 头寸交易 (Position / Trend Trading)** | 数月~数年 | 周线 MA、宏观周期、基本面 | 上班族、长期投资者 |

> **新手建议**：**先从波段交易练手**。日间交易的速度和情绪强度，新手很难顶住；超短线则需要专业级的延迟和资金体量。波段交易给你充足的思考时间，又能让你完整经历一次"持仓-涨跌-止盈/止损"的全循环。

---

### 7.10 实战拆解：写出你的第一个完整策略

下面把"均线金叉 + RSI 过滤"这套常见的趋势跟随策略，从规则到风控完整拆给你看。**这不是"最好的"策略**，但它示范了**一个能用的策略应该长什么样**。

#### 策略名称：**EMA 50/200 金叉 + RSI 过滤 + 2R 出场**（日线级别，BTC/USDT）

**入场条件（必须全部满足）**：

1. **EMA50 上穿 EMA200**（日线金叉），且金叉发生时收盘价高于 EMA200。
2. **金叉当根 K 线的 RSI(14) 在 40–70 之间**——避免追超买顶部、避免抄死叉反弹。
3. **金叉当根 K 线的成交量 > 过去 20 日均量**——确认"真突破"。

**出场条件（任一满足即平仓）**：

- ① 收盘价跌破 EMA50（趋势失效）
- ② RSI > 80 且出现顶背离（动能耗尽）
- ③ 价格达到 **2R 止盈**（盈亏比 2:1）

**仓位管理（最重要的部分）**：

```
每笔交易最大风险 = 账户净值 × 1%      （新手建议 0.5%）
仓位规模  = 每笔最大风险 / (入场价 − 止损价)
```

举例：账户 10,000 USDT，单笔风险 1% = 100 USDT；入场 60,000，止损 57,000（差 3,000）→ 仓位 = 100 / 3,000 = **0.033 BTC** ≈ 1,980 USDT 名义敞口。

**止损位置**：

- 放在金叉当根 K 线的最低价下方 1–2%，或最近一个明显支撑的下方。
- **永远先想止损在哪、再想能赚多少**——这是新手和老手最大的分水岭。

**回测要求**：

- 用 TradingView 的 "Bar Replay" 功能或导出历史数据，跑过去 **3 年** 的 BTC/USDT 日线。
- 记录：交易次数、胜率、平均 R 倍数、最大连败次数、最大回撤。
- 如果**胜率 > 40%** 且**平均盈亏比 > 1.5**，说明策略具备正期望值。

**纪律条款（写在显眼处）**：

- 每天只在收盘后看图、下单。中途不操作。
- 一笔交易开仓后**不挪止损**（只允许往盈利方向移动 = 跟踪止损）。
- 连续 3 次止损后**停手 5 个交易日**——大概率是市场状态变了。
- 每周日晚做一次复盘：把所有交易截图存档，写清"按规则执行 / 违反规则"。

> **核心思想**：交易策略的价值不是"准不准"，而是**"重复 100 次后是不是还赚钱"**。任何让你"这次特殊一下"的念头，长期都会让你亏钱。

---

### 7.11 回溯测试：把"感觉"变成"数据"

> **"过去有效的方法在未来也可能有效"**——这就是回溯测试 (Backtesting) 的全部前提。它不能保证未来盈利，但能让你**剔除明显不靠谱的想法**。

#### 7.11.1 回溯测试的两类交易者

- **自主决策型 (Discretionary)**：策略本身就有大量"判断"，回测意义有限——同样的图你今天看是机会，明天看可能就是陷阱。
- **系统型 (Systematic)**：所有规则都被精确定义为"如果 A 和 B 同时发生，开仓；当 X 发生，平仓"。这种策略**最适合**回测。

如果你想认真做交易，**至少把核心策略系统化**——这样才能消除"上一笔亏了我下一笔加仓回本"这种致命情绪。

#### 7.11.2 一份手工回测表的最小字段

| 日期 | 交易对 | 方向 | 入场价 | 止损 | 止盈 | 风险 (R) | 实际盈亏 (R) | 是否按规则 | 笔记 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2024-08-12 | BTCUSDT | 多 | 60,000 | 58,500 | 63,000 | 1R | +2R | ✅ | 量能配合 |
| 2024-09-03 | BTCUSDT | 多 | 57,800 | 56,200 | 61,000 | 1R | -1R | ✅ | 假突破 |
| 2024-10-15 | BTCUSDT | 多 | 65,500 | 63,800 | 68,900 | 1R | +2R | ✅ | 量能良好 |

跑完至少 **30–50 笔**回测后，看几个关键数据：

- **胜率 (Win Rate)**：盈利笔数 / 总笔数
- **平均盈亏比 (Avg R)**：盈利笔的平均 R / 亏损笔的平均 R
- **期望值 (Expectancy)** = 胜率 × 平均盈利 − (1−胜率) × 平均亏损
- **最大回撤 (Max Drawdown)**：账户从最高点跌到最低点的最大百分比
- **最大连败 (Max Consecutive Losses)**：你能不能心理上扛住？

> **一个常见的诡异结果**：策略 A 胜率 70%、平均盈亏比 1:2（赢 1 输 2）→ **期望值是负的**！策略 B 胜率 30%、平均盈亏比 5:1 → **期望值大幅为正**。**胜率不是越高越好，期望值才是。**

#### 7.11.3 回测最容易踩的两个坑

1. **过度拟合 (Overfitting)**：把 10 个指标叠加，调到对历史数据"完美贴合"——一到实盘就废。规则越**简单**，越鲁棒。
2. **幸存者偏差**：只测试已经活下来的币种、已经存在的时间段。**别忘了那些归零的山寨币**。

---

### 7.12 七个最坑新手的 TA 错误

币安学院总结的 7 大常见错误，几乎每一条都有真实账户的尸体作为佐证：

#### ① 不止损

> "好的交易应具备三个要素：(1) 止损，(2) 止损，(3) 止损。" —— 商品交易员 Ed Seykota

新手最容易做的事就是"我再等等，可能会反弹"。结果套牢一年。**没有止损的交易，不叫交易，叫祈祷。**

#### ② 过度交易

新手以为越频繁交易越能赚钱。事实正好相反：

> "赚钱靠的是等待，而不是交易。" —— Jesse Livermore

某些波段策略**一年只交易 5–10 次**，长期收益却远超天天点鼠标的人。**不交易也是一种交易。**

#### ③ 报复性交易

刚亏 500，不甘心，立刻加倍仓位想"赢回来"——结果亏了 2,000。**重大亏损后的第一反应应该是"停手 24–72 小时"**，而不是立刻反手。

#### ④ 过于固执

> "每一天，我都假设我的仓位是错的。" —— Paul Tudor Jones

市场永远是对的。如果价格不按你想的走，**应该改变你的看法，而不是抱怨市场**。

#### ⑤ 忽视极端市场环境

黑天鹅事件 (LUNA 崩盘、FTX 暴雷、3·12、5·19) 中，所有技术指标都会失效——RSI 可以跌到 5、价格可以一根 K 线砸 50%。**极端行情下，唯一能保你命的是仓位和止损，不是任何技术指标。**

#### ⑥ 忘记 TA 是概率游戏

任何"100% 准的信号"都是骗局。一个胜率 55% 的策略，配合 1:2 的盈亏比，就是非常优秀的策略——别再追求"完美预测"。

#### ⑦ 盲目跟单

KOL 发"BTC 多单 60,000 入场"——你不知道他的仓位规模、止损位、出场计划，跟单 = 纯粹运气。**你可以学他的方法，但不要复制他的下单。**

---

### 7.13 工具、策略、纪律、心理：四件事不要混

最后强调本章最重要的一段话：

```
工具 (Tools)         决定你"能看到什么"  → K 线、均线、RSI、布林线…
   ↓
策略 (Strategy)       决定你"何时下注"     → 入场条件、止损止盈、仓位大小…
   ↓
纪律 (Discipline)     决定你"能否执行"     → 不挪止损、按计划平仓、复盘…
   ↓
心理 (Psychology)     决定你"能不能活下来" → 不报复交易、不 FOMO、不孤注一掷…
```

**90% 的新手把所有精力放在第一层，结果在第三、四层失败。**

绝大多数赚钱的交易者，工具用的并不复杂——也许就是"均线 + 一个震荡指标 + 关键位"，但他们的纪律和心理远比新手稳。**学习的优先级应该反过来：先建立纪律框架和心理模型，再去微调工具。**

---

### 7.14 检查清单与练习

**基本功 (本周必须完成)**

- [ ] 在 TradingView 或币安图表中，给 BTC/USDT 日线叠加：EMA50、EMA200、RSI(14)、成交量、布林线 (20,2)。把图截下来作为"标准模板"。
- [ ] 找出过去一年 BTC 的 5 个**明显的支撑/阻力位**，并解释每一个为什么有效或失效。
- [ ] 在周线图上画出**至少一条**有效的上升趋势线（3 次以上触碰）。

**进阶 (本月内完成)**

- [ ] 把 7.10 节那个"EMA 金叉 + RSI 过滤"策略，写成**一页 A4 规则表**，打印贴在电脑旁。
- [ ] 用 TradingView 的 Bar Replay 功能，对 2022–2024 年 BTC 日线做 **30 笔**手工回测，填好回测表。
- [ ] 计算这 30 笔的：胜率、平均盈亏比、期望值、最大回撤。
- [ ] 不论结果好坏，**写一段 500 字的反思**：哪些规则不合理？哪些情绪让你想破例？

**心理 (持续练习)**

- [ ] 每天打开图表前先问自己一句话："我现在是因为有信号，还是因为想交易？"
- [ ] 设置交易日记模板：日期 / 标的 / 方向 / 仓位 / 入场理由 / 止盈止损 / 情绪 1–10 分 / 是否按规则。
- [ ] 每周日晚复盘，把所有交易截图存档。半年后翻回来看，你会震惊于自己的进步。

---

### 7.15 延伸阅读

如果你想深入某个具体工具，下面这些币安学院的原始素材 (本书的取材来源) 值得点开细读：

**K 线与图表形态**
- [K 线图初学者指南](https://academy.binance.com/zh-CN/articles/a-beginners-guide-to-candlestick-charts) → 对应素材 [output/574](../output/574-a-beginners-guide-to-candlestick-charts.md)
- [一文读懂热门 K 线图形态](https://academy.binance.com/zh-CN/articles/how-to-read-the-most-popular-crypto-candlestick-patterns) → [output/310](../output/310-how-to-read-the-most-popular-crypto-candlestick-patterns.md)
- [如何利用锤形 K 线图形态进行交易](https://academy.binance.com/zh-CN/articles/how-to-trade-with-hammer-candlestick-patterns) → [output/395](../output/395-how-to-trade-with-hammer-candlestick-patterns.md)

**支撑、阻力、趋势线**
- [支撑和阻力的基本原理详解](https://academy.binance.com/zh-CN/articles/the-basics-of-support-and-resistance-explained) → [output/553](../output/553-the-basics-of-support-and-resistance-explained.md)
- [趋势线详解](https://academy.binance.com/zh-CN/articles/trend-lines-explained) → [output/601](../output/601-trend-lines-explained.md)
- [道氏理论介绍](https://academy.binance.com/zh-CN/articles/an-introduction-to-the-dow-theory) → [output/581](../output/581-an-introduction-to-the-dow-theory.md)

**移动平均线与金叉死叉**
- [移动平均线的解释](https://academy.binance.com/zh-CN/articles/moving-averages-explained) → [output/670](../output/670-moving-averages-explained.md)
- [四种移动平均线交易策略](https://academy.binance.com/zh-CN/articles/trading-strategies-with-moving-averages) → [output/250](../output/250-trading-strategies-with-moving-averages.md)
- [什么是金叉和死叉](https://academy.binance.com/zh-CN/articles/golden-cross-and-death-cross-explained) → [output/538](../output/538-golden-cross-and-death-cross-explained.md)

**震荡指标**
- [什么是 RSI 指标？](https://academy.binance.com/zh-CN/articles/what-is-the-rsi-indicator) → [output/657](../output/657-what-is-the-rsi-indicator.md)
- [随机相对强弱指数 (Stochastic RSI) 详解](https://academy.binance.com/zh-CN/articles/stochastic-rsi-explained) → [output/626](../output/626-stochastic-rsi-explained.md)
- [布林线指标的解释](https://academy.binance.com/zh-CN/articles/bollinger-bands-explained) → [output/658](../output/658-bollinger-bands-explained.md)
- [一目均衡图 (Ichimoku Cloud) 详解](https://academy.binance.com/zh-CN/articles/ichimoku-clouds-explained) → [output/614](../output/614-ichimoku-clouds-explained.md)
- [《抛物线指标简明指南》](https://academy.binance.com/zh-CN/articles/a-brief-guide-to-the-parabolic-sar-indicator) → [output/592](../output/592-a-brief-guide-to-the-parabolic-sar-indicator.md)
- [技术分析使用的 5 个基本指标](https://academy.binance.com/zh-CN/articles/5-essential-indicators-used-in-technical-analysis) → [output/569](../output/569-5-essential-indicators-used-in-technical-analysis.md)
- [什么是先行指标和滞后指标？](https://academy.binance.com/zh-CN/articles/leading-and-lagging-indicators-explained) → [output/597](../output/597-leading-and-lagging-indicators-explained.md)

**成交量、VWAP、斐波那契**
- [成交量加权平均价格 (VWAP) 详解](https://academy.binance.com/zh-CN/articles/volume-weighted-average-price-vwap-explained) → [output/555](../output/555-volume-weighted-average-price-vwap-explained.md)
- [《斐波那契回调学习指南》](https://academy.binance.com/zh-CN/articles/a-guide-to-mastering-fibonacci-retracement) → [output/566](../output/566-a-guide-to-mastering-fibonacci-retracement.md)

**情绪与策略**
- [什么是加密货币恐惧和贪婪指数？](https://academy.binance.com/zh-CN/articles/what-is-the-crypto-fear-and-greed-index) → [output/452](../output/452-what-is-the-crypto-fear-and-greed-index.md)
- [什么是加密货币市场情绪？](https://academy.binance.com/zh-CN/articles/what-is-crypto-market-sentiment) → [output/460](../output/460-what-is-crypto-market-sentiment.md)
- [加密货币交易策略初学者指南](https://academy.binance.com/zh-CN/articles/a-beginners-guide-to-cryptocurrency-trading-strategies) → [output/547](../output/547-a-beginners-guide-to-cryptocurrency-trading-strategies.md)
- [加密货币日间交易初学者指南](https://academy.binance.com/zh-CN/articles/a-beginners-guide-to-day-trading-cryptocurrency) → [output/543](../output/543-a-beginners-guide-to-day-trading-cryptocurrency.md)
- [一文读懂加密货币波段交易](https://academy.binance.com/zh-CN/articles/a-beginners-guide-to-swing-trading-cryptocurrency) → [output/531](../output/531-a-beginners-guide-to-swing-trading-cryptocurrency.md)
- [什么是超短线交易？](https://academy.binance.com/zh-CN/articles/what-is-scalping-trading-in-cryptocurrency) → [output/526](../output/526-what-is-scalping-trading-in-cryptocurrency.md)

**回溯测试与常见错误**
- [什么是回溯测试？](https://academy.binance.com/zh-CN/articles/what-is-backtesting) → [output/496](../output/496-what-is-backtesting.md)
- [如何对交易策略进行回溯测试](https://academy.binance.com/zh-CN/articles/how-to-backtest-a-trading-strategy) → [output/491](../output/491-how-to-backtest-a-trading-strategy.md)
- [如何在 TradingView 上创建技术分析指标](https://academy.binance.com/zh-CN/articles/how-to-create-ta-indicators-on-tradingview) → [output/524](../output/524-how-to-create-ta-indicators-on-tradingview.md)
- [技术分析 (TA) 中的 7 大常见错误](https://academy.binance.com/zh-CN/articles/7-common-mistakes-in-technical-analysis-ta) → [output/549](../output/549-7-common-mistakes-in-technical-analysis-ta.md)
- [加密货币交易者不可不知的 12 个术语](https://academy.binance.com/zh-CN/articles/12-terms-every-crypto-trader-should-know) → [output/527](../output/527-12-terms-every-crypto-trader-should-know.md)

> **学习路径建议**：先读完 K 线、支撑阻力、均线三组（5 篇）打地基，再学一两个震荡指标，**最后**去碰策略和回测。**反向走（先学策略再补基础）是新手亏钱最快的路径。**

---

## 第八章 投资组合与长期风险管理

![投资组合与风险管理](https://public.bnbstatic.com/static/academy/uploads/b9ab6ae7f5744509a58873b70c9bfb26.png)

### 本章目标

- 区分交易与投资，建立适合长期持有的组合管理框架。
- 学会用风险预算、资产配置、分散、再平衡和 DCA 管理波动。
- 理解加密资产的相关性、流动性、托管、智能合约和监管风险。
- 用案例做一份可执行的长期组合方案，并在熊市、牛市和极端行情中知道该怎么调整。
- 避免过度杠杆、叙事追高、收益幻觉和行为偏差。

### 8.1 读者先要解决的问题

投资和交易是两件事。

交易更像是在一段明确时间里表达一个判断：我认为接下来会上涨、下跌、突破、回踩，失效点在哪里，错了亏多少，对了赚多少。它关心入场点、止损、订单类型、滑点、胜率和盈亏比。

投资则更像是在管理自己的未来：我有多少资产可以承受波动？加密资产在我的全部财富中占多少？哪些仓位是长期信仰，哪些只是阶段性机会？如果市场腰斩，我是被迫卖出，还是还能按计划加仓？它关心生命周期、现金流、风险预算、资产配置、再平衡和纪律。

这一章不教你快速致富，而是教你回答四个更朴素但更重要的问题：

1. **我最多能拿多少钱进入加密市场？**
2. **这些钱应该分成哪些仓位？**
3. **上涨、下跌、横盘时分别怎么做？**
4. **如果连续亏损、平台出事、稳定币脱锚、黑天鹅发生，我还能不能活下来？**

加密市场最残酷的地方不是波动大，而是波动、叙事、杠杆、骗局、流动性和 7×24 小时交易叠在一起，会不断诱导你把长期计划改成临时冲动。组合管理的意义，就是在市场最吵的时候，让你还有一张安静的操作说明书。

### 8.2 核心概念与最小知识包

#### 8.2.1 风险预算：先决定能亏多少，再讨论能赚多少

**风险预算**不是一句“我能承受风险”，而是几个具体数字：

| 问题 | 你要写下的答案 | 示例 |
| --- | --- | --- |
| 总投入上限 | 全部金融资产中最多拿多少进入加密市场 | 10%、20%、30% |
| 最大回撤 | 加密组合从高点最多跌多少还能睡得着 | -30%、-50%、-70% |
| 单个资产上限 | 单一非 BTC/ETH 资产最多占加密组合多少 | 5%、10%、15% |
| 实验仓上限 | Meme、早期项目、空投交互最多占多少 | 3%、5%、10% |
| 流动性底线 | 至少保留多少现金/稳定币应对机会和风险 | 10%、20%、30% |
| 托管上限 | 放在单一交易所或单一协议里的资金最多多少 | 不超过总资产 5% 或加密仓 20% |

很多新手的顺序是反的：先看别人赚了多少，再问自己要不要追；先看到某个项目“有百倍潜力”，再找钱买。正确顺序应该是：先把亏损边界写清楚，再让机会在边界内活动。

一个实用开局是：**只用你愿意承受大幅亏损，甚至最坏情况下归零也不影响生活的钱进入加密市场**。这句话听起来保守，但它会直接决定你在熊市里是不是还能按计划行动。

#### 8.2.2 资产配置：组合先分层，再选币

资产配置是回答“钱放在哪里”的问题。多元化是回答“每一类里面怎么分散”的问题。二者经常被混用，但在执行时要分开。

![资产配置与多元化](https://public.bnbstatic.com/static/academy/uploads/5cefe81b341c40f397b4d4fff9ae071f.png)

图 8-1：资产配置先决定大类比例，多元化再处理每类内部的分散。

对普通读者来说，加密组合可以先拆成五层：

| 层级 | 作用 | 常见资产 | 典型比例 |
| --- | --- | --- | --- |
| 安全垫 | 应对生活、机会、极端行情 | 现金、货币基金、银行存款、低风险传统资产 | 不建议放进加密仓计算 |
| 防守仓 | 降低波动，保留子弹 | 稳定币、法币、部分代币化国债或黄金产品 | 加密仓 10–30% |
| 核心仓 | 承担长期 Beta | BTC、ETH | 加密仓 50–80% |
| 卫星仓 | 捕捉生态和叙事 Alpha | 主流 L1/L2、龙头 DeFi、基础设施、RWA、AI、DePIN 等 | 加密仓 10–30% |
| 实验仓 | 学习和高风险探索 | Meme、早期项目、空投交互、小市值代币 | 加密仓 0–10% |

这里有个非常重要的判断：**持有 20 个高度相关的山寨币，不等于真正分散**。如果 BTC 下跌时它们一起下跌，而且跌得更狠，那么你只是把一个大风险拆成了 20 个名字。

真正有意义的分散至少包括四类：

- **资产类型分散**：BTC、ETH、稳定币、现金、传统资产、RWA 等。
- **叙事分散**：公链、DeFi、基础设施、稳定币、支付、AI、DePIN、RWA 等。
- **流动性分散**：高流动性资产和小仓位低流动性资产分开管理。
- **托管分散**：交易所、冷钱包、热钱包、链上协议不要押在一个点上。

#### 8.2.3 核心、卫星、实验：新手最容易忽略的是“命名”

给仓位命名很重要。因为你一旦把某个 Meme 仓叫作“长期价值投资”，后面就很容易用信仰替代止损；你一旦把 BTC 核心仓当成“短线波段”，又会在一段震荡里被洗出去。

一个清晰的命名方式如下：

```text
全部金融资产
├── 生活安全垫：6-12 个月支出，不进入加密市场
├── 传统资产：股票、债券、现金、保险、养老金等
└── 加密资产
    ├── 防守仓：稳定币/现金，负责流动性
    ├── 核心仓：BTC/ETH，负责长期敞口
    ├── 卫星仓：研究充分的主流项目，负责弹性
    └── 实验仓：高风险探索，负责学习和小概率收益
```

每一层都要有不同规则：

| 仓位 | 买入逻辑 | 卖出逻辑 | 最忌讳 |
| --- | --- | --- | --- |
| 防守仓 | 收入结余、止盈回流、风险降低 | 极端低估、再平衡、应急 | 为了多赚一点收益全放进高风险协议 |
| 核心仓 | 长期定投、周期低位、再平衡买入 | 超配后再平衡、个人资金需求 | 频繁短线操作 |
| 卫星仓 | 研究后分批建仓，有明确叙事和估值假设 | 假设失效、超配、周期过热 | 因为亏损就“升级”为长期持有 |
| 实验仓 | 小额试错、学习生态、参与早期机会 | 到达预设收益或项目风险暴露 | 加仓摊平垃圾项目 |

#### 8.2.4 再平衡：纪律化地高位减仓、低位加仓

再平衡 (Rebalancing) 是定期把偏离目标比例的仓位拉回来。它的好处是让你不用猜顶部和底部，也能被动执行“涨多了减一点，跌多了补一点”。

假设你的目标加密组合是：

| 资产 | 目标比例 |
| --- | ---: |
| BTC | 50% |
| ETH | 25% |
| 主流 Alt / DeFi | 15% |
| 稳定币 | 10% |

牛市一段时间后，组合变成：

| 资产 | 当前比例 | 动作 |
| --- | ---: | --- |
| BTC | 42% | 低于目标，可不动或小幅补 |
| ETH | 22% | 低于目标，可不动或小幅补 |
| 主流 Alt / DeFi | 30% | 明显超配，卖出一部分 |
| 稳定币 | 6% | 低于目标，补回流动性 |

这时你卖出一部分涨幅最大的 Alt，把稳定币补回 10%，不是因为你能预测明天会跌，而是因为**组合风险已经变形**。

常见再平衡规则有三种：

| 规则 | 做法 | 适合谁 |
| --- | --- | --- |
| 固定时间 | 每月、每季度或每半年检查一次 | 大多数长期投资者 |
| 偏离阈值 | 某资产偏离目标比例超过 20% 才调整 | 不想频繁操作的人 |
| 事件驱动 | 大涨、大跌、收入变化、政策变化、个人资金需求时调整 | 有经验的投资者 |

新手建议使用“季度 + 偏离阈值”：每季度检查一次，某类仓位偏离目标比例超过 20% 再操作。这样既不会太懒，也不会把长期组合变成短线交易。

#### 8.2.5 DCA：定投不是为了收益最高，而是为了执行最稳

![平均成本法 DCA](https://public.bnbstatic.com/static/academy/uploads/02df32ad12944facaff3e694c367e147.png)

图 8-2：DCA 的核心不是预测最低点，而是把入场时间分散开。

DCA (Dollar-Cost Averaging，平均成本法) 是指无论价格涨跌，都按固定周期投入固定金额。它不能保证盈利，也不能消除亏损，但它能解决三个现实问题：

1. 大多数人无法准确判断底部。
2. 大多数人一次性买入后，面对下跌会承受很大心理压力。
3. 大多数人越盯盘越容易情绪化。

一个简单的定投计划可以写成这样：

| 项目 | 规则 |
| --- | --- |
| 标的 | BTC 70% + ETH 30% |
| 金额 | 每月收入结余的 20%，或固定 2000 元 |
| 日期 | 每月工资到账后第 2 天 |
| 调整 | 每 6 个月复盘一次，不因短期新闻改变 |
| 暂停条件 | 失业、家庭现金流紧张、重大支出临近 |
| 加码条件 | 市场极端恐慌，且安全垫充足 |

DCA 也可以反过来用于卖出。比如牛市中仓位膨胀太快，你可以设置“分批止盈”：

| 条件 | 动作 |
| --- | --- |
| 加密仓超过全部金融资产 30% | 卖出超出部分的 25%，转回现金/传统资产 |
| 某卫星仓从成本价上涨 3 倍 | 卖出本金，剩余利润仓继续持有 |
| 实验仓上涨 5 倍以上 | 至少回收本金和部分利润 |
| 市场情绪极度狂热且身边新手大量入场 | 停止新增实验仓，增加稳定币比例 |

定投买入解决的是“我怕错过”。分批卖出解决的是“我怕卖飞”。二者本质上都是把情绪拆成制度。

#### 8.2.6 周期思维：把行情放进大背景里

加密市场有自己的内部周期，也会受到宏观周期影响。不要用一个指标解释所有行情，但至少要知道自己处在哪个大环境中。

**内部周期：**

- 比特币减半大约每 4 年一次，会影响矿工收入、市场叙事和长期供给预期。
- 牛市后期通常伴随高杠杆、高融资、高估值、新手涌入和“只涨不跌”的叙事。
- 熊市后期通常伴随项目倒闭、融资枯竭、媒体冷清、优质资产也无人问津。

**宏观周期：**

- 利率上行时，风险资产估值通常承压，因为现金和债券的吸引力上升。
- 通胀高企时，市场会关注央行是否加息、缩表或维持紧缩。
- 流动性宽松时，风险偏好可能回升，但并不代表所有项目都会上涨。

**链上与市场指标：**

| 指标 | 观察点 | 注意事项 |
| --- | --- | --- |
| BTC 市占率 | 资金偏好 BTC 还是 Alt | 市占率上升不一定代表 BTC 大涨，也可能是 Alt 跌得更多 |
| 交易所净流入 | 大量资产进入交易所可能意味着潜在卖压 | 单日数据噪声很大，要看趋势 |
| 稳定币供应和交易所余额 | 风险偏好和可用购买力 | 稳定币也有发行方和脱锚风险 |
| 资金费率 | 多空拥挤程度 | 极端正费率说明多头拥挤，极端负费率说明空头拥挤 |
| 恐惧与贪婪指数 | 市场情绪温度计 | 情绪只能辅助，不是买卖信号 |

周期思维的价值，不是让你精准逃顶抄底，而是避免在熊市末期彻底放弃，也避免在牛市末期把风险预算全部打满。

#### 8.2.7 风险类型：长期组合不只怕下跌

![风险管理](https://public.bnbstatic.com/static/academy/uploads/800356175c614498af2e97a53def5bc7.jpg)

图 8-3：长期风险管理要覆盖价格、流动性、平台、合约、操作和监管。

加密组合至少面对七类风险：

| 风险 | 表现 | 应对 |
| --- | --- | --- |
| 市场风险 | BTC、ETH、Alt 普跌，组合回撤 | 控制总仓位、定投、再平衡、保留稳定币 |
| 流动性风险 | 小币种卖不出去，卖出就砸盘 | 限制小市值仓位，优先选择深度充足资产 |
| 交易对手风险 | 交易所、借贷平台、托管方出问题 | 分散托管，长期资产尽量自托管 |
| 智能合约风险 | DeFi 协议被攻击，LP 或质押资产损失 | 小仓位试用，优先审计和长期运行协议 |
| 稳定币风险 | 稳定币脱锚、储备或监管问题 | 分散稳定币，不把所有防守仓放一个品种 |
| 操作风险 | 转错链、泄露私钥、授权恶意合约 | 小额试转、硬件钱包、撤销授权、地址白名单 |
| 监管和税务风险 | 所在地区政策、申报和平台服务变化 | 记录交易，关注本地法规，必要时咨询专业人士 |

长期投资者最容易低估的是交易对手风险和操作风险。价格下跌还可能涨回来，但私钥泄露、转错地址、平台破产、协议被盗，很多时候没有“等一等就恢复”的机会。

#### 8.2.8 对冲：新手最安全的对冲往往是降低仓位

对冲是用一个反向或低相关仓位抵消潜在损失。专业交易者可能使用期货、期权、永续合约、做空、保护性看跌期权等工具，但这些工具本身也有成本、杠杆、保证金、强平和流动性风险。

对新手来说，更稳妥的对冲通常只有三种：

1. **降低总仓位**：卖出一部分高风险资产，回到目标配置。
2. **提高现金/稳定币比例**：保留机会资金，减少净敞口。
3. **减少相关性过高的 Alt**：不要让组合看起来分散，实际全在同一个风险上。

衍生品对冲可以学习，但不要一上来就实战。很多人本来只是想“保护现货”，最后却因为杠杆和强平把长期仓位也赔进去。

#### 8.2.9 行为偏差：组合最大的敌人通常不是市场，而是自己

![行为偏差](https://public.bnbstatic.com/static/academy/uploads/457bd800a2f148f89a886da7d8aef176.png)

图 8-4：长期组合需要管理人性，而不只是管理资产。

常见行为偏差会悄悄侵蚀收益：

| 偏差 | 典型表现 | 修正动作 |
| --- | --- | --- |
| 过度自信 | 连续赚钱后加杠杆、满仓、扩大实验仓 | 固定仓位上限，盈利后先再平衡 |
| 损失厌恶 | 亏损项目不愿卖，盈利项目过早卖 | 写清买入假设，假设失效就处理 |
| 锚定效应 | 总盯着成本价或历史高点 | 重新评估未来风险回报，而非过去价格 |
| FOMO | 看见暴涨就追，越涨越买 | 延迟 24 小时，先写买入理由和退出条件 |
| 从众心理 | 朋友群、KOL、热搜都在喊就买 | 独立做项目研究，不懂就不买 |
| 确认偏误 | 只看支持自己观点的信息 | 主动找反方观点和风险案例 |

一个实用办法是为每次买入写 5 行记录：

```text
资产：
仓位类型：核心 / 卫星 / 实验
买入理由：
假设失效条件：
计划卖出或再平衡条件：
```

只要写不出来，就先别买。很多冲动交易经不起这 5 行字。

### 8.3 三套参考组合：保守、均衡、进取

下面的比例不是投资建议，而是帮助你理解风险结构。真正执行前，要根据年龄、收入稳定性、负债、家庭责任、所在地区监管和个人经验调整。

#### 8.3.1 保守型：先活下来，再学习

适合：刚入门、收入不稳定、家庭责任较重、无法接受大幅回撤的人。

| 层级 | 占全部金融资产 | 占加密仓 |
| --- | ---: | ---: |
| 生活安全垫和现金 | 30–50% | 不计入 |
| 传统资产 | 45–65% | 不计入 |
| 加密资产总仓 | 5–10% | 100% |
| BTC | 3–6% | 50–60% |
| ETH | 1.5–3% | 25–30% |
| 稳定币 | 0.5–2% | 10–20% |
| 实验仓 | 0–0.5% | 0–5% |

执行重点：先完成钱包、安全、定投和记录。不要急着买很多新项目，更不要碰杠杆。

#### 8.3.2 均衡型：长期核心 + 小比例弹性

适合：有稳定现金流，能接受加密仓 50% 以上回撤，愿意长期学习的人。

| 层级 | 占全部金融资产 | 占加密仓 |
| --- | ---: | ---: |
| 生活安全垫和现金 | 15–30% | 不计入 |
| 传统资产 | 50–70% | 不计入 |
| 加密资产总仓 | 15–30% | 100% |
| BTC | 7.5–15% | 45–55% |
| ETH | 4–9% | 25–30% |
| 稳定币 | 1.5–6% | 10–20% |
| 主流 Alt / DeFi | 1.5–6% | 10–20% |
| 实验仓 | 0–1.5% | 0–5% |

执行重点：季度再平衡，核心仓定投，卫星仓必须有研究记录。单一卫星资产不要超过加密仓 5–8%。

#### 8.3.3 进取型：高波动，但必须有硬规则

适合：年轻、收入稳定、无高额负债、已经历至少一轮完整牛熊、能承受大幅波动的人。

| 层级 | 占全部金融资产 | 占加密仓 |
| --- | ---: | ---: |
| 生活安全垫和现金 | 10–20% | 不计入 |
| 传统资产 | 40–60% | 不计入 |
| 加密资产总仓 | 30–50% | 100% |
| BTC | 12–25% | 40–50% |
| ETH | 7.5–15% | 20–30% |
| 稳定币 | 3–10% | 10–20% |
| 主流 Alt / DeFi | 6–15% | 15–30% |
| 实验仓 | 0–5% | 0–10% |

执行重点：必须有分批止盈、回撤应对和托管分散方案。进取不等于混乱，高风险组合反而更需要纪律。

### 8.4 一个组合管理的完整案例

**画像**：35 岁职场人，每月可存 5000 元，总可支配金融资产 30 万元，风险承受中等。

#### 8.4.1 第一步：先看全部资产，而不是只看币

| 项目 | 金额 | 备注 |
| --- | ---: | --- |
| 生活安全垫 | 6 万 | 约 6–12 个月必要支出，不能投资高风险资产 |
| 传统金融资产 | 15 万 | 股票、债券、基金、现金等 |
| 可配置加密资产 | 9 万 | 占全部金融资产 30% |
| 每月新增现金流 | 5000 元 | 其中 2000–3000 元可用于长期定投 |

这个人不是“有 30 万可以买币”，而是“在保留生活安全垫和传统资产后，最多拿 9 万承受加密市场波动”。

#### 8.4.2 第二步：设定目标比例

| 仓位 | 比例 | 金额 | 规则 |
| --- | ---: | ---: | --- |
| BTC 核心仓 | 50% | 4.5 万 | 长期持有 + 定投，不做短线 |
| ETH 核心仓 | 25% | 2.25 万 | 长期持有 + 定投，关注生态和升级 |
| 稳定币防守仓 | 15% | 1.35 万 | 用于回撤加仓、机会和应急 |
| 主流 L2/DeFi/RWA 卫星仓 | 7% | 0.63 万 | 只买研究过的龙头或高确定性方向 |
| 实验仓 | 3% | 0.27 万 | 空投、Meme、小项目，亏光不影响生活 |

为什么把原来的“主流 L2/DeFi 15% + 实验 5%”调低？因为对中等风险承受者来说，真正长期稳定的基础应该是 BTC/ETH + 防守仓。卫星和实验仓可以给组合弹性，但不应该决定生死。

#### 8.4.3 第三步：制定月度执行规则

每月可存 5000 元，不要全部自动打进市场。可以这样分：

| 去向 | 金额 | 说明 |
| --- | ---: | --- |
| 生活和传统资产补充 | 2000 元 | 保持安全垫和传统资产比例 |
| BTC 定投 | 1500 元 | 固定日期执行 |
| ETH 定投 | 800 元 | 固定日期执行 |
| 稳定币或现金 | 500 元 | 作为未来回撤加仓资金 |
| 学习/实验预算 | 200 元 | 小额体验生态，不追求盈利 |

定投不看短期价格，但可以设置“极端行情规则”：

| 情况 | 动作 |
| --- | --- |
| BTC 从阶段高点回撤 30% | 不改变定投，暂停实验仓 |
| BTC 从阶段高点回撤 50% | 若收入稳定，可把稳定币的 20–30% 分批加到 BTC/ETH |
| BTC 从阶段高点回撤 70% | 只在安全垫充足时继续定投，不借钱、不加杠杆 |
| 加密仓涨到全部金融资产 45% 以上 | 卖出超出部分的一部分，回到目标比例 |

#### 8.4.4 第四步：季度再平衡示例

假设 6 个月后，市场上涨，9 万加密仓变成 14 万：

| 仓位 | 目标比例 | 当前金额 | 当前比例 | 动作 |
| --- | ---: | ---: | ---: | --- |
| BTC | 50% | 6 万 | 42.9% | 可不动 |
| ETH | 25% | 3 万 | 21.4% | 可不动 |
| 稳定币 | 15% | 1 万 | 7.1% | 需要补充 |
| 卫星仓 | 7% | 3 万 | 21.4% | 明显超配，卖出一部分 |
| 实验仓 | 3% | 1 万 | 7.1% | 超配，回收本金和部分利润 |

再平衡动作可以是：

- 卖出卫星仓 1.5 万。
- 卖出实验仓 0.5 万。
- 其中 1.5 万转为稳定币，0.5 万转回传统资产或现金。

这一步很容易让人难受，因为卖出的往往是涨得最猛的资产。但组合管理的核心不是让你在每个局部都赚到极致，而是防止一次叙事反转把前面的收益全部吐回去。

#### 8.4.5 第五步：写年度复盘

每年固定一天，写一页复盘：

```text
今年加密组合收益率：
最大回撤：
收益最大来源：
亏损最大来源：
最糟糕的一笔决策：
最有纪律的一笔决策：
下一年目标比例：
下一年必须避免的行为：
```

长期投资者不需要每天都有观点，但必须定期检查自己的系统是否还健康。

这样的方案不"酷"，但熬过 4 年可能比 99% 频繁交易的人好。

### 8.5 常见误区与风险提醒

#### 误区 1：把生活费或借贷资金投进来

这会让每一次波动都变成生存问题。只要市场跌 30%，你就可能被迫卖出，甚至影响家庭和工作。投资最怕的不是亏损，而是**在错误的时间被迫行动**。

#### 误区 2：以为买很多币就是分散

如果你持有的 15 个币都依赖同一个生态、同一种流动性、同一批风险偏好资金，那么它们在极端行情里可能一起下跌。真正的分散要看相关性、流动性和风险来源。

#### 误区 3：把收益率当成安全性

年化 20% 的稳定币收益、超高 APY 的流动性挖矿、复杂的结构化产品，都不是“免费午餐”。收益越高，越要问三件事：

1. 钱从哪里来？
2. 谁承担亏损？
3. 最坏情况下我会损失多少？

#### 误区 4：在牛市里不断提高风险承受能力

很多人并不是风险承受能力变强了，只是账户在上涨时误以为自己很勇敢。真正的风险承受能力，要在下跌 50%、连续几个月没有反弹、社交媒体一片悲观时才看得出来。

#### 误区 5：把杠杆当成加速器

杠杆会放大收益，也会放大错误。长期组合管理里，杠杆尤其危险，因为它会把“可承受的波动”变成“不可逆的强制平仓”。如果你还不能稳定管理现货组合，就不要用杠杆管理长期资产。

#### 误区 6：忽视托管和税务

平台风险、钱包风险、税务记录都不是“等赚大了再说”的事情。越早建立记录习惯，后面越轻松。至少要保存：买入时间、卖出时间、资产、数量、价格、手续费、交易平台或钱包地址、用途说明。

#### 误区 7：觉得自己能在顶部全部卖出、底部全部买回

这种想法很诱人，也很危险。更现实的做法是用目标比例、分批止盈、DCA 和再平衡来替代“神级择时”。你不需要卖在最高点，只需要在周期过热时把风险降下来。

### 8.6 压力测试：先在纸上经历一次熊市

真正的组合计划，必须经得起压力测试。下面这张表建议你直接填一遍。

| 情景 | 组合变化 | 你现在写下的动作 |
| --- | --- | --- |
| BTC 跌 30%，Alt 跌 50% | 加密仓明显缩水 | 是否继续定投？是否暂停实验仓？ |
| BTC 跌 60%，市场持续低迷 12 个月 | 组合和情绪都承压 | 是否还有安全垫？是否会被迫卖出？ |
| 某稳定币短暂脱锚 5% | 防守仓也出现风险 | 是否分散稳定币？是否准备换回法币？ |
| 使用的交易所暂停提现 | 交易对手风险暴露 | 是否有冷钱包和其他出入金路径？ |
| 某 DeFi 协议被攻击 | 链上收益仓损失 | 仓位是否足够小？是否影响核心资产？ |
| 牛市中加密仓翻倍 | 风险占比过高 | 是否按规则止盈和再平衡？ |

写压力测试时，越具体越好。不要写“到时候看情况”，因为真正到时候，情绪会替你做决定。

### 8.7 检查清单与练习

#### 今日必做

- [ ] 写下你的风险预算：单日最大亏损、单次最大亏损、总计最大亏损。
- [ ] 列出当前所有持仓：资产、数量、成本价、当前价、所在平台或钱包。
- [ ] 计算加密资产占全部金融资产的比例。
- [ ] 标记每个仓位：核心、卫星、实验、防守，不能标记的先暂停加仓。
- [ ] 设一个季度再平衡日历。

#### 本周练习

- [ ] 做一次压力测试：如果 BTC 从当前价格跌 60%，你会做什么？写下具体动作。
- [ ] 为每个非 BTC/ETH 仓位写下买入理由和假设失效条件。
- [ ] 检查稳定币是否过度集中在单一品种或单一平台。
- [ ] 检查长期资产是否有自托管方案，热钱包和冷钱包是否分工清楚。

#### 每月复盘

- [ ] 本月是否按计划定投？
- [ ] 是否有冲动买入？原因是什么？
- [ ] 是否有仓位超过上限？
- [ ] 是否有收益来自运气而非计划？
- [ ] 是否有亏损来自违反规则？

#### 每年复盘

- [ ] 更新风险承受能力：收入、负债、家庭责任是否变化？
- [ ] 更新目标配置：加密仓比例是否过高或过低？
- [ ] 汇总税务和交易记录。
- [ ] 删除长期无人维护、流动性变差或假设失效的资产。
- [ ] 写下下一轮周期最想避免的一个错误。

### 8.8 延伸阅读与引用

#### 来自 output 的本章核心素材

- [如何构建均衡的加密货币投资组合](../output/451-how-to-build-a-well-balanced-crypto-portfolio.md) → 本章资产分层、组合追踪和再平衡的主要参考。
- [资产配置和多元化详解](../output/578-asset-allocation-and-diversification-explained.md) → 区分资产配置与多元化，理解现代投资组合理论。
- [风险管理入门指南](../output/594-a-beginners-guide-to-understanding-risk-management.md) → 风险识别、风险评估、1% 法则、稳定币和系统性风险。
- [五大风险管理策略](../output/363-five-risk-management-strategies.md) → 仓位规模、止损止盈、多元化、托管风险和运营安全。
- [一文读懂平均成本法 DCA](../output/551-dollar-cost-averaging-dca-explained.md) → 定投的适用场景、优势和局限。
- [加密货币领域的对冲工作原理及七大对冲策略须知](../output/302-how-hedging-works-in-crypto-and-seven-hedging-strategies-you-need-to-know.md) → 期货、期权、稳定币、多元化等对冲方式。
- [交易者的 5 种退场策略](../output/185-5-exit-strategies-for-traders.md) → 止损、止盈、跟踪委托和 DCA 式退出。
- [什么是行为偏差？如何避免行为偏差？](../output/357-what-are-behavioral-biases-and-how-can-avoid-them.md) → 过度自信、避免遗憾、注意力有限和追逐潮流。
- [金融风险详解](../output/595-financial-risk-explained.md) → 市场风险、流动性风险、借贷风险、运营风险、合规风险和系统性风险。
- [如何计算投资回报率 ROI](../output/510-how-to-calculate-return-on-investment-roi.md) → 组合收益率计算的基础。
- [如何计算交易仓位大小](../output/556-how-to-calculate-position-size-in-trading.md) → 把风险金额和仓位规模区分开。
- [什么是风险回报率及其使用方法](../output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md) → 用盈亏比过滤不值得做的交易。

#### 宏观与周期

- [什么是 M2，它与市场有何关系](../output/146-what-is-m2-and-how-it-relates-to-markets.md)
- [什么是量化宽松 QE](../output/632-what-is-quantitative-easing.md)
- [什么是量化紧缩 QT](../output/226-what-is-quantitative-tightening-qt.md)
- [什么是通货膨胀](../output/681-what-is-inflation.md)
- [利率详解](../output/487-interest-rates-explained.md)
- [什么是 CPI](../output/215-what-is-the-consumer-price-index-cpi.md)
- [什么是 PCE 平减指数](../output/219-what-is-the-pce-deflator-and-how-does-it-work.md)
- [市场周期心理学](../output/596-the-psychology-of-market-cycles.md)
- [什么是牛市](../output/536-what-is-a-bull-market.md)
- [什么是熊市](../output/532-what-is-a-bear-market.md)

#### 稳定币、RWA 与防守仓

- [什么是稳定币](../output/315-what-is-a-stablecoin.md)
- [什么是 Tether USDT](../output/490-what-is-tether-usdt.md)
- [什么是 USDC](../output/169-what-is-usdc.md)
- [稳定币为什么会脱锚](../output/285-why-do-stablecoins-depeg.md)
- [什么是代币化黄金](../output/024-what-is-tokenized-gold.md)
- [什么是现实世界资产 RWA](../output/281-what-are-real-world-assets-rwa-in-defi-and-crypto.md)

#### 外部参考

- [Investor.gov: Asset Allocation, Diversification, and Rebalancing](https://www.investor.gov/index.php/introduction-investing/getting-started/asset-allocation) → 资产配置、分散和再平衡的投资者教育资料。
- [SEC Investor Alert: Exercise Caution with Crypto Asset Securities](https://www.investor.gov/index.php/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/crypto-asset-securities) → 美国 SEC 投资者教育办公室对加密资产证券风险的提醒。
- [BlackRock: Sizing bitcoin in portfolios](https://www.blackrock.com/institutions/en-us/insights/thought-leadership/portfolio-design/sizing-bitcoin-in-portfolios) → 2024 年 BlackRock 关于比特币在多资产组合中仓位大小和风险贡献的研究观点。
- [FRED: Federal Funds Effective Rate](https://fred.stlouisfed.org/series/FEDFUNDS) → 观察美国利率周期。
- [FRED: Consumer Price Index for All Urban Consumers](https://fred.stlouisfed.org/series/CPIAUCSL) → 观察美国 CPI 通胀数据。
- [FRED: M2 Money Stock](https://fred.stlouisfed.org/series/M2SL) → 观察美元流动性变化。

---

## 第九章 DeFi：无需许可的链上金融

### 本章目标
- 理解 DeFi 和传统金融、中心化交易平台的本质差异
- 解释 DEX、AMM、流动性池、借贷、稳定币、收益聚合、闪电贷、预言机与 MEV
- 能看懂一笔 DeFi 收益来自哪里，以及风险藏在哪里
- 用一个小额 LP 操作案例，建立进入、监控、退出的完整流程
- 形成参与任何 DeFi 协议前的风险检查清单

### 9.1 读者先要解决的问题

DeFi (Decentralized Finance，去中心化金融) 的承诺是：**把银行、券商、交易所、做市商、借贷平台拆开，变成一组公开、可组合、任何人都能调用的链上协议。**

这个承诺有一半非常迷人：

- 你不需要开户经理，也不需要营业时间，钱包连接协议就能交易、借贷、提供流动性。
- 资产在自己的钱包里，交易规则写在智能合约里，链上记录公开可查。
- 协议之间可以像乐高一样叠起来：Aave 的存款凭证可以进入收益策略，稳定币可以进入交易池，LP 代币又可以质押到 Farm。

但另一半也必须冷静看清：

- 代码不是神，智能合约会有漏洞，审计也不能保证绝对安全。
- 价格需要预言机输入，预言机失真会让借贷和清算系统一起出问题。
- 收益常常来自代币增发、补贴和杠杆循环，不等于真实现金流。
- 一旦签错授权、点错钓鱼网站、进错池子，很多损失无法找客服追回。

所以本章不是教你“哪里年化最高”，而是教你看懂 DeFi 的机器怎么转：钱从哪里来、收益从哪里来、风险在哪里爆。

![DeFi 与 DEX 示意图](https://public.bnbstatic.com/static/academy/uploads/adf7cd93fbcb469d83b0c7302062660b.jpg)

图 9-1：DEX 把“撮合、托管、结算”拆成钱包、智能合约和链上交易。图片素材来自 [output/517-what-is-a-decentralized-exchange-dex.md](../output/517-what-is-a-decentralized-exchange-dex.md)。

### 9.2 DeFi 与 CEX、TradFi 到底差在哪里

先把三个词分清：

| 类型 | 你把钱交给谁 | 交易在哪里结算 | 信任对象 | 优点 | 典型风险 |
| --- | --- | --- | --- | --- | --- |
| TradFi 传统金融 | 银行、券商、基金公司 | 金融机构内部系统 | 法律、牌照、机构信用 | 监管成熟、纠纷处理机制完善 | 门槛、地域限制、信息不透明 |
| CEX 中心化交易所 | 交易所 | 交易所账本，提现才上链 | 平台信用和风控 | 体验好、流动性强、产品丰富 | 托管风险、账户冻结、平台风险 |
| DeFi 去中心化金融 | 自己的钱包或智能合约 | 区块链 | 代码、经济机制、预言机和治理 | 自托管、公开透明、无需许可 | 合约漏洞、钓鱼、流动性、清算、治理风险 |

很多新手会以为 DeFi 的重点是“去掉中间商”。更准确地说，DeFi 是把中间商的功能拆成几层：

```text
用户钱包
  ↓ 签名授权
智能合约
  ↓ 调用
流动性池 / 借贷池 / 稳定币金库
  ↓ 依赖
预言机、清算机器人、治理合约、前端界面
  ↓ 结算
区块链网络
```

这也是 DeFi 的两面性：它把规则变透明了，但也把很多过去由银行、券商、交易所承担的判断责任转移给了用户。

### 9.3 DeFi 的七块核心积木

#### ① DEX：从“人和人撮合”到“人和池子交易”

去中心化交易平台 (DEX) 允许用户直接从钱包发起交易，不需要把资产先充值到平台。早期 DEX 尝试过链上订单簿，但每次挂单、撤单、成交都要上链，成本很高。后来主流路线转向 AMM。

DEX 里最重要的变化是：你不一定是在和另一个人交易，而是在和一个**资金池**交易。

#### ② AMM：自动报价的数学机器

自动做市商 (AMM) 用公式为资产报价。经典公式是 Uniswap 普及的：

```text
x * y = k
```

这里的 `x` 和 `y` 是池子里两种代币的数量，`k` 是常数。假设池子里有 100 BNB 和 60,000 USDT，那么粗略价格就是 1 BNB = 600 USDT。你用 USDT 买 BNB 时，池子里的 USDT 增加、BNB 减少，价格会自动变贵。买得越多，价格偏离越大，这就是滑点。

![AMM 与流动性池](https://public.bnbstatic.com/static/academy/uploads/45a4866a74c648beb70a59ae544b3714.jpg)

图 9-2：AMM 让资金池自动报价，任何人都能成为 LP。图片素材来自 [output/515-what-is-an-automated-market-maker-amm.md](../output/515-what-is-an-automated-market-maker-amm.md)。

AMM 的价值在于：不需要专业做市商，任何人都可以往池子里放资产，帮助别人交易并赚手续费。代价是：LP 要承担无常损失、合约风险和资金利用效率问题。

现代 AMM 已经不止 `x * y = k`：

| 类型 | 代表 | 适合什么资产 | 特点 |
| --- | --- | --- | --- |
| 恒定乘积 | Uniswap v2、PancakeSwap 早期池 | 波动较大的双资产 | 简单、通用、滑点随交易规模上升 |
| 稳定兑换曲线 | Curve | USDT/USDC/DAI、stETH/ETH 等相近资产 | 低滑点，但脱钩时风险会突然放大 |
| 集中式流动性 | Uniswap v3/v4 | 活跃交易对 | LP 把资金放在特定价格区间，收益可能更高，管理难度也更高 |
| Hooks / 自定义池 | Uniswap v4 等 | 高级策略 | 可加入动态费用、限价单、自定义预言机等逻辑 |

Uniswap v4 的 Hooks 可以理解为“给流动性池装插件”：开发者能在创建池、添加流动性、Swap 前后插入自定义逻辑。好处是创新空间变大，坏处是每个 Hook 都可能引入新的合约风险。

#### ③ 流动性池与 LP 代币：你在池子里的存款凭证

流动性池 (Liquidity Pool) 是锁在智能合约里的一组资产。你往池子里按比例存入两种资产，例如 500 美元 BNB + 500 美元 USDT，就会获得 LP 代币。LP 代币代表你在池子里的份额。

LP 的收益通常来自三部分：

1. **交易手续费**：别人经过这个池子交易，手续费按份额分给 LP。
2. **代币奖励**：协议为了吸引流动性，额外发治理代币。
3. **外部激励**：项目方、生态基金或活动补贴。

关键问题是：**手续费是真收入，代币奖励不一定是真收入。** 如果奖励来自持续增发，APY 看起来很高，但代币价格可能一路下跌。

#### ④ 借贷协议：超额抵押的链上当铺

Aave、Compound、Venus、Maker/Sky 等借贷协议，本质上是链上的资金市场。存款人把资产放入借贷池，借款人抵押资产后借出其他资产。

DeFi 借贷一般不是“信用贷款”，而是**超额抵押贷款**。你可能抵押 10,000 美元 ETH，只借出 5,000 美元稳定币。为什么要这么麻烦？常见原因有三种：

- 不想卖出 ETH，但短期需要稳定币流动性。
- 想做杠杆，例如抵押 ETH 借 USDC 再买 ETH。
- 想在不同协议之间做收益策略。

借贷协议最重要的指标是健康因子 (Health Factor) 或类似风险指标。以 Aave 为例，健康因子低于 1 就有清算风险。抵押品价格下跌、借出资产价格上涨、利息累积，都可能让仓位接近清算线。

#### ⑤ 稳定币：DeFi 的计价单位和润滑剂

稳定币是 DeFi 的基础货币。没有稳定币，绝大多数借贷、LP、衍生品和收益策略都很难运转。

常见稳定币可以分为：

| 类型 | 代表 | 稳定来源 | 主要风险 |
| --- | --- | --- | --- |
| 法币抵押 | USDT、USDC、FDUSD | 银行存款、短债、现金等储备 | 发行方信用、监管、储备透明度 |
| 加密资产超额抵押 | DAI、USDS 等 | ETH、WBTC、稳定币、RWA 等抵押品 | 抵押品波动、清算、治理参数 |
| 商品抵押 | PAXG 等 | 黄金等实物资产 | 托管、赎回、监管 |
| 算法稳定币 | UST 是典型失败案例 | 供需调节和套利机制 | 死亡螺旋、信心崩塌、流动性枯竭 |

稳定币不是“没有风险的美元”。2022 年 UST 崩盘、2023 年 USDC 因硅谷银行事件短暂脱钩，都说明稳定币的核心不是名字里有“stable”，而是储备、赎回、透明度和市场信心。

![稳定币与脱钩风险](https://public.bnbstatic.com/static/academy/uploads/64498a4838d94398b5db7689636444e8.png)

图 9-3：稳定币是 DeFi 的底层流动性，但脱钩会把风险传导到借贷、LP 和收益策略。图片素材来自 [output/315-what-is-a-stablecoin.md](../output/315-what-is-a-stablecoin.md)。

#### ⑥ 收益聚合与流动性挖矿：APY 背后的真实来源

流动性挖矿 (Yield Farming) 是把资产存入协议来赚收益。收益聚合器会帮用户在多个池子、多个协议之间自动寻找更高收益。

但看到 APY 时，先问四个问题：

1. 收益是手续费、借贷利息，还是新发代币？
2. 奖励代币有没有持续买盘，还是挖出来就被卖？
3. APY 是 APR 还是 APY？有没有假设自动复投？
4. 策略有没有叠杠杆、跨协议、跨链桥或再质押？

一个简单判断方法是看**真实收益 (Real Yield)**：协议收入能不能覆盖奖励。如果协议一个月收入 50 万美元，却发了 200 万美元等值代币奖励，所谓高收益大概率靠增发撑着。

#### ⑦ 闪电贷、预言机与 MEV：DeFi 的高级齿轮

闪电贷允许用户在同一笔交易中借入、使用、归还资产，不需要抵押。它可以用于套利、清算、抵押品置换，也常被攻击者用于放大操纵价格的能力。

预言机负责把链下价格、利率、指数等数据带到链上。借贷协议需要它判断抵押品价值，衍生品协议需要它结算盈亏。预言机如果被操纵，合约会“认真地执行错误答案”。

MEV (Maximal Extractable Value，最大可提取价值) 来自交易排序。区块构建者、验证者或搜索者可以通过套利、抢跑、三明治攻击、清算抢先等方式提取价值。对普通用户来说，MEV 最直观的影响是：大额 Swap 可能遭遇更高滑点和更差成交价。

### 9.4 一张图看懂 DeFi 资金流

```text
用户 A：用钱包签名
  ↓
DEX Router：寻找交易路径
  ↓
USDT/BNB 池：执行兑换
  ↓
LP：获得手续费
  ↓
套利机器人：把池内价格拉回市场价
  ↓
预言机：给借贷协议提供参考价格
  ↓
借贷协议：判断抵押率和清算线
  ↓
清算机器人：处理危险仓位
```

DeFi 看似是一个个独立网页，实际是很多合约互相调用的网络。你在前端点一次 Swap，背后可能经过 Router、多个资金池、授权合约、价格检查、滑点保护、钱包签名和链上确认。理解这一点，才会知道为什么“点一个按钮”并不简单。

### 9.5 关键指标：看 DeFi 项目不要只看 APY

参与 DeFi 前，至少看这些指标：

| 指标 | 看什么 | 为什么重要 |
| --- | --- | --- |
| TVL | 协议锁仓总价值 | 反映资金规模，但不能单独代表安全 |
| 交易量 / 借贷量 | 是否有真实使用 | 只有 TVL 没有使用，收益可能靠补贴 |
| 协议收入 | 手续费、利差、清算费等 | 判断收益是否可持续 |
| 代币释放 | 团队、投资人、生态奖励解锁 | 大额解锁可能形成卖压 |
| 审计与漏洞赏金 | 谁审计、审计后是否改代码 | 审计不是免死金牌，但没有审计更危险 |
| 多签与权限 | 谁能升级合约、暂停协议、改参数 | “去中心化”常常停在宣传页 |
| 前端与合约地址 | 是否来自官方渠道 | 钓鱼前端是最常见损失来源之一 |

工具上，可以用 DeFiLlama 看 TVL、收入和分类，用 Token Terminal 看协议收入，用 Dune 看自定义链上数据，用 Etherscan/BscScan/Solscan 查合约和交易。

### 9.6 无常损失：LP 最容易被低估的成本

无常损失 (Impermanent Loss) 指的是：你把两种资产放进 AMM 池后，如果两者价格比例发生变化，你取出来的资产组合可能不如“原地持有”划算。

举个简化例子：

1. 你存入 1 BNB + 600 USDT，当时 1 BNB = 600 USDT，总价值 1,200 美元。
2. 后来 BNB 涨到 1,200 USDT。
3. 池子会被套利者不断交易，直到池内价格接近市场价。
4. 你取出时，拿到的 BNB 数量会减少、USDT 数量会增加。
5. 你的美元价值可能上涨，但可能低于“什么都不做，只持有 1 BNB + 600 USDT”的结果。

这就是 LP 的真实逻辑：**你用承担价格偏离风险，换取手续费收入。**

不同池子的无常损失风险不同：

| 池子类型 | 无常损失风险 | 说明 |
| --- | --- | --- |
| USDT/USDC | 较低 | 两者价格接近，但有脱钩风险 |
| ETH/stETH | 中低 | 同类资产，风险来自流动性质押代币折价 |
| BNB/USDT | 中高 | BNB 波动越大，无常损失越明显 |
| 新币/稳定币 | 很高 | 新币暴涨暴跌都会让 LP 承担巨大偏离 |
| 高波动双币 | 很高 | 两边都波动，收益很难预测 |

不要被“年化 80%”直接打动。你真正应该估算的是：

```text
预期净收益 = 手续费收入 + 代币奖励 - 无常损失 - Gas - 滑点 - 税费 - 时间成本
```

如果算完还看不懂，就说明这个池子不适合你。

### 9.7 借贷协议：别把“不会爆仓”当默认状态

DeFi 借贷看起来像银行存贷，实际更像实时清算的抵押品系统。

假设你在 Aave 抵押 10,000 美元 ETH，借出 5,000 美元 USDC。如果 ETH 下跌 35%，抵押品价值变成 6,500 美元，你的安全垫会迅速变薄。协议不会打电话提醒你，也不会给你“宽限期”。一旦健康因子低于清算线，清算机器人会立刻行动。

借贷前至少知道这些词：

| 术语 | 含义 |
| --- | --- |
| Collateral 抵押品 | 你放入协议、用来担保贷款的资产 |
| LTV 贷款价值比 | 最多能借多少，通常低于抵押品价值 |
| Liquidation Threshold 清算阈值 | 抵押品跌到什么程度会触发清算 |
| Health Factor 健康因子 | 借贷仓位安全程度，低于 1 通常有清算风险 |
| Liquidation Bonus 清算奖励 | 清算者获得的折价收益，本质由被清算者承担 |

新手最好只做两类操作：一是存入稳定币赚低风险借贷利息；二是用极小金额体验抵押和还款流程。不要一开始就做循环借贷、杠杆挖矿、跨协议套娃。

### 9.8 稳定币：选择池子前先看“稳定”的来源

稳定币池经常给人一种“很稳”的错觉。实际上，稳定币风险分几层：

- **发行方风险**：储备是否充足，是否有独立审计，是否能赎回。
- **银行和托管风险**：储备存在什么机构，是否被监管或冻结。
- **链上封装风险**：你拿到的是原生 USDC，还是某个桥发行的 USDC.e？
- **池子结构风险**：池子里某个稳定币被大量抛售，可能说明市场正在逃离它。
- **监管风险**：发行方可能因监管要求冻结地址或限制服务。

稳定币池也要小额测试。尤其跨链后看到“USDC”“USDT”这类名字，先确认合约地址、发行方和主要流动性在哪里。

### 9.9 收益的三种颜色：绿色、黄色、红色

为了降低理解难度，可以把 DeFi 收益分成三种颜色：

| 颜色 | 收益来源 | 例子 | 判断 |
| --- | --- | --- | --- |
| 绿色 | 真实使用产生的费用或利息 | DEX 手续费、借贷利息、RWA 收益 | 相对健康，但仍有合约和市场风险 |
| 黄色 | 协议补贴和代币激励 | Farm 发治理代币 | 可以参与，但要看释放、卖压和持续性 |
| 红色 | 新人资金补老人、循环杠杆、不可解释高 APY | “稳定年化 500%” | 默认危险，先假设不可持续 |

很多项目会把三种颜色混在一起展示成一个 APY。你要做的是拆开它：

```text
总 APY 38%
  = 手续费 6%
  + 借贷利息 4%
  + 治理代币奖励 23%
  + 活动补贴 5%
```

拆开后，你就会知道哪部分可能留下，哪部分随时消失。

### 9.10 实操案例：在 PancakeSwap 做一次小额 USDT/BNB LP

这个案例只用于学习流程，不构成投资建议。新手第一次做 LP，金额应小到“全部亏掉也不影响心情”。

#### 第一步：准备资产

你需要：

- 一个已备份助记词的钱包。
- 少量 BNB 用作 Gas。
- 等值的 BNB 和 USDT，例如 20 美元 BNB + 20 美元 USDT。
- 官方网址书签，避免搜索广告钓鱼。

#### 第二步：进入官方前端并连接钱包

从官方文档、官方 X、CoinGecko/CoinMarketCap 项目页等多个渠道交叉验证网址。第一次进入后保存书签，以后只从书签打开。

连接钱包时，确认网络是 BNB Smart Chain，确认连接的网站域名正确。

#### 第三步：选择交易对和金额

进入 Liquidity / Add Liquidity，选择 BNB-USDT。输入一边金额后，系统会自动匹配另一边金额。

这一步重点看三件事：

- 池子 TVL 是否足够大。
- 近期交易量是否真实。
- 你添加的是不是主流池，而不是假代币池。

#### 第四步：授权和确认

首次使用 USDT 时，前端会要求 Approve。这里建议选择**精确额度**，不要给 Unlimited 授权。授权后再确认添加流动性。

交易确认后，你会收到 LP 代币。它是你在池子里的份额凭证，不要随便转给陌生合约。

#### 第五步：是否质押 Farm

有些池子可以把 LP 代币继续质押到 Farm，获得 CAKE 或其他奖励。注意：这会多一层合约风险。LP 放在钱包里和 LP 再质押到 Farm，是两种风险。

#### 第六步：记录进入价格

建立一条简单记录：

| 项目 | 记录 |
| --- | --- |
| 日期 | 例如 2026-04-25 |
| 池子 | BNB-USDT |
| 投入 | 20 USDT + 等值 BNB |
| BNB 价格 | ___ |
| 预计 APR | ___ |
| 授权额度 | 精确额度 / Unlimited |
| 退出条件 | 例如 BNB 涨跌 20%、APR 低于 5%、池子异常 |

没有记录，就不要做 LP。因为几天后你大概率只记得“年化不错”，忘了自己承担了什么。

#### 第七步：退出流程

退出通常要两步：

1. 如果质押了 Farm，先解除质押拿回 LP 代币。
2. 移除流动性，把 LP 代币换回 BNB 和 USDT。

退出后再算账：

```text
最终资产价值
- 初始投入价值
- Gas
- 无常损失估算
= 本次 LP 的真实结果
```

### 9.11 常见攻击与骗局

#### ① 钓鱼前端

攻击者做一个几乎一模一样的网站，引导你连接钱包和签授权。最危险的不是转账，而是授权恶意合约花你的代币。

防护动作：只用书签进入；签名前看域名；遇到“免费领取”“紧急迁移”“空投补偿”先停 24 小时。

#### ② 恶意授权

很多 ERC-20 代币授权默认是无限额度。只要合约有问题，它可能在未来转走你授权过的所有代币。

防护动作：使用精确授权；定期用 revoke.cash 或链上浏览器撤销旧授权；大额钱包不碰新 DApp。

#### ③ Rug Pull 跑路

项目方创建新币和流动性池，宣传高 APY，吸引用户买入或做 LP，随后撤走流动性或抛售预留代币。

防护动作：查 LP 是否锁定，查团队和代币分配，查合约是否可增发、可暂停、可黑名单。

#### ④ 预言机操纵

攻击者通过大额交易或低流动性池操纵价格，让借贷协议误判抵押品价值，随后借出真资产。

防护动作：优先使用成熟协议；关注它使用什么预言机；远离只依赖单一低流动性 DEX 价格的协议。

#### ⑤ 三明治攻击

当你提交大额 Swap 后，机器人在你前面买入、在你后面卖出，夹住你的交易，赚走你的滑点。

防护动作：设置合理滑点；拆分大额交易；使用聚合器或带 MEV 保护的交易路径；避开低流动性池。

### 9.12 进入任何 DeFi 协议前的 12 个问题

- [ ] 这是官方前端吗？网址从几个渠道交叉确认了吗？
- [ ] 合约地址和代币地址确认过吗？
- [ ] 协议在 DeFiLlama 是否可查？TVL 和交易量是否异常？
- [ ] 收益来自手续费、利息，还是代币增发？
- [ ] 审计报告是谁做的？审计后代码是否升级过？
- [ ] 是否有漏洞赏金？
- [ ] 合约能否被团队暂停、升级、转移资金？
- [ ] 多签由谁控制？签名人是否公开？
- [ ] 代币是否有近期大额解锁？
- [ ] 退出路径清楚吗？退出需要几笔交易？
- [ ] 授权是否设置了精确额度？
- [ ] 这笔钱全部亏掉，你能接受吗？

只要有三项答不上来，就不要急着投钱。DeFi 里最贵的学费，通常都来自“我先试一下”。

### 9.13 新手练习：用 7 天完成一次低风险 DeFi 体验

**第 1 天：只读**

打开 DeFiLlama，选择一个你听过的协议，看 TVL、链分布、收入、类别。不要连接钱包。

**第 2 天：查合约**

在区块链浏览器里查一个主流代币合约，理解持有人、交易、合约验证、授权记录。

**第 3 天：小额 Swap**

用 5-10 美元做一次 Swap，记录 Gas、滑点、成交价格和交易哈希。

**第 4 天：撤销授权**

用 revoke.cash 或钱包内授权管理撤销昨天的授权。

**第 5 天：模拟 LP**

不投钱，只用无常损失计算器或表格模拟 BNB/USDT 涨跌 20%、50% 时的结果。

**第 6 天：小额 LP**

投入极小金额做一次 LP，并记录进入价格、预计收益和退出条件。

**第 7 天：退出并复盘**

移除流动性，算清楚最终结果。目标不是赚钱，而是把流程跑通。

### 9.14 常见误区与风险提醒

- **“APY 500% 稳赚”**：APY 通常包含代币奖励，代币跌 90% 后收益会被抽空。
- **“稳定币池没有风险”**：稳定币会脱钩，封装稳定币还有桥和赎回风险。
- **“审计过就安全”**：审计只能降低代码风险，不能消除经济模型、权限和后续升级风险。
- **“TVL 大就不会出事”**：大协议也会被攻击，TVL 只能说明资金多，不等于不会亏。
- **“我只签名不转账，所以安全”**：很多危险操作正是通过签名和授权完成的。
- **“Gas 便宜就随便试”**：低 Gas 链上的骗局也更便宜，攻击者和骗子同样喜欢。
- **“别人都在挖，我也上”**：当收益来自补贴时，晚进去的人常常接住早进去的人卖出的奖励代币。

### 9.15 本章检查清单

- [ ] 能解释 DEX 与 CEX 的区别。
- [ ] 能用 `x * y = k` 解释为什么大额交易会有滑点。
- [ ] 能说清 LP 代币代表什么，以及无常损失为什么发生。
- [ ] 能区分手续费收益、借贷利息、代币补贴和真实收益。
- [ ] 能看懂借贷协议里的 LTV、清算阈值和健康因子。
- [ ] 能说出稳定币的四类风险。
- [ ] 能在授权时选择精确额度，并知道如何撤销授权。
- [ ] 能写出进入一个 DeFi 协议前的 12 个检查问题。

### 9.16 延伸阅读与引用

**本地素材**

- [去中心化金融 (DeFi) 初学者指南](../output/587-the-complete-beginners-guide-to-decentralized-finance-defi.md) - DeFi 的整体入门框架。
- [什么是去中心化交易平台 (DEX)](../output/517-what-is-a-decentralized-exchange-dex.md) - DEX、CEX、订单簿与 AMM 的差异。
- [一文读懂自动做市商 (AMM)](../output/515-what-is-an-automated-market-maker-amm.md) - AMM 公式、流动性池和现代 AMM 演进。
- [一文读懂 DeFi 流动性资金池](../output/494-what-are-liquidity-pools-in-defi.md) - LP、资金池类型、收益与风险。
- [什么是无常损失](../output/513-impermanent-loss-explained.md) - LP 必读，理解“收益不等于赚钱”。
- [一文读懂 DeFi 流动性挖矿](../output/529-what-is-yield-farming-in-decentralized-finance-defi.md) - 从早期挖矿到流动性质押、再质押。
- [什么是 DeFi 真实收益率](../output/349-what-is-real-yield-in-defi.md) - 判断 APY 是否可持续。
- [加密货币借贷及其运作原理](../output/409-what-is-crypto-lending-and-how-does-it-work.md) - 抵押借贷、闪电贷、清算风险。
- [为什么稳定币会脱钩](../output/315-what-is-a-stablecoin.md) - 稳定币类型与历史脱钩案例。
- [什么是 DeFi 中的闪电贷](../output/522-what-are-flash-loans-in-defi.md) - 闪电贷的原理、用途和攻击方式。
- [区块链预言机介绍](../output/579-blockchain-oracles-explained.md) - 预言机问题是 DeFi 风险核心之一。
- [什么是最大可提取价值 (MEV)](../output/347-what-is-maximal-extractable-value-mev.md) - 理解抢跑、三明治攻击和交易排序。
- [如何识别 DeFi 中的骗局](../output/503-how-to-spot-scams-in-decentralized-finance-defi.md) - 项目尽调和骗局识别清单。

**外部链接**

- [DeFiLlama](https://defillama.com/) - 查询协议 TVL、收入、链分布、稳定币和分类数据。
- [Aave: Health Factor & Liquidations](https://aave.com/help/borrowing/liquidations) - Aave 官方对健康因子和清算机制的说明。
- [Uniswap v4 Hooks 文档](https://developers.uniswap.org/docs/protocols/v4/concepts/hooks) - 理解 Hooks 如何扩展流动性池逻辑。
- [Uniswap v4 Architecture 文档](https://developers.uniswap.org/docs/protocols/v4/concepts/architecture) - Hooks、动态费用、Singleton、Flash Accounting 等架构变化。
- [Chainalysis 2026 Crypto Crime Report Introduction](https://www.chainalysis.com/blog/2026-crypto-crime-report-introduction/) - 了解链上犯罪、被盗资金和稳定币相关风险趋势。

---

## 第十章 跨链、Layer2 与扩容世界

### 本章目标
- 理解为什么区块链必须扩容，以及 L1、L2、侧链、状态通道、Rollup 的差异
- 分清 Optimistic Rollup、ZK Rollup、Validium、模块化区块链、数据可用性、Blob 等核心概念
- 学会判断一个 L2 或跨链桥的主要风险：验证机制、数据可用性、排序器、退出窗口、桥资产形态
- 能独立完成一次小额主网到 L2 的跨链，并在操作前后做基础安全检查

### 10.1 读者先要解决的问题

如果你已经会转账、Swap、质押和查链上记录，下一步一定会遇到三个问题：

1. **为什么同样是转 USDC，以太坊主网可能很贵，Arbitrum、Base、Optimism 却便宜很多？**
2. **为什么我的资产明明是 ETH，跨到不同网络后会变成不同版本的 ETH 或 WETH？**
3. **为什么跨链桥看起来只是点几下按钮，却是整个加密世界最容易出大事故的地方？**

区块链的底层矛盾是：每一笔交易都要被很多节点验证和保存。这样带来了安全和抗审查，但也让区块空间变成稀缺资源。用户多、链上活动多，Gas 就会上升；区块空间越稀缺，越需要把一部分计算、交易、数据搬到更高效的位置。

![Layer 1 与 Layer 2 扩容示意](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/fbd6db769d2d46d490622926e019174c.png)

本章要把“多链世界”拆成两条主线：

- **扩容线**：如何让一条链承载更多交易？答案包括 L1 改造、Layer 2、Rollup、状态通道、数据分片、Blob、模块化。
- **互操作线**：资产和消息如何从一条链去另一条链？答案包括官方桥、流动性桥、消息桥、封装资产、链抽象。

注意，这两条线经常交织在一起。比如 Arbitrum 是以太坊 L2，同时你进入 Arbitrum 需要桥；Starknet 是 ZK/Validity Rollup，同时它有自己的 StarkGate；比特币闪电网络是支付通道型 L2，不是以太坊式 Rollup；Polygon PoS 常被普通用户当作“便宜的以太坊”，但严格说它更接近侧链，安全假设和 Rollup 不一样。

### 10.2 核心概念与最小知识包

#### 10.2.1 L1、L2、侧链、Appchain：先分清“安全从哪里来”

| 类型 | 它是什么 | 安全主要来自哪里 | 常见例子 | 新手最容易误解的点 |
| --- | --- | --- | --- | --- |
| L1 主链 | 自己出块、共识、结算、存数据的基础链 | 自己的验证者/矿工/节点网络 | Bitcoin、Ethereum、Solana、BNB Chain | “TPS 高 = 一定更好”，但硬件门槛、去中心化程度也要看 |
| L2 Rollup | 在 L1 之上执行交易，定期把结果和数据提交回 L1 | 主要继承 L1 的结算与数据安全 | Arbitrum、Optimism、Base、Starknet、zkSync、Linea | “便宜 = 没风险”，但排序器、升级权限、证明系统都要看 |
| 侧链 Sidechain | 与主链相连但有自己共识的独立链 | 自己的验证者集合 | Polygon PoS、Gnosis Chain 等 | “接了以太坊桥 = 继承以太坊安全”，这不一定成立 |
| Appchain | 为单个应用或应用族定制的链 | 视技术栈而定 | 游戏链、交易所链、特定 DeFi 链 | 定制化强，但生态和流动性可能更薄 |
| 状态通道 | 双方先把资金锁定，再在链下多次更新状态，最后结算到主链 | 通道合约 + 参与方可提交最终状态 | Bitcoin Lightning Network | 适合支付，不等于通用智能合约平台 |

一句话理解：**L1 是城市主路，L2 是高架和地铁，侧链是旁边另一座城市，桥是连接道路，模块化是把道路、收费站、地图、交通指挥系统拆给不同团队维护。**

#### 10.2.2 Rollup 的工作流：不是“把交易藏起来”，而是“批量压缩后回主网”

Rollup 的核心是把大量 L2 交易批量处理，然后把足够验证这些交易的数据或证明提交到 L1。一个典型流程如下：

| 步骤 | 发生了什么 | 用户关心什么 |
| --- | --- | --- |
| 1. 用户在 L2 发起交易 | 钱包签名，交易进入 L2 的排序器 | 手续费通常远低于以太坊主网 |
| 2. 排序器排序并执行交易 | Sequencer 决定交易顺序，生成 L2 区块 | 排序器可能中心化，可能宕机或审查 |
| 3. 交易被打包成批次 | 多笔交易被压缩 | 单笔成本被分摊 |
| 4. 批次数据提交到 L1 | 早期多用 calldata，Dencun 后大量使用 Blob | 数据发回 L1 越便宜，L2 越便宜 |
| 5. 状态被验证 | Optimistic 用挑战期，ZK 用有效性证明 | 决定提款速度和安全假设 |
| 6. 用户退出或继续使用 L2 | 可在 L2 内 Swap、借贷、转账，也可提回 L1 | 回主网时要看退出窗口和桥类型 |

![Rollup 类型对比示意](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/bdb9dfdff7f4427a9ee94c27654ef9ff.)

#### 10.2.3 Optimistic Rollup vs ZK Rollup

| 维度 | Optimistic Rollup | ZK / Validity Rollup |
| --- | --- | --- |
| 核心假设 | 默认交易有效，有人发现问题再挑战 | 每批交易附带有效性证明 |
| 证明方式 | Fraud Proof / Fault Proof | Validity Proof，如 SNARK、STARK |
| 提款体验 | 官方桥回 L1 通常有挑战期，常见约 7 天或更久 | 理论上更快，但不同网络实现不同 |
| 技术成熟度 | EVM 兼容较成熟，生态大 | 技术门槛高，证明系统复杂 |
| 代表网络 | Arbitrum、Optimism、Base | Starknet、zkSync、Linea、Scroll、Polygon zkEVM |
| 适合场景 | 通用 DeFi、交易、应用迁移 | 高安全验证、隐私、可验证计算、长期扩容 |

Optimistic 的“慢”主要慢在退出到 L1，而不是在 L2 内部使用。你在 Arbitrum 内 Swap，通常几秒到几十秒就能完成；但如果你走官方桥从 Arbitrum 提回 Ethereum L1，就必须等挑战期结束。Arbitrum 官方支持文档解释过，官方桥提现存在强制等待期，这是欺诈证明安全模型的一部分。

ZK 的“快”也不要理解成所有体验都秒到。证明生成、证明聚合、L1 验证、桥前端、资产支持、钱包兼容都会影响最终体验。判断一个 ZK Rollup，不只看“ZK”两个字，还要看证明系统是否上线、是否所有状态都由证明保护、数据是否上链、是否有逃生机制。

#### 10.2.4 EIP-4844、Dencun 与 Blob：为什么 L2 费用突然便宜了

2024 年 3 月 13 日，以太坊 Dencun 升级在主网激活，其中最关键的扩容改动是 EIP-4844，也叫 Proto-Danksharding。它引入了一种新的临时数据空间：**Blob**。

![EIP-4844 与 Blob 数据示意](https://public.bnbstatic.com/static/academy/uploads/32b071fcbf4e403dab7d578adfd3063c.png)

以前，Rollup 往以太坊发数据主要依赖 calldata。calldata 会永久进入以太坊历史数据，价格昂贵。Blob 的思路是：Rollup 只需要让全网在一段时间内能访问这些数据，用来验证和重建状态，并不一定要让所有节点永久保存完整原始数据。根据 ethereum.org 的 Dencun FAQ，Blob 数据会在网络中保证可用一段时间，约 18 天后被修剪，但仍可通过承诺和证明验证其有效性。

这对用户的影响很直接：

- L2 批量提交数据的成本下降，最终有机会反映为更低的 L2 Gas。
- 以太坊主网本身的转账费不会因为 Blob 自动变便宜，因为 Blob 主要服务 Rollup 数据发布。
- Rollup 会更像“以太坊的数据客户”：L1 负责安全和数据可用性，L2 负责高频执行。

不要把 Blob 理解成“把数据丢了”。更准确的说法是：**以太坊把 Rollup 所需的数据发布从永久昂贵存储，改成了短期可用、可验证、成本更低的数据通道。**

#### 10.2.5 数据可用性 DA：为什么“数据放在哪里”这么重要

数据可用性 (Data Availability, DA) 不是“数据存储服务”的同义词。它真正关心的是：如果某个区块生产者或 Rollup 运营方作恶，普通用户、验证者、观察者能不能拿到足够数据来重建状态、发现错误、发起退出。

![数据可用性示意](https://public.bnbstatic.com/static/academy/uploads/972a8c6d1e7d4555a82be46fcf22cb97.png)

| DA 方案 | 怎么做 | 优点 | 风险 |
| --- | --- | --- | --- |
| Ethereum On-chain DA | Rollup 数据发布到以太坊 | 安全假设最接近以太坊 | 成本高，吞吐受限 |
| Blob DA | 通过 EIP-4844 Blob 发布临时数据 | 比 calldata 便宜，适合 Rollup | Blob 会被修剪，需要外部索引和归档 |
| 独立 DA 层 | Celestia、EigenDA 等专门提供 DA | 更便宜、更灵活 | 安全假设不完全等同以太坊 |
| DAC 数据可用性委员会 | 由一组节点承诺数据可用 | 成本低、适合高吞吐应用 | 委员会诚实性和成员集中度是关键风险 |

一个项目说自己是 L2，不代表它在所有方面都继承以太坊安全。你要问的是：

- 状态根提交到哪里？
- 交易数据发布到哪里？
- 证明系统是否已经上线？
- 如果运营方停止服务，用户能否强制退出？
- 如果 DA 层出问题，用户资金会怎样？

#### 10.2.6 模块化区块链：把一条链拆成四个岗位

传统一体化区块链把所有事情都放在一条链上完成：执行、结算、共识、数据可用性。模块化区块链把这些职责拆开，让不同网络做自己擅长的部分。

![模块化区块链示意](https://public.bnbstatic.com/static/academy/uploads/cca200a7430c4ce29d3470bcf1534869.jpg)

| 模块 | 负责什么 | 例子 |
| --- | --- | --- |
| 执行 Execution | 运行交易、更新账户余额和合约状态 | Arbitrum、Optimism、Starknet、Appchain |
| 结算 Settlement | 确认状态、处理争议、管理退出 | Ethereum、部分专用结算层 |
| 共识 Consensus | 决定区块顺序和最终性 | Ethereum PoS、Celestia、其他共识网络 |
| 数据可用性 DA | 保证交易数据能被下载和验证 | Ethereum Blob、Celestia、EigenDA、DAC |

模块化的好处是扩展快、定制化强、成本可能更低；代价是复杂性上升。对普通用户来说，复杂性会被前端隐藏，但风险不会消失。你点的是一个“确认”按钮，背后可能经过钱包、RPC、排序器、桥、消息层、DA 层、结算层、预言机和做市商。

#### 10.2.7 跨链桥：桥不是“传送门”，而是一组合约和信任假设

跨链桥解决的是“资产或消息如何从 A 链到 B 链”。它不是把同一枚币物理搬过去，而是在两条链之间建立对应关系。

![区块链桥示意](https://public.bnbstatic.com/static/academy/static/academy/editor-uploads/2a6ea320df724d4593153c7a6d9eb60a.png)

| 桥类型 | 工作方式 | 优点 | 主要风险 |
| --- | --- | --- | --- |
| 锁定-铸造桥 | A 链锁定原资产，B 链铸造封装资产 | 逻辑直观，适合原生桥 | 桥合约和验证逻辑一旦出错，封装资产可能失去 backing |
| 销毁-释放桥 | B 链销毁封装资产，A 链释放原资产 | 常见于提款 | 提款慢，依赖正确消息验证 |
| 流动性桥 | 两边有资金池或做市商，用户实际是换币 | 快速，能绕过挑战期 | 滑点、流动性枯竭、做市商/协议风险 |
| 消息桥 | 传递任意跨链消息，不只转账 | 可组合性强，适合跨链应用 | 消息验证层被攻破会影响多个应用 |
| 托管桥 | 由中心化机构托管资产并发行映射资产 | 体验简单 | 托管方信用风险、冻结风险、合规风险 |

桥之所以危险，是因为桥上往往聚集了大量资产，且攻击面很大。Chainalysis 在 2022 年 8 月统计过，当年截至该报告时，跨链桥攻击已造成约 20 亿美元损失，并占当年被盗加密资产的 69%。这个数字不需要背，但要记住它背后的直觉：**桥不是小工具，桥是金库。**

#### 10.2.8 账户抽象与链抽象：未来用户可能“不知道自己在哪条链”

账户抽象 (Account Abstraction) 想解决钱包难用的问题。以太坊 ERC-4337 的路线是让智能合约钱包支持更灵活的验证逻辑，比如社交恢复、批量交易、Gas 代付、每日限额、多签、Session Key。它不是让你不用保护资产，而是把“一个助记词丢了就全完”的体验改得更接近互联网账户。

链抽象 (Chain Abstraction) 想解决多链难用的问题。理想体验是：用户只表达意图，比如“用我钱包里的任意稳定币买这个 NFT”或“把这笔资金放到收益最高且风险合规的池子里”，系统自动处理跨链、兑换、Gas、路由和结算。Intent、Solver、跨链账户、统一余额显示都在这个方向。

但抽象不是魔法。前端越简单，后端越复杂。你要学会问：

- 谁替我路由？
- 谁垫付 Gas？
- 失败时谁负责？
- 是否有额外授权？
- 我的资产是否经过临时托管？
- Solver 是否可能夹带滑点或 MEV？

#### 10.2.9 比特币 L2：它和以太坊 L2 不是同一种东西

比特币也有 Layer 2，但技术路线和以太坊 Rollup 生态不同。

| 比特币 L2 / 扩展 | 类型 | 解决什么问题 | 例子 |
| --- | --- | --- | --- |
| 闪电网络 | 状态通道 | 小额高频支付 | Lightning Network |
| Rootstock | 侧链/智能合约平台 | 给 BTC 引入 EVM 兼容智能合约 | RSK |
| Stacks | 与比特币关联的智能合约层 | 让应用状态锚定比特币安全叙事 | Stacks |
| Liquid | 联盟侧链 | 更快结算、资产发行、交易所间转移 | Liquid Network |

比特币 L2 的核心诉求通常是“让 BTC 更可用”，而以太坊 L2 的核心诉求通常是“让 EVM/智能合约活动更便宜”。两者都叫 L2，但不要混为一谈。

### 10.3 怎么读懂一个 L2：六个问题比名字更重要

当你看到一个新 L2，不要先问“有没有空投”，先问下面六件事：

1. **它是什么类型？**  
   是 Optimistic Rollup、ZK Rollup、Validium、Optimium、侧链，还是 Appchain？名字里带 “zk” 不代表所有数据和状态都由 ZK 保护。

2. **状态验证怎么做？**  
   Optimistic 要看欺诈证明是否已上线、挑战期多长、谁能挑战。ZK 要看有效性证明是否覆盖主网状态更新。

3. **数据放在哪里？**  
   数据在 Ethereum、Blob、Celestia、EigenDA，还是某个 DAC？DA 不同，风险边界不同。

4. **排序器是谁控制？**  
   大多数 L2 早期排序器由项目方运营。排序器中心化不一定等于资金不安全，但可能带来宕机、延迟、审查、MEV 分配不透明等问题。

5. **退出机制是什么？**  
   如果前端挂了、排序器停了、项目方不配合，你是否能通过 L1 合约强制退出？退出窗口有多久？

6. **升级权限在哪里？**  
   合约能不能被多签升级？安全委员会有几个人？Timelock 多久？紧急暂停权限如何触发？

实用工具：L2Beat 的 Risk 页面会把 Rollup 的 State Validation、Data Availability、Exit Window、Sequencer Failure、Proposer Failure 等维度列出来。你不需要一开始看懂所有技术细节，但至少要养成“先看风险页，再转大额”的习惯。

### 10.4 实操：把 ETH 从主网跨到 Arbitrum

下面用 “Ethereum L1 → Arbitrum One” 举例。其他 L2 的思路类似，但具体桥、费用、等待时间和支持代币不同。

#### 10.4.1 操作前准备

1. **确认入口**：优先从官方文档、项目官网、书签进入，不从搜索广告进入。Arbitrum 官方桥是 `bridge.arbitrum.io`。
2. **确认网络**：钱包当前网络是 Ethereum Mainnet，目标网络是 Arbitrum One。
3. **确认资产**：新手优先用 ETH 或主流稳定币，不要第一次就跨小众代币。
4. **保留 Gas**：主网发起 Deposit 需要 ETH 支付 L1 Gas；到了 Arbitrum 后，也需要少量 ETH 支付 L2 Gas。
5. **先小额测试**：第一次建议 10–30 美元，不要为了省一笔 Gas 把全部资金一次跨过去。

#### 10.4.2 官方桥路径

1. 打开 `bridge.arbitrum.io`。
2. 连接钱包，选择 From: Ethereum，To: Arbitrum One。
3. 输入数量，检查预计 Gas 和到账时间。
4. 点击 Deposit，在钱包里确认交易。
5. 等待以太坊主网确认后，继续等待 L2 入账。一般不是瞬时，但通常不会像提款那样等数天。
6. 到账后在钱包切到 Arbitrum One，检查 ETH 余额。
7. 小额做一次 Arbitrum 内部 Swap 或转账，确认网络、代币、Gas 都正常。

#### 10.4.3 从 Arbitrum 回主网

有两条路：

- **官方桥提款**：安全路径更直接，但 Optimistic Rollup 官方提款需要等待挑战期。Arbitrum 官方材料说明，使用官方桥回 Ethereum 主网会有强制等待期，传统路径通常约 7 天到 8 天。
- **快速流动性桥**：Hop、Across、Stargate、Celer 等会用流动性替你加速退出。你更快拿到主网资产，但要承担流动性桥的手续费、滑点和协议风险。

新手建议：**进 L2 用官方桥，小额学习；回 L1 如果不急，也用官方桥；急用再考虑成熟流动性桥。**

### 10.5 跨链前后的安全检查清单

#### 10.5.1 跨链前

- [ ] 入口是否来自官方文档、官方 X、CoinGecko/CoinMarketCap 链接或长期书签？
- [ ] 钱包弹窗里的域名、合约、网络是否符合预期？
- [ ] 目标链是否被你的钱包和交易所支持？
- [ ] 目标链上的该代币是原生发行、官方桥资产，还是第三方桥资产？
- [ ] 是否保留了源链和目标链 Gas？
- [ ] 是否先做小额测试？
- [ ] 是否查过桥的历史安全记录、审计、TVL 和最近公告？

#### 10.5.2 跨链中

- [ ] 不重复点击“确认”，避免在卡顿时发起多笔交易。
- [ ] 用区块浏览器查源链交易状态，而不是只盯前端进度条。
- [ ] 如果前端显示失败，先查链上交易是否成功，再决定是否重试。
- [ ] 不在 Telegram、Discord 里接受“客服”私聊帮助。

#### 10.5.3 跨链后

- [ ] 在目标链浏览器检查到账地址和代币合约。
- [ ] 小额 Swap 前确认代币不是假币或同名资产。
- [ ] 用 revoke.cash 或钱包授权管理工具检查新增授权。
- [ ] 大额跨链后记录交易哈希、桥名称、源链、目标链、时间和数量。
- [ ] 若准备长期停留在 L2，了解该 L2 的退出窗口和排序器风险。

### 10.6 常见误区与风险提醒

- **“L2 一定继承以太坊全部安全”**：只有在状态验证、数据可用性、退出机制都设计得足够强时，这句话才接近成立。很多项目仍处于逐步去中心化阶段。
- **“ZK 一定比 Optimistic 安全”**：ZK 证明很强，但实现、升级权限、DA、桥合约、排序器同样可能出问题。
- **“桥越便宜越好”**：便宜可能来自补贴、较弱验证、流动性桥、较低安全假设或隐藏滑点。便宜不是安全指标。
- **“到账了就结束了”**：到账只是第一步。你还要确认代币合约、流动性、授权、回程路径。
- **“官方桥一定最快”**：官方桥通常更贴近原生安全路径，但 Optimistic 提款会慢。快桥用流动性换时间。
- **“同名 USDC 都一样”**：不同链上的 USDC 可能是原生 USDC、官方桥 USDC、第三方桥封装 USDC。流动性和赎回路径完全不同。
- **“排序器中心化无所谓”**：短期可能不影响你的余额安全，但会影响交易可用性、排序公平、抗审查和 MEV。
- **“链抽象会让风险消失”**：它只是把复杂性藏到产品背后。路由器、Solver、Paymaster、桥和授权仍然需要被信任或验证。

### 10.7 案例拆解：一次跨链失败可能怎样发生

假设你想把 1,000 USDC 从 Ethereum 跨到某个新 L2，前端推荐了一个“最快最便宜”的桥。你没有小额测试，直接确认。

可能出现的风险路径：

1. **资产版本风险**：你以为拿到的是原生 USDC，实际是某桥发行的 USDC.e，目标链上流动性很差。
2. **流动性风险**：桥的目标链池子深度不足，到账数量被滑点吃掉，或者等待做市商补流动性。
3. **合约风险**：桥合约存在验证漏洞，攻击者可以伪造跨链消息。
4. **前端风险**：你访问了钓鱼域名，钱包授权给了假合约。
5. **回程风险**：你想提回 Ethereum，发现官方回程不支持该资产，只能走第三方桥。
6. **Gas 风险**：资产到了目标链，但你没有目标链 Gas，无法转出或 Swap。

正确做法应该是：先确认目标链的 USDC 类型和合约地址，再用 10 USDC 测试完整路径，确认能 Swap、能转出、能回程，再考虑更大金额。

### 10.8 本章速查表

| 你看到的词 | 快速解释 | 判断重点 |
| --- | --- | --- |
| L1 | 基础主链 | 共识、节点数量、费用、生态 |
| L2 | 建在 L1 上的扩容网络 | 是否真继承 L1 安全 |
| Rollup | 批量执行交易并提交回 L1 | 证明系统、DA、退出机制 |
| Optimistic | 默认有效，可挑战 | 挑战期、欺诈证明是否上线 |
| ZK / Validity | 用有效性证明验证状态 | 证明覆盖范围、证明生成和验证成本 |
| Validium | 状态证明上链，数据在链下 | DA 风险更高，费用更低 |
| Sidechain | 有自己共识的独立链 | 验证者安全，不等同 L1 |
| Blob | EIP-4844 引入的临时数据空间 | 主要降低 Rollup 数据成本 |
| DA | 数据可用性 | 数据能否被下载和重建 |
| Sequencer | L2 排序器 | 中心化、宕机、审查、MEV |
| Bridge | 连接链的资产/消息协议 | 验证逻辑、资产 backing、历史安全 |
| Account Abstraction | 智能合约钱包能力 | 恢复、Gas 代付、权限控制 |
| Chain Abstraction | 隐藏多链复杂性 | 路由、授权、托管、失败责任 |

### 10.9 检查清单与练习

- [ ] 小额 (< 30 美元) 体验一次 “Ethereum 主网 → Arbitrum/Base/Optimism → L2 内 Swap → 回主网” 的完整流程。
- [ ] 查一次 L2Beat，记录你关注的 L2 的 State Validation、Data Availability、Exit Window、Sequencer Failure。
- [ ] 对比 Arbitrum、Optimism、Base、Starknet、zkSync、Linea：分别写下它们属于 Optimistic 还是 ZK/Validity 路线。
- [ ] 找一个跨链桥，写出它是锁定-铸造、流动性桥、消息桥，还是混合模式。
- [ ] 随机挑一个目标链 USDC，查它是原生 USDC 还是桥接 USDC，并记录合约地址。
- [ ] 写下你的“绝不使用的桥”的三条依据，例如：无审计、匿名团队、TVL 太低、历史事故处理差、前端域名混乱。

### 10.10 延伸阅读与引用链接

**本章主要参考素材（来自本项目 `output`）：**

- [区块链 Layer 1 与 Layer 2 扩展解决方案](https://www.binance.com/zh-CN/academy/articles/blockchain-layer-1-vs-layer-2-scaling-solutions)
- [乐观汇总与零知识汇总的差异](https://www.binance.com/zh-CN/academy/articles/optimistic-vs-zero-knowledge-rollups-what-s-the-difference)
- [什么是以太坊 EIP-4844，该改进提案能如何惠及用户？](https://www.binance.com/zh-CN/academy/articles/what-is-eip-4844-in-ethereum-and-how-can-it-benefit-users)
- [什么是区块链桥？](https://www.binance.com/zh-CN/academy/articles/what-s-a-blockchain-bridge)
- [常见的跨链桥接安全漏洞有哪些？](https://www.binance.com/zh-CN/academy/articles/what-are-common-bridge-security-vulnerabilities)
- [什么是模块化区块链？](https://www.binance.com/zh-CN/academy/articles/what-are-modular-blockchains)
- [数据可用性介绍](https://www.binance.com/zh-CN/academy/articles/what-is-data-availability)
- [链抽象介绍](https://www.binance.com/zh-CN/academy/articles/what-is-chain-abstraction)
- [以太坊账户抽象解析 (ERC-4337)](https://www.binance.com/zh-CN/academy/articles/what-is-erc-4337-or-account-abstraction-for-ethereum)
- [什么是比特币 Layer 2 网络？](https://www.binance.com/zh-CN/academy/articles/what-are-bitcoin-layer-2-networks)

**补充官方与数据来源：**

- [ethereum.org：Dencun / EIP-4844 FAQ](https://ethereum.org/en/roadmap/dencun/)
- [Ethereum Foundation Blog：Dencun Mainnet Announcement](https://blog.ethereum.org/2024/02/27/dencun-mainnet-announcement)
- [L2Beat：Layer 2 Summary 与风险指标](https://l2beat.com/scaling/summary)
- [L2Beat：Risk Analysis](https://l2beat.com/scaling/risk)
- [Arbitrum Foundation：为什么官方桥回主网要等待 7 天](https://support.arbitrum.io/hc/en-gb/articles/19478133076123-Why-wait-7-days-to-claim-funds-when-bridge-to-Ethereum)
- [Arbitrum Foundation：传统桥提款约 8 天说明](https://support.arbitrum.io/hc/en-gb/articles/18213843096091-Using-Arbitrum-s-traditional-bridge-to-move-funds-to-Mainnet)
- [Starknet Docs：StarkGate 与 L1/L2 消息机制](https://docs.starknet.io/architecture/starkgate)
- [Chainalysis：Cross-Chain Bridge Hacks Emerge as Top Security Risk](https://www.chainalysis.com/blog/cross-chain-bridge-hacks-2022/)

---

## 第十一章 NFT、铭文、链游与数字所有权

### 本章目标
- 区分 NFT 的收藏、会员、游戏、资产凭证等场景
- 识别流动性、版权、项目方和市场周期风险
- 理解铭文、Runes、SBT、动态 NFT 与传统 NFT 的差别
- 建立评估 NFT/链游项目的实操清单

### 11.1 读者先要解决的问题

NFT 在 2021–2022 经历了泡沫和破裂后，留下来的不是一句"图片上链"，而是几个更值得长期观察的问题：

1. 数字世界里，什么东西可以被证明为"唯一"？
2. 一个钱包地址拥有某个 Token ID，究竟代表拥有图片、访问权、会员身份，还是只拥有一条链上记录？
3. 游戏道具、门票、证书、积分、音乐权益、虚拟土地，哪些适合放到链上，哪些只是披着 Web3 外衣的营销？
4. NFT 如果无法快速卖出，它还算资产吗？

把 NFT 作为短线投机品玩，必须承认它比多数 ERC-20 更缺流动性、更依赖叙事，也更容易被操纵。把 NFT 作为**链上权属凭证**理解，则更接近它的技术本质：它是一张可以在公开账本上验证的"唯一凭证"，但凭证背后的法律权利、商业权益和现实执行，还要看项目方规则、合约设计和现实法律。

![NFT 与数字所有权示意](https://public.bnbstatic.com/static/academy/uploads/69a4f13a146241d2a3eddba990e9fa8d.png)

**一个最小心智模型：**

| 层级 | 你实际拥有的东西 | 需要进一步核验的问题 |
| --- | --- | --- |
| 链上记录 | 某合约下的 Token ID | 合约是否官方？是否可升级？是否有冻结/销毁权限？ |
| 元数据 | 名称、图片链接、属性、稀有度 | 元数据在 IPFS/Arweave 还是中心化服务器？ |
| 展示资产 | 图片、音频、视频、3D 文件 | 文件是否会失效？是否能被项目方替换？ |
| 权益承诺 | 会员、空投、门票、游戏道具、版税 | 权益是否写入合约？还是项目方口头承诺？ |
| 法律权利 | 版权、商用权、衍生创作权 | 项目许可协议怎么写？转让 NFT 后权利是否终止？ |

### 11.2 核心概念与最小知识包

**① NFT (Non-Fungible Token)** = 非同质化代币。每个 NFT 都有唯一标识，不能像 BTC、ETH、USDT 那样一枚等价替换另一枚。最常见标准是 **ERC-721**，适合"一物一编号"；**ERC-1155** 则可以在一个合约里同时管理同质化、非同质化和半同质化资产，常见于游戏道具、批量门票、徽章和多版本收藏品。

**② NFT 不等于图片。** NFT 更像一张登记凭证。图片、音频、视频或 3D 模型只是这张凭证指向的内容。许多 NFT 的图片没有完全存储在链上，而是由元数据链接到 IPFS、Arweave 或中心化服务器。你看见的"猴子图"、"像素头像"、"游戏装备"，通常只是凭证的可视化外壳。

**③ NFT 的几种主流场景：**

- **艺术收藏**：CryptoPunks、Beeple 是标志性作品。价格高度依赖社群与叙事。
- **PFP 社群会员**：BAYC、Pudgy Penguins 代表。"买入 = 进入一个俱乐部"，但俱乐部能否持续运营是另一回事。
- **游戏道具**：GameFi 把角色、宠物、土地、装备做成可转移资产。
- **动态 NFT**：链上/链下数据变化会改变 NFT 内容 (如等级、成就、奖牌)。
- **证件 / 票据 / SBT**：Soulbound Token 不可转让，适合身份、学历。
- **RWA-NFT**：房产、奢侈品、债券的链上映射 (见第 14 章)。

![NFT 用例示意](https://public.bnbstatic.com/static/academy/uploads/d6b3ecbfc51441d88932f7d245c26b64.png)

**④ 铭文 (Ordinals / Inscriptions / Runes)**：比特币网络上的新资产表达方式。Ordinals 让单个聪 (sat) 可以被编号并附加内容，形成比特币原生数字藏品；Runes 更偏同质化代币协议，用 UTXO 和 OP_RETURN 表达代币发行、铸造和转移。它们不是以太坊 NFT 的直接翻版，而是围绕比特币区块空间、手续费市场和 UTXO 模型形成的独立生态。

**⑤ 元宇宙 (Metaverse) 与虚拟土地**：The Sandbox、Decentraland、Otherside 等项目把虚拟空间、地块、建筑、活动场景做成可交易资产。价值关键不是"地图有多大"，而是有没有真实用户、内容生产者、品牌活动、游戏玩法和稳定经济循环。

**⑥ NFT 借贷与金融化**：抵押 NFT 借稳定币，或通过碎片化、指数化、自动做市等方式提高流动性。但 NFT 的估值离散、成交稀疏、地板价容易被操纵，清算机制比 ERC-20 复杂得多。

### 11.3 NFT 的技术结构：从合约到图片

很多新手以为"我买了一张图"，但链上实际发生的是：

1. NFT 合约部署在某条链上，例如 Ethereum、Solana、BNB Chain、Polygon、Base。
2. 合约为每个 NFT 生成 Token ID。
3. Token ID 对应一段 metadata，里面通常有名称、描述、图片链接、属性。
4. 市场前端读取 metadata，再展示成你看到的图片或卡片。
5. 转让 NFT 时，链上变更的是 Token ID 的拥有地址，不是把图片"发给你"。

| 组件 | 常见位置 | 风险点 |
| --- | --- | --- |
| NFT 合约 | 区块链 | 是否官方合约、是否可暂停、是否可升级 |
| Token ID | 区块链 | 是否稀有、是否在正确合集内 |
| Metadata JSON | IPFS/Arweave/中心化服务器 | 是否可变、是否会丢失 |
| 图片/媒体文件 | IPFS/Arweave/中心化 CDN | 是否永久存储、是否被替换 |
| 交易市场 | OpenSea、Blur、Magic Eden、Binance NFT 等 | 假合集、钓鱼签名、交易版税变化 |

**重点：链上可证明的是"某地址持有某合约的某个 Token ID"。** 至于这个 Token ID 是否对应版权、实体权益、线下会员、空投资格、游戏收益，要继续看项目的白皮书、许可协议、合约权限和历史履约记录。

### 11.4 数字所有权的边界：拥有 NFT 不等于拥有版权

NFT 最容易被误解的地方，是把"Token 所有权"和"版权/商用权"混在一起。

你拥有一个 NFT，通常意味着你可以：

- 证明你的地址持有这个 Token ID。
- 在支持该合约的市场上转让它。
- 在钱包、头像、展厅、游戏或社区里展示它。
- 使用项目方明确授予的权益，例如会员、空投、活动门票、游戏道具。

但这通常不自动意味着你拥有：

- 原图或角色的完整版权。
- 随意注册商标、拍电影、做衍生品的权利。
- 项目未来持续运营的保证。
- 任何固定收益或回购承诺。

BAYC 这类项目之所以被反复讨论，不只是因为价格高，也因为它展示了"NFT + IP 授权 + 社群商业化"的可能性。Yuga Labs 的许可条款会把持有 NFT 与使用对应头像文件的许可绑定起来，但许可边界、终止条件、衍生作品权利仍然要看具体条款。不同项目差异很大，有的给较宽商用权，有的只给展示权，有的甚至没有清晰许可。

**核验版权和权益时，至少看四处：**

| 核验项 | 你要找什么 |
| --- | --- |
| 官方合约地址 | 是否和官网、市场认证、区块浏览器一致 |
| Terms / License | 是否写明商用权、转让后权利、禁止事项 |
| Metadata 存储 | 图片和属性是否可被项目方随意替换 |
| 历史履约 | 项目过去承诺的空投、活动、分红、游戏功能是否兑现 |

### 11.5 铭文、Ordinals、BRC-20、Runes：比特币生态的新资产层

Ordinals 的出现，让比特币从"主要用于价值存储和转账"扩展出新的表达方式。它的核心不是智能合约，而是给聪编号，并把内容写入 Taproot 相关交易数据中。这样，一个被记录内容的聪可以像数字藏品一样被识别、追踪和转移。

![Ordinals 与比特币 NFT 示意](https://public.bnbstatic.com/static/academy/uploads/6a3dfcf4686b4b2baf63a0fc9fdf0f50.jpg)

**几类概念要分清：**

| 类型 | 更像什么 | 关键机制 | 主要争议 |
| --- | --- | --- | --- |
| Ordinals/Inscriptions | 比特币原生数字藏品 | 给聪编号并写入内容 | 占用区块空间、推高手续费 |
| BRC-20 | 基于铭文的同质化代币实验 | 用 JSON 铭文表达部署/铸造/转移 | 交易效率、索引依赖、拥堵 |
| Bitcoin Stamps | 另一种比特币数据嵌入路线 | 把数据嵌入交易输出 | 存储成本和可扩展性 |
| Runes | 比特币原生同质化代币协议 | UTXO + OP_RETURN | 投机过热、钱包和市场支持度 |

![Bitcoin Runes 示意](https://public.bnbstatic.com/static/academy/uploads/85a81717ce7e4e38aa2ce633180fab49.png)

铭文生态的价值不只在"比特币上也能发图/发币"，更在于它重新打开了关于比特币用途的争论：

- 支持者认为，区块空间本来就是市场化资源，更多手续费能在区块奖励下降后补贴矿工安全预算。
- 反对者认为，铭文和代币交易会挤占普通转账空间，增加节点负担，偏离比特币作为货币网络的简洁定位。
- 投资者要注意，铭文资产通常更依赖索引器、钱包支持、市场共识和短期热度，流动性比主流代币更脆弱。

**实操提醒：** 比特币铭文、Runes 和普通 BTC 使用同一条主链，但钱包体验、UTXO 管理、转账方式不同。不要把带铭文的 UTXO 当普通 BTC 随便花掉；转移前确认钱包是否支持"保护铭文"或"选择 UTXO"。

### 11.6 链游与 GameFi：资产所有权不等于好游戏

GameFi 的口号常常是"边玩边赚"，但长期能留下来的项目，通常不是靠"赚"吸引人，而是先有足够好玩的游戏，再用链上资产增强玩家所有权、开放市场和社区治理。

![GameFi 运作示意](https://public.bnbstatic.com/static/academy/uploads/6b846e39e6964d958664732d0898e62b.png)

传统游戏里，皮肤、装备、角色、金币通常被锁在公司服务器中。玩家充值购买的是使用权，账号被封或游戏停服后资产可能归零。链游尝试把部分资产做成 NFT 或代币，让玩家可以：

- 把道具转到自己的钱包。
- 在游戏外市场交易。
- 把资产借给其他玩家使用。
- 参与治理、活动、空投或跨游戏联动。

但"可交易"也会带来新问题：

| 传统游戏问题 | 链游想解决 | 链游新增风险 |
| --- | --- | --- |
| 资产锁在游戏内 | 道具可转移、可交易 | 投机者压过真实玩家 |
| 账号依赖平台 | 钱包持有资产 | 私钥丢失、钓鱼签名 |
| 公司决定经济系统 | DAO 或社区参与治理 | 巨鲸投票、治理冷漠 |
| 二级交易灰色化 | 市场透明 | 地板价操纵、洗售交易 |

判断一款链游，不能只问"能不能赚钱"，而要问：

1. **没有代币奖励，还会有人玩吗？** 如果答案是否定的，它更像挖矿界面，不像游戏。
2. **新玩家的钱流向哪里？** 是进入游戏内容、赛事、创作者生态，还是主要补贴早期玩家退出？
3. **游戏资产是否有消耗机制？** 没有耐久、合成、升级、销毁，资产会越产越多。
4. **代币用途是否真实？** 只是发奖励和卖压，不是经济模型。
5. **服务器和合约谁控制？** 链上资产不代表游戏逻辑完全去中心化。

### 11.7 动态 NFT、SBT 与现实资产映射

静态 NFT 像一张固定证书；动态 NFT 像一张会随状态变化的证书。例如一个链游角色升级后，NFT metadata 里的等级、经验、外观发生变化；一个体育 NFT 随球员真实比赛数据改变属性；一张会员卡随用户贡献度解锁不同权益。

动态 NFT 依赖三个部分：

1. 智能合约保存 Token ID 和更新规则。
2. 预言机或后端服务提供外部数据。
3. 前端或元数据服务把变化展示出来。

这让 NFT 更像"活资产"，但也增加了信任点。如果更新数据来自中心化 API，项目方停服、作恶或被攻击，NFT 的显示和权益都可能受影响。

SBT (Soulbound Token) 则走另一条路：它强调不可转让，适合学历、证书、KYC 状态、活动出席证明、DAO 贡献记录。可转让 NFT 适合资产；不可转让 SBT 更适合身份和声誉。一个毕业证如果可以随便卖，就失去证明意义；一张演唱会门票如果不能转让，二级市场又会变得僵硬。所以核心不是"NFT 好不好"，而是**权利是否需要流通**。

RWA-NFT 把现实资产映射到链上，例如房产权益、奢侈品证书、球星卡、仓单、票据。它的难点不在技术，而在法律和执行：

- 链上 Token 与现实资产是否一一对应？
- 实物由谁托管？
- 损坏、丢失、赎回、争议怎么处理？
- 不同司法辖区是否承认这类权利转移？

NFT 作为现实资产凭证很有想象力，但现实世界不是智能合约能完全约束的环境。链上确权要落地，必须有可信托管、合规文件和可执行的法律路径。

### 11.8 NFT 借贷、碎片化与金融化

当 NFT 有了价格，就会自然走向金融化。常见方式包括：

- **抵押借贷**：把 NFT 锁进合约，借出 ETH 或稳定币。
- **点对点借贷**：贷方单独评估某个 NFT，给出期限、利率和 LTV。
- **点对池借贷**：系统按合集地板价给一组 NFT 提供统一借贷条件。
- **碎片化**：把高价 NFT 拆成 ERC-20 份额，让更多人参与价格暴露。
- **指数/策略化**：把多个 NFT 或蓝筹合集做成篮子资产。

![NFT 借贷示意](https://public.bnbstatic.com/static/academy/uploads/00ed28482e31494e9b0f2979f7952d0d.png)

NFT 金融化最容易出问题的地方，是**估值和清算**。

ERC-20 代币有连续成交和较深订单簿，清算价格相对好判断。NFT 是单件资产，地板价只能代表某个合集里最便宜挂单，不代表你的那一枚一定卖得出去。稀有属性可能溢价，也可能无人接盘。遇到市场恐慌，地板价下跌、买盘撤退、借款人被清算，会形成连锁踩踏。

| 指标 | 含义 | NFT 场景中的难点 |
| --- | --- | --- |
| Floor Price | 合集最低挂单价 | 可被小资金拉高/砸低 |
| LTV | 借款额 / 抵押品估值 | 估值不稳定，平台通常给较低 LTV |
| Liquidation Ratio | 触发清算的抵押率 | 清算时未必有人买 |
| Trait Premium | 稀有属性溢价 | 牛市有效，熊市可能消失 |
| Royalty | 二级交易版税 | 市场政策变化会影响创作者收入 |

**普通读者的原则很简单：** 如果你还不能解释某个 NFT 为什么有人愿意买，先不要用它借钱；如果你不能承受失去这枚 NFT，也不要把它抵押进任何合约。

### 11.9 安全风险：NFT 的坑往往藏在签名里

NFT 风险不只是"价格跌了"。很多损失来自签名、授权、假链接和合约漏洞。

![GameFi 安全风险示意](https://public.bnbstatic.com/static/academy/uploads/93ebfdeaf77e4f4eb3be2050043e7308.png)

常见攻击包括：

- **假 Mint 网站**：伪装成热门项目空投或白名单，诱导你连接钱包。
- **恶意授权**：让你签署 SetApprovalForAll，把整个合集授权给攻击者。
- **假合集**：名字、头像、描述相似，但合约地址不是官方。
- **元数据替换**：项目方或攻击者修改图片、属性或链接。
- **链游后端攻击**：游戏资产在链上，但服务器、RPC、桥、前端仍可被攻击。
- **跨链桥风险**：游戏资产跨链时依赖桥合约、验证者或托管资产。
- **洗售交易**：同一批地址互相买卖制造虚假成交量。

签名前要多看三件事：

1. 钱包弹窗里的操作类型，是普通登录、购买、挂单，还是全局授权？
2. 授权对象是不是官方市场合约？地址能否在区块浏览器或官方文档中核对？
3. 这次签名会不会允许对方转走整个合集、全部代币，或长期有效？

**托管型与非托管型 NFT 的选择：**

![托管型与非托管型 NFT 示意](https://public.bnbstatic.com/static/academy/uploads/7826f2d944f2494384ffbd22b7051d14.png)

| 类型 | 优点 | 缺点 | 适合谁 |
| --- | --- | --- | --- |
| 托管型平台 | 登录简单、客服支持、误操作少 | 平台风险、KYC、提现限制 | 新手、小额体验、懒得管理私钥 |
| 非托管钱包 | 自主控制资产、可直接参与链上生态 | 私钥责任、钓鱼风险、操作复杂 | 熟悉钱包、愿意做安全管理的人 |

### 11.10 如何研究一个 NFT 或链游项目

可以把 NFT 项目拆成六个维度：

| 维度 | 关键问题 |
| --- | --- |
| 资产本身 | 是艺术、会员、游戏道具、票据、身份，还是纯叙事？ |
| 团队与 IP | 团队是谁？过去做成过什么？是否有长期内容能力？ |
| 社区质量 | Discord/Twitter 是真实讨论还是刷屏抽奖？ |
| 合约与存储 | 合约是否验证？元数据是否永久？是否有可升级权限？ |
| 流动性 | 持有人数、挂单深度、成交频率、巨鲸集中度如何？ |
| 权益兑现 | Roadmap 已经兑现多少？权益是否依赖中心化承诺？ |

再加一个更现实的二级市场检查：

- **地板价走势**：看 30 天、90 天、1 年，不只看今天。
- **成交量**：有没有真实成交，还是只有挂单。
- **持有人分布**：前 10/50 个地址占比是否过高。
- **挂单墙**：地板价附近有多少枚，向上是否很薄。
- **版税和创作者收入**：项目是否还有持续收入支持运营。
- **社群活跃度**：活动、开发更新、二创内容是否持续。

**链游项目额外看三项：**

1. 日活和留存，而不是只看 NFT 销售额。
2. 游戏内代币的消耗场景，而不是只看奖励发放。
3. 安全审计、桥安全、后端服务器和反作弊机制。

### 11.11 本章小结

NFT 的真正价值不在"图片能不能复制"，而在"某个唯一凭证能否连接到真实权益、真实社群、真实内容或真实资产"。它可以是艺术收藏、会员卡、游戏道具、音乐权益、身份凭证、门票、房产证书，也可以只是下一轮泡沫里的昂贵头像。

铭文和 Runes 把类似问题带到比特币生态，让最保守的链也开始讨论资产表达和区块空间市场。链游把所有权带进游戏，但好游戏仍然要先好玩。动态 NFT、SBT、RWA-NFT 则把 NFT 从"静态收藏品"推向更复杂的身份、状态和现实权益。

对普通投资者来说，NFT 最重要的不是追热点，而是分清三件事：

1. 我买的是链上凭证、文化叙事、会员权益、游戏资产，还是现实权利？
2. 这个权利由谁兑现，靠代码、平台、项目方，还是法律？
3. 如果明天没有买家，我是否仍愿意持有它？

### 11.12 实操：铸造 (Mint) 和交易一个 NFT

1. **铸造**：在任何支持 NFT 的市场 (OpenSea、Binance NFT、Magic Eden) 点击 "Create"，上传图片、填元数据、选择链。第一次铸造通常只签名不花钱 (Lazy Mint)，被买入时才真正上链。
2. **交易**：挂单时需要授权市场合约操作你的 NFT。注意授权额度和时效。
3. **确权**：链上任何人都能看到这个 Token ID 在哪个地址下，**但并不证明你拥有原作品版权**——版权归属由项目方的法律文件决定。

建议用小额、低 Gas 链完成一次完整流程：

1. 新建一个专用测试钱包，不用主钱包。
2. 选择一个低成本链和官方市场。
3. 上传一张自己有权使用的图片。
4. 设置名称、描述、属性和版税。
5. Mint 后在区块浏览器查看合约、Token ID 和持有人地址。
6. 用另一个钱包小额购买或转移。
7. 回到钱包授权管理工具，撤销不再需要的授权。

### 11.13 常见误区与风险提醒

- **"NFT = 图片"**：法律上"买 NFT 不等于买版权"。多数项目只给你"展示权 + 商用权 (有限)"。
- **"地板价就是资产价值"**：地板价只是最低挂单，不代表真实可成交价格。
- **"蓝筹 NFT 不会归零"**：蓝筹也可能长期阴跌、失去流动性或被新叙事替代。
- **"链上资产就完全属于我"**：游戏服务器、前端、桥、元数据、许可协议仍可能中心化。
- **假铸造钓鱼**：装作"热门项目的免费 Mint"，其实是授权骗局。
- **GameFi 死亡循环**：代币早期因需求上涨，后期随玩家疲劳崩溃。识别 Ponzi 特征。
- **动态 NFT 依赖中心化数据源**：如果后端服务关掉，NFT 就会"死掉"。
- **铭文转账误操作**：不了解 UTXO 管理，可能把带铭文的聪当普通 BTC 花掉。
- **RWA-NFT 法律错觉**：链上凭证不自动等于现实世界可执行产权。

### 11.14 检查清单与练习

- [ ] 在一个低 Gas 链上花几美元体验一次 Mint + 交易。
- [ ] 挑一个你感兴趣的 NFT 项目，查它的 Creator 地址活跃度、地板价走势、持有者集中度。
- [ ] 看一次"版税收入走势"——这比地板价更能看清项目热度。
- [ ] 写下你认为 NFT 真正会保留下来的 3 种用例，和不会的 3 种。
- [ ] 找一个 NFT 项目的 License，写下它是否允许商用、是否随 NFT 转让而终止。
- [ ] 选择一个铭文或 Runes 资产，查清楚它依赖的钱包、市场和索引器。
- [ ] 找一款链游，判断它没有代币奖励时是否仍然好玩。
- [ ] 用 Revoke.cash 或对应链的授权工具检查一次自己的 NFT 授权。

### 11.15 延伸阅读与引用链接

**本章主要参考素材（来自本项目 `output`）：**

- [关于 NFT 不可不知的 7 件事](https://www.binance.com/zh-CN/academy/articles/7-things-you-should-know-about-nfts)
- [七大 NFT 用例](https://www.binance.com/zh-CN/academy/articles/top-7-nft-use-cases)
- [什么是 Ordinals？比特币 NFT 概述](https://www.binance.com/zh-CN/academy/articles/what-are-ordinals-an-overview-of-bitcoin-nfts)
- [比特币符文介绍](https://www.binance.com/zh-CN/academy/articles/what-are-bitcoin-runes)
- [什么是 Bitcoin Stamps？](https://www.binance.com/zh-CN/academy/articles/what-are-bitcoin-stamps)
- [什么是 GameFi 及其运作原理？](https://www.binance.com/zh-CN/academy/articles/what-is-gamefi-and-how-does-it-work)
- [GameFi 有哪些常见的安全问题？](https://www.binance.com/zh-CN/academy/articles/what-are-the-common-security-issues-in-gamefi)
- [动态 NFT 是什么以及如何发生变化？](https://www.binance.com/zh-CN/academy/articles/what-is-a-dynamic-nft-and-how-does-it-change-over-time)
- [什么是魂缚代币 SBT？](https://www.binance.com/zh-CN/academy/articles/what-are-soulbound-tokens-sbt)
- [NFT 借贷及其运作原理介绍](https://www.binance.com/zh-CN/academy/articles/what-are-nft-loans-and-how-do-they-work)
- [托管型与非托管型 NFT 对比](https://www.binance.com/zh-CN/academy/articles/custodial-vs-non-custodial-nfts-what-s-the-difference)
- [元宇宙中的 NFT 虚拟土地是什么？](https://www.binance.com/zh-CN/academy/articles/what-is-nft-virtual-land-in-the-metaverse)
- [如何制作你的专属 NFT](https://www.binance.com/zh-CN/academy/articles/how-to-make-your-own-nfts)

**补充官方与数据来源：**

- [ethereum.org：ERC-721 非同质化代币标准](https://ethereum.org/developers/docs/standards/tokens/erc-721/)
- [ethereum.org：ERC-1155 多代币标准](https://ethereum.org/developers/docs/standards/tokens/erc-1155/)
- [EIP-721：Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)
- [EIP-1155：Multi Token Standard](https://eips.ethereum.org/EIPS/eip-1155)
- [Ordinal Theory Handbook：Inscriptions](https://docs.ordinals.com/inscriptions.html)
- [Ordinal Theory Handbook：Runes](https://docs.ordinals.com/runes.html)
- [DappRadar：State of the Dapp Industry Q3 2025](https://dappradar.com/blog/state-of-the-dapp-industry-q3-2025/)
- [DappRadar：State of Blockchain Gaming Q3 2025](https://dappradar.com/blog/state-of-blockchain-gaming-q3-2025)
- [Yuga Labs：BAYC Avatar License Terms](https://yuga.com/3d-avatar-terms)

---

## 第十二章 DAO、SocialFi、DePIN、AI 与 Web3 新应用

### 本章目标
- 把 DAO、SocialFi、DePIN、AI Agent、DeSci、去中心化存储与身份等新叙事放进同一张地图
- 学会区分"短期代币故事"和"长期可用产品"
- 建立一套判断新应用的基本框架：需求、网络效应、经济模型、治理、数据与风险
- 看到一个新项目时，能用 30 分钟做出第一轮质量判断

### 12.1 读者先要解决的问题

每轮牛市都会有新叙事："DAO 取代公司"、"SocialFi 取代微博推特"、"DePIN 取代运营商"、"AI Agent 让机器来交易"、"DeSci 改造科研融资"。新叙事最迷人的地方，是它们通常真的抓住了某个现实痛点；最危险的地方，是它们也最容易把痛点包装成估值。

所以，本章不做"哪个赛道一定成功"的预测。更实用的问题是：当你看到一个新概念时，如何判断它到底是：

1. **基础设施升级**：真的降低成本、提高效率，未来会被很多应用使用；
2. **网络效应产品**：只有用户足够多才有价值，早期增长很难，但一旦起来会很强；
3. **补贴型游戏**：靠代币激励制造短期活跃，补贴停止后迅速冷却；
4. **纯叙事资产**：产品还没有，估值先跑到天上。

![AI 代理与 Web3 新应用示意](https://public.bnbstatic.com/static/academy/uploads/91b7cf40629b4cf2b0007a71acfcb085.jpg)

一个很实用的原则是：**新叙事先不要问"会不会涨"，先问"没有代币奖励时，还有谁愿意用"。** 如果答案是"几乎没人"，那它更像一轮流动性游戏；如果答案是"开发者、创作者、企业或普通用户确实能省钱、省时间、获得新能力"，才值得继续研究。

### 12.2 核心概念与最小知识包

先把几个词放到同一张表里：

| 赛道 | 一句话理解 | 主要用户 | 核心价值 | 最常见风险 |
| --- | --- | --- | --- | --- |
| DAO | 用智能合约、代币和论坛协作管理组织、协议或金库 | 协议团队、代币持有人、贡献者 | 公开治理、透明金库、全球协作 | 低投票率、鲸鱼治理、执行低效 |
| SocialFi | 把身份、内容、粉丝关系和收益分配放到链上 | 创作者、粉丝、社区运营者 | 内容所有权、创作者变现、社交图谱可迁移 | 没有真实社交需求，补贴结束即流失 |
| DePIN | 用代币激励用户提供现实世界基础设施 | 节点运营者、企业客户、开发者 | 低成本部署网络、存储、算力、传感器 | 硬件回本陷阱、需求不足、监管复杂 |
| AI × Crypto | 让 AI 使用链上身份、支付、数据、算力和合约 | 开发者、交易者、企业、AI 代理 | 可验证数据、自动结算、自主执行 | 私钥安全、幻觉、权限过大、合规责任 |
| DeSci | 用 Web3 改善科研融资、发表、数据共享和声誉 | 研究人员、资助者、患者组织 | 开放数据、透明资助、可追踪贡献 | 法律与伦理复杂、成果周期长 |
| 去中心化存储/身份 | 把数据、文件、身份凭证从平台迁回用户或开放网络 | DApp、创作者、机构、普通用户 | 抗单点故障、数据可移植、隐私证明 | 体验差、成本波动、密钥管理难 |

这里的关键不是背术语，而是理解它们服务的是不同层级：

- **组织层**：DAO 解决"谁来决定、钱怎么花、规则怎么改"。
- **应用层**：SocialFi、DeSci 解决具体场景里的协作与收益分配。
- **基础设施层**：DePIN、去中心化存储、身份、隐私解决底层资源问题。
- **自动化层**：AI Agent 把链上操作从"人点按钮"推向"软件按授权执行"。

越靠近基础设施，短期越难被普通用户感知，但一旦成功，价值会被很多应用共享。越靠近消费应用，增长可能更快，但也更容易被用户习惯和平台网络效应卡住。

### 12.3 DAO：从"投票社区"到"链上组织"

![DAO 治理示意图](https://public.bnbstatic.com/static/academy/uploads/b501e161978149bfaa3a148124bd19bd.jpg)

DAO 的字面意思是 Decentralized Autonomous Organization，去中心化自治组织。直觉上，你可以把它理解成一种"有公共金库、有成员、有规则、有投票机制的互联网组织"。

一个最小 DAO 通常包含四层：

| 层级 | 组件 | 作用 |
| --- | --- | --- |
| 资产层 | 多签钱包、链上金库、治理代币 | 持有资金，决定谁有表决权 |
| 讨论层 | 论坛、Discord、Telegram、治理平台 | 提案讨论、社区辩论、信息披露 |
| 投票层 | Snapshot、Tally、Governor 合约 | 表达偏好或直接执行链上投票 |
| 执行层 | 多签执行、Timelock、智能合约升级 | 让投票结果真正改变参数或转移资金 |

很多人误以为 DAO 就是"没有老板"。现实更复杂：多数 DAO 仍然有核心开发团队、基金会、活跃代表、专业服务商和大额持币人。真正不同的是，DAO 把更多过程公开化了：提案在哪里、谁支持、谁反对、金库怎么动、参数怎么改，理论上都可以被外部观察。

#### DAO 适合做什么？

DAO 比较适合三类事情：

1. **管理协议参数**：比如借贷协议的抵押率、清算参数、手续费分配。
2. **分配公共资金**：比如生态基金、开发者补助、黑客松奖金。
3. **协调开放贡献者**：比如文档、社区、数据分析、开发工具、研究报告。

DAO 不太适合需要强保密、强实时、强责任人的事情。例如商业谈判、危机公关、复杂产品路线图，完全公开讨论反而会拖慢节奏。这也是为什么很多成熟 DAO 会采用"核心团队 + 委员会 + 社区监督"的混合结构，而不是所有事情都让几万人投票。

#### DAO 的真实难题

DAO 的风险不是"技术能不能投票"，而是"社会系统能不能正常运转"：

- **投票冷漠**：多数持币者不愿意读长提案，尤其是收益不明显的小提案。
- **鲸鱼治理**：一币一票容易变成一钱一票，大户或机构能影响结果。
- **代表委托失灵**：代表拿到投票权后，是否持续研究、是否披露利益冲突，是长期问题。
- **治理攻击**：攻击者可能借入或买入治理代币，通过恶意提案转移资金或更改参数。
- **执行责任模糊**：投票通过不等于有人把事情做好。DAO 经常卡在"通过了，但谁负责交付"。

分析 DAO 时，别只看"社区人数"，更要看提案质量、投票参与、金库资产结构和执行记录。一个只有热闹群聊但没有高质量提案和交付的 DAO，本质上只是带代币的兴趣小组。

### 12.4 SocialFi：把社交关系变成可拥有的资产

![SocialFi 内容与关系网络示意](https://public.bnbstatic.com/static/academy/uploads/f7225df37d9c4a0d88f8682441a550ad.jpg)

SocialFi 是 Social + Finance，核心想法是把社交媒体里的身份、内容、粉丝关系、打赏和会员权益，变成用户可控制、可迁移、可组合的链上资产。

传统社交平台里，创作者经常遇到三类问题：

1. **数据不属于自己**：粉丝关系存在平台数据库里，换平台就几乎归零。
2. **分成规则不透明**：平台能调整推荐算法、广告分成、封禁规则。
3. **变现路径单一**：广告、带货、会员、打赏都依赖平台接口。

SocialFi 试图提供另一种模型：用户用钱包或去中心化身份登录；内容、关注关系、创作者权益、会员资格可以由 NFT、代币或开放协议承载；不同前端应用可以读取同一套社交图谱。Farcaster、Lens、Mirror、Friend.tech、Stars Arena、Towns 等项目，都在不同角度探索这个方向。

#### SocialFi 的三种产品形态

| 形态 | 代表功能 | 判断重点 |
| --- | --- | --- |
| 去中心化社交协议 | 关注关系、账号、内容索引、开放客户端 | 开发者是否愿意基于它做应用 |
| 创作者金融 | 会员、付费内容、社群门票、打赏、众筹 | 创作者能否获得比 Web2 更好的收入 |
| 社区资产化 | 群组权益、声誉、任务、积分、空投资格 | 是否创造真实协作，而不只是刷积分 |

SocialFi 最难的地方是迁移成本。普通用户不是因为"数据所有权"才打开社交软件，而是因为朋友、信息源、创作者和实时讨论都在那里。因此 SocialFi 若想留住用户，必须至少满足一个条件：

- 提供 Web2 做不到的所有权和收益分配；
- 让创作者更容易赚到钱；
- 让用户带着身份和关系跨应用移动；
- 让社区协作、任务、凭证和奖励更自然地连接起来；
- 或者在某个垂直场景里比传统平台好用很多。

如果一个 SocialFi 项目的主要卖点是"发帖挖矿"，你要格外谨慎。内容质量、关系密度和留存曲线，比短期日活更重要。

### 12.5 DePIN：把物理世界接到链上

![DePIN 与实体基础设施示意](https://public.bnbstatic.com/static/academy/uploads/bbe2e2771e1e4f31b1067cbd0dbfa8b8.jpg)

DePIN 是 Decentralized Physical Infrastructure Networks，去中心化物理基础设施网络。它的逻辑是：现实世界的网络、存储、算力、地图、传感器、能源等基础设施，过去通常由大公司集中建设；现在可以让大量个人或小团队提供资源，协议用代币激励他们加入，再把这些资源卖给真实需求方。

常见 DePIN 类型包括：

| 类型 | 资源 | 代表项目或方向 | 需求方 |
| --- | --- | --- | --- |
| 存储 | 硬盘空间、数据可用性 | Filecoin、Arweave、BNB Greenfield | DApp、内容平台、企业备份 |
| 算力 | GPU、CPU、渲染、AI 推理 | Render、Akash、Bittensor 相关生态 | AI、游戏、影视、开发者 |
| 无线网络 | 5G、IoT、WiFi 覆盖 | Helium 等 | 设备厂商、移动用户、物联网 |
| 地图与传感器 | 行车数据、环境数据、地理数据 | Hivemapper、WeatherXM 等 | 地图服务、城市管理、保险 |
| 能源 | 分布式电力、充电网络 | 能源类 DePIN 仍较早期 | 电网、社区、车主 |

DePIN 的优点是故事很硬：它不是只在链上交换数字资产，而是试图降低现实基础设施的部署成本。它的难点也很硬：硬件要买、设备要维护、服务质量要验证、用户要愿意付费，监管还可能介入。

#### DePIN 飞轮：从补贴到真实需求

一个健康的 DePIN 飞轮大致长这样：

1. 协议发行代币，激励早期节点提供资源。
2. 资源覆盖提升，网络可用性变好。
3. 真实用户为存储、带宽、算力或数据付费。
4. 费用通过燃烧、回购、分配或抵押需求进入代币经济。
5. 节点收入逐渐从"通胀补贴"转向"真实使用收入"。

这个飞轮的薄弱点通常在第 3 步。很多项目能用补贴堆出供应，却堆不出需求。比如矿机卖出去了、节点上线了、地图车跑起来了，但付费客户太少，代币价格一跌，节点就停机，网络质量继续下降。

所以看 DePIN，必须拆单位经济：

- 节点硬件多少钱？
- 每月电费、带宽、维护成本多少？
- 奖励来自通胀还是真实收入？
- 真实客户是谁？是企业客户、开发者，还是项目方自己补贴？
- 服务质量如何验证？有没有作弊空间？
- 需求增长是否能覆盖新增代币释放？
- 代币下跌 70% 后，节点是否还愿意继续提供服务？

真正值得关注的 DePIN，不是"矿机回本最快"的项目，而是"客户愿意持续付费"的网络。

### 12.6 AI × Crypto：让机器拥有身份、钱包、数据与支付能力

AI 和 Crypto 的结合很容易被炒成口号，但它背后确实有几条清晰的产品线。

| 方向 | Crypto 提供什么 | AI 需要什么 | 典型问题 |
| --- | --- | --- | --- |
| AI Agent + 钱包 | 可编程资产、签名、权限控制 | 自动执行交易和任务 | 谁授权？错了谁负责？ |
| 代理支付 | 稳定币、链上结算、审计轨迹 | 机器对机器小额支付 | 如何防止代理乱花钱？ |
| 去中心化算力 | GPU 市场、任务结算、节点激励 | 训练、推理、渲染 | 性能、价格、可靠性 |
| 数据市场 | 数据授权、贡献证明、收益分配 | 高质量训练数据 | 隐私、版权、数据污染 |
| 内容溯源 | 时间戳、签名、IP 许可 | 识别来源、防伪、授权 | 链下内容如何可靠绑定 |
| 可验证计算 | ZK、TEE、证明系统 | 证明模型或数据处理过程 | 成本和开发复杂度 |

![区块链与 AI 融合示意](https://public.bnbstatic.com/static/academy/uploads/c20eb14c67da4a31886b4a8b9e3f2ddb.png)

AI Agent 最值得新手理解。过去的自动化脚本通常只做固定动作，例如定投、网格交易、价格提醒。AI Agent 则更接近"有目标、有上下文、有工具、有钱包权限的软件代理"。它可以读取市场数据、调用 API、比较策略、发起交易、调整组合、生成报告，甚至和其他代理协商服务。

但这里有一个非常重要的边界：**能自动执行，不等于可以托管你的钱。** AI Agent 会犯错，会被提示注入攻击，会读到错误数据，会误解目标，也可能被恶意工具诱导签名。因此，AI + 钱包必须采用最小权限原则：

- 只给小额实验钱包权限；
- 设置单笔和每日额度；
- 只允许白名单合约；
- 关键交易必须人工确认；
- 使用只读模式先观察结果；
- 记录所有 Agent 决策日志；
- 定期撤销不再需要的授权。

#### 为什么 MCP、AP2 这类协议重要？

AI Agent 要真正工作，需要三件事：上下文、授权、支付。

Anthropic 在 2024 年开源的 MCP (Model Context Protocol) 解决的是"AI 如何标准化连接外部数据和工具"的问题。Google 在 2025 年宣布的 AP2 (Agent Payments Protocol) 关注的是"AI 代理如何在可审计授权下发起支付"。这类协议不一定都直接依赖区块链，但它们让"软件代理之间交易、结算、留痕"变得更现实，而稳定币和智能合约天然适合做其中的支付与执行层。

对普通用户来说，不需要追每一个 AI 代币。更好的做法是把 AI × Crypto 拆成四个问题：

1. 这个项目服务的是 AI 的哪一层：模型、算力、数据、代理、支付、身份，还是应用？
2. 区块链是不是必要？不用链能不能更便宜、更快、更安全？
3. 代币捕获什么价值？手续费、质押、安全预算、数据贡献，还是纯治理？
4. 用户增长来自真实需求，还是来自空投、积分和二级市场情绪？

### 12.7 DeSci：科研、数据与公共物品的新融资方式

![DeSci 去中心化科学示意](https://public.bnbstatic.com/static/academy/uploads/9ed2e2f984554a159a0ee9344a564808.jpg)

DeSci 是 Decentralized Science，去中心化科学。它想解决传统科研中的几个长期问题：

- 科研经费集中在少数机构和热门方向；
- 论文发表慢，开放获取成本高；
- 数据集和实验过程难以复现；
- 研究人员的贡献难以被细粒度记录；
- 患者组织、独立研究者、小型实验室参与门槛高。

DeSci 常见做法包括：通过 DAO 为某个疾病、药物、开源实验或数据集融资；用 NFT 或代币表示研究 IP、数据访问权或资助权益；用链上声誉记录同行评审、复现实验、数据贡献；用公开金库让资助和支出更透明。

但 DeSci 不是"发个币就能改造科研"。科研成果周期长，法律责任重，伦理审查复杂，很多知识产权也无法简单代币化。它更像长期公共物品实验，不适合用短线交易思维看。判断 DeSci 项目时，要重点看：是否有真实科研团队、是否有清晰伦理和合规流程、资金是否公开透明、数据是否能被复现、贡献者是否有合理激励。

### 12.8 去中心化存储、身份与隐私：不显眼但很关键

![去中心化存储示意](https://public.bnbstatic.com/static/academy/uploads/13549fc014f34565a10ddcae38d22fbb.png)

很多 Web3 应用真正依赖的，不只是公链本身，还有三类基础设施：

**① 去中心化存储**  
NFT 图片、社交内容、前端代码、数据集、AI 模型文件，都不适合全部直接写进区块链。去中心化存储通过分布式节点保存文件，降低单点故障和平台封禁风险。IPFS、Filecoin、Arweave、BNB Greenfield 等都属于这一方向。

**② 去中心化身份**  
钱包地址可以证明"我控制这个私钥"，但不能直接证明"我是这个人"、"我有这个资格"、"我不是机器人"。去中心化身份、可验证凭证、零知识证明可以让用户在不暴露全部个人信息的情况下证明某些事实，例如年龄、会员资格、学历、链上声誉或人类唯一性。

![区块链电子身份示意](https://public.bnbstatic.com/static/academy/uploads/8516ef173e614bf28732c7006aa9f338.png)

**③ 隐私与可验证计算**  
如果所有交易、身份、社交关系、AI 代理操作都完全公开，很多应用无法进入主流场景。隐私技术包括零知识证明、可信执行环境、隐私地址、选择性披露等。它们不是为了"隐藏坏事"，而是为了让普通商业和个人数据能在链上可用。

这些方向的共同特点是：短期不一定有强烈投机叙事，但长期决定 Web3 是否能承载更复杂的应用。

### 12.9 分析框架：八问清单

每遇到一个新叙事或新项目，先问自己这 8 件事：

1. **真实需求存在吗？**  
   没有代币激励时，是否仍有人愿意使用或付费？

2. **用户是谁？**  
   是普通消费者、开发者、企业客户、节点运营者、创作者，还是纯空投用户？

3. **区块链是否必要？**  
   如果不用链，产品是否更便宜、更快、更安全？链到底解决信任、结算、所有权还是激励问题？

4. **经济模型可持续吗？**  
   收入来自真实用户，还是来自代币通胀、NFT 售卖、积分预期和二级市场接盘？

5. **代币捕获价值吗？**  
   代币是 Gas、抵押品、治理权、费用分配权，还是只是"生态象征"？

6. **治理谁说了算？**  
   核心团队、基金会、VC、鲸鱼地址、活跃代表，各自权力有多大？

7. **数据能验证吗？**  
   用户数、收入、TVL、节点数、使用量、留存、费用是否能从链上或可靠第三方交叉验证？

8. **退出路径清楚吗？**  
   代币解锁多久？流动性在哪里？硬件能否转卖？锁仓、质押、赎回有什么限制？

把这 8 个问题问完，很多项目会自然掉下去。优秀项目经得起拆，普通项目只能靠热闹维持。

### 12.10 一张横向对比表：不同新叙事该看什么指标

| 赛道 | 最值得看的指标 | 危险信号 | 好信号 |
| --- | --- | --- | --- |
| DAO | 提案数量、执行率、投票参与、金库结构、代表披露 | 提案没人读，大户一票定生死，金库全是本币 | 有专业代表、预算透明、提案执行闭环 |
| SocialFi | 日活/月活、创作者留存、内容质量、付费率、社交图谱迁移 | 发帖挖矿、机器人内容、提现后流失 | 用户无激励也回来，创作者收入增长 |
| DePIN | 真实收入、节点在线率、服务质量、客户数、硬件回本期 | 硬件销售驱动，需求端模糊，作弊严重 | 企业客户付费，节点收入来自使用费 |
| AI × Crypto | 工具调用量、付费 API、算力利用率、代理交易成功率 | 只蹭 AI 名字，没有可用产品 | 有真实开发者、可审计工作流、权限控制 |
| DeSci | 科研团队、资助记录、数据公开、复现情况、伦理合规 | 白皮书很大，科研资源很虚 | 有明确疾病/课题、公开金库、真实合作方 |
| 存储/身份/隐私 | 开发者集成数、存储量、检索成功率、凭证使用场景 | 只有概念，没有应用接入 | 被多个应用当基础设施使用 |

### 12.11 一个实战案例：如何快速判断一个 DePIN 项目

假设你看到一个新 DePIN 项目，号称"用闲置路由器建设全球边缘计算网络"，并且正在卖节点硬件。不要先看 KOL 怎么喊，按下面顺序拆：

1. **资源是否真实有用**：边缘计算客户到底是谁？游戏、AI 推理、视频 CDN、IoT，哪一个愿意付费？
2. **硬件是否通用**：如果项目失败，设备还能当普通路由器、服务器或 GPU 使用吗？
3. **覆盖是否可验证**：节点在线、带宽、延迟、地理位置有没有防作弊机制？
4. **收入结构**：节点奖励中有多少来自真实客户付款，多少来自代币释放？
5. **回本敏感性**：代币价格下跌 50%、80% 时，回本期变成多久？
6. **需求端证据**：有没有真实客户、试点协议、账单、使用量，而不是只有合作公告？
7. **监管与运营**：是否涉及通信牌照、数据跨境、能源合规、硬件进口？
8. **代币解锁**：团队、投资人、节点奖励的释放节奏是否会形成持续抛压？

如果你发现收入主要来自后来者买硬件，用户主要是为了挖币，需求方没有清晰画像，那它更像硬件版流动性游戏。反过来，如果客户愿意用稳定币或法币购买服务，节点奖励逐渐被真实收入覆盖，这个项目才开始接近健康飞轮。

### 12.12 常见误区与风险提醒

- **"叙事即价值"**：新叙事早期可以有估值泡沫，但最终要回到现金流/用户数。
- **"DAO 就是没老板"**：几乎所有运作良好的 DAO 都有事实上的核心团队。
- **"投票通过 = 项目成功"**：治理只是决策，交付还需要团队、预算、时间表和问责。
- **"SocialFi 会自然取代 Web2 社交"**：用户迁移要靠体验、关系和内容，不靠理念。
- **DePIN 硬件回本期陷阱**：有些项目用"矿机成本 + 代币补贴"画饼，代币一跌硬件根本回不了本。
- **AI Agent 自动交易**：技术可行不等于可以托管你的钱。先用只读模式和极小仓位实验。
- **"AI 代币 = AI 公司股权"**：代币通常不是股权，也不一定分享模型收入。
- **"DeSci 发币 = 科研突破"**：科研成果需要时间、实验、伦理和同行验证。
- **"去中心化存储一定永久安全"**：文件是否可用，取决于激励、冗余、检索网络和密钥管理。
- **空投耕作 (Airdrop Farming)**：投入时间大、回报不确定，容易变成给项目方贡献数据的"免费劳工"。

### 12.13 检查清单与练习

- [ ] 用 8 问清单分析一个你最近感兴趣的新叙事项目，写成一页纸。
- [ ] 挑一个 DAO，去它的论坛看最近一条重要提案，看参与度和发言质量。
- [ ] 找一个 SocialFi 产品，观察它的内容质量、真实互动和创作者留存，而不只看代币价格。
- [ ] 选择一个 DePIN 项目，估算节点成本、月收入、真实需求和代币下跌后的回本期。
- [ ] 在一个 AI Agent 平台做一次"只读"工作流，比如自动汇总市场数据，不给交易权限。
- [ ] 找一个 DeSci 项目，查看它的资助对象、金库支出、科研团队和成果披露。
- [ ] 用去中心化存储上传一份无敏感信息的小文件，记录 CID，并尝试从另一个网关访问。
- [ ] 对比自己 6 个月前的"新叙事清单"，有多少项目还活跃？

### 12.14 延伸阅读与引用链接

**本章主要参考素材（来自本项目 `output`）：**

- [什么是去中心化自治组织 DAO？](https://www.binance.com/zh-CN/academy/articles/decentralized-autonomous-organizations-daos-explained)
- [如何创建 DAO？](https://www.binance.com/zh-CN/academy/articles/how-to-create-a-dao)
- [什么是 SocialFi？](https://www.binance.com/zh-CN/academy/articles/what-is-socialfi-and-why-does-it-matter)
- [什么是加密货币领域的 DePIN？](https://www.binance.com/zh-CN/academy/articles/what-is-depin-in-crypto)
- [一文读懂 AI 代理](https://www.binance.com/zh-CN/academy/articles/what-are-ai-agents)
- [6 大人工智能 AI 加密货币](https://www.binance.com/zh-CN/academy/articles/top-artificial-intelligence-ai-cryptocurrencies)
- [区块链与人工智能的关系](https://www.binance.com/zh-CN/academy/articles/how-ai-will-influence-defi-promises-and-delusions)
- [什么是去中心化科学 DeSci？](https://www.binance.com/zh-CN/academy/articles/what-is-decentralized-science-desci)
- [什么是去中心化存储？](https://www.binance.com/zh-CN/academy/articles/what-is-decentralized-storage)
- [区块链运用案例：电子身份](https://www.binance.com/zh-CN/academy/articles/blockchain-use-cases-digital-identity)
- [一文读懂 Vana](https://www.binance.com/zh-CN/academy/articles/what-is-vana)
- [一文读懂 Virtuals Protocol](https://www.binance.com/zh-CN/academy/articles/what-is-the-virtuals-protocol-virtual)
- [一文读懂 Space and Time](https://www.binance.com/zh-CN/academy/articles/what-is-space-and-time-sxt)
- [币安 AI 代理技能：Web3 数据分析](https://www.binance.com/zh-CN/academy/articles/binance-ai-agent-skills-web3-data-analysis)

**补充官方、研究与数据来源（截至 2026-04-25）：**

- [a16z crypto：State of Crypto 2025](https://a16zcrypto.com/posts/article/state-of-crypto-report-2025/)
- [Google Cloud：Agent Payments Protocol AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- [Anthropic：Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)
- [Frontiers in Blockchain：Decentralized physical infrastructure networks tokenomics](https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2025.1644115/full)
- [Snapshot X：on-chain governance protocol](https://docs.snapshot.box/snapshot-x/overview)
- [Tally：DAO governance interface](https://www.tally.xyz/)
- [DeepDAO：DAO analytics](https://deepdao.io/)

---

## 第十三章 如何研究一个项目

### 本章目标
- 把 "DYOR" 拆成可执行的研究流程，而不是停留在口号层面。
- 学会阅读白皮书、路线图、代币经济、链上数据、收入结构、审计报告和社区治理。
- 能够区分"好故事"、"好产品"、"好代币"和"好价格"这四件事。
- 形成一套项目研究模板、评分表和退出触发条件。

![项目研究与基本面分析示意](https://public.bnbstatic.com/static/academy/uploads/7d1e059aae0b49ffbfa59dbea5be8408.jpg)

### 13.1 读者先要解决的问题

"DYOR (Do Your Own Research)" 不是一句免责口号，而是一套具体方法。它既不是"看 Twitter 大 V 推"，也不是"读技术文档读到睡着"。真正的项目研究要回答三个问题：

1. **它解决了真实问题吗？**
2. **它的增长能否被数据验证？**
3. **这个代币是否真的能捕获项目价值？**

很多新手会把这三个问题混在一起。例如，一个协议可能产品很好，但代币分配很差；一个项目可能社区很热闹，但真实用户很少；一个代币可能价格短期上涨，但上涨来自低流通盘和营销，而不是可持续收入。研究项目的第一步，就是把"项目"和"代币"分开看。

你可以把项目研究想象成一层层过滤：

```text
市场叙事
  ↓  这件事是否值得做？
产品与用例
  ↓  项目是否真的做出来了？
团队与执行
  ↓  谁在做？有没有持续交付？
代币经济
  ↓  代币为什么需要存在？谁会卖？谁会买？
链上与财务数据
  ↓  用户、收入、TVL、费用是否匹配叙事？
风险与估值
  ↓  当前价格是否已经透支未来？
最终动作
  ↓
不看 / 观察 / 小额试仓 / 纳入组合 / 退出
```

本章不是教你预测价格，而是教你减少低级错误：少买"只有故事没有数据"的项目，少被高 APY、低流通盘、高 FDV、机器人社区和漂亮白皮书误导。

### 13.2 先做 30 分钟快筛，再做深度研究

研究项目最怕两种极端：一种是看到热度就买，另一种是还没判断项目值不值得研究，就花三天读文档。更实用的方法是分层推进。

#### 第一层：30 分钟快筛

适合刚听到一个项目名字时使用。目标不是得出投资结论，而是决定"要不要继续研究"。

| 问题 | 快速判断方式 | 直接淘汰信号 |
| --- | --- | --- |
| 项目做什么 | 官网一句话、白皮书摘要、产品页面 | 解释半天仍不知道解决什么问题 |
| 是否已有产品 | 官网 App、GitHub、链上合约、Dune/DeFiLlama 数据 | 只有路线图，没有任何可验证交付 |
| 团队是谁 | 官网、LinkedIn、GitHub、历史项目 | 团队信息模糊且没有可信背书 |
| 代币有什么用 | 文档中的 token utility、治理、手续费、质押 | 只有"未来治理"，没有价值捕获 |
| 风险是否明显 | 审计、锁仓、合约权限、前十大持仓 | 未审计 + 高收益 + 高度中心化 |

#### 第二层：3 小时基础研究

如果项目通过快筛，就进入基础研究。这个阶段要看四类材料：

- **项目原始材料**：白皮书、技术文档、路线图、代币经济文档、治理论坛。
- **链上数据**：活跃地址、交易量、TVL、费用、收入、合约交互、持币集中度。
- **第三方数据**：CoinGecko、CoinMarketCap、DeFiLlama、Token Terminal、Token Unlocks、Dune、Nansen、Arkham 等。
- **风险材料**：审计报告、漏洞赏金、历史攻击、权限说明、监管风险、竞品替代风险。

#### 第三层：持续跟踪

项目研究不是一次性动作。你真正需要建立的是"跟踪机制"：

- 每周看一次：价格、TVL、费用、收入、活跃用户、开发进度。
- 每月看一次：代币解锁、治理提案、竞品变化、收入结构。
- 每季度看一次：路线图是否兑现、核心指标是否增长、叙事是否变化。

如果你无法持续跟踪一个项目，就不应该给它过高仓位。

### 13.3 白皮书：先看承诺，再找证据

![白皮书研究示意](https://public.bnbstatic.com/static/academy/uploads/e7c2b8b81cc84f43a6702346c9eda10d.png)

白皮书通常是项目研究的入口。它会介绍项目目标、技术方案、代币经济、路线图和团队愿景。但要记住：白皮书是项目方写给外界看的，它天然带有营销倾向。阅读白皮书时，不要问"它写得好不好"，而要问"它有没有可验证的承诺"。

#### 13.3.1 读白皮书的五个抓手

| 抓手 | 你要找什么 | 风险信号 |
| --- | --- | --- |
| 问题定义 | 项目解决的痛点是否具体 | 只说"重塑金融""连接万物" |
| 解决方案 | 为什么必须用区块链 | 链下数据库就能解决，却硬套代币 |
| 技术路线 | 架构、共识、合约、数据来源 | 只有概念，没有实现细节 |
| 代币经济 | 供应、分配、解锁、用途 | 代币只用于激励，没有真实需求 |
| 路线图 | 时间表和里程碑 | 过度宏大，缺少可检查节点 |

#### 13.3.2 好白皮书和危险白皮书的区别

好白皮书通常有三个特征：

- **具体**：讲清楚用户是谁、痛点是什么、为什么现有方案不够好。
- **可验证**：路线图、合约、测试网、代码库、指标都能被外部验证。
- **克制**：承认限制和风险，不把所有行业问题都说成自己能解决。

危险白皮书也有三个常见特征：

- **大词很多**：AI、RWA、DePIN、ZK、GameFi、SocialFi 都往里放，但没有清晰产品。
- **承诺过满**：既要高收益，又要零风险；既要完全去中心化，又由团队单方面控制。
- **缺少经济闭环**：说代币会升值，却没有解释谁会持续买入、为什么需要持有。

#### 13.3.3 路线图不是愿望清单

路线图要和历史交付一起看。一个项目如果过去 12 个月持续延迟、频繁改方向、核心功能长期停留在"即将上线"，就不能仅凭下一季度路线图给高分。

你可以用下面的问题检查路线图：

- 过去承诺的功能，有多少按期交付？
- 交付的是可用产品，还是只发了公告？
- 主网、测试网、审计、激励计划、合作伙伴是否有链上或第三方证据？
- 路线图是否和代币解锁节奏高度重合？如果大额解锁前频繁发布利好，要更谨慎。

### 13.4 产品与市场：它到底是不是一个真实需求？

项目研究的核心不是"这个赛道热不热"，而是"这个项目在赛道里有没有不可替代性"。

你可以按三层来判断：

```text
需求层：用户为什么需要它？
  ↓
替代层：不用它，用户还能用什么？
  ↓
优势层：它比替代方案好在哪里？
```

#### 13.4.1 区分四种需求

| 需求类型 | 例子 | 判断重点 |
| --- | --- | --- |
| 原生链上需求 | DEX、借贷、稳定币、预言机、跨链桥 | 是否有真实交易、收入和流动性 |
| 链下迁移需求 | RWA、支付、供应链、身份 | 是否解决合规、托管、数据真实性 |
| 娱乐与文化需求 | NFT、链游、meme、社交资产 | 社区留存和内容生产能力 |
| 基础设施需求 | L1/L2、数据可用性、RPC、索引、钱包 | 开发者采用和生态依赖 |

不同类型项目不能用同一套指标硬套。例如，DEX 看交易量、深度和手续费收入；链游看日活、留存和付费；L2 看交易数、费用、开发者和生态项目；DePIN 看真实设备、地理覆盖和付费需求。

#### 13.4.2 竞争分析不要只比口号

比较竞品时，至少列出三类竞争对手：

- **链上直接竞品**：同赛道协议，例如两个借贷协议。
- **链上替代方案**：功能不同但解决同一问题，例如 DEX 聚合器替代单一 DEX。
- **链下替代方案**：用户可能根本不需要链上产品，例如传统支付、云服务、中心化交易所。

一份有效的竞品表可以这样写：

| 维度 | 项目 A | 竞品 B | 竞品 C | 结论 |
| --- | --- | --- | --- | --- |
| 核心用户 | | | | |
| 主要功能 | | | | |
| 费用结构 | | | | |
| 流动性/用户规模 | | | | |
| 安全记录 | | | | |
| 代币价值捕获 | | | | |

如果项目的优势只能写成"社区更强""体验更好""未来空间更大"，但没有数据支撑，就先把评分调低。

### 13.5 团队、融资与执行：谁在做，钱从哪来

团队研究不是八卦，而是判断执行能力和道德风险。

#### 13.5.1 团队背景怎么查

可以从这些地方开始：

- 官网团队介绍、LinkedIn、GitHub、X/Twitter、Medium、Mirror。
- 过往项目是否真实存在，是否有用户，是否有退出或失败记录。
- 核心开发者是否长期提交代码，还是只有市场人员在发声。
- 创始人是否能清晰解释产品，而不是只会讲价格和上市。

匿名团队不一定是骗局，实名团队也不一定可靠。但匿名团队会提高追责难度，所以必须用更强的链上数据、代码质量、审计、时间沉淀和社区信誉来补偿。

#### 13.5.2 投资人与融资不是免死金牌

知名机构参与可以提高项目可信度，但不能替代研究。你要看的不是"有没有大机构"，而是：

- 投资轮次和估值是多少？
- 私募价格和当前市场价格差多少？
- 投资人、团队、顾问的锁仓和解锁节奏如何？
- 投资人是否长期深耕该赛道，还是只参与短期热点？

一个常见陷阱是：项目基本面一般，但因为融资估值高，散户误以为"机构都投了，所以便宜不了"。事实上，如果流通盘很低、FDV 很高，二级市场买家可能是在为早期低成本筹码接盘。

### 13.6 代币经济：最容易被包装，也最需要算账

![代币经济学示意](https://public.bnbstatic.com/static/academy/uploads/b84ed1d470414013b45ffc0df298bf00.jpg)

代币经济学不是看一个饼图漂不漂亮，而是回答四个问题：

1. **供应从哪里来？**
2. **谁拿了多少？什么时候能卖？**
3. **代币有什么真实用途？**
4. **项目收入能否回到代币价值？**

#### 13.6.1 三个市值概念必须分清

| 指标 | 公式 | 用途 |
| --- | --- | --- |
| 流通市值 | 当前价格 × 流通供应量 | 看当前市场对可交易筹码的定价 |
| FDV 完全稀释估值 | 当前价格 × 最大供应量 | 看所有代币释放后的理论估值 |
| MC/FDV 比值 | 流通市值 ÷ FDV | 看未来稀释压力 |

如果一个项目流通市值 1 亿美元，FDV 20 亿美元，说明当前只有很小部分代币在市场流通。价格上涨时看起来很轻，但未来解锁会带来持续抛压。低流通盘 + 高 FDV 是新手最容易忽略的组合。

#### 13.6.2 代币分配看什么

| 分配对象 | 重点问题 | 风险信号 |
| --- | --- | --- |
| 团队 | 占比、锁仓、归属期 | 团队占比过高且很快解锁 |
| 投资人 | 成本、轮次、解锁节奏 | 私募成本远低于市场价 |
| 社区/空投 | 领取条件、抛压、留存 | 空投用户没有后续使用动力 |
| 生态基金 | 谁控制、如何拨款 | 名义上给生态，实际由团队自由支配 |
| 流动性激励 | 奖励来源、持续时间 | APY 靠增发堆出来 |

#### 13.6.3 代币效用要分真假

弱效用：

- "未来可以治理"。
- "持有可以获得身份"。
- "生态越大，代币越有价值"。

强效用：

- 必须用它支付 Gas 或服务费用。
- 质押它可以获得协议真实收入的一部分。
- 锁定它能获得明确的产品权益，而且这些权益有真实需求。
- 它参与系统安全，例如 PoS 验证、预言机质押、保险基金。

治理本身不是价值捕获。很多治理代币只能投票，不能分享收入，也不能降低费用，更不能强制用户购买。遇到这类代币，要把项目价值和代币价值分开评估。

#### 13.6.4 解锁日历是项目研究的必看项

代币解锁经常解释很多"看起来没理由"的下跌。研究时至少记录：

- 未来 30 / 90 / 180 天解锁数量。
- 解锁对象是团队、投资人、生态，还是社区激励。
- 解锁数量占当前流通量比例。
- 解锁前后项目是否密集发布利好。

一个简单判断：

```text
单次解锁量 / 当前流通量 > 5%：需要重点关注
单次解锁量 / 当前流通量 > 10%：需要重新评估仓位
连续多月大额解锁：除非基本面高速增长，否则谨慎加仓
```

### 13.7 链上数据：用指标验证故事

![DeFi 项目分析示意](https://public.bnbstatic.com/static/academy/uploads/1fa81414b4ce4bdba7ec8fc3421b5dcf.png)

链上数据的价值在于，它能让你看到项目公告之外的真实行为。但链上数据也会被刷量、空投预期和激励扭曲，所以不能只看单个指标。

#### 13.7.1 不同赛道看不同指标

| 项目类型 | 核心指标 | 辅助指标 | 容易误读的地方 |
| --- | --- | --- | --- |
| DEX / AMM | 交易量、手续费、流动性深度、滑点 | TVL、LP 收益、交易对数量 | 刷量会制造虚假繁荣 |
| 借贷协议 | 存款、借款、利用率、坏账、清算 | 抵押品结构、利率曲线 | TVL 高但借款少，说明需求弱 |
| L1 / L2 | 交易数、活跃地址、费用、开发者 | 稳定币供应、DApp 数量 | 低费用链容易刷交易 |
| 跨链桥 | 跨链量、净流入、支持资产 | 安全模型、历史事故 | 桥 TVL 高不等于安全 |
| NFT / GameFi | 日活、留存、交易额、持有人 | 地板价、创作者活跃度 | 地板价可被少量成交拉动 |
| DePIN | 设备数、覆盖区域、付费客户 | 单设备收入、硬件成本 | 设备数增长不等于真实需求 |

#### 13.7.2 指标之间要互相印证

一个健康项目通常不是单点数据好，而是多项数据能互相解释：

```text
真实用户增长
  →  交易量 / 使用次数增长
  →  费用或收入增长
  →  流动性改善
  →  留存上升
  →  代币激励依赖下降
```

反过来，如果你看到的是：

```text
APY 升高
  →  TVL 暴涨
  →  代币排放增加
  →  收入没有增长
  →  用户一旦奖励下降就离开
```

这更像是补贴驱动，而不是产品市场匹配。

#### 13.7.3 常用指标速查

| 指标 | 含义 | 研究时怎么用 |
| --- | --- | --- |
| TVL | 锁定在协议中的资产价值 | 看流动性和用户信任，但不要单独使用 |
| Fees | 用户支付的总费用 | 看用户愿不愿意为服务付钱 |
| Revenue | 协议捕获的费用 | 看协议是否有商业模式 |
| Active Users | 与核心合约交互的地址数 | 看真实使用，但需防刷量 |
| Token Incentives | 发给用户的代币补贴 | 和收入对比，判断增长是否靠补贴 |
| P/S | 市值 / 年化收入 | 与同赛道项目比较估值 |
| Mcap/TVL | 市值 / TVL | DeFi 项目常用相对估值指标 |

### 13.8 收入、真实收益与可持续性

很多项目会宣传 APY，但研究时更应该问：**收益从哪里来？**

DeFi 项目的收入通常来自交易费、借款利息、清算费、管理费、业绩费、排序器收入、服务订阅等。不同协议的收入归属不同，有的给 LP，有的进金库，有的给代币质押者，有的完全不回到代币。

#### 13.8.1 费用、收入、利润不要混

| 概念 | 简化理解 | 常见误区 |
| --- | --- | --- |
| Fees | 用户总共付了多少钱 | 把全部费用都当成协议收入 |
| Supply-side fees | 给 LP、验证者、服务提供者的钱 | 忽略这些成本，高估协议利润 |
| Revenue | 协议自己留下的钱 | 以为收入一定回到代币 |
| Token incentives | 协议发出去的补贴 | 把补贴当成真实收益 |
| Earnings | 收入扣除激励后的净结果 | 忽略代币稀释 |

#### 13.8.2 真实收益的粗略公式

```text
真实收益盈余 = 协议收入 - 发放给用户的奖励价值
```

如果一个协议每月收入 50 万美元，但每月发放 200 万美元治理代币奖励，那么高 APY 很可能来自稀释，而不是业务收入。短期可以靠补贴拉新，长期必须回到真实需求和收入。

#### 13.8.3 一个简化案例

假设某 DEX 的数据如下：

| 项目 | 数值 |
| --- | --- |
| 30 日交易量 | 10 亿美元 |
| 平均交易费率 | 0.05% |
| 30 日总费用 | 50 万美元 |
| 协议收入占比 | 20% |
| 30 日协议收入 | 10 万美元 |
| 30 日代币激励 | 60 万美元 |

那么它的真实收益盈余为：

```text
10 万美元 - 60 万美元 = -50 万美元
```

这不代表项目一定不行，但说明当前增长高度依赖补贴。你接下来要问：补贴下降后，交易量还能留下多少？如果答案是不知道，就不要把它当成成熟现金流项目估值。

### 13.9 技术、安全与权限：审计不是绝对安全

![DeFi 风险识别示意](https://public.bnbstatic.com/static/academy/uploads/64064cc7b6f14a2ea0ce929b289d5880.png)

加密项目的特殊之处在于，代码、权限和经济机制都可能成为风险来源。很多项目不是"商业失败"，而是一次漏洞、一次错误配置、一次管理员权限滥用就归零。

#### 13.9.1 技术研究看五件事

| 维度 | 要看什么 | 风险信号 |
| --- | --- | --- |
| 代码开源 | GitHub、合约源码、许可证 | 核心合约不开源 |
| 审计报告 | 审计机构、问题等级、修复状态 | 只有"已审计"标志，没有报告 |
| 管理员权限 | 是否可暂停、升级、提走资金 | 单签控制核心合约 |
| 预言机 | 价格来源、更新频率、异常处理 | 依赖低流动性价格源 |
| 漏洞赏金 | 是否有公开范围和奖励 | 无安全响应机制 |

#### 13.9.2 审计报告怎么读

读审计报告时不需要你成为安全专家，但至少要看：

- 审计范围是否覆盖核心合约。
- 是否有 Critical / High 风险问题。
- 问题状态是 Fixed、Acknowledged 还是 Unresolved。
- 审计日期是否早于最近一次重大升级。
- 审计机构是否有公开声誉。

审计只能说明"某个时间点、某个范围内、某个团队检查过代码"。它不能保证后续升级安全，也不能保证经济模型不会被攻击。

#### 13.9.3 合约权限是一条隐藏主线

很多协议有升级权限、暂停权限、参数调整权限、资产转移权限。权限本身不一定坏，早期项目需要快速修复问题。但你必须知道权限由谁控制：

- 单一外部账户控制：风险最高。
- 多签控制：较好，但要看签名人是谁、门槛是多少。
- Timelock 延迟执行：更透明，社区有反应时间。
- DAO 治理控制：更去中心化，但也可能被大户操控。

### 13.10 社区与治理：热闹不等于健康

社区研究要避免被表面热度误导。一个 Discord 有 20 万人，不代表有 20 万真实用户；一个 X/Twitter 账号每天发几十条内容，也可能只是市场机器在运转。

#### 13.10.1 健康社区的迹象

- 用户讨论产品体验、问题反馈、治理提案，而不只是价格。
- 核心成员愿意解释风险、限制和路线图延迟原因。
- 开发者、研究员、内容创作者自发产出材料。
- 社区对不同意见有容忍度，不是一质疑就被扣帽子。
- 治理投票参与者相对分散，提案有实质讨论。

#### 13.10.2 虚假繁荣的迹象

- 群里主要内容是"什么时候上所""什么时候拉盘"。
- 管理员回避代币解锁、审计、收入、权限问题。
- 大量相同文案、抽奖、转发任务、机器人账号。
- KOL 集中在短时间内发同类内容。
- 治理投票通过率极高，但讨论很少。

### 13.11 监管、合规与现实约束

监管风险不是只有"会不会被禁止"这么简单。它可能影响项目能否服务某些地区用户、交易所是否愿意上线、稳定币和 RWA 能否合规运转、团队是否需要牌照、代币是否被视为证券或投资合约。

研究时至少问：

- 项目是否面向特定国家或地区用户？
- 是否涉及稳定币、收益承诺、证券型资产、借贷、衍生品、隐私工具？
- 团队或基金会注册在哪里？
- 代币销售是否对美国、欧盟或其他严格监管地区用户开放？
- 项目是否公开披露法律结构和风险？

监管环境会变化，本章无法替代法律意见。你只需要记住：监管风险越高，仓位和估值折扣就应该越保守。

### 13.12 一个完整案例：用模板研究一个假想 DEX 项目

下面用一个虚构项目 AlphaSwap 演示研究流程。它不代表任何真实项目。

#### 13.12.1 项目概况

| 项目 | AlphaSwap |
| --- | --- |
| 赛道 | DEX / AMM |
| 所在链 | 某 L2 |
| 产品阶段 | 主网上线 6 个月 |
| 核心卖点 | 低滑点稳定币交易 + 原生收益池 |
| 代币 | ALPHA |

#### 13.12.2 快筛结论

| 维度 | 观察 | 初步判断 |
| --- | --- | --- |
| 产品 | 已有主网和交易界面 | 通过 |
| 数据 | DeFiLlama 有 TVL 和费用数据 | 通过 |
| 团队 | 半匿名，有两名核心开发者 GitHub 活跃 | 中性 |
| 审计 | 一次审计，最近升级未审计 | 扣分 |
| 代币 | FDV 明显高于流通市值 | 重点关注 |

#### 13.12.3 数据与估值

| 指标 | 数值 |
| --- | --- |
| 流通市值 | 8,000 万美元 |
| FDV | 12 亿美元 |
| TVL | 1.5 亿美元 |
| 30 日费用 | 90 万美元 |
| 30 日协议收入 | 18 万美元 |
| 30 日代币激励 | 120 万美元 |
| 未来 90 天解锁 | 当前流通量的 18% |

关键计算：

```text
MC/FDV = 8,000 万 / 12 亿 = 6.7%
Mcap/TVL = 8,000 万 / 1.5 亿 = 0.53
年化协议收入 = 18 万 × 12 = 216 万美元
P/S = 8,000 万 / 216 万 ≈ 37
真实收益盈余 = 18 万 - 120 万 = -102 万美元 / 月
```

#### 13.12.4 研究结论示例

AlphaSwap 有真实产品和一定流动性，但目前增长依赖代币激励，协议收入不足以覆盖奖励。FDV 很高，未来 90 天解锁压力不小。它可以进入观察名单，但不适合直接给高仓位。

可写成这样的结论：

> 观察，不追高。只有当 30 日费用和协议收入连续增长、代币激励下降后 TVL 仍稳定、最近合约升级完成审计、未来解锁被市场消化后，才考虑小仓位。若 TVL 下降超过 30%、收入不增长但激励继续扩大、或团队回避权限问题，则从观察名单移除。

这类结论比"看好 / 不看好"更有用，因为它给出了后续行动条件。

### 13.13 一份可直接用的评分表模板

| 维度 | 权重 | 评分 (1-5) | 你要写下的证据 |
| --- | --- | --- | --- |
| 真实需求与产品 | 15% | | 用户是谁？产品是否上线？ |
| 竞争优势 | 10% | | 相比竞品强在哪里？ |
| 团队与执行 | 10% | | 背景、交付、开发活跃度 |
| 代币经济 | 15% | | 供应、分配、解锁、效用 |
| 链上数据与增长 | 15% | | TVL、用户、交易量、费用 |
| 收入与价值捕获 | 10% | | 收入是否真实？是否回到代币？ |
| 技术可信度与审计 | 10% | | 审计、权限、漏洞赏金 |
| 社区与治理 | 5% | | 讨论质量、投票分散度 |
| 监管与外部风险 | 10% | | 地区、牌照、资产属性 |

**加权总分参考：**

| 分数 | 含义 | 动作 |
| --- | --- | --- |
| 低于 3.0 | 风险或不确定性过高 | 不投入，最多保持关注 |
| 3.0-3.5 | 有亮点但缺陷明显 | 观察，不急于买 |
| 3.5-4.0 | 值得持续跟踪 | 可考虑小仓位或等待回调 |
| 4.0 以上 | 基本面较强 | 仍需结合估值、仓位和市场环境 |

评分表最重要的不是分数，而是证据。不要写"团队强"，要写"核心开发者曾参与某项目、过去 6 个月每月有代码提交、路线图 4 个节点完成 3 个"。

### 13.14 项目研究报告模板

你可以把每个项目写成一页报告：

```text
项目名称：
代币：
赛道：
研究日期：

一句话结论：

1. 项目解决什么问题？
2. 用户是谁？不用它时会用什么替代方案？
3. 产品进展：白皮书 / 测试网 / 主网 / 收入 / 商业化
4. 团队与融资：核心成员、投资人、锁仓
5. 代币经济：供应、分配、解锁、用途、价值捕获
6. 链上数据：TVL、用户、交易量、费用、收入、持币集中度
7. 安全：审计、权限、漏洞赏金、历史事故
8. 社区与治理：真实讨论、提案、投票参与
9. 主要风险：至少写 5 条
10. 触发买入/观察/退出的条件：

评分：
建议动作：不看 / 观察 / 小额 / 正常 / 减仓 / 退出
最大仓位上限：
下一次复查日期：
```

### 13.15 常见误区与风险提醒

- **"CEX 上线 = 安全背书"**：上线不等于基本面好，也不等于没有监管、合约或解锁风险。
- **只看市值不看 FDV**：低流通盘项目很容易被拉高，真正的抛压藏在未来解锁里。
- **错把 Hype 当共识**：短期叙事热度、KOL 声量和社区刷屏都可能是营销预算买来的。
- **只看 TVL 不看收入**：TVL 可能来自补贴，收入才更接近真实需求。
- **只看 APY 不看来源**：高收益如果来自代币增发，本质是未来持有人被稀释。
- **只看审计标志不看报告**：审计范围、问题等级、修复状态比 Logo 更重要。
- **忽略合约权限**：单签管理员、可升级合约、可暂停提款等权限都需要折价。
- **把好项目等同于好投资**：价格过高、解锁过近、市场周期不利时，好项目也可能不是好买点。
- **忽视法律变化**：稳定币、RWA、收益型产品、隐私工具、衍生品协议尤其需要关注监管。

### 13.16 检查清单与练习

#### 今日必做

- [ ] 挑一个你听过但没研究过的项目，用 30 分钟快筛表判断是否值得继续看。
- [ ] 找到它的白皮书、代币经济文档、合约地址、审计报告和官方社区。
- [ ] 查清楚流通市值、FDV、未来 90 天解锁比例。

#### 本周练习

- [ ] 挑一个你持仓超过 10% 的项目，按 13.14 模板写一份 1500 字报告。
- [ ] 在 CoinGecko / CoinMarketCap 上对比同赛道前 3 个竞品，画出 FDV、流通市值、TVL、收入对比表。
- [ ] 在 Etherscan / BscScan / Solscan 上查持币分布，记录前 10 大地址占比和标签。
- [ ] 用 DeFiLlama 或 Token Terminal 查看费用、收入、用户和激励数据，判断增长是否靠补贴。

#### 每月复盘

- [ ] 重新检查代币解锁日历。
- [ ] 对比项目过去一个月承诺和实际交付。
- [ ] 更新评分表。
- [ ] 写下继续持有或退出的理由。

### 13.17 延伸阅读与引用链接

#### 来自 output 的本章核心素材

- [什么是加密货币白皮书？](../output/364-what-is-a-cryptocurrency-whitepaper.md) → 白皮书阅读、项目目标、技术说明、代币经济和路线图。
- [什么是基本面分析 (FA)？](../output/545-what-is-fundamental-analysis-fa.md) → 基本面分析框架，以及加密项目中的 NVT、活跃地址、白皮书、团队和路线图。
- [什么是代币经济学？它的重要性何在？](../output/380-what-is-tokenomics-and-why-does-it-matter.md) → 供应、分配、效用、激励、销毁和锁仓。
- [如何分析 DeFi 项目](../output/305-how-to-analyze-defi-projects.md) → 团队、技术、代币经济、安全、社区和应用率。
- [DeFi 协议如何带来收益，它为何至关重要？](../output/333-how-defi-protocols-generate-revenue-and-why-it-s-important.md) → 费用、收入、流动性和协议收益。
- [什么是 DeFi 真实收益率？](../output/349-what-is-real-yield-in-defi.md) → 用收入和代币激励判断收益是否可持续。
- [关于 DeFi 流动性挖矿的四种自行调研方式](../output/334-four-ways-to-dyor-on-defi-yield-farms.md) → 安全性、代币、时间表和团队调研。
- [如何识别去中心化金融 (DeFi) 中的骗局](../output/503-how-to-spot-scams-in-decentralized-finance-defi.md) → 目标、开发活动、审计、匿名团队、代币分配和跑路风险。
- [比特币白皮书解读](../output/064-the-bitcoin-whitepaper-explained.md) → 用经典白皮书理解"问题定义、技术路径、经济设计"如何形成闭环。

#### 可补充阅读的本地素材

- [如何分析 DeFi 项目](../output/305-how-to-analyze-defi-projects.md)
- [如何识别 DeFi 中的骗局](../output/503-how-to-spot-scams-in-decentralized-finance-defi.md)
- [什么是 Rug Pull](../output/108-what-is-a-rug-pull-in-crypto-and-how-does-it-work.md)
- [什么是智能合约安全审计](../output/400-what-is-a-smart-contract-security-audit.md)
- [什么是加密货币白皮书](../output/364-what-is-a-cryptocurrency-whitepaper.md)
- [什么是代币经济学](../output/380-what-is-tokenomics-and-why-does-it-matter.md)
- [什么是真实收益率](../output/349-what-is-real-yield-in-defi.md)
- [DeFi 协议如何产生收入](../output/333-how-defi-protocols-generate-revenue-and-why-it-s-important.md)
- [关于 DeFi 流动性挖矿的四种 DYOR 方式](../output/334-four-ways-to-dyor-on-defi-yield-farms.md)
- [什么是加密鲸鱼以及如何发现它们](../output/320-what-are-crypto-whales-and-how-can-you-spot-them.md)

#### 外部数据与工具

- [DeFiLlama Methodology](https://docs.llama.fi/) → TVL、费用、收入、DEX 交易量等指标的方法说明。
- [DeFiLlama Data Definitions](https://docs.llama.fi/analysts/data-definitions) → TVL、Fees、Revenue 等数据定义。
- [Token Terminal Metrics](https://docs.tokenterminal.com/docs/metrics-1) → 活跃用户、费用、收入、P/S、P/F、代币激励等指标定义。
- [Token Terminal Financial Data](https://docs.tokenterminal.com/docs/financial-data) → Fees、Revenue、Token incentives、Gross profit、Earnings 等财务指标解释。
- [CoinMarketCap Supply Methodology](https://support.coinmarketcap.com/hc/en-us/articles/360043396252-Supply-Circulating-Total-Max) → 流通供应、总供应、最大供应、FDV 等口径。
- [SEC: Crypto Assets and the Federal Securities Laws](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/crypto-assets-federal-securities-laws) → 美国 SEC 关于加密资产和证券法适用的投资者教育资料。
- [SEC: Transactions Involving Crypto Assets](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/transactions-involving-crypto-assets) → 加密资产交易、投资合约和 Howey Test 的官方说明。

---

## 第十四章 宏观、监管与现实世界资产

### 本章目标
- 连接利率、通胀、流动性、ETF、稳定币监管、RWA 与加密市场
- 帮助读者理解加密资产与传统金融的接口，而不是只盯 K 线和链上热点
- 建立一套可复用的宏观事件阅读框架，以及 RWA / 稳定币尽调清单

### 14.1 读者先要解决的问题

币圈不是孤岛。

美联储加息、一份 CPI 数据、一条监管执法新闻、一只现货 ETF 获批、一家稳定币发行商调整储备结构，都会通过流动性、风险偏好、资金入口和合规边界影响加密市场。有些影响会在 5 分钟内反映到价格里，有些影响要几年才真正改变行业结构。

如果说前面章节解决的是“链上是什么、交易怎么做、项目如何研究”，这一章解决的是另一类问题：

- 为什么同样的项目，在降息周期里容易涨，在高利率周期里却很难涨？
- 为什么 CPI 公布后，BTC、纳指、美债收益率、美元指数会同时剧烈波动？
- 为什么 ETF、稳定币监管、RWA 不是单纯的“利好/利空”，而是加密资产进入传统金融管道的过程？
- 为什么 RWA 有真实资产做底层，仍然可能违约、冻结、折价或无法赎回？

本章不是教你预测宏观。宏观预测很难，尤其是短期预测。更实用的目标是：**当重大宏观或监管事件发生时，你知道它影响的是哪一条链路，知道该看什么数据，也知道自己不该在信息不完整时下重注。**

### 14.2 核心概念与最小知识包

![货币政策与市场流动性](https://public.bnbstatic.com/static/academy/uploads/ac5cc654981f4a8a8842141ffc4c4bc9.png)

#### 14.2.1 宏观核心变量

| 变量 | 你可以怎样理解 | 对加密市场的常见影响 |
| --- | --- | --- |
| 利率 | 资金的时间价格 | 利率越高，现金和国债越有吸引力，高波动资产越吃亏 |
| 实际利率 | 名义利率减去通胀预期 | 实际利率上升时，黄金、成长股、BTC 等无现金流资产压力通常更大 |
| 通胀 | 货币购买力下降的速度 | 高通胀会带来避险叙事，也可能迫使央行加息，二者方向可能相反 |
| M2 | 经济体内广义货币供应量 | 流动性扩张时，风险资产更容易获得估值溢价 |
| 美元指数 DXY | 美元相对一篮子货币的强弱 | 美元走强通常意味着全球美元流动性收紧 |
| 10 年美债收益率 | 长期无风险收益率的重要锚 | 上升时会抬高资产定价折现率，压制高风险资产估值 |
| VIX | 股票市场恐慌程度 | 飙升时常见“卖出一切换现金”的风险规避行为 |
| 信贷利差 | 企业借钱比政府贵多少 | 利差扩大说明市场担心违约，风险资产通常承压 |

这张表不是交易信号。它是一张地图。真正交易时，你还要看市场预期、仓位拥挤程度、价格是否提前反映。

#### 14.2.2 货币政策：加息、降息、QE 与 QT

货币政策是央行调节资金价格和资金数量的方式。你可以把它简化为两根旋钮：

- **价格旋钮**：政策利率、隔夜融资利率、回购利率、SOFR 等。
- **数量旋钮**：央行资产负债表扩张或收缩，也就是 QE 与 QT。

扩张性政策通常包括降息、购买债券、向银行体系注入流动性。紧缩性政策通常包括加息、缩表、提高融资成本。加密资产虽然不是银行体系里的传统资产，但它们高度依赖风险偏好和美元流动性，因此很难完全脱离这两根旋钮。

一个很实用的链路是：

```text
通胀数据 / 就业数据
        ↓
市场重新定价央行政策路径
        ↓
美债收益率、美元指数、股票指数变化
        ↓
风险偏好变化
        ↓
BTC、ETH、山寨币、DeFi TVL、稳定币流入流出变化
```

#### 14.2.3 财政政策、关税与地缘风险

财政政策包括政府支出、税收、赤字、补贴、关税。它影响加密市场的方式比货币政策更绕一些，但并不弱。

- 政府扩大赤字：可能增加长期债券供给，推高长期利率。
- 大规模补贴或转移支付：可能增加居民和企业现金流，提高风险资产需求。
- 关税上升：可能推高进口品价格，增加通胀压力，也可能打击企业利润和市场风险偏好。
- 地缘冲突：短期常见风险资产下跌、美元和黄金走强，但如果引发货币贬值或资本管制，也可能提升 BTC 或稳定币的替代需求。

所以，宏观事件很少只有一个方向。关税可能让 BTC 短期下跌，因为市场在避险；也可能让 BTC 中长期获得“对冲法币贬值”的叙事。你要分清**交易时间尺度**。

### 14.3 利率如何影响 BTC、ETH 与山寨币

利率是这一章最重要的变量之一。

传统金融里，所有资产都在和“无风险收益率”比较。如果短期美国国债能提供不错的收益，而且风险极低，那么投资者为什么还要承担加密资产 50%、70%、甚至 90% 的回撤？答案当然可以是“更高的上涨空间”，但当无风险收益率上升时，这个答案会变贵。

#### 14.3.1 三条影响路径

| 路径 | 机制 | 例子 |
| --- | --- | --- |
| 估值折现 | 利率越高，未来收益折现到今天越低 | 成长股、DeFi 协议代币、L2 估值承压 |
| 资金机会成本 | 持有现金、货币基金、短债更有吸引力 | 投资者减少对高波动资产的配置 |
| 杠杆成本 | 借钱更贵，做市和套利资金更谨慎 | 永续资金费率下降，链上借贷需求变弱 |

BTC 没有现金流，所以不能像股票那样用折现现金流估值。但这不代表它不受利率影响。高利率环境下，市场会更严苛地审视所有“不产生当期现金流”的资产，BTC、黄金、成长股都会受到不同程度影响。

ETH 更复杂。它既像货币资产，又像网络资产，还和质押收益、链上费用、L2 活动有关。当利率很高时，ETH 质押收益需要和国债、货币基金、稳定币收益产品竞争；当链上费用低迷时，ETH 的“网络现金流”叙事也会变弱。

山寨币受到的影响最大，因为它们通常同时依赖流动性、叙事、做市、交易所曝光和风险偏好。降息预期升温时，山寨币弹性可能更高；流动性收紧时，山寨币也往往最先失血。

#### 14.3.2 SOFR 为什么值得知道

SOFR 是有担保隔夜融资利率，基于以美国国债为抵押的回购市场真实交易，是美元金融系统的重要利率基准。你不需要每天盯它，但要知道：当 SOFR、短债收益率、货币市场基金收益率都很高时，美元现金本身就有吸引力。

这会影响稳定币和 DeFi：

- 稳定币发行商持有短债或现金等储备，储备收益会变成重要商业模式。
- DeFi 借贷利率需要和链下无风险或低风险收益竞争。
- RWA 国债产品更容易获得需求，因为它把链下短债收益带进链上账户。

### 14.4 CPI、PCE 与数据公布日的交易逻辑

![CPI 与通胀指标](https://public.bnbstatic.com/static/academy/uploads/d45e466886334641823e383a3a585d95.jpg)

CPI 和 PCE 都是通胀指标。CPI 更常被媒体和交易员关注，PCE 则是美联储更重视的通胀口径之一。读这些数据时，不要只看“高了还是低了”，至少要看四层。

#### 14.4.1 四层阅读法

| 层级 | 看什么 | 为什么重要 |
| --- | --- | --- |
| 总体数据 | CPI / PCE 同比、环比 | 反映整体价格压力 |
| 核心数据 | 去除食品和能源 | 更能体现持续性通胀 |
| 分项结构 | 住房、服务、能源、二手车等 | 判断通胀是短期扰动还是粘性压力 |
| 预期差 | 实际值 vs 市场预期 | 价格通常对“意外”反应更大 |

市场交易的不是“数据本身”，而是“数据相对预期的偏差”。如果 CPI 同比仍然很高，但低于预期，市场可能上涨；如果 CPI 看似不高，但核心服务通胀顽固，市场也可能下跌。

#### 14.4.2 一个 CPI 日的简化推演

假设市场预期核心 CPI 环比为 0.2%，实际公布为 0.4%：

1. 市场认为通胀更顽固。
2. 降息预期后移，甚至重新定价加息风险。
3. 2 年期美债收益率上升，美元指数走强。
4. 纳指期货下跌，BTC 快速回落。
5. 高杠杆多头被清算，山寨币跌幅通常更大。

但这只是第一反应。接下来还要看：

- 数据公布前市场是否已经提前下跌？
- 美联储官员之后如何表态？
- 当天美股开盘后机构资金是否继续卖出？
- BTC 现货 ETF 是否出现明显净流入或净流出？
- 永续合约资金费率和未平仓量是否出现挤压？

因此，数据公布日最稳妥的纪律不是“猜方向”，而是：

- 公布前降低杠杆。
- 不在第一根 1 分钟 K 线追单。
- 等 15 分钟到 1 小时，看债券、美元、美股和 BTC 是否同向确认。
- 如果看不懂，就不交易。

### 14.5 BTC 的宏观身份：风险资产、流动性资产、替代货币

BTC 经常被贴上不同标签：数字黄金、风险资产、反通胀资产、科技股 beta、去中心化储备资产。这些标签都不完全错，但它们会在不同周期轮流占上风。

#### 14.5.1 三种身份

| 身份 | 什么时候更明显 | 价格表现常见特征 |
| --- | --- | --- |
| 风险资产 | 市场关注流动性和成长估值时 | 与纳指、成长股相关性上升 |
| 替代货币 | 法币贬值、资本管制、银行信任下降时 | 本地溢价、稳定币需求、BTC 买盘上升 |
| 稀缺资产 | 减半、长期储备、机构配置叙事强化时 | 更关注供给、长期持有者、ETF 持仓 |

不要把任何一个身份永久化。BTC 在一个月内可能像科技股，在一年内可能像高 beta 黄金，在某些国家可能像美元替代品。你的判断要跟随市场当下交易的主线，而不是跟随一句口号。

#### 14.5.2 一个更稳的判断方式

当你看到“BTC 是避险资产吗”这类讨论时，可以改问四个更具体的问题：

- 当天美元指数是涨还是跌？
- 美债实际收益率是涨还是跌？
- 纳指和高收益债是风险偏好上升还是下降？
- 稳定币总供应、ETF 流入和链上活跃度有没有配合？

如果 BTC 和纳指一起涨跌，它更像风险资产。如果 BTC 在银行危机、本币贬值或资本管制背景下独立走强，它更像替代货币。如果 ETF 长期吸收供给、交易所余额下降、长期持有者增加，它更像稀缺储备资产。

### 14.6 ETF 与机构入场：为什么这不是普通上币

![比特币 ETF](https://public.bnbstatic.com/static/academy/uploads/cdc13ab9b68143f2916c4e50f811ced9.jpg)

ETF 的意义不是“多了一个交易按钮”，而是改变了资金进入加密资产的管道。

对传统投资者来说，直接买 BTC 需要解决交易所开户、自托管、私钥、审计、合规、税务、托管等一整套问题。现货 ETF 把这些问题包装进熟悉的证券账户、经纪商、托管人和基金披露体系里。它降低的不是 BTC 的波动，而是**买入 BTC 的制度摩擦**。

#### 14.6.1 关键时间点

- **2024-01-10**：美国 SEC 批准多只现货比特币 ETP 的上市和交易。
- **2024-05-23**：美国 SEC 批准多家交易所关于现货以太坊 ETP 的 19b-4 规则变更。之后相关产品还需要完成注册声明等流程，才能正式交易。

这些节点的意义在于：BTC 和 ETH 开始进入传统金融的合规产品架构。它们可以被更多投顾、家族办公室、养老金相关账户、经纪平台和模型组合讨论，而不再只是加密交易所里的资产。

#### 14.6.2 现货 ETF 如何影响市场

| 影响 | 短期表现 | 长期意义 |
| --- | --- | --- |
| 资金流入流出透明 | 每日净流入成为情绪指标 | 机构配置行为可被持续追踪 |
| 托管集中 | 大量币进入少数合规托管机构 | 降低散户私钥风险，也增加托管集中风险 |
| 套利机制 | ETF 价格与净值偏离时可被套利 | 提升市场效率 |
| 交易时段差异 | 美股时段影响加密波动 | BTC 更深地嵌入传统市场节奏 |
| 叙事升级 | “机构入场”刺激风险偏好 | 加密资产从边缘资产变成可配置资产 |

ETF 不是永动机。它会带来流入，也会带来流出；会强化牛市，也可能放大熊市中的抛压。你要看的是净流量、持仓变化和市场预期，而不是只看“获批”两个字。

#### 14.6.3 ETF 获批为什么可能“利好落地”

市场经常提前交易预期。一个 ETF 从传闻、申请、修改文件、专家提高通过概率，到真正获批，价格可能已经涨过一大段。真正批准当天，早期买入的人反而可能卖出兑现。

所以：

```text
长期结构性利好 ≠ 短期一定上涨
监管通过 ≠ 没有波动
机构产品化 ≠ 资产不会回撤
```

对普通投资者更有用的是：ETF 让 BTC、ETH 的长期资金结构更成熟，但你的入场点、仓位和周期仍然决定体验。

### 14.7 稳定币监管：链上美元的制度化

![稳定币与脱钩风险](https://public.bnbstatic.com/static/academy/uploads/64498a4838d94398b5db7689636444e8.png)

稳定币是加密世界的结算货币。大多数交易、DeFi 借贷、跨境转账、链上支付，最终都绕不开 USDT、USDC、FDUSD、DAI 或其他稳定币。

你可以把稳定币看成三层结构：

```text
用户看到的代币：USDC / USDT / FDUSD / DAI
        ↓
链上合约与发行/赎回系统
        ↓
链下储备：现金、短债、回购、银行存款、加密抵押品或其他资产
```

稳定币的风险也来自这三层：

- 代币层：合约漏洞、冻结权限、跨链桥风险。
- 发行层：赎回规则、KYC、地区限制、黑名单。
- 储备层：资产质量、托管银行、久期、审计和证明。

#### 14.7.1 美国 GENIUS Act

截至 2026-04-25，美国 GENIUS Act 已不是单纯的讨论稿。公开资料显示，**2025-07-18**，美国总统签署 S.1582，即 “Guiding and Establishing National Innovation for U.S. Stablecoins Act”。这部法律为支付型稳定币建立了联邦监管框架。

对普通用户来说，重点不是背法条，而是理解几个方向：

- 支付型稳定币发行方需要进入许可框架。
- 储备更强调 1:1、高流动性和信息披露。
- 发行方需要遵守 AML、制裁和客户身份相关义务。
- 合规稳定币会更容易接入银行、支付公司和机构系统。
- 稳定币可能更像受监管支付工具，而不是完全无边界的链上现金。

这对市场不只是“利好”或“利空”。它会让合规发行方更容易获得机构信任，也会让部分用户失去过去那种模糊地带里的自由度。

#### 14.7.2 欧盟 MiCA

MiCA 是欧盟统一加密资产监管框架，覆盖加密资产发行、服务商、稳定币、披露和市场行为等。MiCA 中和稳定币相关的部分从 2024 年开始进入实施阶段，整体框架在 2024 年底后进入更完整的适用阶段。

MiCA 的核心影响是：交易所、钱包、发行商和服务商在欧盟市场需要更清晰地处理牌照、披露、储备和用户保护。对用户来说，最直接的变化可能是某些未经授权的稳定币在欧洲经济区受到限制，交易平台也会调整可用产品。

#### 14.7.3 如何看一个稳定币是否可靠

| 问题 | 应该看什么 | 危险信号 |
| --- | --- | --- |
| 谁发行 | 公司主体、注册地、监管状态 | 发行方不清晰 |
| 储备是什么 | 现金、短债、回购、加密抵押品比例 | 高风险资产或披露模糊 |
| 谁托管 | 银行、托管人、基金结构 | 单一小银行集中托管 |
| 如何赎回 | 最小金额、KYC、费用、到账时间 | 只能二级市场卖出，不能直接赎回 |
| 是否审计 | 储备证明、审计、月报 | 只宣传“足额储备”，没有报告 |
| 是否可冻结 | 合约权限、黑名单机制 | 权限不披露 |
| 历史脱钩 | 过去是否脱锚、恢复机制 | 危机中无法解释或延迟赎回 |

稳定币不是没有风险的美元。它是一个带有发行方、储备资产、法律结构和智能合约权限的金融产品。

### 14.8 CBDC、代币化存款与稳定币：三种数字货币不要混

CBDC、代币化存款、稳定币都可能用于支付和结算，但它们背后的信用完全不同。

![CBDC 与数字货币](https://public.bnbstatic.com/static/academy/uploads/cdaadee2f8024319995ccb80c640aabf.jpg)

| 类型 | 谁发行 | 信用来源 | 主要用途 | 关键风险 |
| --- | --- | --- | --- | --- |
| CBDC | 中央银行 | 主权信用 | 零售支付、批发结算、政策工具 | 隐私、银行存款迁移、技术治理 |
| 代币化存款 | 商业银行 | 银行信用与存款保险制度 | 银行体系内结算、机构支付 | 银行信用、互操作性 |
| 稳定币 | 私营发行方或协议 | 储备资产、合约机制、发行方信用 | 链上交易、跨境转账、DeFi 结算 | 脱钩、冻结、储备、监管 |

这三者未来可能并存。CBDC 更像官方数字现金或央行结算工具；代币化存款更像银行存款的链上版本；稳定币更像开放网络里的可编程美元。它们不是简单替代关系，而是在不同场景竞争。

### 14.9 RWA：现实世界资产如何进入链上

![现实世界资产 RWA](https://public.bnbstatic.com/static/academy/uploads/56ec198da6954d03858742ea1f3a45b7.png)

RWA 是 Real World Assets，现实世界资产。它指的是把链下资产的权利、收益或所有权映射到链上代币或链上凭证中。常见类别包括：

- 短期美国国债、货币市场基金份额。
- 私募信贷、贸易应收账款、发票融资。
- 房地产收益权或基金份额。
- 黄金、商品、碳信用。
- 股票、债券、基金等证券型资产的代币化表达。

RWA 的关键不是“把东西放到链上”这么简单。真正困难的是：**链上代币如何合法、持续、可执行地代表链下资产。**

#### 14.9.1 RWA 的三段流程

```text
链下形式化
明确资产、所有权、估值、法律文件、托管安排
        ↓
信息桥接
把资产信息、净值、权利和限制映射到链上
        ↓
链上供需
用户购买、转让、质押、赎回或用作抵押品
```

如果链下资产本身产权不清，链上代币再透明也没用。如果链上合约很漂亮，但赎回路径依赖一个不透明主体，风险仍然在链下。

#### 14.9.2 RWA 为什么重要

上一轮 DeFi 增长很大程度来自代币激励。协议发币补贴流动性，用户冲着高 APY 来，补贴下降后 TVL 离开。这种模式可以启动网络，但很难长期支撑真实收益。

RWA 带来的变化是：收益可以来自链下现金流，而不只是链上代币通胀。

| RWA 类型 | 收益来源 | 适合解决的问题 |
| --- | --- | --- |
| 代币化国债 | 短债利息或货币基金收益 | 链上低风险美元收益、抵押品 |
| 私募信贷 | 借款人利息 | 为企业融资，给投资者信用风险溢价 |
| 房地产 | 租金、物业增值 | 资产分割、跨地区投资 |
| 商品代币 | 标的商品价格变化 | 链上持有黄金等资产敞口 |
| 代币化基金 | 基金组合收益 | 让传统资产进入链上账户体系 |

作为量级参考，DeFiLlama 的 RWA 页面在 2026 年 4 月抓取数据中显示，RWA 相关链上市场规模已达到数百亿美元级别；RWA.xyz 的 tokenized Treasuries 页面在 2026 年 3 月附近显示，代币化美国国债产品规模已超过 100 亿美元。数据会持续变化，写报告时必须回到实时数据源核对。

#### 14.9.3 RWA 的核心风险

RWA 最大的误区是把它理解为“链上美债 = 稳赚”。真实情况更像这样：

```text
RWA 收益 = 链下资产收益
        - 管理费
        - 托管和结构成本
        - 流动性折价
        - 信用风险
        - 法律执行风险
        - 智能合约和预言机风险
```

尤其要注意：

- **托管风险**：底层资产到底由谁持有？如果托管人出问题，代币持有人排第几位？
- **法律风险**：代币是否真的代表债权、基金份额、收益权，还是只有平台承诺？
- **赎回风险**：能否按净值赎回？赎回需要几天？是否只允许合格投资者？
- **流动性风险**：二级市场有价无量时，账面净值不等于可成交价格。
- **信用风险**：私募信贷、房地产、贸易融资会违约，不会因为上链就变成无风险。
- **合规风险**：KYC、地区限制、证券法规可能导致某些地址无法转让或赎回。
- **预言机风险**：链上价格和链下净值如何同步？谁有权更新？

### 14.10 RWA 尽调清单：不要只看 APY

研究 RWA 项目时，可以按下面 10 个问题过一遍。

| 问题 | 你要找的证据 |
| --- | --- |
| 1. 底层资产是什么？ | 国债、基金份额、贷款、房地产、应收账款，具体到文件和资产池 |
| 2. 资产在哪里？ | 托管银行、券商、基金管理人、SPV、信托结构 |
| 3. 谁发行代币？ | 发行主体、注册地、牌照、法律意见 |
| 4. 代币代表什么权利？ | 所有权、债权、收益权、基金份额、还是平台积分 |
| 5. 谁可以购买和转让？ | 是否 KYC、是否合格投资者、地区限制 |
| 6. 如何赎回？ | 最小赎回额、赎回频率、费用、到账时间、暂停条款 |
| 7. 收益从哪里来？ | 利息、租金、价差、补贴、代币激励 |
| 8. 净值如何计算？ | NAV 更新频率、预言机、审计或管理员确认 |
| 9. 合约权限如何设置？ | 冻结、升级、暂停、黑名单、多签、Timelock |
| 10. 极端情况下谁先亏？ | 违约瀑布、清算顺序、持有人法律地位 |

如果你找不到这些答案，不要用“它是 RWA，所以安全”来安慰自己。RWA 的底层资产可能更真实，但信息不透明时，风险也更难在链上看出来。

### 14.11 监管如何改变加密行业的边界

监管不是一个单向变量。它既可能压制某些业务，也可能打开更大的资金入口。

#### 14.11.1 四类监管影响

| 类型 | 影响对象 | 可能结果 |
| --- | --- | --- |
| 市场准入 | 交易所、券商、托管机构 | 合规平台更容易获得银行和机构合作 |
| 产品定义 | 证券、商品、支付工具、基金份额 | 决定项目能否公开销售、上所或服务某些地区 |
| 身份与反洗钱 | KYC、AML、旅行规则 | 提高合规成本，降低非法资金活动空间 |
| 信息披露 | 储备、风险、财务、审计 | 提升透明度，也让不合规项目退出主流市场 |

这就是为什么同一条监管新闻可能同时利空和利好：

- 对匿名团队、无披露项目、算法稳定币、高杠杆衍生品平台，监管可能是利空。
- 对合规托管、ETF、支付型稳定币、机构级 RWA，监管可能是利好。

#### 14.11.2 合规不是“有没有被抓”这么粗糙

你做项目研究时，至少要问：

- 项目服务哪些地区用户？
- 是否涉及证券型资产、收益承诺、稳定币、借贷、衍生品、隐私工具？
- 团队或基金会注册在哪里？
- 代币是否公开销售给严格监管地区用户？
- 是否有明确的法律结构、服务条款和风险披露？
- 如果监管要求冻结或限制地址，协议是否有能力执行？

对普通投资者来说，监管风险最终会落到三个地方：**能不能买、能不能卖、能不能赎回或出金。**

### 14.12 三个实用案例

#### 14.12.1 案例一：CPI 高于预期，BTC 为什么跌

场景：

- 市场预期核心 CPI 环比 0.2%。
- 实际公布 0.4%。
- 数据公布前，BTC 已连续上涨，永续资金费率偏高。

推演：

1. 高于预期的通胀让市场担心降息推迟。
2. 短端美债收益率快速上行，美元指数走强。
3. 美股期货走弱，风险偏好下降。
4. BTC 多头拥挤，价格下跌触发合约清算。
5. 山寨币流动性更薄，跌幅更大。

复盘时不要只写“CPI 利空”。更准确的写法是：

> CPI 高于预期，改变了市场对政策利率路径的定价；在多头仓位拥挤、美元走强和美股走弱的背景下，BTC 被当作风险资产抛售。

这类复盘能帮你下次识别同一条链路。

#### 14.12.2 案例二：稳定币短暂脱钩，应该看什么

场景：

- 某稳定币从 1.00 美元跌到 0.96 美元。
- 社交媒体出现储备银行风险传闻。
- 链上赎回和 DEX 交易量激增。

你应该按顺序看：

1. 发行方是否发布公告，解释储备敞口。
2. 是否仍可按 1:1 赎回，赎回是否延迟。
3. 储备资产中现金、短债、银行存款比例。
4. 二级市场深度是否足够，是否只有小额砸盘。
5. DeFi 协议是否把该稳定币作为主要抵押品。
6. 其他稳定币是否被传染脱钩。

行动上，普通用户不需要成为最后一个英雄。稳定币的首要用途是稳定。如果你持有它的理由已经被破坏，先降低敞口，比争论它会不会回锚更实际。

#### 14.12.3 案例三：一个 8% APY 的 RWA 国债产品是否安全

假设某项目宣传“链上美国国债收益，年化 8%”。你不能只看“美国国债”四个字。你要拆开：

- 同期短期美债收益率是多少？如果市场只有 4% 左右，它多出来的 4% 来自哪里？
- 是否有代币补贴？补贴能持续多久？
- 底层是直接持有国债，还是持有基金、票据、再质押产品？
- 是否允许普通用户赎回，还是只能在二级市场卖出？
- 是否有锁定期、管理费、表现费？
- 合约是否可暂停转账或赎回？
- 持有人是否完成 KYC，是否存在地区限制？

如果答案是“4% 来自国债，4% 来自平台代币补贴”，那它就不是纯国债收益，而是“国债收益 + 项目激励”。如果补贴结束，APY 可能迅速下降。

### 14.13 常见误区与风险提醒

- **“宏观没用，币圈只看叙事”**：牛市中叙事会放大收益，但流动性决定叙事能烧多久。
- **“降息一定涨”**：预防式降息可能利好风险资产，衰退式降息可能先跌后涨。
- **“CPI 下降一定涨”**：如果下降来自需求崩塌和衰退风险，市场未必买账。
- **“ETF 获批 = 立刻大涨”**：ETF 是中长期结构性利好，不是短期无风险交易信号。
- **“稳定币严监管就是利空”**：严监管会压缩灰色空间，也会让机构更愿意使用合规稳定币。
- **“RWA = 稳赚”**：现实资产也会违约、折价、冻结和赎回暂停。
- **“链上透明，所以风险更小”**：RWA 的关键风险常在链下合同、托管和法律执行里。
- **“监管不会影响我”**：交易所、钱包、稳定币、RWA 都可能因地区规则改变可用性。
- **“大机构做的产品就安全”**：大机构降低运营风险，不消除市场风险和法律结构风险。
- **“宏观指标越多越好”**：指标太多会让你失去主线。先盯利率、通胀、美元、流动性和风险偏好。

### 14.14 检查清单与练习

#### 今日必做

- [ ] 把未来一个月的 CPI、PCE、FOMC、非农公布日期加入日历。
- [ ] 打开一张图，同时观察 BTC、纳指、DXY、10 年美债收益率。
- [ ] 找一个你常用稳定币，查清楚发行方、储备报告和赎回规则。
- [ ] 在 DeFiLlama 或 RWA.xyz 上查看 RWA 和代币化国债的当前规模。

#### 本周练习

- [ ] 选一次最近的 CPI 或 FOMC 事件，记录公布前后 1 小时 BTC、ETH、纳指期货、DXY、美债收益率变化。
- [ ] 找一只 BTC 或 ETH 现货 ETF，观察 5 个交易日的净流入/流出和价格表现。
- [ ] 选一个 RWA 项目，用 14.10 的 10 个问题写一页尽调笔记。
- [ ] 对比一个稳定币和一个货币市场基金：收益、赎回、风险、监管和使用场景分别是什么。

#### 每月复盘

- [ ] 本月市场主线是流动性、监管、ETF、AI、RWA，还是某条链生态？
- [ ] BTC 与纳指相关性是上升还是下降？
- [ ] 稳定币总供应是扩张还是收缩？
- [ ] ETF 是否持续净流入，还是出现连续净流出？
- [ ] 你持有的项目是否有重大监管、牌照、地区限制或代币属性风险？

### 14.15 延伸阅读与引用链接

#### 来自 output 的本章核心素材

- [M2 是什么？它与市场有何关系？](../output/146-what-is-m2-and-how-it-relates-to-markets.md) → 理解货币供应量与市场流动性。
- [什么是货币政策？](../output/212-what-is-monetary-policy.md) → 加息、降息、扩张性和紧缩性政策。
- [一文读懂消费者物价指数 CPI](../output/215-what-is-the-consumer-price-index-cpi.md) → CPI 的构成、用途和市场影响。
- [个人消费支出平减指数 PCE 介绍](../output/219-what-is-the-pce-deflator-and-how-does-it-work.md) → PCE 与 CPI 的差异。
- [什么是 SOFR？](../output/135-what-is-sofr.md) → 美元利率基准和链上收益竞争。
- [关税如何影响加密货币市场](../output/147-how-can-tariffs-impact-the-crypto-markets.md) → 关税、通胀、挖矿成本与风险偏好。
- [比特币现货 ETF 与比特币期货 ETF 的区别](../output/293-bitcoin-spot-etf-vs-bitcoin-futures-etf-what-s-the-difference.md) → 现货 ETF 和期货 ETF 的结构差异。
- [以太坊 ETF 介绍](../output/222-what-is-an-ethereum-etf.md) → ETH ETF 的机制、优势与风险。
- [为什么稳定币会脱钩？](../output/315-what-is-a-stablecoin.md) → 稳定币挂钩机制和历史脱钩案例。
- [什么是 GENIUS 法案？它对稳定币用户有何重要意义？](../output/099-what-is-the-genius-act-and-why-does-it-matter-for-stablecoin-users.md) → 美国稳定币监管框架。
- [什么是 MiCA（《加密资产市场监管法案》）？](../output/289-what-is-mica-markets-in-crypto-assets-regulation.md) → 欧盟加密资产监管框架。
- [中央银行数字货币 CBDC 详解](../output/480-central-bank-digital-currencies-cbdc-explained.md) → CBDC 的类型、用途和风险。
- [什么是 DeFi 和加密货币领域的现实世界资产 RWA？](../output/281-what-are-real-world-assets-rwa-in-defi-and-crypto.md) → RWA 的流程、优势和局限。
- [什么是 Ondo？](../output/101-what-is-ondo-ondo.md) → RWA 协议案例。
- [什么是 Maple Finance？](../output/137-what-is-maple-finance-syrup.md) → 链上私募信贷案例。
- [什么是真实收益率？](../output/349-what-is-real-yield-in-defi.md) → 区分真实现金流和代币补贴。

#### 外部数据与官方参考

- [SEC: Statement on the Approval of Spot Bitcoin Exchange-Traded Products](https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023) → 2024-01-10，美国现货比特币 ETP 批准声明。
- [SEC: Bitwise Ethereum ETF Proposed Rule Change 页面](https://www.sec.gov/rules-regulations/self-regulatory-organization-rulemaking/sr-nysearca-2024-31) → 现货以太坊 ETP 相关 19b-4 文件与更新。
- [White House: The President Signed into Law S.1582](https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/) → 2025-07-18，GENIUS Act 签署成法。
- [White House: GENIUS Act Fact Sheet](https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/) → 储备、披露、消费者保护和 AML 要点。
- [European Commission: Markets in Crypto-assets Regulation](https://finance.ec.europa.eu/regulation-and-supervision/financial-services-legislation/implementing-and-delegated-acts/markets-crypto-assets-regulation_en) → MiCA 授权法案和监管技术标准进展。
- [European Commission: Crypto-assets](https://finance.ec.europa.eu/digital-finance/crypto-assets_en) → 欧盟加密资产政策框架。
- [New York Fed: SOFR](https://www.newyorkfed.org/markets/reference-rates/sofr) → SOFR 官方数据。
- [BLS: Consumer Price Index](https://www.bls.gov/cpi/) → 美国 CPI 官方数据。
- [BEA: Personal Consumption Expenditures Price Index](https://www.bea.gov/data/personal-consumption-expenditures-price-index) → 美国 PCE 官方数据。
- [CME FedWatch](https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html) → 市场对美联储政策利率路径的定价。
- [FRED: M2 Money Stock](https://fred.stlouisfed.org/series/M2SL) → 美国 M2 数据。
- [DeFiLlama RWA](https://defillama.com/rwa) → RWA 市场规模、资产分类和发行方数据。
- [RWA.xyz Tokenized Treasuries](https://app.rwa.xyz/treasuries) → 代币化美国国债产品规模、发行方和持有人数据。

---

## 第十五章 从小白到高手的行动路线图

### 本章目标
- 把前面 14 章整理成一套可执行的 30/60/90 天路线图。
- 明确每个阶段的学习任务、实操动作、交付成果和失败信号。
- 建立个人资金边界、钱包安全、交易复盘、项目研究和年度升级机制。
- 给出工具清单、图示、模板，以及本章末尾的延伸阅读与引用链接。

![行动路线图与风险管理](https://public.bnbstatic.com/static/academy/uploads/800356175c614498af2e97a53def5bc7.jpg)

> **阅读建议：** 这一章不是“再讲一遍前面学过什么”，而是把知识变成动作。请把它当成你的 90 天训练营手册：每完成一项，就留下记录；每犯一次错，就把规则改得更具体。Web3 新手真正的分水岭，不是懂多少术语，而是能不能在行情、噪声和诱惑面前按自己的系统做事。

### 15.1 读者先要解决的问题

读完前面 14 章，最容易出现的错觉是：“我已经懂了。”但市场不会考你名词解释，它只会考你三件事：

- **能不能保住本金**：不会因为一个钓鱼链接、错误授权、错链转账或高杠杆，把前面所有努力清零。
- **能不能独立判断**：看到一个项目，不靠群聊喊单，也能从团队、代币、链上数据、收入、风险和估值几个角度拆开看。
- **能不能持续复盘**：赚钱时知道是能力还是运气，亏钱时知道是判断错、执行错，还是风险预算本来就设错了。

本章把成长路径拆成四层：

| 层级 | 核心问题 | 对应能力 |
| --- | --- | --- |
| 安全层 | 我会不会先把钱弄丢？ | 钱包、2FA、助记词、授权、反钓鱼 |
| 认知层 | 我是否理解链上世界的基本结构？ | 公链、钱包、交易、Gas、浏览器、L1/L2 |
| 执行层 | 我能否小额完成真实操作？ | 入金、提币、Swap、跨链、DeFi 交互 |
| 系统层 | 我有没有自己的规则？ | 资产配置、交易日记、项目评分、季度复盘 |

这四层必须按顺序长出来。很多人跳过安全层和认知层，直接冲到交易和 DeFi，结果不是被市场教育，而是被自己教育。更好的方式是：先用很小的钱，把所有可能出错的动作走一遍。

### 15.2 90 天总图：从“会看”到“会做”

下面这张图把 90 天路线压成一条主线。它不是考试进度表，而是一套成长闭环。

```text
Day 1-30              Day 31-60                 Day 61-90                 Day 90+
认知 + 安全       ->   交易 + 组合          ->    链上 + 研究          ->   复盘 + 升级
读基础章节             做模拟交易                小额 DeFi / 跨链             固化规则
建钱包备份             写交易日记                项目评分                     季度再平衡
查交易记录             设置定投/止损             信息源筛选                   年度风险预算
```

| 阶段 | 关键词 | 最小行动 | 最终成果 |
| --- | --- | --- | --- |
| Day 1-30 | 不丢钱 | 建钱包、备份、2FA、小额提币、查交易 | 能独立完成安全转账和交易验证 |
| Day 31-60 | 不乱买 | 模拟盘、交易日记、DCA、资产配置、止损模板 | 有自己的资金规则和复盘节奏 |
| Day 61-90 | 不盲信 | 小额 DeFi、跨链、项目研究、信息源管理 | 能完整分析 2 个项目并说出风险 |
| Day 90+ | 不停更 | 季度复盘、年度计划、技能分化 | 从新手转为长期参与者 |

**本章默认原则：所有实操都用小额资金。** 对新手来说，前 90 天的目标不是赚钱，而是把最贵的错误变便宜。

### 15.3 30 / 60 / 90 天路线图

#### Day 1–30：认知与安全

![加密资产安全总览](https://public.bnbstatic.com/static/academy/uploads/17daed200d5a4144b8f5cc5c99f55f42.png)

第一个月只做一件事：建立“我能安全活下来”的底盘。不要急着研究百倍币，也不要急着做合约。你要先让自己的账户、钱包、设备和操作习惯达到最低安全标准。

| 周期 | 任务 | 动作细节 | 成果 |
| --- | --- | --- | --- |
| 第 1 周 | 读完第 1-3 章 | 写出“交易从发起到确认”的 6 个步骤 | 能解释区块、地址、Gas、确认数 |
| 第 1 周 | 建立账户安全 | CEX 开 2FA，优先 Authenticator 或硬件密钥；设置反钓鱼码和提币白名单 | 账户不只靠密码保护 |
| 第 2 周 | 创建非托管钱包 | 新建热钱包，抄写助记词，离线保存，禁止截图和云同步 | 拥有第一套自托管环境 |
| 第 2 周 | 做恢复演练 | 用小额测试钱包恢复一次，确认助记词可用 | 备份不是摆设 |
| 第 3 周 | 小额入金和提币 | 从 CEX 提 10-30 美元到钱包；核对链、地址、手续费 | 亲手走完链上转账 |
| 第 3 周 | 学会查交易 | 用 Etherscan / BscScan / Solscan 查 TxHash、状态、手续费、地址余额 | 具备独立验证能力 |
| 第 4 周 | 做一次小额 Swap | 使用主流 DEX 或钱包内置 Swap，小额体验授权、签名、滑点 | 理解“签名”和“授权”不是同一件事 |
| 第 4 周 | 清理授权 | 用 revoke.cash 或钱包安全工具检查授权，撤销不再使用的授权 | 建立周期性清理习惯 |

**30 天结束的标准**：

- 有一个只放小额资金的热钱包，助记词已经离线备份。
- 有一个交易所账户，2FA、反钓鱼码、提币白名单已经开启。
- 能查出一笔交易的发送方、接收方、手续费、区块高度和确认状态。
- 收到“空投领取”“账户异常”“客服协助”“私钥验证”等消息时，能先停下来核验来源。

**第一个月最常见的失败信号**：

- 把助记词存在相册、微信收藏、云盘、邮箱草稿里。
- 看到“限时空投”就连接钱包。
- 不知道自己使用的是哪条链，提币时只看代币名称。
- 转账前不做小额测试，尤其是跨链、跨交易所、跨钱包时。

> **小练习：** 找一笔你自己的链上交易，把 TxHash、网络、区块高度、Gas 费、发送地址、接收地址写下来。然后用一句话解释：为什么这笔交易不可逆？

**30 天结束的标准**：有人给你发钓鱼链接，你能在 30 秒内识破。

#### Day 31–60：交易与组合

![投资组合与风险管理](https://public.bnbstatic.com/static/academy/uploads/b9ab6ae7f5744509a58873b70c9bfb26.png)

第二个月的目标不是“找到神级策略”，而是把投资、交易、赌博分开。很多人亏损不是因为不会看 K 线，而是因为没有回答这几个问题：

- 这笔钱是长期投资，还是短期交易？
- 如果亏损 20%、40%、60%，我会怎么处理？
- 我每笔交易最多愿意亏多少？
- 我是因为计划入场，还是因为别人赚钱了我难受？

| 周期 | 任务 | 动作细节 | 成果 |
| --- | --- | --- | --- |
| 第 5 周 | 读完第 6-8 章 | 把“投资”和“交易”的区别写成 200 字 | 避免用长期叙事掩盖短期亏损 |
| 第 5 周 | 建立资产配置表 | 分成现金/稳定币、BTC/ETH、主流公链、主题仓、实验仓 | 有组合，而不是一堆仓位 |
| 第 6 周 | 启动 DCA | 选定固定频率和金额，例如每周或每月买入 BTC/ETH | 降低择时压力 |
| 第 6 周 | 模拟交易 10 笔 | 每笔写入场理由、止损、止盈、仓位、情绪评分 | 开始训练执行力 |
| 第 7 周 | 学止损和仓位 | 用 1% 规则计算仓位：账户风险金额 / 止损幅度 | 知道“仓位大小”和“风险金额”不同 |
| 第 7 周 | 学 OCO / 止盈止损 | 先在模拟盘或极小额环境测试 | 让风控前置 |
| 第 8 周 | 再做 10 笔模拟交易 | 每周复盘一次，统计胜率、盈亏比、最大回撤 | 不再只看单笔盈亏 |
| 第 8 周 | 写个人交易宪法 | 明确不碰什么、最多亏多少、什么时候停止交易 | 形成边界 |

**一个新手可参考的资金分层模型**：

| 资金层 | 目的 | 示例比例 | 规则 |
| --- | --- | --- | --- |
| 生活安全垫 | 覆盖现实生活风险 | 先留 6-12 个月支出 | 不进入加密市场 |
| 低波动储备 | 等机会、付税、应急 | 加密资金的 20%-50% | 现金或稳定币，注意平台和稳定币风险 |
| 核心仓 | 长期参与市场 | 加密资金的 40%-70% | 以 BTC/ETH 等高流动性资产为主 |
| 卫星仓 | 学习叙事和行业变化 | 加密资金的 5%-20% | 单项目设上限，定期再平衡 |
| 实验仓 | DeFi、NFT、空投、早期项目 | 加密资金的 0%-5% | 默认可能归零 |

比例不是建议你照抄，而是提醒你：资金应该先分层，再谈收益。越是新手，越应该把“实验仓”压小，把“活得久”放在第一位。

**DCA 的正确打开方式**：

![平均成本法 DCA](https://public.bnbstatic.com/static/academy/uploads/02df32ad12944facaff3e694c367e147.png)

| 错误做法 | 更好的做法 |
| --- | --- |
| 价格涨了就加倍买，跌了就停止 | 固定时间、固定金额，减少情绪参与 |
| 看到新闻临时改变计划 | 每月或每季统一评估，不每天改规则 |
| 定投所有热门小币 | 优先定投高流动性、长期逻辑更清晰的资产 |
| 以为 DCA 一定赚钱 | 承认 DCA 只能降低择时压力，不能消除资产本身风险 |

**60 天结束的标准**：

- 你有一张资产配置表，知道每类资产的目标比例。
- 你写过至少 20 笔模拟或小额交易日记。
- 你能用 1% 规则算出一笔交易的合理仓位。
- 你知道自己什么时候不交易：情绪失控、连续亏损、重大新闻未消化、睡眠不足。

**第二个月最常见的失败信号**：

- 把浮亏的短线交易改口叫“长期投资”。
- 每次亏损都加仓摊平，却没有失效条件。
- 用合约“快速回本”。
- 只记录赚钱交易，不记录亏钱交易。

**60 天结束的标准**：你的账户浮亏 30% 时，你能睡得着觉。

#### Day 61–90：链上应用与研究

![DeFi 项目分析示意](https://public.bnbstatic.com/static/academy/uploads/1fa81414b4ce4bdba7ec8fc3421b5dcf.png)

第三个月开始进入链上应用。注意，这不是让你追高 APY，而是让你理解链上金融的真实结构：钱包、合约、授权、流动性池、借贷、预言机、跨链桥、L2、治理、代币激励、退出路径。

| 周期 | 任务 | 动作细节 | 成果 |
| --- | --- | --- | --- |
| 第 9 周 | 读完第 9-10 章 | 画出 AMM、借贷、稳定币、跨链桥的资金流 | 知道收益来自哪里 |
| 第 9 周 | 小额体验 DEX | 只用实验仓，记录滑点、Gas、授权额度 | 理解链上交易成本 |
| 第 10 周 | 小额体验 LP 或借贷 | 选择主流协议，先查 TVL、审计、历史事故 | 理解智能合约风险 |
| 第 10 周 | 跨链到一条 L2 | 从官方桥或可信入口进入，记录等待时间和费用 | 理解 L1/L2 关系 |
| 第 11 周 | 项目研究 1 | 用第 13 章评分表分析一个成熟项目 | 学会看基本面 |
| 第 11 周 | 项目研究 2 | 分析一个新项目，重点看代币解锁和收入 | 学会识别高风险叙事 |
| 第 12 周 | 建信息源系统 | 官方文档、项目博客、链上数据、研究报告、监管信息 | 减少被 KOL 情绪牵着走 |
| 第 12 周 | 做季度复盘 | 回看 90 天所有记录，更新个人规则 | 形成闭环 |

**DeFi 交互前的 5 分钟检查**：

| 检查项 | 问题 | 不通过时的动作 |
| --- | --- | --- |
| 官方入口 | 网址是否来自官网、文档或官方社媒？ | 不连接钱包 |
| 合约授权 | 是否要求 Unlimited 授权？ | 改精确额度或放弃 |
| 协议历史 | 是否有审计、漏洞赏金、历史事故说明？ | 降低额度或只观察 |
| 收益来源 | APY 来自真实手续费、借贷需求，还是代币补贴？ | 不能解释就不投 |
| 退出路径 | 赎回、解除质押、移除流动性各需要几步？ | 不清楚退出就不进入 |

**项目研究的六个问题**：

1. 它解决的是真问题，还是为了发币制造的问题？
2. 用户为什么必须用它，而不是用现有替代品？
3. 收入来自哪里，是否可持续？
4. 代币有什么用，价值如何捕获？
5. 团队、投资人和早期参与者什么时候解锁？
6. 如果我错了，最可能错在哪里？

**90 天结束的标准**：

- 能说明一个 DeFi 收益的来源，而不是只会说 APY。
- 能解释 L2 为什么费用更低，以及跨链桥为什么是高风险环节。
- 能用统一模板分析 2 个项目，并给出“买/不买/观察”的理由。
- 能说出自己未来 3 个月的学习重点，而不是每天被热点推着走。

**第三个月最常见的失败信号**：

- 只看 APY，不看本金风险。
- 只看 TVL，不看 TVL 是否由补贴撑起来。
- 只看审计报告标题，不看审计范围和修复状态。
- 不会退出，却已经进场。

**90 天结束的标准**：你能给一个朋友讲清楚"什么是 ETH L2 和为什么要跨链"。

### 15.4 个人风险边界：先写规则，再进市场

如果你只从本章带走一个动作，请带走这个：写一份自己的《风险边界》。它不需要优美，但必须具体。因为市场最喜欢攻击模糊地带。

| 边界 | 建议写法 | 示例 |
| --- | --- | --- |
| 最大投入 | 加密资产占总资产上限 | 不超过可投资资产的 10%-20% |
| 单项目上限 | 一个非核心项目最多占比 | 不超过加密资金的 2%-5% |
| 单笔交易风险 | 止损触发时最多亏多少 | 不超过交易账户的 1% |
| 杠杆规则 | 什么情况下允许使用杠杆 | 新手前 90 天不碰合约 |
| 止损规则 | 什么时候必须退出 | 跌破失效条件，不用新闻安慰自己 |
| 暂停规则 | 什么时候停止交易 | 连续 3 笔亏损或一天亏损超过 2% |
| 提现规则 | 盈利如何落袋 | 月度或季度把部分收益转回低风险储备 |

**1% 规则的计算例子**：

假设交易账户为 10,000 美元，你规定单笔最大风险为 1%，也就是 100 美元。你准备买入某资产，入场价距离止损价有 5%。

```text
最大风险金额 = 10,000 × 1% = 100 美元
仓位规模 = 100 ÷ 5% = 2,000 美元
```

这意味着你可以买入价值 2,000 美元的仓位，但如果价格触及止损，你的亏损应控制在约 100 美元。很多新手把“买入金额”误认为“风险金额”，这会导致仓位失控。

### 15.5 工具清单：工具越多，越要分层

| 用途 | 推荐工具 |
| --- | --- |
| 合规入口 | Binance / OKX / Coinbase / Kraken 等，根据所在地区合规选择 |
| 热钱包 | MetaMask / Trust Wallet / Binance Web3 Wallet / Phantom |
| 冷钱包 | Ledger / Trezor / Keystone 等硬件钱包 |
| 区块链浏览器 | Etherscan / BscScan / Solscan / Arbiscan / BaseScan |
| 授权管理 | revoke.cash / Etherscan Token Approval / 钱包内置授权管理 |
| 行情与图表 | TradingView / CoinGecko / CoinMarketCap |
| 组合追踪 | DeBank / CoinStats / 手工表格 |
| DeFi 数据 | DeFiLlama / Token Terminal / Dune |
| 链上分析 | Arkham / Nansen / Dune / Bubblemaps |
| 项目文档 | 官方 Docs / GitHub / 白皮书 / 治理论坛 |
| 安全信息 | 官方公告 / 审计报告 / Immunefi / SlowMist / CertiK |
| 税务记录 | Koinly / CoinTracker / 手工流水表，根据所在地区选择 |

工具有三个使用原则：

- **先官方，后聚合**：项目官网、官方文档、官方治理论坛的优先级高于二手解读。
- **先验证，后连接**：任何要你连接钱包的网站，都先从官方入口二次核验。
- **先记录，后优化**：新手用表格就够了。不要把时间都花在折腾工具上，最后没有一条完整记录。

### 15.6 交易日记：你真正的老师

![交易日记](https://public.bnbstatic.com/static/academy/uploads/00b501feced946ea97ab20bf232fa389.jpg)

交易日记不是为了显得专业，而是为了阻止你重复犯同一种错误。建议用电子表格记录结构化字段，再用文档写情绪和思路。

| 字段 | 记录内容 |
| --- | --- |
| 基本信息 | 日期、标的、方向、现货/合约/DeFi、仓位大小 |
| 计划信息 | 入场价、止损价、止盈价、风险收益比、失效条件 |
| 理由 | 技术面、基本面、链上数据、宏观、事件驱动 |
| 执行 | 实际入场/出场、手续费、滑点、是否按计划执行 |
| 情绪 | 入场前情绪 1-10，持仓中情绪 1-10，出场后情绪 1-10 |
| 结果 | 盈亏金额、盈亏比例、最大浮盈、最大浮亏 |
| 复盘分类 | 判断对执行对 / 判断对执行错 / 判断错侥幸赚 / 判断错执行也错 |

**每周复盘四问**：

- 哪一笔交易最像赌博？为什么？
- 哪一笔亏损其实是可避免的执行错误？
- 哪一笔盈利可能只是运气？
- 下周只改一个动作，改什么？

**每月复盘四问**：

- 本月收益率和 BTC / ETH 相比如何？
- 最大回撤来自哪类资产或哪种行为？
- 是否违反仓位、止损、授权、信息源规则？
- 下月需要减少一种什么行为？

**每季复盘四问**：

- 组合目标比例是否偏离太多，是否需要再平衡？
- 所持项目的团队、TVL、收入、代币解锁、竞争格局是否变化？
- 本季度新增知识是否真的变成动作？
- 下一季度的主要风险是什么：市场、平台、合约、监管，还是自己？

### 15.7 信息源系统：别让噪声接管你的账户

信息源可以分成五层：

| 层级 | 信息源 | 用途 | 风险 |
| --- | --- | --- | --- |
| 第一层 | 官方文档、白皮书、治理论坛 | 确认项目自己怎么描述自己 | 可能报喜不报忧 |
| 第二层 | 链上数据、财务数据、Token Terminal、DeFiLlama | 验证使用量、收入、TVL、持币结构 | 指标可能被刷 |
| 第三层 | 审计报告、安全公告、漏洞披露 | 查看技术风险 | 审计不等于安全 |
| 第四层 | 深度研究报告、开发者播客、社区会议 | 理解路线图和争议 | 观点可能滞后 |
| 第五层 | KOL、群聊、短视频、新闻快讯 | 捕捉情绪和热点 | 最容易带来 FOMO |

一个实用规则是：**用第一、二、三层做决策，用第四层补理解，用第五层只观察情绪。**

当你看到一个热门项目时，不要先问“能不能涨”，先走这条检查线：

```text
热点消息 -> 官方来源确认 -> 链上数据验证 -> 代币解锁检查 -> 风险事件搜索 -> 写下买入理由 -> 等 24 小时
```

如果 24 小时后你还愿意买，而且仓位符合规则，这才算接近理性决策。

### 15.8 常见误区与风险提醒

- **“我不是新手”陷阱**：一旦小有盈利，就加杠杆、加仓位、放弃纪律。自我认知永远滞后于市场现实。
- **“学完才开始”陷阱**：永远学不完，边学边做才有反馈闭环，但每次实操都要控好仓位。
- **“别人赚得比我多”陷阱**：每轮行情都有人短期暴富，但你看不到他们后来怎么亏回去。你的比较对象应该是“一年前的自己”。
- **“重仓押注”陷阱**：即使你看对了项目，时点错了也会被洗下车。仓位过大时，人会失去判断力。
- **“APY 幻觉”陷阱**：收益率越高，越要问收益从哪里来。如果答案只是“新资金进来”，风险已经很高。
- **“审计万能”陷阱**：审计只能降低部分智能合约风险，不能保证经济模型、管理员权限、预言机、前端、跨链桥都安全。
- **“官方客服”陷阱**：任何主动私信你、要求助记词、远程控制、屏幕共享、转账验证的人，都按诈骗处理。
- **“税务以后再说”陷阱**：很多国家和地区已经要求申报数字资产交易或收入。记录不完整，后面会非常痛苦。

### 15.9 三个典型场景：把规则用起来

**场景一：朋友推荐一个“稳健年化 80%”的 DeFi 池**

你应该问：

- 收益来自交易手续费、借贷利息、真实收入，还是代币补贴？
- 池子里的两个资产分别是什么，有没有无常损失？
- TVL 是自然增长，还是短期激励吸引来的？
- 是否有锁仓期？退出需要几笔交易？
- 如果合约被攻击、稳定币脱钩、前端被劫持，我最多亏多少？

如果你回答不出来，就只观察，不入金。

**场景二：某代币一周涨了 300%，社群都说“刚启动”**

你应该做：

- 查流通量和 FDV，不只看市值。
- 查前 10 大地址和团队/投资人解锁。
- 查成交量是否集中在少数交易所或少数地址。
- 写下买入后失效条件，而不是只写上涨理由。
- 仓位归入实验仓，不要挪用核心仓。

**场景三：收到“账户异常，需要验证钱包”的邮件**

你应该做：

- 不点击邮件链接。
- 从浏览器书签或手动输入官网进入。
- 检查发件域名、链接域名、语气是否制造紧迫感。
- 如果涉及交易所账户，打开 App 或官网公告核验。
- 如果已经点击或签名，立刻转移剩余资产并撤销授权。

CISA 对钓鱼信息的建议可以压缩成三个词：识别、抵制、删除。对 Web3 用户来说，还要加一句：**凡是让你暴露助记词或签奇怪消息的，一律停止。**

### 15.10 Day 90 以后：三条进阶路线

90 天之后，不建议继续什么都学一点。你可以选择一条主线深挖，同时保留基础安全和复盘习惯。

| 路线 | 适合谁 | 继续学习什么 | 主要风险 |
| --- | --- | --- | --- |
| 长期投资者 | 有主业，不想频繁交易 | 资产配置、宏观周期、链上基本面、税务 | 过度集中、叙事过时 |
| 主动交易者 | 能稳定记录和复盘 | 技术分析、风险收益比、回测、交易心理 | 杠杆、过度交易、情绪化 |
| 链上研究者 | 喜欢拆项目和数据 | DeFi 机制、代币经济、Dune、合约权限、治理 | 信息过载、误读数据 |
| 建设者 | 想做产品、开发、运营 | 智能合约、前端、钱包 UX、安全、社区 | 技术债、合规、产品没人用 |

选择路线时，不要问“哪条最赚钱”，先问“哪条我能坚持三年”。这个行业短期奖励运气，长期奖励复利能力。

### 15.11 最后的检查清单

- [ ] 能向朋友解释 Web3 与区块链的关系，不超过 3 分钟。
- [ ] 有自托管钱包，助记词物理备份，2FA 用硬件密钥或 Authenticator。
- [ ] 有明确的资产配置和再平衡规则。
- [ ] 有自己的交易日记和复盘节奏。
- [ ] 有一个自己的项目评分模板，分析过至少 2 个项目。
- [ ] 知道自己国家的税务和合规基本规则。
- [ ] 亏损不影响睡眠，盈利不带来冲动。

再加 10 条更硬的检查：

- [ ] 知道自己最多能承受多少本金损失，并写下来。
- [ ] 每个钱包用途清晰：大额冷钱包、日常热钱包、实验钱包分开。
- [ ] 不用主钱包随便连接新 DApp。
- [ ] 每次跨链或大额转账前先小额测试。
- [ ] 能解释“授权”和“转账”的区别。
- [ ] 能看懂一个项目的代币分配和解锁表。
- [ ] 能说出一个 DeFi 收益的真实来源。
- [ ] 能在买入前写出退出条件。
- [ ] 有一份完整交易日记，而不是只记在脑子里。
- [ ] 能承认“我不知道”，并因此不交易。

做到以上大部分，你就不再是这个市场里的“小白”。接下来的成长，只能来自时间、记录、复盘，以及一次次被你控制在小范围内的错误。

### 15.12 本章小结

前 90 天，最重要的不是收益率，而是形成一套可复制的动作系统：

- **安全系统**：账户、钱包、助记词、授权、反钓鱼。
- **资金系统**：资产配置、仓位上限、1% 规则、DCA、止损。
- **研究系统**：官方文档、链上数据、代币经济、团队、收入、风险。
- **复盘系统**：交易日记、月度复盘、季度再平衡、年度风险预算。

市场每天都在变，但这四套系统不会过时。真正的高手不是永远正确的人，而是错误发生时，损失可控、原因可查、规则可升级的人。

### 15.13 延伸阅读与引用链接

**来自本项目 output 的核心素材**：

- [风险管理入门指南](../output/594-a-beginners-guide-to-understanding-risk-management.md) 与 [五大风险管理策略](../output/363-five-risk-management-strategies.md)：本章 1% 规则、止损、托管风险和运营安全的主要参考。
- [如何构建均衡的加密货币投资组合](../output/451-how-to-build-a-well-balanced-crypto-portfolio.md) 与 [资产配置和多元化详解](../output/578-asset-allocation-and-diversification-explained.md)：用于扩展组合分层和再平衡框架。
- [一文读懂平均成本法 DCA](../output/551-dollar-cost-averaging-dca-explained.md)：用于 Day 31-60 的定投策略。
- [什么是交易日记以及如何使用](../output/501-what-is-a-trading-journal-and-how-to-use-one.md)：用于交易日记字段和复盘节奏。
- [如何安全存储数字货币](../output/548-how-to-secure-your-cryptocurrency.md)、[加密货币钱包类型解析](../output/613-crypto-wallet-types-explained.md)、[如何设置加密钱包](../output/206-how-to-set-up-a-crypto-wallet.md)：用于 Day 1-30 的钱包和助记词安全。
- [5 个保护加密资产的小技巧](../output/271-5-tips-to-secure-your-cryptocurrency-holdings.md)、[5 种常见加密货币骗局及防范策略](../output/552-5-common-cryptocurrency-scams-and-how-to-avoid-them.md)、[什么是网络钓鱼](../output/675-what-is-phishing.md)：用于安全提醒和反诈骗清单。
- [如何分析 DeFi 项目](../output/305-how-to-analyze-defi-projects.md)、[关于 DeFi 流动性挖矿的四种 DYOR 方式](../output/334-four-ways-to-dyor-on-defi-yield-farms.md)、[如何分析加密项目](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)：用于项目研究框架。
- [什么是止损和止盈，以及如何计算](../output/379-what-are-stop-loss-and-take-profit-levels-and-how-to-calculate-them.md)、[如何计算交易仓位大小](../output/556-how-to-calculate-position-size-in-trading.md)、[风险收益比及其使用方法](../output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md)：用于交易执行规则。
- [如何制定并实现个人财务目标](../output/338-how-to-set-personal-financial-goals-and-reach-them.md)：用于把 Web3 学习放回个人财务目标中，而不是孤立看待。

**外部参考与持续更新入口**：

- [CISA：Recognize and Report Phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing)：钓鱼识别、抵制和报告建议。
- [SEC Investor.gov：Exercise Caution with Crypto Asset Securities](https://www.investor.gov/index.php/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/crypto-asset-securities)：加密资产证券相关投资风险提醒。
- [IRS：Digital assets](https://www.irs.gov/filing/digital-assets)：美国数字资产税务申报入口，其他国家和地区请查询本地税务机关。
- [FTC：Task scams create the illusion of making money](https://consumer.ftc.gov/consumer-alerts/2024/11/task-scams-create-illusion-making-money)：任务骗局与“先交钱再赚钱”的风险提醒。
- [FTC：Did someone send you to a Bitcoin ATM? It’s a scam](https://consumer.ftc.gov/consumer-alerts/2024/03/did-someone-send-you-bitcoin-atm-its-scam)：比特币 ATM 诈骗提醒。
- [DeFiLlama](https://defillama.com/)、[Token Terminal](https://tokenterminal.com/)、[Dune](https://dune.com/)：DeFi、协议收入和链上数据研究工具。
- [Etherscan](https://etherscan.io/)、[BscScan](https://bscscan.com/)、[Solscan](https://solscan.io/)：常用区块链浏览器。
- [revoke.cash](https://revoke.cash/)：钱包授权检查与撤销工具。

---

## 附录

### 附录 A：Web3 常用术语速查表

这一节不是为了让你背单词，而是为了在看项目文档、交易界面、钱包弹窗和社区讨论时，能迅速判断对方到底在说哪一层的事情。遇到陌生词，先判断它属于以下哪一类：资产、网络、钱包、交易、DeFi、治理、安全，理解速度会快很多。

![DYOR 研究意识](https://image.binance.vision/editor-uploads/e40c785af5ec44b89591c3f092fe914b.png)

图 A-1：DYOR 不是一句口号，而是一套验证流程。图片素材来自 [output/527-12-terms-every-crypto-trader-should-know.md](../output/527-12-terms-every-crypto-trader-should-know.md)。

#### A.1 基础资产与网络

| 术语 | 简释 | 新手最容易误解的地方 |
| --- | --- | --- |
| BTC / ETH / BNB / SOL | 比特币、以太坊、BNB Chain、Solana 等生态的核心资产 | 代币价格不等于网络价值；还要看使用量、安全性、开发者与流动性 |
| Coin / Token | Coin 通常是公链原生资产，Token 通常发行在已有公链上 | 很多项目把 Token 包装成“链”，但底层仍依赖其他网络 |
| L1 / L2 | L1 是基础公链，L2 是建立在 L1 上的扩容层 | L2 便宜快捷，但仍需要关注排序器、跨链桥和退出机制风险 |
| Mainnet / Testnet | 主网承载真实资产，测试网用于开发与试用 | 测试网代币通常没有经济价值，不要被“测试网空投”诱导泄露钱包 |
| Node / Validator / Miner | 节点保存和传播数据；验证者或矿工参与出块 | 节点数量、地理分布和运行门槛会影响网络抗审查能力 |
| PoW / PoS | 工作量证明 / 权益证明 | PoW 依赖算力与电力成本，PoS 依赖质押资产与惩罚机制 |
| Finality | 交易被认为不可逆的程度 | “已提交”不等于“绝对最终”，不同链确认时间差异很大 |
| Gas / Fee | 链上交易所需费用 | Gas 不是平台手续费，而是支付给网络执行和记录交易的成本 |
| Nonce | 同一地址发起交易的序号 | 卡住的旧交易可能导致后续交易迟迟不能确认 |

#### A.2 钱包、密钥与账户

| 术语 | 简释 | 行动建议 |
| --- | --- | --- |
| Address | 可公开收款的钱包地址 | 可以公开，但转账前要核对首尾字符和链类型 |
| Private Key | 控制某个地址资产的私钥 | 不截图、不上传、不发给任何人 |
| Seed Phrase / SRP | 可恢复整组账户的助记词 | 比单个私钥更关键，等同“总钥匙” |
| Hot Wallet | 联网钱包，如浏览器钱包、手机钱包 | 适合小额、频繁交互 |
| Cold Wallet | 私钥离线保存的钱包，如硬件钱包 | 适合长期、大额资产 |
| Custodial Wallet | 第三方托管私钥的钱包 | 优点是方便找回账户，缺点是需要信任平台 |
| Non-custodial Wallet | 用户自己掌握私钥的钱包 | 自由度更高，也意味着丢失助记词后通常无法恢复 |
| MPC Wallet | 多方计算钱包，把密钥控制拆成多个分片 | 降低单点泄露风险，但仍要理解备份和恢复规则 |
| Multisig | 多签钱包，需要多个签名共同批准交易 | 适合团队金库、家庭大额资产和长期托管 |
| Approval | 授权智能合约使用某类代币 | 授权不是转账，但错误授权可能让资产被后续转走 |

#### A.3 交易、投资与市场

| 术语 | 简释 | 读盘时怎么看 |
| --- | --- | --- |
| Spot / Futures / Options | 现货 / 合约 / 期权 | 新手优先理解现货，杠杆工具要先学强平和保证金 |
| Market Order / Limit Order | 市价单 / 限价单 | 市价单重执行速度，限价单重成交价格 |
| Stop Loss / Take Profit | 止损 / 止盈 | 不是预测工具，而是风险边界工具 |
| Slippage | 预期成交价和实际成交价的差异 | 小池子、剧烈行情、大额交易都容易滑点扩大 |
| Bid-Ask Spread | 买一和卖一之间的差价 | 差价越大，真实交易成本越高 |
| Liquidity | 市场承接买卖的能力 | 高流动性不等于无风险，但能降低冲击成本 |
| DCA | 定投，按固定周期分批买入 | 解决择时焦虑，但不能解决资产选错的问题 |
| ROI / PnL | 投资回报率 / 盈亏 | 要同时看收益率、回撤、持仓周期和承担风险 |
| FUD / FOMO | 恐慌叙事 / 错失焦虑 | 看到极端情绪时，先暂停下单，回到计划 |
| HODL / BUIDL | 长期持有 / 长期建设 | 持有不是不管，建设不是喊口号，都要有验证指标 |

#### A.4 DeFi、NFT 与新叙事

| 术语 | 简释 | 核心风险 |
| --- | --- | --- |
| DEX | 去中心化交易所 | 合约风险、滑点、MEV、假币 |
| AMM | 自动做市商，用资金池定价 | 极端行情下价格可能快速偏离 |
| LP | 流动性提供者 | 赚手续费，也承担无常损失和合约风险 |
| IL | 无常损失 | 双资产价格相对变化越大，LP 损失越明显 |
| TVL | 协议锁仓总值 | TVL 可以被激励“堆”出来，要看留存和真实收入 |
| Yield Farming | 收益耕作 | 高 APY 往往来自高通胀或高风险补贴 |
| Liquid Staking / Restaking | 流动性质押 / 再质押 | 收益叠加的同时，风险也会叠加 |
| Bridge | 跨链桥 | 历史上高发攻击区域，跨链大额资产要分批 |
| Oracle | 预言机，把链下价格或数据带到链上 | 价格源失真会影响借贷清算和衍生品结算 |
| RWA | 现实世界资产代币化 | 需要额外关注托管、法律结构、赎回与合规 |
| NFT / SBT | 非同质化代币 / 灵魂绑定代币 | NFT 不自动等于版权，SBT 不自动等于真实身份 |
| DAO | 去中心化自治组织 | 代币投票可能被大户、低参与率或治理攻击影响 |
| DePIN / DeSci / SocialFi | 物理设施网络 / 去中心化科学 / 社交金融 | 叙事很新，先看真实需求和现金流，不要只看概念 |

#### A.5 安全与骗局

| 术语 | 简释 | 识别动作 |
| --- | --- | --- |
| Phishing | 钓鱼网站、假客服、假链接 | 从官方书签进入，不点私信链接 |
| Address Poisoning | 地址投毒，诱导复制相似地址 | 转账前核对完整地址或使用地址簿 |
| Rug Pull | 项目方撤流动性或抛售跑路 | 看流动性锁仓、团队背景、持币集中度 |
| Dust Attack | 粉尘攻击，用小额转账追踪或诱导交互 | 不明小额资产不要点击、授权或兑换 |
| Keylogger | 键盘记录木马 | 私钥不在联网设备上输入，系统保持干净 |
| SIM Swap | 手机卡劫持 | 交易所账户不要只依赖短信验证码 |
| Unlimited Approval | 无限授权 | 尽量授权精确额度，定期撤销旧授权 |
| Audit | 智能合约审计 | 审计能降低风险，但不能保证绝对安全 |
| Proof of Reserves | 储备金证明 | 只能说明某些资产储备，仍要看负债、审计范围和托管结构 |

### 附录 B：钱包与安全检查清单

钱包安全不是靠记住一句“不要泄露助记词”就够了。真正可执行的安全体系，应该把资产分层、设备隔离、授权管理、账户保护和继承安排都写下来。

![加密资产安全总览](https://public.bnbstatic.com/static/academy/uploads/17daed200d5a4144b8f5cc5c99f55f42.png)

图 B-1：加密资产安全的核心是密钥、设备、账户和交互四层共同防护。图片素材来自 [output/548-how-to-secure-your-cryptocurrency.md](../output/548-how-to-secure-your-cryptocurrency.md)。

#### B.1 资产分层：先决定每笔钱住在哪里

| 分层 | 用途 | 建议比例 | 钱包类型 | 操作规则 |
| --- | --- | --- | --- | --- |
| 冷库层 | 长期储蓄、战略持仓 | 50%-90%，按个人风险偏好调整 | 硬件钱包、多签、离线备份 | 不连接陌生 DApp；转出前冷静 24 小时 |
| 日常层 | 小额支付、常用链上交互 | 5%-20% | 浏览器钱包或手机钱包 | 只放可承受损失的小额资金 |
| 实验层 | 空投、测试网、新协议体验 | 0%-5% | Burner 钱包 | 与主钱包完全隔离，不复用授权 |
| 交易层 | 短期交易、定投、兑换 | 按策略决定 | 交易所账户或专用钱包 | 启用 2FA、提币白名单和交易记录复盘 |

一个实用原则：**每个钱包里放的钱，都应该和它承担的风险匹配。** 如果一个钱包经常连新 DApp，就不应该同时保管长期资产；如果一个钱包保管长期资产，就不应该拿它到处签名。

#### B.2 助记词与私钥备份检查

- [ ] 助记词只在离线环境抄写，不拍照、不截图、不复制到云笔记。
- [ ] 至少准备两份物理备份，放在两个不同地点。
- [ ] 大额资产优先考虑金属备份，降低火灾、水灾、纸张老化风险。
- [ ] 备份完成后，用小额资产做一次恢复演练，确认单词顺序、拼写和派生路径无误。
- [ ] 不把完整助记词交给任何单一亲友、客服、群管理员或“安全专家”。
- [ ] 如果使用硬件钱包，购买渠道、包装完整性、固件来源都要核验。
- [ ] 如果怀疑助记词泄露，不要犹豫，立刻创建新钱包并转移资产。
- [ ] 不把“钱包密码”和“助记词”混为一谈：密码保护本地 App，助记词控制链上资产。

#### B.3 浏览器钱包与设备隔离

- [ ] 为 Web3 单独创建一个浏览器 Profile，只安装必要扩展。
- [ ] 不在同一浏览器里同时装多个来源不明的钱包扩展。
- [ ] 常用 DApp 只从官方文档、官方社媒或自己保存的书签进入。
- [ ] 搜索引擎广告结果不作为进入 DApp 的入口。
- [ ] 钱包弹窗出现 `Approve`、`Permit`、`SetApprovalForAll`、`Signature Request` 时，先停下来读清楚。
- [ ] 不在公共 Wi-Fi、网吧、共享电脑上登录交易所或操作钱包。
- [ ] 手机钱包开启系统锁屏、生物识别和远程擦除功能。
- [ ] 电脑和手机系统保持更新，不安装破解软件和来历不明的插件。

#### B.4 授权与签名检查

![DApp 授权风险示意](https://image.binance.vision/editor-uploads-original/c9f5c8cdd9eb47aaa84a1725646daf80.png)

图 B-2：DApp 授权能提升使用效率，也可能留下长期资产风险。图片素材来自 [output/548-how-to-secure-your-cryptocurrency.md](../output/548-how-to-secure-your-cryptocurrency.md)。

| 弹窗类型 | 它可能意味着什么 | 处理方式 |
| --- | --- | --- |
| Send / Transfer | 立即转出资产 | 确认接收地址、链、数量、手续费 |
| Approve | 允许合约花费某种代币 | 优先设置精确额度，不用无限授权 |
| Permit | 不花 Gas 的签名授权 | 也可能授权资产，必须看清 spender 和额度 |
| SetApprovalForAll | 授权对方管理一整类 NFT | 非必要不签，尤其不要给陌生市场或空投网站 |
| Sign Message | 签署消息，不一定直接转账 | 仍可能用于登录、挂单、授权或钓鱼流程 |
| Swap / Bridge | 兑换或跨链资产 | 检查滑点、目标链、桥、接收地址和最小到账数量 |

每月固定做一次“授权体检”：

- [ ] 打开 [revoke.cash](https://revoke.cash/) 或链上浏览器的 Token Approval 工具。
- [ ] 撤销不再使用的 DApp 授权。
- [ ] 对高价值代币撤销无限授权，改用每次精确授权。
- [ ] 检查 NFT 的 `SetApprovalForAll` 授权。
- [ ] 对不认识的合约地址，先查项目官网和区块浏览器标签。

#### B.5 交易所账户安全

- [ ] 启用 Authenticator 或硬件安全密钥，不只依赖短信验证码。
- [ ] 使用独立邮箱和独立强密码，密码管理器生成并保存。
- [ ] 开启反钓鱼码，识别伪造邮件。
- [ ] 设置提币白名单和提币冷却期。
- [ ] 每月检查登录设备、API Key、提币记录。
- [ ] API Key 只给必要权限，默认不开提币权限。
- [ ] 收到“账户异常”“资金冻结”“配合调查”等信息时，从官网 App 或官网域名登录核实，不点邮件和私信链接。

#### B.6 家庭继承与应急卡

如果资产规模已经足以影响家庭财务，就不要把“我一个人知道”当作安全。你需要一份不暴露完整私钥、但能让可信家人在极端情况下找到线索的说明。

**应急卡可以写这些内容：**

- 我持有数字资产，主要分布在：交易所、硬件钱包、链上钱包。
- 交易所名称和登录邮箱提示，不写密码。
- 硬件钱包存放地点提示，不写 PIN。
- 助记词备份所在地点提示，不写完整助记词。
- 可信联系人：姓名、关系、联系方式。
- 处理原则：不要相信私信“恢复资产服务”；不要把助记词输入任何网站；先联系可信联系人。
- 最近更新时间：____ 年 ____ 月 ____ 日。

### 附录 C：项目研究模板

项目研究不是“找利好”，而是尽量把自己从宣传语里拉出来，回答三个问题：它解决了什么真实问题？它凭什么长期存在？我承担的风险是否值得？

![链上指标示意](https://image.binance.vision/editor-uploads/a0a72d8bdec248a48c27dbe4af783234.png)

图 C-1：链上指标可以帮助你观察网络是否真的被使用。图片素材来自 [output/519-a-guide-to-cryptocurrency-fundamental-analysis.md](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)。

![项目指标示意](https://image.binance.vision/editor-uploads/ca79b772c2c74912949b69cde167eb8e.png)

图 C-2：项目研究需要同时看白皮书、团队、路线图、竞争格局和代币经济。图片素材来自 [output/519-a-guide-to-cryptocurrency-fundamental-analysis.md](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)。

#### C.1 一页纸研究摘要

| 项目 | 填写 |
| --- | --- |
| 项目名称 / 代币 |  |
| 所在链 / 合约地址 |  |
| 项目类别 | L1 / L2 / DeFi / AI / RWA / GameFi / DePIN / 其他 |
| 一句话描述 |  |
| 目标用户 |  |
| 核心产品 |  |
| 当前阶段 | 概念 / 测试网 / 主网上线 / 增长期 / 成熟期 / 衰退期 |
| 我从哪里知道它 | 朋友推荐 / 社媒 / 研报 / 链上数据 / 交易所公告 / 其他 |
| 我是否已经读过官方文档 | 是 / 否 |
| 我是否能不用项目方话术复述它 | 是 / 否 |

#### C.2 需求与产品：它到底解决什么问题

- 用户痛点是什么？这个痛点是高频、刚需，还是只在牛市叙事里成立？
- 现有替代方案有哪些？中心化产品、传统金融产品、其他链上协议都算。
- 它比替代方案好在哪里：更便宜、更快、更安全、更开放、更有流动性，还是只是“更会讲故事”？
- 产品是否已经可用？如果可用，真实用户是谁？
- 如果代币价格不涨，用户还有没有理由继续使用它？
- 如果激励减少，TVL、交易量、活跃地址是否还能留下来？

#### C.3 团队、融资与治理

| 检查项 | 记录 |
| --- | --- |
| 创始团队是否实名 |  |
| 核心成员过往项目 |  |
| 是否有失败或争议记录 |  |
| 投资机构 |  |
| 融资轮次与估值 |  |
| 顾问是否真实参与 |  |
| GitHub / 开发活动 |  |
| 治理论坛是否活跃 |  |
| 多签地址和权限结构 |  |

匿名团队不必然是骗局，但匿名会提高追责难度。实名团队也不必然可靠，但至少能让你检查履历、声誉和利益绑定。

#### C.4 代币经济：钱从哪里来，又流向哪里

| 指标 | 要填什么 | 风险提示 |
| --- | --- | --- |
| 总供应量 | 固定 / 通胀 / 可治理修改 | 可随意增发的代币要额外小心 |
| 流通供应量 | 当前市场真实流通量 | 低流通高 FDV 容易被解锁压制 |
| FDV | 当前价格下的完全稀释估值 | FDV 过高时，未来增长空间被提前透支 |
| 分配比例 | 团队、投资人、社区、生态、空投 | 内部人占比过高，抛压和治理风险更大 |
| 解锁表 | 每月/每季度解锁规模 | 大额解锁前后要特别关注流动性 |
| 代币效用 | 支付、质押、治理、手续费、抵押品 | 没有效用的治理币更依赖叙事 |
| 价值捕获 | 协议收入是否回流代币 | “协议有收入”不等于“代币能捕获收入” |
| 通胀与销毁 | 增发、奖励、销毁机制 | 高 APY 可能只是高通胀换来的 |

#### C.5 链上与财务数据

![财务指标示意](https://image.binance.vision/editor-uploads/150190dc17ac46fabb282e00bc6eb438.png)

图 C-3：市值、流动性、成交量和供应机制，是项目研究里不能跳过的财务指标。图片素材来自 [output/519-a-guide-to-cryptocurrency-fundamental-analysis.md](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)。

建议至少记录最近 30 天和 180 天两组数据：

- TVL：是否增长，是否由少数大户贡献，是否来自短期补贴。
- 活跃地址：是真实用户增长，还是空投刷量。
- 交易量：是否与产品使用场景匹配。
- 协议收入：收入来源是否可持续。
- 手续费：用户是否愿意为服务付费。
- 持币集中度：前 10、前 50 地址占比。
- 大户行为：增持、转入交易所、跨链、解锁后转移。
- 流动性深度：买入和卖出时是否会产生严重滑点。
- 社区活跃：开发者、治理论坛、用户反馈是否真实。

#### C.6 风险清单

| 风险类型 | 问题 | 结论 |
| --- | --- | --- |
| 合约风险 | 是否审计？审计机构是谁？是否有未修复高危问题？ |  |
| 权限风险 | 管理员能否暂停、升级、铸币、拉黑地址？ |  |
| 经济风险 | 收益是否来自真实收入，还是来自新资金进入？ |  |
| 流动性风险 | 退出时是否有足够深度？ |  |
| 预言机风险 | 价格源是否可靠？是否容易被操纵？ |  |
| 桥风险 | 是否依赖跨链桥托管大量资产？ |  |
| 监管风险 | 是否涉及证券、稳定币、借贷、隐私、衍生品？ |  |
| 团队风险 | 是否有跑路、虚假履历、利益输送迹象？ |  |
| 竞争风险 | 巨头或开源竞品是否能快速复制？ |  |
| 叙事风险 | 如果热点过去，产品是否仍有需求？ |  |

#### C.7 加权评分表

| 维度 | 权重 | 评分 1-5 | 加权分 |
| --- | ---: | ---: | ---: |
| 真实需求 | 20% |  |  |
| 产品可用性 | 15% |  |  |
| 团队与执行 | 15% |  |  |
| 代币经济 | 15% |  |  |
| 链上数据 | 15% |  |  |
| 安全与权限 | 10% |  |  |
| 估值与流动性 | 10% |  |  |
| 总分 | 100% |  |  |

**结论必须写成三句话：**

- 我看好它的最强理由：____
- 我可能看错的最大风险：____
- 我会在什么条件下买入、观察或放弃：____

### 附录 D：交易复盘模板

交易复盘的目的不是羞辱自己，也不是证明自己聪明，而是找出“哪些行为长期赚钱，哪些行为长期伤害账户”。一笔交易可以亏钱但执行正确，也可以赚钱但过程很糟糕。复盘要分清这两件事。

![交易日记](https://public.bnbstatic.com/static/academy/uploads/00b501feced946ea97ab20bf232fa389.jpg)

图 D-1：交易日记把计划、执行、结果和情绪放在同一张桌子上。图片素材来自 [output/501-what-is-a-trading-journal-and-how-to-use-one.md](../output/501-what-is-a-trading-journal-and-how-to-use-one.md)。

#### D.1 每笔交易记录字段

| 字段 | 填写 |
| --- | --- |
| 日期与时间 |  |
| 标的 / 交易对 |  |
| 市场类型 | 现货 / 合约 / 期权 / DeFi / NFT |
| 方向 | 做多 / 做空 / 套保 / 套利 |
| 入场价 |  |
| 出场价 |  |
| 仓位大小 |  |
| 杠杆倍数 |  |
| 账户总权益 |  |
| 本笔最大可亏损 |  |
| 止损价 |  |
| 止盈计划 |  |
| 风险收益比 |  |
| 手续费 / Gas / 滑点 |  |
| 实际盈亏 |  |
| 入场理由 |  |
| 出场理由 |  |
| 情绪评分 | 入场 __ / 10；持仓 __ / 10；出场 __ / 10 |
| 是否按计划执行 | 是 / 否 |

#### D.2 入场前 10 问

- [ ] 我这笔交易的依据是什么：趋势、支撑阻力、基本面事件、套利价差，还是纯粹手痒？
- [ ] 如果我错了，市场会用什么信号告诉我？
- [ ] 止损价在哪里？如果被打到，我是否接受？
- [ ] 这笔最大亏损占账户比例是多少？
- [ ] 我是否因为刚亏一笔而想报复性交易？
- [ ] 我是否因为看到别人晒盈利而追进去？
- [ ] 当前市场流动性是否足够？
- [ ] 重大新闻、解锁、数据公布、利率会议是否临近？
- [ ] 这笔交易能否写进我的交易系统？
- [ ] 如果现在不交易，我会错过什么？如果交易错了，我会损失什么？

#### D.3 出场后复盘分类

| 分类 | 含义 | 下一步 |
| --- | --- | --- |
| 判断对，执行对 | 系统内盈利或系统内小亏 | 记录样本，继续重复 |
| 判断对，执行错 | 看对方向但仓位、止损、出场乱了 | 优先修执行纪律 |
| 判断错，执行对 | 按计划止损，亏损可控 | 这是健康亏损，不要惩罚自己 |
| 判断错，执行错 | 没计划、扛单、加仓摊平 | 降低仓位，暂停交易，重写规则 |
| 判断错，侥幸赚 | 结果盈利但过程危险 | 标记为风险样本，不计入系统信心 |

#### D.4 每周复盘模板

- 本周总交易次数：____
- 盈利交易 / 亏损交易：____ / ____
- 最大单笔盈利：____
- 最大单笔亏损：____
- 最大回撤：____
- 是否有超计划交易：有 / 无
- 是否有移动止损、扛单、加仓摊平：有 / 无
- 最有效的信号：____
- 最伤账户的行为：____
- 下周只改一个动作：____

#### D.5 情绪记录词表

交易时如果只写“心态不好”，复盘价值很低。尽量具体：

| 情绪 | 常见行为 | 应对动作 |
| --- | --- | --- |
| FOMO | 追高、加杠杆、忽略止损 | 等一根确认 K 线或放弃 |
| 恐惧 | 过早止盈、不敢执行计划 | 降低仓位，按系统出场 |
| 愤怒 | 报复性交易 | 强制离开屏幕 30 分钟 |
| 无聊 | 没信号也下单 | 写观察笔记，不开仓 |
| 贪婪 | 盈利后继续加码 | 分批止盈，锁定本金 |
| 侥幸 | 扛单等回本 | 立即回到预设止损 |

### 附录 E：DeFi 交互前风险检查表

DeFi 的风险经常不是单点爆炸，而是多层叠加：前端可能是假的，合约可能有漏洞，预言机可能被操纵，收益可能不可持续，桥可能出事，授权可能长期暴露。交互前多花 10 分钟，往往比事后追回资产现实得多。

![DApp 权限撤销示意](https://image.binance.vision/editor-uploads-original/cff9ae28c8db475bb0b2df96f41e7731.png)

图 E-1：交互结束后撤销不必要授权，是 DeFi 风控里最容易执行、也最容易被忽略的动作。图片素材来自 [output/548-how-to-secure-your-cryptocurrency.md](../output/548-how-to-secure-your-cryptocurrency.md)。

#### E.1 5 分钟快速检查

- [ ] 我是从官方链接进入的前端：官网、官方文档、官方社媒、GitHub 或已保存书签。
- [ ] 合约地址与官方文档一致。
- [ ] 协议在 DeFiLlama、Token Terminal、Dune、区块浏览器等工具中能查到基本数据。
- [ ] TVL、交易量和活跃地址不是突然一天暴涨后无历史。
- [ ] 收益来源能解释清楚：手续费、借贷利差、质押奖励、积分补贴、代币通胀。
- [ ] APY 如果高得离谱，我能说出它由谁支付、能持续多久。
- [ ] 授权额度使用精确额度，而不是默认无限授权。
- [ ] 存入金额即使全部归零，也不会影响生活和长期计划。
- [ ] 我知道退出流程要几步：解除质押、赎回、移除流动性、跨链、换币。
- [ ] 我已经确认目标链 Gas 足够，不会卡在退出流程中。

#### E.2 30 分钟深度检查

| 检查项 | 要看什么 | 红旗 |
| --- | --- | --- |
| 官方来源 | 官网域名、文档、社媒、GitHub 是否互相指向 | 链接来源混乱，域名拼写相似 |
| 审计报告 | 审计机构、审计范围、未修复问题 | 只说“已审计”，不给报告 |
| 管理员权限 | 是否可暂停、升级、改费率、转移资金 | 单一私钥拥有高权限 |
| 多签 | 签名人数、门槛、签名者声誉 | 2/2 或 1/1 控制核心资产 |
| 预言机 | 使用 Chainlink、TWAP 还是自建价格源 | 小池子价格可被短时操纵 |
| 流动性 | 池子深度、LP 集中度、锁仓情况 | 流动性由项目方单方提供且未锁 |
| 代币分布 | 前十大地址、团队和投资人占比 | 持币高度集中且即将解锁 |
| 历史事故 | 是否被攻击、赔付和修复情况 | 事故后没有复盘和改进 |
| 收益来源 | 收益来自真实收入还是代币补贴 | 只靠新用户买币支付旧用户收益 |
| 社区反馈 | 治理论坛、Discord、X、GitHub Issue | 只有喊单，没有产品讨论 |

#### E.3 LP 与收益产品专用检查

- [ ] 我知道池子里两种资产分别是什么，不把“稳定币池”默认当作无风险。
- [ ] 我能解释无常损失发生在什么情况下。
- [ ] 我检查了池子历史 APY，而不是只看当前最高值。
- [ ] 我理解奖励代币可能下跌，导致真实收益低于显示收益。
- [ ] 我知道质押或锁仓是否有冷却期。
- [ ] 我检查了合约是否可升级，以及升级由谁控制。
- [ ] 我计划了退出顺序：先撤 LP，还是先领取奖励，是否需要跨链。
- [ ] 我把这次交互记录到钱包授权表和投资复盘表。

#### E.4 空投与积分交互检查

- [ ] 项目是否公开承诺空投？如果没有，不把积分当作确定收益。
- [ ] 为了空投付出的 Gas、桥费、时间和资产风险是否值得？
- [ ] 是否要求输入助记词、下载不明客户端、连接主钱包？
- [ ] 是否要求签署看不懂的 Permit 或 NFT 全局授权？
- [ ] 交互是否可用 Burner 钱包完成？
- [ ] 如果最后没有空投，我是否仍愿意承担成本？

### 附录 F：30/60/90 天学习路线图

这条路线不是为了 90 天后“精通 Web3”，而是为了把你从“看什么都新鲜”带到“知道自己在做什么”。每 30 天只有一个主目标：先活下来，再建立纪律，最后形成研究能力。

#### F.1 Day 1-30：认知与安全

**目标：** 读懂基本概念，完成最小安全闭环。

| 周期 | 阅读与学习 | 实操任务 | 交付物 |
| --- | --- | --- | --- |
| 第 1 周 | 第 1-2 章：Web3 地图、区块链基础 | 画出 BTC、Ethereum、BNB Chain、Solana 的区别 | 一张“公链对比表” |
| 第 2 周 | 第 3-4 章：主流生态、钱包 | 创建一个小额热钱包，备份助记词 | 钱包备份检查表 |
| 第 3 周 | 第 5 章：安全与骗局 | 完成浏览器 Profile 隔离、交易所 2FA、反钓鱼码 | 安全设置截图或记录 |
| 第 4 周 | 复读钱包与安全章节 | 做一次小额充值和提币，核对链和地址 | 一份小额转账复盘 |

**30 天验收标准：**

- 能解释私钥、助记词、地址、热钱包、冷钱包的区别。
- 能独立完成小额转账，并知道转错链或地址的后果。
- 能识别 5 类常见骗局：钓鱼、假客服、假空投、地址投毒、高收益骗局。
- 已经把长期资产和实验钱包分开。

#### F.2 Day 31-60：交易、组合与纪律

**目标：** 不急着赚钱，先建立交易与仓位纪律。

| 周期 | 阅读与学习 | 实操任务 | 交付物 |
| --- | --- | --- | --- |
| 第 5 周 | 第 6 章：交易市场基础 | 用模拟仓记录 5 笔交易 | 交易日记表 |
| 第 6 周 | 第 7 章：技术分析 | 给 BTC/USDT 日线添加均线、RSI、成交量 | 图表模板 |
| 第 7 周 | 第 8 章：资产配置 | 写出自己的风险承受能力和资金分层 | 资产配置草案 |
| 第 8 周 | 复盘交易心理 | 完成 20 笔模拟交易，不追求盈利 | 周复盘 2 篇 |

**60 天验收标准：**

- 每笔交易前都能写出入场、止损、止盈和最大亏损。
- 知道市价单、限价单、止损单、滑点和手续费的实际影响。
- 能解释为什么“仓位大小”比“看对方向”更重要。
- 已经制定定投、现金储备、风险资产比例和最大回撤底线。

#### F.3 Day 61-90：链上、DeFi 与项目研究

**目标：** 从“听别人说”过渡到“自己查证”。

| 周期 | 阅读与学习 | 实操任务 | 交付物 |
| --- | --- | --- | --- |
| 第 9 周 | 第 9-10 章：DeFi 与扩容 | 用小额体验一次 Swap 或 LP 观察，不追求收益 | DeFi 交互记录 |
| 第 10 周 | 第 11-12 章：NFT、DAO、链上身份 | 查看一个 NFT 合约、一次治理提案 | 链上浏览器笔记 |
| 第 11 周 | 第 13 章：项目研究 | 用附录 C 分析一个成熟项目 | 项目研究报告 1 |
| 第 12 周 | 第 14-15 章：趋势与风险 | 分析一个新叙事项目，只写风险不写利好 | 项目研究报告 2 |

**90 天验收标准：**

- 能在区块浏览器查交易、合约、持币地址和授权。
- 能用 DeFiLlama、Token Terminal、Dune、项目文档交叉验证项目数据。
- 能写出一份包含需求、团队、代币经济、链上数据和风险的研究报告。
- 能拒绝自己看不懂的收益机会。

#### F.4 Day 90 以后：长期操作系统

90 天以后，只保留三件长期习惯：

- **每周一小时学习：** 读一篇长文或项目文档，写 300 字笔记。
- **每月一次安全体检：** 查授权、查账户、查备份、查资产分布。
- **每季度一次组合复盘：** 看仓位、回撤、收益来源、是否偏离原计划。

当你开始觉得“我好像错过了很多机会”时，重新读第 5 章和第 8 章。这个行业永远会制造机会感，但你真正需要的是能活过多个周期的判断力。

### 附录 G：常用工具、数据源与延伸阅读

本附录的工具清单建议保存为浏览器书签。使用时优先从书签进入，不从搜索广告进入。

#### G.1 本书素材库延伸阅读

**钱包与安全**

- [什么是加密货币钱包？](../output/613-crypto-wallet-types-explained.md)：钱包类型、托管与非托管、热钱包与冷钱包。
- [如何设置加密货币钱包](../output/206-how-to-set-up-a-crypto-wallet.md)：托管钱包、非托管钱包、硬件钱包的入门流程。
- [如何安全存储数字货币](../output/548-how-to-secure-your-cryptocurrency.md)：私钥、助记词、DApp 授权、权限撤销。
- [什么是硬件钱包](../output/568-what-is-a-hardware-wallet.md)：硬件钱包适用场景和安全边界。
- [什么是多签钱包](../output/646-what-is-a-multisig-wallet.md)：团队和家庭大额资产的多签思路。
- [什么是钓鱼攻击](../output/675-what-is-phishing.md)、[什么是键盘记录器](../output/676-what-is-a-keylogger.md)、[什么是粉尘攻击](../output/673-what-is-a-dusting-attack.md)：常见攻击手法。

**研究与估值**

- [加密货币基本面分析指南](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)：链上指标、项目指标、财务指标。
- [什么是代币经济学以及为什么重要](../output/380-what-is-tokenomics-and-why-does-it-matter.md)：供应、分配、效用与价值捕获。
- [什么是网络效应](../output/484-what-is-a-network-effect.md)：生态增长和护城河。
- [什么是流动性池](../output/494-what-are-liquidity-pools-in-defi.md)、[什么是 AMM](../output/515-what-is-an-automated-market-maker-amm.md)：DeFi 研究基础。
- [如何识别 DeFi 中的骗局](../output/503-how-to-spot-scams-in-decentralized-finance-defi.md)：审计、团队、代币分布和跑路风险。

**交易与复盘**

- [什么是交易日记以及如何使用](../output/501-what-is-a-trading-journal-and-how-to-use-one.md)：交易记录字段和复盘方法。
- [风险管理入门指南](../output/594-a-beginners-guide-to-understanding-risk-management.md)：仓位、止损、风险控制。
- [如何计算交易头寸大小](../output/556-how-to-calculate-position-size-in-trading.md)：把亏损控制在账户可承受范围内。
- [什么是风险回报比](../output/525-what-is-the-risk-reward-ratio-and-how-to-use-it.md)：交易前判断值不值得做。
- [交易心理学：如何不被情绪支配](../output/341-trading-psychology-how-to-trade-without-emotions.md)：FOMO、恐惧、贪婪和纪律。

**DeFi 与链上交互**

- [DeFi 完整入门指南](../output/587-the-complete-beginners-guide-to-decentralized-finance-defi.md)：借贷、DEX、收益、风险。
- [什么是 DEX](../output/517-what-is-a-decentralized-exchange-dex.md)：去中心化交易所的基本结构。
- [什么是无常损失](../output/513-impermanent-loss-explained.md)：LP 必读。
- [什么是闪电贷](../output/522-what-are-flash-loans-in-defi.md)：攻击与套利基础。
- [什么是区块链预言机](../output/579-blockchain-oracles-explained.md)：价格源和链下数据风险。
- [什么是区块链桥](../output/383-what-s-a-blockchain-bridge.md)：跨链资产风险。

#### G.2 外部工具与官方参考

- [Etherscan](https://etherscan.io/)、[BscScan](https://bscscan.com/)、[Solscan](https://solscan.io/)：常用区块链浏览器。
- [DeFiLlama](https://defillama.com/)：TVL、收益、稳定币、桥、协议收入等 DeFi 数据。
- [Token Terminal](https://tokenterminal.com/)：协议收入、费用、估值和基本面仪表盘。
- [Dune](https://dune.com/)：社区 SQL 仪表盘，适合查链上专题数据。
- [CoinGecko](https://www.coingecko.com/) 与 [CoinMarketCap](https://coinmarketcap.com/)：价格、市值、成交量和基础资料。
- [revoke.cash](https://revoke.cash/)：Token Approval 查询与撤销。
- [MetaMask：Secret Recovery Phrase 与私钥安全指南](https://support.metamask.io/start/user-guide-secret-recovery-phrase-password-and-private-keys)：官方钱包安全说明。
- [Trezor：钱包备份说明](https://trezor.io/learn/a/seed-backup-12-vs-24-words)：硬件钱包备份和助记词格式参考。
- [Chainabuse](https://www.chainabuse.com/)：恶意地址、骗局和攻击事件报告平台。
- [SEC：加密资产诈骗投资者提醒](https://www.sec.gov/oiea/investor-alert-5-ways-fraudsters-may-lure-victims-scams-involving-crypto-asset)：美国证券监管机构的诈骗风险提示。
- [CFTC：数字资产和加密交易网站诈骗提醒](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/watch_out_for_digital_fraud.html)：高收益承诺、假交易网站等风险提示。
- [FTC：比特币 ATM 诈骗提醒](https://consumer.ftc.gov/consumer-alerts/2024/03/did-someone-send-you-bitcoin-atm-its-scam)：被要求去比特币 ATM 转账时的风险提示。
- [IRS：Digital assets](https://www.irs.gov/filing/digital-assets)：美国数字资产税务申报入口；非美国读者请查询本地税务机关。

#### G.3 最后这张“不要做”清单

- 不把助记词输入任何网页。
- 不因为客服、群友、KOL、恋爱对象、项目方私信而转账。
- 不用主钱包领陌生空投。
- 不在没看懂授权内容时点击确认。
- 不把高 APY 当成低风险。
- 不把项目方愿景当作真实收入。
- 不把一次盈利当作自己已经掌握市场。
- 不把“我只投一点”当作不做研究的理由。
- 不借钱、刷信用卡、挪用生活费买加密资产。
- 不和市场赌气。

---

## 后记

写完这本书时，我最想提醒你的，反而不是某个协议、某条链或某个代币。

Web3 不会按照任何一本书写下来的路径发展。当你读到这里时，某些章节提到的协议可能已经消失，某些叙事可能已经被推翻，某些项目可能已经暴跌、重生，或改了一个更时髦的名字重新出现。这不是一本书的缺陷，而是这个行业的基本现实：**技术在迭代，资本在迁徙，叙事在轮换，人性却很少改变。**

所以，这本书真正想交给你的，不是一份“答案合集”，而是一套可以反复升级的操作系统。

![Web3 与区块链关系示意](https://public.bnbstatic.com/static/academy/uploads/6b162ed8a4e34393b8a1540a10b837ff.png)

图 后记-1：Web3 的核心不只是“新互联网”这个口号，而是把身份、资产、数据、支付、组织和应用重新连接起来。图片素材来自 [output/366-what-s-the-relationship-between-blockchain-and-web3.md](../output/366-what-s-the-relationship-between-blockchain-and-web3.md)。

### 1. 这个行业已经不只是“小圈子的实验”

如果把时间往回拉，2008 年的比特币白皮书只是九页论文；2015 年的以太坊像一台没人完全知道能跑什么的世界计算机；2020 年前后的 DeFi 是一群人把交易所、借贷、做市和收益策略搬到链上；2021 年的 NFT 泡沫让很多人第一次听到“数字所有权”；2024 年 1 月 10 日，美国 SEC 批准多只现货比特币 ETP 上市交易，把比特币进一步接入传统金融账户体系；到 2025 年，稳定币、RWA、Layer2、链抽象、AI Agent、DePIN 又把这条路延伸到支付、资产发行、数据协作和机器经济。

截至 2026 年 4 月 25 日，可以参考几组公开数据来理解这个行业的位置：

| 观察角度 | 可以看到什么 | 对读者意味着什么 |
| --- | --- | --- |
| 全球采用 | Chainalysis 2025 全球加密采用指数中，印度、美国、巴基斯坦、越南、巴西位列前五 | 加密资产已经不是单一国家或单一阶层的兴趣，而是多地区、多场景的金融与技术现象 |
| 机构入口 | 美国现货比特币 ETP 于 2024 年 1 月获批，传统券商账户开始成为比特币敞口入口之一 | “买币”不再只有交易所和链上钱包，监管、托管、税务和产品结构会越来越重要 |
| DeFi 规模 | DeFiLlama 当日首页显示 DeFi TVL 约 841 亿美元，稳定币市值约 3,206 亿美元 | 链上金融已有可观规模，但远不是“无风险银行”，TVL 和 APY 都必须结合风险来源看 |
| 稳定币使用 | Visa 2026 稳定币策略文章提到，稳定币供应在 2025 年增长超过 50%，并预计调整后交易量超过 10 万亿美元 | 稳定币正在从“交易媒介”走向跨境结算、金融科技和日常支付基础设施 |

这些数字不是用来制造兴奋的。它们只是说明一件事：Web3 已经从纯粹的加密圈内部实验，变成一个同时受技术、金融、监管、地缘、用户体验和真实需求共同塑造的复杂系统。

复杂系统最危险的地方，是它会让新手误以为“我只要抓住一个热点就够了”。但真正能留在这个行业里的人，往往不是热点追得最快的人，而是能在每一轮变化中不断校正自己的人。

### 2. 你真正需要带走的五种能力

读完这本书，不代表你已经“精通 Web3”。更准确地说，你已经拥有了一套入场装备。接下来更重要的是，把知识变成能力。

**第一，概念还原能力。** 当你听到一个新词，比如 Restaking、Intent、Modular、Data Availability、AI Agent、RWA、SocialFi，不要急着问“会不会涨”。先把它拆回本书前几章的地基：它解决的是资产、身份、计算、存储、交易、治理、支付，还是信任问题？它依赖哪条链？安全从哪里来？收益由谁支付？失败时谁承担损失？

**第二，链上查证能力。** Web3 最迷人的地方，是很多东西可以自己验证；最危险的地方，是很多人明明可以验证，却懒得验证。一个合约地址、一个交易哈希、一个持币分布、一个授权记录、一个治理提案，都比群聊里的“内部消息”更值得看。

![链上基本面分析示意](https://image.binance.vision/editor-uploads/a0a72d8bdec248a48c27dbe4af783234.png)

图 后记-2：链上指标能帮助你把“故事”还原成数据，但数据也需要结合产品、团队、代币经济和市场环境一起判断。图片素材来自 [output/519-a-guide-to-cryptocurrency-fundamental-analysis.md](../output/519-a-guide-to-cryptocurrency-fundamental-analysis.md)。

**第三，风险分层能力。** 很多人以为风险管理就是“别梭哈”。这当然对，但还不够。真正的风险管理，是知道不同的钱该住在不同地方：生活费不进场，长期资产不乱签名，实验资金不和主钱包混用，交易仓不影响家庭现金流，DeFi 交互不使用冷钱包主地址。

**第四，行为复盘能力。** 你需要知道自己为什么赚钱，也要知道自己为什么亏钱。一次盈利可能只是行情送的，一次亏损也可能是系统内的健康止损。最值得警惕的不是亏钱，而是“判断错、执行错、还给自己找理由”。交易日记、项目研究模板、每月安全体检，看起来笨，但它们能把你的错误变成可迭代的样本。

**第五，长期更新能力。** 这个行业的信息密度太高，没人能永远站在所有主题的最前沿。你不需要每天追 100 条消息。你需要的是一个稳定节奏：每周读一篇长文，每月复盘一次资产和授权，每季度更新一次工具、规则和研究框架。

### 3. 你可能会遇到的三次考验

真正的学习通常发生在书合上以后。

**第一次考验，是牛市里的自我膨胀。** 当你连续几次买对，账户快速上涨，社交媒体上人人都像天才，你会很容易忘记这本书里所有关于仓位、止损、流动性、解锁和周期的提醒。牛市会让人误以为风险消失了，但风险只是暂时不收费。

**第二次考验，是熊市里的自我怀疑。** 当价格持续下跌，项目停更，群聊冷清，过去看起来闪闪发光的叙事变成笑话，你会怀疑自己是不是学错了方向。这个时候，不要把“价格下跌”简单等同于“技术无用”，也不要把“技术有用”误读成“所有代币都值得持有”。熊市最适合做三件事：补基础、清仓位、看真实用户。

**第三次考验，是新叙事里的失忆。** 每一轮新周期都会包装出新的词：更快的链、更聪明的钱包、更高的收益、更公平的发行、更强的 AI、更真实的资产。请记住，名字会变，问题很少变：谁控制权限？谁提供流动性？收入从哪里来？代币为什么捕获价值？退出通道在哪里？最坏情况是什么？

![风险管理示意图](https://public.bnbstatic.com/static/academy/uploads/800356175c614498af2e97a53def5bc7.jpg)

图 后记-3：风险管理不是悲观，而是给自己留下继续学习和继续参与的资格。图片素材来自 [output/594-a-beginners-guide-to-understanding-risk-management.md](../output/594-a-beginners-guide-to-understanding-risk-management.md)。

### 4. Day 90 以后，继续这样走

如果你已经按第十五章和附录 F 完成了 90 天路线图，接下来不用把学习强度无限拉高。更可持续的做法，是建立一个低负担、可重复的长期系统。

**每周一小时：读深一点。** 不刷碎片消息，选一篇项目文档、研究报告、事故复盘、监管文件或高质量长文。读完只写三个问题：它解决什么问题？它依赖什么假设？如果它失败，最可能因为什么失败？

**每月一次：查安全。** 打开区块链浏览器、revoke.cash、交易所账户安全设置和密码管理器，检查授权、地址白名单、2FA、反钓鱼码、浏览器插件、钱包分层和备份状态。安全不是一次设置，而是周期性卫生习惯。

**每季度一次：重画地图。** 重新审视你的资产配置、研究关注列表、常用工具、信息源和风险边界。删掉不再使用的钱包和 DApp，减少噪声信息源，把最常用的数据网站重新整理到书签栏。

**每年一次：写一封给自己的复盘信。** 不要只写收益率。写这一年你犯过的最大错误，最幸运的一次盈利，最值得保留的习惯，最应该停止的行为，以及下一年无论行情如何都不会违反的底线。

### 5. 最后，给你一张更短的清单

如果某天你不想翻完整本书，只想快速确认自己有没有偏航，就看下面这张清单：

- 我是否能解释自己买入或参与的东西，而不是只会复述别人的观点？
- 我是否知道最坏情况下会亏多少，以及这笔亏损是否影响生活？
- 我是否把长期资产、交易仓、DeFi 交互钱包和空投钱包分开？
- 我是否检查过合约地址、授权内容、项目文档、代币解锁和资金来源？
- 我是否记录了交易理由、仓位、止损、退出计划和情绪状态？
- 我是否能接受“看不懂就错过”，而不是为了不掉队强行参与？
- 我是否还在学习基础概念，而不是只追逐下一个叙事？

Web3 最吸引人的地方，是它把很多过去只有机构、平台或少数专业人士能参与的东西，开放给了普通人：自托管资产、全球支付、链上交易、无需许可的应用、开源协作、数字身份、公共数据和新型组织。

但开放并不等于简单，自由也不等于免费。你获得了更大的控制权，也承担了更多原本由银行、券商、平台、客服、法律流程替你承担的责任。私钥在你手里，签名在你手里，选择也在你手里。

所以，别急着把自己变成“高手”。先做一个清醒的新手，再做一个有纪律的参与者，最后才可能成为真正有判断力的人。

这个行业奖励两种人：**有极强技术直觉的建设者，以及纪律严格、生命周期长的参与者。** 前者门槛很高，后者你完全可以做到。

祝你慢一点，稳一点。  
在每一次兴奋时保留怀疑，在每一次恐惧时保留理性。  
长久地在这里，也长久地拥有自己。

### 后记补充参考

- [Chainalysis：2025 全球加密采用指数](https://www.chainalysis.com/blog/2025-global-crypto-adoption-index/)：全球采用排名和地区趋势。
- [SEC：2024 年 1 月 10 日现货比特币 ETP 批准声明](https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023)：现货比特币 ETP 获批的官方说明。
- [DeFiLlama](https://defillama.com/)：DeFi TVL、稳定币市值、DEX 交易量等实时数据。
- [Visa：Stablecoin strategy](https://corporate.visa.com/en/services/visa-consulting-analytics/insights/vca-stablecoin-strategy.html)：稳定币供应、交易量和机构应用趋势。
- [什么是交易日记以及如何使用](../output/501-what-is-a-trading-journal-and-how-to-use-one.md)：把交易从情绪反应变成可复盘样本。
- [交易心理：如何避免情绪化交易](../output/341-trading-psychology-how-to-trade-without-emotions.md)：理解 FOMO、恐惧、贪婪与过度自信。
- [风险管理入门指南](../output/594-a-beginners-guide-to-understanding-risk-management.md)：仓位、止损、风险收益比和多元化。
