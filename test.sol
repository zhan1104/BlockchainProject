// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0;
import "./PersonInterface.sol";
import "./SafeMath.sol";
contract shenfen is PersonInterface{
    
    mapping (address => uint256) private balance;
    

    mapping (address => mapping (address => uint256)) private allowed;
    
    uint256 public override totalSupply;
    address private owner;
    uint8 private decimals;    
    string private tokenname;
    string private xingming;
    string private xingbie;
    string private minzu;
    string private jiatingdizhi;
    string private shenfenzhenghaoma;
    string private chushengriqi;
    string private wenhuachengdu;
    //创建代币和身份信息
    constructor (
        uint256 _totalSupply,
        uint8 _decimalUints,
        string memory _tokenname,
        string memory _xingming,
        string memory _xingbie,
        string memory _minzu,
        string memory _jiatingdizhi,
        string memory _shenfenzhenghaoma,
        string memory _chushengriqi,
        string memory _wenhuachengdu
        ) {
            owner = msg.sender;
            balance[msg.sender] = _totalSupply;
            totalSupply = _totalSupply;
            decimals = _decimalUints;
            tokenname = _tokenname;
            xingming = _xingming;
            xingbie = _xingbie;
            minzu = _minzu;
            jiatingdizhi = _jiatingdizhi;
            shenfenzhenghaoma = _shenfenzhenghaoma;
            chushengriqi = _chushengriqi;
            wenhuachengdu = _wenhuachengdu;
        }
        //查询相关信息，需要创建的代币
        function chaxun () public returns(string memory,string memory,
                                          string memory,string memory,
                                          string memory,string memory,
                                          string memory){
            transfer(owner,1);
            return (
                xingming,xingbie,minzu,jiatingdizhi,shenfenzhenghaoma,chushengriqi,wenhuachengdu
                );
        }
        //转账给他人代币
        function transfer(address _to, uint256 _value) public override returns (bool) {
            require(balance[msg.sender] >= _value,"token not enough");
            balance[msg.sender] -= _value;
            balance[_to] += _value;            
            return true;
        }
        //委托他人转账
        function approve(address _spender,uint256 _value) public override returns(bool){
            allowed[msg.sender][_spender] = _value;
            return true;
        }
        //查询账户余额
        function balanceOf(address account) public view override returns (uint256) {
            return balance[account];
        }
        //增加代币数量
        function add(uint256 _jiadaibi) public{
            require(msg.sender == owner,"not contract owner");
            totalSupply += _jiadaibi;
            balance[msg.sender] += _jiadaibi;
        }
        //更新相关信息
        function gengxin(string memory _xingming,string memory _xingbie,
                         string memory _minzu,string memory _jiatingdizhi,
                         string memory _shenfenzhenghaoma,string memory _chushengriqi,
                         string memory _wenhuachengdu) public returns (bool){
                             require(msg.sender == owner,"not contract owner");
                             xingming = _xingming;
                             xingbie = _xingbie;
                             minzu = _minzu;
                             jiatingdizhi = _jiatingdizhi;
                             shenfenzhenghaoma = _shenfenzhenghaoma;
                             chushengriqi = _chushengriqi;
                             wenhuachengdu = _wenhuachengdu;
            return true;
        }
}