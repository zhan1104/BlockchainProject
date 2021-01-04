// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0;
import "./PersonInterface.sol";
import "./SafeMath.sol";
contract shenfen is PersonInterface{
    
    mapping (address => uint256) private balance;
    

    mapping (address => mapping (address => uint256)) private allowed;
    
            uint256 public override totalSupply;
            address public owner;
            // string private xingming;
            // string private xingbie;
            // string private minzu;
            // string private jiatingdizhi;
            // string private shenfenzhenghaoma;
            // string private chushengriqi;
            // string private wenhuachengdu;
   struct xinxi {
       uint32 ID;
       string xingming;
       string xingbie;
       string minzu;
       string jiatingdizhi;
       string shenfenzhenghaoma;
       string chushengriqi;
       string wenhuachengdu;
   }
    mapping(uint32 => xinxi ) public xinxis;


    //创建代币和身份信息
    constructor (
        uint256 _totalSupply
    //     string memory _xingming,
    //     string memory _xingbie,
    //     string memory _minzu,
    //     string memory _jiatingdizhi,
    //     string memory _shenfenzhenghaoma,
    //     string memory _chushengriqi,
    //     string memory _wenhuachengdu
        ) {
            owner = msg.sender;
            balance[msg.sender] = _totalSupply;
            totalSupply = _totalSupply;
    //         xingming = _xingming;
    //         xingbie = _xingbie;
    //         minzu = _minzu;
    //         jiatingdizhi = _jiatingdizhi;
    //         shenfenzhenghaoma = _shenfenzhenghaoma;
    //         chushengriqi = _chushengriqi;
    //         wenhuachengdu = _wenhuachengdu;
        }
        
        function tianjia (string memory _xingming,string memory _xingbie,string memory _minzu,
                          string memory _jiatingdizhi,string memory _shenfenzhenghaoma,
                          string memory _chushengriqi,string memory _wenhuachengdu,uint32 _ID) public override returns(bool){
            uint32 userId = uint32(_ID);
            xinxis[userId].xingming = _xingming;
            xinxis[userId].xingbie = _xingbie;
            xinxis[userId].minzu = _minzu;
            xinxis[userId].jiatingdizhi = _jiatingdizhi;
            xinxis[userId].shenfenzhenghaoma = _shenfenzhenghaoma;
            xinxis[userId].chushengriqi = _chushengriqi;
            xinxis[userId].wenhuachengdu = _wenhuachengdu;
            
        }
        //查询相关信息，需要创建的代币
        function chaxun (uint32 _userID) public override returns(string memory,string memory,
                                          string memory,string memory,
                                          string memory,string memory,
                                          string memory){
            transfer(owner,1);  
            return (
                xinxis[_userID].xingming,
                xinxis[_userID].xingbie,
                xinxis[_userID].minzu,
                xinxis[_userID].jiatingdizhi,
                xinxis[_userID].shenfenzhenghaoma,
                xinxis[_userID].chushengriqi,
                xinxis[_userID].wenhuachengdu
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
            require(msg.sender == owner,"not contract owner");
            allowed[msg.sender][_spender] = _value;
            return true;
        }
        //查询账户余额
        function balanceOf(address account) public view override returns (uint256) {
            return balance[account];
        }
        //增加代币数量
        function add(uint256 _jiadaibi) public override returns (bool){
            require(msg.sender == owner,"not contract owner");
            totalSupply += _jiadaibi;
            balance[msg.sender] += _jiadaibi;
        }
        //更新相关信息
        function gengxin(uint32 _userID,string memory _xingming,string memory _xingbie,
                         string memory _minzu,string memory _jiatingdizhi,
                         string memory _shenfenzhenghaoma,string memory _chushengriqi,
                         string memory _wenhuachengdu) public override returns (bool){
                             require(msg.sender == owner,"not contract owner");
                                xinxis[_userID].xingming = _xingming;
                                xinxis[_userID].xingbie = _xingbie;
                                xinxis[_userID].minzu = _minzu;
                                xinxis[_userID].jiatingdizhi = _jiatingdizhi;
                                xinxis[_userID].shenfenzhenghaoma = _shenfenzhenghaoma;
                                xinxis[_userID].chushengriqi = _chushengriqi;
                                xinxis[_userID].wenhuachengdu = _wenhuachengdu;
            return true;
        }
}