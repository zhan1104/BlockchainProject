机构图标

{ 基于区块链的身份认证 }

立项建议书

| 文件状态： [√] 草稿 [ ] 正式发布 [ ] 正在修改 | 文件标识： | Company-Project-PIM-PROPOSAL |
|-----------------------------------------------|------------|------------------------------|
|                                               | 当前版本： | X.Y                          |
|                                               | 作 者：    |                              |
|                                               | 完成日期： | Year-Month-Day               |

版 本 历 史

| 版本/状态 | 作者 | 参与者 | 起止日期 | 备注               |
|-----------|------|--------|----------|--------------------|
|           |      |        |          | 编写合约主体       |
|           |      |        |          | 完善合约所需的方法 |
|           |      |        |          | 插入ERC20代码      |
|           |      |        |          | 优化合约内容       |
|           |      |        |          |                    |

目 录

[0.	文档介绍	4](#_Toc59006874)

>   [0.1 文档目的	4](#_Toc59006875)

>   [0.2 文档范围	5](#_Toc59006876)

>   [0.3 读者对象	5](#_Toc59006877)

>   [0.4 参考文献	5](#_Toc59006878)

>   [0.5 术语与缩写解释	5](#_Toc59006879)

[1. 产品介绍	7](#_Toc59006880)

>   [1.1 产品定义	7](#_Toc59006881)

>   [1.2 产品开发背景	8](#_Toc59006882)

>   [1.3 产品主要功能和特色	9](#_Toc59006883)

>   [1.4 产品范围	10](#_Toc59006884)

[2. 市场概述	11](#_Toc59006885)

>   [2.1 客户需求	11](#_Toc59006886)

>   [2.2 市场规模与发展趋势	13](#_Toc59006887)

[3. 产品发展目标	14](#_Toc59006888)

[4. 产品技术方案	14](#_Toc59006889)

>   [4.1 产品体系结构	14](#_Toc59006890)

>   [4.2 关键技术	15](#_Toc59006891)

[5. 产品优缺点分析	16](#_Toc59006892)

[6.应用前景	17](#_Toc59006893)

[10. 总结	17](#_Toc59006894)

# <br>文档介绍

[^1]

[^1]:  

## 0.1 文档目的

目前跟区块链结合比较紧密的领域有金融（各大银行机构）、数字资产（布萌网络）、智能合约（以太坊）等。当前，人们对隐私保护的需求越来越大，“数字身份”的应用也不再满足于一个身份的代表，而是等同于“数字资产”的价值应用，能够自我把控隐私权益。随着信息化时代和“互联网+”时代的加速发展，个人信息的商业价值已不同以往。

数字身份，是指通过数字化信息将个体可识别地刻画出来；亦理解为将真实的身份信息浓缩为数字代码形式的密钥，以便对个人的实时行为信息进行绑定、查询和验证。而数字身份的发展阶段大致经历了四个阶段：中心化身份、联盟身份、以用户为中心的身份和自主主权身份。

基于对数字身份系统的充分理解，再结合区块链技术的特点——去中心化、点对点网络、时间戳、不可篡改、共识机制、智能合约等，可以发现，数字身份和区块链技术之间有着巧妙的联系。发展数字身份系统是必然的，而区块链技术在某种程度上也提供了一个相对可信的方案。

借助、融合目前所学的知识，以项目好为主线，以身份添加、身份认证、身份查询为手段，为这次项目构建一个数据共享、业务协同、科学合理的身份管理系统，面向未来数字身份需求，统一标准，规划流程，实现数字身份过程精细化，动态化管理。为数字身份与纸质身份的一体化提供了必要的基础。

此文档目的，主要内容包含以下内容：

1.  实现基础数据集中管理，基础数据定义规范化。标准化，以便于逐步提高基础数据管理质量；

2.  建立数字身份系统，实现业务过程精细化管理；梳理并规范数字身份业务流程，建立一个合理、高效的数字身份管理体系，建设统一高效的协同数字身份工作平台；

3.  强化各系统的统计查询的功能，为后台管理提供便利；

4.  实现合约与管制一体化，加强数字身份控制，提高管控能力；

## 0.2 文档范围

从十月底开始，此项目的开发在稳步推进。从查找资料，国内外网站的翻找；到编写合约，解决一个一个难题；再到完善合约的内容，所需的各种方法，加入ERC20代码等，；最终到项目的基本完成。都在保证质量的前提下不断推进，目的就是为了完成这个基于区块链的数字身份系统。

## 0.3 读者对象

此文档面向所有读者，阅读此文档之前应先了解有关数字身份的背景、区块链的相关知识等，您可以选读你所需了解的章节。

我的目的：①通过阅读本文，您可以了解此次开发的历程.

②了解数字身份与传统身份的不同与优势

## 0.4 参考文献

[安徽梅克尔数科技有限公司]
，区块链+“数字身份”：让信息可控，让身份可信，知乎，2020/12/1

## 0.5 术语与缩写解释

| **缩写、术语**                                   | **解 释**                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 数字身份                                         | 满足政府监管政策，由国家公民网络身份识别系统签发。                                                                                                                                                                                                                                                                                                                                                                                                             |
| Hash算法                                         | 一般翻译做"散列"，也有直接音译为"哈希"的。简单的说就是一种将任意长度的消息压缩到某一固定长度的消息摘要的函数。                                                                                                                                                                                                                                                                                                                                                 |
| Dapp                                             | 是一种开源的应用程序，自动运行，将其数据存储在区块链上，以密码令牌的形式激励，并以显示有价值证明的协议进行操作。                                                                                                                                                                                                                                                                                                                                               |
| ERC20                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Solidity                                         | Solidity 是 Ethereum 的一种契约型编程语言，其语法与 JavaScript 类似，并且旨在定位到以太坊虚拟机。 Solidity 是静态类型的，支持继承、库和用户自定义类型以及其他功能。可以用来创建投票、众筹、盲拍、多签名钱包等合同。                                                                                                                                                                                                                                            |
| 51%攻击                                          | 所谓51%攻击，就是利用比特币使用算力作为竞争条件的特点，使用算力优势撤销自己已经发生的付款交易。如果有人掌握了50%以上的算力，他能够比其他人更快地找到开采区块需要的那个随机数，因此他实际上拥有了绝对哪个一区块的有效权利。                                                                                                                                                                                                                                     |
| 时间戳                                           | 时间戳（英语：Timestamp）是指字符串或编码信息用于辨识记录下来的时间日期。国际标准为ISO 8601。                                                                                                                                                                                                                                                                                                                                                                  |
| 钱包地址                                         | 如果我们把ETH钱包简单比作成银行卡账户的话，那么ETH钱包地址就可以看成是银行卡账号。不同的是，ETH地址是可以不存储在网络上的，更是可以独立于你的钱包而存在的。                                                                                                                                                                                                                                                                                                    |
| 私钥                                             | 私钥是非常重要的，可以通过非加密算法算出公钥，公钥可以再算出币的地址。每次交易的时候，付款方必须出具私钥，以及私钥产生的签名，每次交易签名不同，但是都由同一个私钥产生。                                                                                                                                                                                                                                                                                       |
| 公钥                                             | 是和私钥成对出现的，公钥可以算出币的地址，因此可以作为拥有这个币地址的凭证                                                                                                                                                                                                                                                                                                                                                                                     |
| 工作量证明（pow）                                | 工作量证明可以简单理解为一份证明，用来确认你做了一定量的工作。工作量证明机制是比特币、莱特币等所采用的共识机制，矿工通过付出算力来挖矿进而获得相应的区块奖励。                                                                                                                                                                                                                                                                                                 |
| 权益证明（pos）                                  | 基础概念是，让每个人互相竞争挖矿是很浪费的。因此相反的是，**权益证明通过选举的形式，其中任意节点被随机选择来验证下一个区块。**                                                                                                                                                                                                                                                                                                                                 |
| 代理权益证明（dpos）                             | 委托权益证明（DPoS）共识算法由Daniel Larimer（BM） 在2014年提出。Bitshares，Steem，Ark和Lisk是一些利用委托权益证明共识算法的加密货币项目。基于委托权益证明的区块链具有投票系统，利益相关者将他们的工作交付给第三方                                                                                                                                                                                                                                             |
| 实用拜占庭将军                                   | 实用拜占庭容错算法（Practical Byzantine Fault Tolerance）刚开始是在MIT的Miguel 和 Barbara Liskov在1999年的学术论文中提出的，他们的本意是为设计一个低延迟存储系统设计系统，将算法复杂度由指数级降低到多项式级，使得拜占庭容错算法在实际系统应用中变得可行，主要是为了应用于不需要大交易量但需要处理许多事件的数字资产平台，每个节点都可以发布公钥，这是被允许的。节点将签名所有通过节点的消息，以验证其准确性。当得到一定数量的签名想用，此交易就被认定为有效。 |
| 验证池（pool）                                   | 验证池机制是区块链共识机制的四大类之一，它是基于传统的分布式一致性技术，加上数据验证机制；是目前行业链大范围在使用的共识机制。                                                                                                                                                                                                                                                                                                                                 |
| 以太坊虚拟机（Ethereum Virtual Machine， EVM）， | 虚拟机指的是，通过软件模拟的、具备完整硬件系统功能并运行在隔离环境下的完整计算机系统；比如虚拟化物理机 VMware、Java 虚拟机等。而以太坊虚拟机（Ethereum Virtual Machine，EVM）则是建立在以太坊区块链上的代码运行环境，其主要作用是处理以太坊系统内的智能合约。                                                                                                                                                                                                  |
| 智能合约                                         | 智能合约是一种旨在以信息化方式传播、验证或执行合同的计算机协议。智能合约允许在没有第三方的情况下进行可信交易，这些交易可追踪且不可逆转。                                                                                                                                                                                                                                                                                                                       |

# 1. 产品介绍

## 1.1 产品定义

此产品是基于区块链的数字身份系统。可以充分保护用户数据隐私，可实现用户所有联系、交易、数据的完整性和隐私性得到最佳的保护和管理，并且实现自己掌握自己信息的处理权。区块链技术可以很好的保证链上数据的真实有效性，实现数据的“存真”，但不能保证“去伪”，脸上的每一个数据都是在其他人的“监督”下被真实完整的记录在各个节点中，证据可追溯。

## 1.2 产品开发背景

开发基于区块链的数字身份系统是十分必要的。原因是如今大多数为纸质证明，但纸质证明还存在许多的问题：

1.  容易造假，总能听到许多假身份的问题；

2.  容易损毁，而且补办麻烦，我们现在的身份证容易丢失，一点丢失补办起来则需要开证明，重新等几个月才能拿到新的身份证，所以是十分麻烦的；

3.  并且不方便与人共享，有时候托人帮帮忙需要用到相关身份的话都是十分敏感的，一般都会选择复印件，所以共享十分不便利；

4.  而且纸质证明更新十分困难，需要一系列的证明。

但如果我们使用基于区块链的数字身份则有许多的优势：

1.  区块链数字身份可以改变现有数据的管理方式，从单一所有者拥有信息转变为整个记录周期中可以共享，在加密保护的分布式平台上安全运行。目前政府、企业、各大互联网平台之间相互独立，各自都保守着自己的核心数据。利用区块链技术，在不同的部门之间搭建联盟链体系，依靠相应的智能合约、共识机制以及激励制度可以有效地驱动政府、企业、平台共享数据，促进数据信息流通、整合和共享。与此同时，区块链数字身份提供了一种能够让用户更多地参与到信息管理中的方式，用户可以通过公钥选择性地与机构分享信息，或是向政府授权使用公钥和私钥阅读或更改其个人账本的内容。用户拥有对身份数据进行选择、授权、删除和恢复的权利，在不同应用场景中，可以对相应数据进行授权，用户对自己的身份数据享有绝对的自主权；

    2.
    数字身份真实有效，区块链数字身份带有去中心化的特性．但其并不意味着可以完全替代原有的中心化机构，而是可以促进各行各业各中心化机构之间达成共识，同时还去中心化户隐私的保密性问题。区块链技术可以很好地保证链上数据的真实有效性，实现数据“存真”，但是链下数据的真实性以及向链上传递的过程有可能存在风险，不能够保证“去伪”。在数据上链之前可以通过权威机构进行身份确认，并出具权威的信用背书(如政府的认证)，确保身份的合法合规，从源头上可以保证数据的真实有效。其次，通过智能合约、激励机制的方式，驱动部门、企业在不同的应用中进行信息的流通，形成整个行业在信息上的互通和串联。除此之外，链上每一个数据都是在其他人的“监督”下被真实完整记录在各个节点之中的，证据充分且可追溯，所有参与者在获取其他个人的信息时需要当事人的授权。所以不管是从自身的优势、还是社会的需求、政策支持等等方面来看，基于区块链的数字身份的崛起是势在必行的。

    3.
    数字身份隐私保护，个人身份信息属于敏感数据，在应用过程中应当对数据加以区分，隐私级别较低的公开数据可以保留在网络上，极为重要的隐私数据则可保存在用户设备之上，形成“链上+链下”、“公开+隐私”的完整模式。区块链的数字身份时代，人们可以将自己完整的数字身份信息和身份证明打包上链，赋予哈希值和时间戳，成为可查的真实的身份数据。利用区块链的非对称加密机制、分布式存储、全程可追溯等特性，充分保护用户数据隐私，可以实现用户所有联系、交易、数据的完整性和隐私性得到最佳的保护和管理，并且实现自己掌握自己信息的处理权，外人对其交易行为的了解只局限于过程层面。

## 1.3 产品主要功能和特色

主要功能：

1.  添加用户信息

    姓名、性别、家庭地址、文化程度等一系列的个人信息。创建合约的时候已经写好，后续只能上传新信息，无法更改或删除。并提前设定好代币数量，可供后期的查询。

2.  查询相关信息

    查询指定用户的相关身份信息，查询需要付给合约主人的专属代币，如没有专属的代币则无法查询合约主人的相关信息，可以有效的保证信息的安全。

3.  代币转账

    可以转给用户属于自己的专属代币，可供他人查询自己的相关信息。如代币不足，则会弹出报错提示。

4.  委托转账

    给予他人一个转账额度，允许其向他人转账特定余额的代币，此方法只允许合约主人使用。不是合约主人使用会弹出权限不足

5.  查询代币余额

    可以查询特定地址的代币余额，用来确认是否有特定代币去查询相关信息。

6.  添加代币

    代币数量可通过此方法添加，如果用完则可以添加，此方法之后合约主人可以使用，用来防治代币用完的情况。此方法只允许合约主人是用。不是合约主人使用会弹出权限不足

7.  更新相关信息

    此方法可以更新合约主人的相关信息，如出现信息填写错误、后期需要更改等情况，可以通过此方法进行修改，此方法也只允许合约主人使用。不是合约主人使用会弹出权限不足

产品的主要特色：

1.  多元性

    网络时代人们可以根据不同情境构建多元的数字身份。这些数字身份会因具体场域、应用目的和所得服务的种类不同而不同。由于网络交往的虚拟性，人们几乎可以在网络上拥有任何想要的身份甚至同时拥有多种身份而互不冲突。

2.  可伪性

数字身份的构建受主观因素影响很大，由个人提供的身份属性可以是真实的，也可以是片面的、历史的、匿名的还可以是篡改的甚至是伪造的因此网络空间中的数字身份自然而然具有可伪性。大数据技术使得他人可以轻易获取用户信息，也能轻易地利用软件伪造他人身份造成数字身份的混乱、伪造。

1.  超域性

数字身份作为网络环境中人的身份信息可以使得人们超越千山万水在网络上互相交流、互相学习等等，因此数字身份借由互联网得到了超越地域的特性。无论人们身处何处每个人的身份都可以通过数字身份来加以确证，可以利用数字身份来进行联系和沟通。数字身份的这种超地域性进一步强化了数字身份的多元性

1.  流动性和可变性

随着时间、地域、工作环境和家庭生活等情况的变化数字身份也会变化。人们创建数字身份所提供的文字和图片信息可能会随着时间的流逝而变得片面化，时过境迁。即使当时较为完整的资料也会变得陈旧和不全面这些资料被保存的时间很可能会非常长，也很可能会被他人用于非原始的情境中容易混淆当前身份和历史身份。网络技术使得人的网络身份变得难以确定，流动性和可变性成为数字身份的明显特征。

## 1.4 产品范围

此产品的适用领域十分广泛，数字身份可以视为各个领域数字化的基石，无论是政府治理、公共服务，还是医疗、电信、金融等，都与其密切相关。随着“数据主权”意识全面觉醒，区块链数字身份正在加速“场景化”布局。纵观全球，包括政府、银行、互联网巨头、创业公司在内的众多参与者都在数字身份领域进行着各种尝试，部分典型领域已有初步成果。

例如公共服务方面，由于身份证明被盗或遗失，美国德克萨斯州首府奥斯汀年均有7000余名无家可归的人无法得到诸如医疗护理、住房和潜在就业等社会服务。为了解决这些问题，该市采用区块链技术，为无家可归的人创建独特的数字标识符，使其能够重建关于住房、健康和就业记录的可信记录，帮助他们重回生活正轨。国内区块链数字身份创业公司IDHub通过区块链数字身份这个核心入口,实现了区块链与泛互联网、政务、司法、公证等多元业务场景的链接。2017年,佛山禅城与IDHub合作建立IMI数字身份系统，拉开“智信禅城”计划的序幕,为当地政府和辖区130多万居民提供可信身份数据认证接口,实现行政审批、医疗健康、公益慈善、养老助残等公共服务的手机在线申报办理；预计截至2019年第一季度,该项目将完成250余项公共政务事项。

金融市场，根据Forrester
GBG发布研究报告显示，95%的澳大利亚金融企业在关注数字身份领域，92%的企业将数字身份作为平台运营的关键任务。2017年加拿大初创公司SecureKey宣布与IBM联合发布基于区块链的数字身份网络，并与蒙特利尔银行、加拿大商业帝国银行、加拿大皇家银行、加拿大丰业银行、多伦多道明银行等展开合作，用户可通过银行提供的手机App验证身份，并且可控制其区块链存储的可信凭证中哪部分信息可以共享给所选定的公司，同时这些公司也可以快速验证该用户身份以安排新的服务。2018年美国信用社联盟与区块链数字身份创业公司Evernym联合发布一款名为MyCUID的区块链数字识别系统，该系统将使全世界的信用合作社能够向目前无法与金融机构互通的约20亿人提供银行服务。

等等一系列方向都说明了基于区块链的数字身份系统的应用范围是十分广泛的

# 2. 市场概述

## 2.1 客户需求

身份认证系统主要涉及区块链平台、用户App和后台管理系统的交
互。对于业务系统注册账号分3个不同的角色：普通用户、制证机关用
户、查验机构用户。不同机构对此产品的需求不同。

普通用户对此产品的需求仅在于存储自己的信息，保证自己的信息不被泄露。

发证机关需要确定每个人的信息，对其进行保存和验证。

此产品可以满足普通用户对自己信息保密的需求**，**利用区块链的非对称加密机制、分布式存储、全程可追溯等特性，充分保护用户数据隐私，可以实现用户所有联系、交易、数据的完整性和隐私性得到最佳的保护和管理，并且实现自己掌握自己信息的处理权，外人对其交易行为的了解只局限于过程层面。

也可以满足政府机关对用信息进行有效的监管，利用区块链技术，在不同的部门之间搭建联盟链体系，依靠相应的智能合约、共识机制以及激励制度可以有效地驱动政府、企业、平台共享数据，促进数据信息流通、整合和共享。

## 2.2 市场规模与发展趋势

目前基于区块链的数字身份应用还是十分少，现在的身份认证还处于第二阶段。随着互联网和数字化的快速发展，数字身份的重要性也在急剧上升。目前我国相对比较成熟的应用之一——身份认证，主要是将个人行为与公安机构的身份证信息绑定，填充上手机、照片、社交、购物、运动等信息，实现相关证件的第三方核实验证。身份认证发展至今分为三个阶段：传统身份认证采用身份证件，其特点是线下身份认证，属于身份认证1.0；eID、CTID的出现，利用中心化数字认证技术，特点是线上单点身份认证，属于身份认证2.0；区块链数字身份采用区块链认证技术，其特点是线上联合身份认证，是可承载未来数字时代的身份认证服务网络平台，属于身份认证3.0。在国内，有一些研究机构也在开展区块链在电子政务方面的应用研
究。闵旭蓉等人[6]设计了一种电子证照共享平台，利用区块链技术的去
中心化、不可篡改、分布式共同记账、非对称加密和数据安全存储等特
点，实现电子证照的安全可信共享，实现各地、各部门和各层级间政务
数据的互联互通，支撑政府高效施政。黄步添等人[7]明确了电子证照参
与者的权利和义务，基于联盟链思想和轮值机制，设计区块链平台的系
统架构、数据结构和业务流程，提供电子证照的颁发、存储、更新、验
证等功能，实现多中心、协同式电子证照管理，从而为电子证照拥有者
以及相关应用系统提供便捷的电子证照服务。蒋海等人[8]提供了一种区
块链身份构建及验证方法，有效缓解了因个别认证机构的问题影响用户
身份信息准确性的情况，然而其原始数据来源为第三方认证机构，未能
解决数据的真实性问题，且其只进行身份验证，未与其他证件锚定，扩
展性不强，发挥的作用有限。

所以说基于区块链的数字身份系统发展前景是十分广阔的，目前还处于起步阶段，所以更应该牢牢把握住这个机会。

# 3. 产品发展目标

**提示：**说明本产品的短期目标和长期目标，绘制产品的Roadmap。目标必须清晰并且可以度量。

# 4. 产品技术方案

## 4.1 产品体系结构

基于区块链的身份认证系统包括登记、发证、收证、查
验几个环节。登记环节由公民在指定业务部门完成实名
登记，申请开通电子证照；发证环节由公民根据需要申请个人电子证
件，并由政府或第三方机构发放电子证照；收证环节用于公民接收、存
储、管理自己的电子证照；查验环节主要由查验工作人员对公民提供的
电子证照进行查验，证明个人身份或办理相关业务。

![img](https://i.loli.net/2020/12/17/ZWEpcteSIV294Jg.jpg)

## 4.2 关键技术

1.以太坊的账户体系：从计算机科学的角度出发，以太坊可以看作是一个分布式状态机，
其中交易区块等同于状态转换函数，新的交易区块由从状态A到状态B
的状态转换记录构成。因此，以太坊就像一个巨大的虚拟状态引擎或去
中心化的计算机，可供多方共享计算平台并基于此运行智能合约。以太
坊有一种原生资产—以太币，它是以太坊生态系统中的价值基础。以太
币用于调整运营智能合约的激励机制，同时提高网络的安全性。

2.许可链的节点准入机制：目前有很多以太坊项目都是基于以太坊公链开发的，同时以太坊也
可用于构建联盟链和私有链。公链的特征是任何人都可以加入、读取区
块链数据和发送交易，一般需要激励机制来鼓励记账节点（挖矿）；联
盟链是由若干个机构或组织共同参与管理的区块链，每个机构或组织都
运行着一个或多个节点共同参与记账；私有链的写入权限由某一个组织
或机构控制，参与节点的资格由该组织或机构严格限制。与公链的任何
人都可以随时加入不同，未经许可的节点不可以加入到联盟链和私有
链，因此联盟链和私有链又被称为许可链，需要进行权限设计。许可链
拥有更高的共识效率、更好的隐私保护和更强的安全性，能被更好地应
用于金融、政务等领域。考虑到电子证照数据共享业务的安全性需求，
本章以许可链的方式设计和搭建区块链底层平台，并加入节点准入机
制。任何参与区块链的网络节点都需要先完成身份注册，通过验证后，
其数字身份才能被允许接入私有链网络中参与交易，形成自主可控的底 层区块链平台。

3.以太坊的共识机制：通过共识机制，区块链网络能够在决策权高度分散的去中心化分布
式系统中让各节点高效地针对区块数据的有效性达成共识，完成新区块
的确认和记账。区块链上的典型共识算法有多种，如工作量证明
（PoW）、权益证明（PoS）、代理权益证明（DPoS）、实用拜占庭将
军（PBFT）、验证池（Pool）等。

4.以太坊虚拟机与智能合约：以太坊的核心元素是以太坊虚拟机（Ethereum Virtual
Machine，
EVM），它是智能合约的执行环境。EVM分散储存在以太坊网络的每个节点上，智能合约代码被对外隔离，并分布在每个节点上执行，因此
以太坊EVM又被称为世界电脑。合同代码不是用图灵完备的高级程序
语言编写的，而是由简单的、基于堆栈的低级程序语言编写的，看起来
就像JVM的字节码（Java虚拟机）。每个以太坊节点都运行EVM，这意味着对于以太坊网络的参与者，每个节点都参与验证新块是否有效以及
计算是否已正确，都是运行EVM代码的独立实例。由于每个节点都参
与计算，虽然不一定是最高效的模型，但它具有很高的加密安全性。

# 5. 产品优缺点分析

数字身份的出现，正深刻改变着经济社会的发展动力和发展方式，与传统身份系统相比将大幅度提高整体社会效率，最大化地释放用户价值，使政府、服务提供方、用户等各方均可从中获益。

1.用户可以灵活使用个人信息。用户不仅有权控制其他人对个人数据信息的访问权限，并且可以决定何时何地何种方式公布自己的信息。此外，个人身份信息的数字化，有助于用户更便捷地去跟外界进行交易等活动，同时对于用户远离非法行为起到保护的作用。

2.服务提供方实现定制化服务。一方面，服务提供方借助系统中记录的用户身份信息，可以针对用户属性和目的定制相应的产品和服务。另一方面，数字身份系统的存在，能够从流程上有效替代从前繁复的纸质证明，降低服务提供方与用户之间反复沟通成本，大大提高办事效率。

3.政府更加高效与公民沟通。数字身份中记录着所有公民关键的身份数据和行为信息，面对不同属性的公民及其需求，政府可以对其进行相应的帮助。同时，从监管部门的角度出发，借助数字身份系统，监管部门可以强化监管，提升监管的针对性和有效性。

区块链技术作为一项新兴技术，虽然政府也在推行，业内也在探索，但是实际上区块链技术依旧存在着很多需要改进的地方。从目前区块链技术和数字身份的特点来看，二者的结合尚存一些阻碍和限制：

1.个人数据真实有效性缺失。即使是网络身份基本实名化，用户也只是获得了身份认证，并没有真正掌握身份控制权。随之也就产生了众多问题。例如，无法确定正在使用这一数字身份的用户究竟是否是其本人，难以从源头追溯系统中数字身份信息的真实有效性，更不易将现实与网络身份相对应。

2.社会基础设施搭建不完备。身份的属性有众多分类，不同的应用场景所需要的身份信息也不尽相同，比如，政府身份系统和商业身份体系中所记录的个人信息是不统一的，同一个人在不同中心化系统中的信息处于隔离状态。而系统之间的相互认证又需要经历非常复杂的流程，难以进行一致性协同管理。

3.认证技术简单隐私易泄露。随着人们在互联网上的活动越来越多，使用互联网服务的前提条件就是解决身份的识别问题。目前各大平台的身份认证手段相对比较简单，背后隐藏着较大的个人隐私信息泄露风险，可能导致用户信息被出卖，造成严重的财产及相关利益损失。

4.上链数据的真实性难保证。区块链技术可以很好地保证链上数据的真实有效性，但是链下数据的真实性以及向链上传递的过程有可能存在风险。线下的数据需要一个权威机构来进行认证。基于其认证结果，然后将该信息进行上链，从而有效保证初始信息的准确性。

5.各国身份系统管理存在限制。区块链网络是一个全球性的网络，由于各国之间存在着明显的界限，所以数字身份系统的全球化会受到一定的限制。在本国内，政府认证用户身份信息，并且可以访问、监督用户数据信息，但是跨国之间，系统是否相互连接，信息是否可以相互补充是存在很大的疑问的。

6.相关法律法规体系不完善。基于区块链技术的数字身份系统肯定是需要有区块链技术背景的组织进行搭建，法律对数字身份系统搭建者的法律地位和责任界定是否足够清晰，在系统运行过程中出现难以解决的纠纷问题时相关的法律责任如何落定，这些问题都是在平台搭建初期就应该充分考虑的。

# 6.应用前景



# 10. 总结

基于对数字身份系统的充分理解，再结合区块链技术的特点——去中心化、点对点网络、时间戳、不可篡改、共识机制、智能合约等等，可以发现，数字身份和区块链技术之间有着巧妙的联系，在区块链时代，两者缺一不可，相互协同，互相促进。目前来看，发展数字身份系统是必然的，区块链技术在某种程度上也提供了一个相对可信的方案。

数字身份的源头需要一个强大的背书机构，即国家这种强有力的中心化机构来背书。在这个层面上，中心化的组织是有存在的必要的。但流通的数字身份属性信息在确认或者验证时，又可以充分发挥区块链技术的去中心的特点。同时，用户属性信息是否足够完善也依托于企业的合作，企业在这过程中提供最强的源动力。所以对于区块链在数字身份领域的应用，政府是基石，企业是源动力，中心化与去中心化也需要辩证地对待。
