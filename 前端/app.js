console.log("ERC720")

let accounts = [];
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log("web3", web3)

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)



// SupplyChain.sol abi
var contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jiadaibi",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_userID",
				"type": "uint32"
			}
		],
		"name": "chaxun",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_userID",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "_xingming",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_xingbie",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_minzu",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_jiatingdizhi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shenfenzhenghaoma",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_chushengriqi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_wenhuachengdu",
				"type": "string"
			}
		],
		"name": "gengxin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_xingming",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_xingbie",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_minzu",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_jiatingdizhi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shenfenzhenghaoma",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_chushengriqi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_wenhuachengdu",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_ID",
				"type": "uint32"
			}
		],
		"name": "tianjia",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// 0x0141de3f0aF41513b1845e99Bbc80A5c7bb4AbaC  本地
// rinkeby 0xC9D7ADB777cC72508b0bbda410Dffd2Caf6cf805
var contract = new web3.eth.Contract(contractAbi, "0xC9D7ADB777cC72508b0bbda410Dffd2Caf6cf805");

console.log("contract MyDapp", contract)



$(".enableEthereumButton").click(function () {
    // alert("enableEthereumButton")
    // ethereum.request({ method: 'eth_requestAccounts' });
    getAccount()

}
)

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    // showAccount.innerHTML = account;
    $(".showAccount").html(account);

}

$(".getTotalSupply").click(function () {
	contract.methods.totalSupply().call({from:accounts[0]}).then(
		function (result) {
			$('.TotalSupply').html(result)
		}
	);
});

function add() {
	let res=document.getElementById('addTotalSupply').value;
	document.getElementById("addTotalSupply").value="";
    contract.methods.add(res).send({from:accounts[0]}).then(
        function (result) {
            console.log("add_result:",result);
        }
    );
}

function transfer() {
	let resAdd=document.getElementById('recipient').value;
	let resAmount=document.getElementById('amount').value;
	document.getElementById("recipient").value="";
	document.getElementById("amount").value="";
	//console.log("转账数据为："+resAdd,resAmount);

	contract.methods.transfer(resAdd,resAmount).send({from:accounts[0]}).then(
		function (result) {
			console.log("transfer_result:",result);
			
		}
	);
}

function getBalance() {
	let resAdd=document.getElementById('getBalance').value;
	//console.log("查询地址为："+ resAdd);
	contract.methods.balanceOf(resAdd).call({from:accounts[0]}).then(
		function (result) {
			$('.showBalance').html(result)
		}
	);
}

function tianjia() {
	let xingming=document.getElementById('addxingming').value;
	let xingbie=document.getElementById('addxingbie').value;
	let minzu=document.getElementById('addminzu').value;
	let jiatingdizhi=document.getElementById('addjiatingdizhi').value;
	let shenfenzhenghaoma=document.getElementById('addshenfenzhenghaoma').value;
	let chushengriqi=document.getElementById('addchushengriqi').value;
	let wenhuachengdu=document.getElementById('addwenhuachengdu').value;
	let ID=document.getElementById('addid').value;


	contract.methods.tianjia(xingming,xingbie,minzu,jiatingdizhi,shenfenzhenghaoma,chushengriqi,wenhuachengdu,ID).send({from:accounts[0]}).then(

		function (result) {
			//console.log("add_result:",result);
			document.getElementById("addxingming").value="";
			document.getElementById("addxingbie").value="";
			document.getElementById("addminzu").value="";
			document.getElementById("addjiatingdizhi").value="";
			document.getElementById("addshenfenzhenghaoma").value="";
			document.getElementById("addchushengriqi").value="";
			document.getElementById("addwenhuachengdu").value="";
			document.getElementById("addid").value="";
			$('.showadd').html(result.status);
		}

	)
}


function chaxun() {
	let chaxunid = document.getElementById('chaxun').value;
	//console.log("查询TokenId为：" + resItemId);



	contract.methods.chaxun(chaxunid).call({from: accounts[0]}).then(
		function (result) {
			//console.log(result);
			$('.showchaxun').html("<p>"
				+ "姓名：" +result[0] + " "
				+ "性别：" +result[1] +" "
				+ "民族：" + result[2] +" "
				+"家庭地址：" + result[3] +" "
				+"身份证号码：" + result[4] + " "
				+"文化程度:" + result[5] + " "
				+"</p>")
					});
}
