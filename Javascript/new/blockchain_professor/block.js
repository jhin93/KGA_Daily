// 블록체인 관련 함수
// 블록 구조 설계
/*
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값 (블록의 유일성)
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조)

*/

import CryptoJS from 'crypto-js';
import random from 'random';
import { getCoinbaseTransaction, getTransactionPool, updateTransactionPool } from './transaction.js'
import { getPublicKeyFromWallet } from './wallet';

// const blocks = [];

class Block {
    constructor(index, data, timestamp, hash, previousHash, difficulty, nonce) 
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}

const getBlocks = () => { 
    // if (p2pPort == 6001) return blocks;
    // if (p2pPort == 6002) return blocks6002;
    // return blocks6003;
    return blocks
}

const getLatestBlock = () => {
    // if (p2pPort == 6001) return blocks[blocks.length - 1];
    // if (p2pPort == 6002) return blocks6002[blocks6002.length - 1];
    // return blocks6003[blocks6003.length - 1];
    return blocks[blocks.length - 1];
}

const setBlocks = (data) => {
    blocks = data;
}

const calculateHash = (index, data, timestamp, previousHash, difficulty, nonce) => {
    return CryptoJS.SHA256((index + data + timestamp + previousHash + difficulty + nonce).toString()).toString();
}

// 0 하나로 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다.
// 블록 생성되는 주기에 따라 난이도 조절

const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', new Date().getTime() / 1000, 0, 0, 0, 0);
    
    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash, genesisBlock.difficulty, genesisBlock.nonce);
    
    return genesisBlock;
}

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimeStamp = new Date().getTime() / 1000;
    const nextDifficulty = 1;
    const nextNonce = findNonce(nextIndex, blockData, nextTimeStamp, previousBlock.hash, nextDifficulty)
    const nextHash = calculateHash(nextIndex, blockData, nextTimeStamp, previousBlock.hash, nextDifficulty, nextNonce);
    
    const newBlock = new Block(nextIndex, blockData, nextTimeStamp, nextHash, previousBlock.hash, nextDifficulty, nextNonce);

    return newBlock;

    // console.log('failed to create new block!');
    // return null;
}

const createNextBlock = () => {
    // 1. 코인베이스 트랜잭션 생성
    const coinbaseTx = getCoinbaseTransaction(getPublicKeyFromWallet(), getLatestBlock().index + 1);
    
    // 2. 생성된 코인베이스 트랜잭션 뒤에 보유중인 트랜잭션 풀의 내용을 포함 (마이닝된 블록의 데이터)
    const blockData = [coinbaseTx].concat(getTransactionPool());
    return createBlock(blockData);
}

const addBlock = (newBlock, previousBlock) => {
    if (isValidNewBlock(newBlock, previousBlock)) {
        blocks.push(newBlock);
        // blocks6002.push(newBlock);
        // blocks6003.push(newBlock);

        // 사용되지 않은 txOuts 세팅

        // 트랜잭션 풀 업데이트
        updateTransactionPool(unspentTxOuts);

        return true;
    }
    return null;
}

const isValidBlockchain = (receiveBlockchain) => {
    // 같은 제네시스 블록인가
    if (JSON.stringfy(receiveBlockchain[0] === JSON.stringify(getBlocks()[0])))
        return false;

    // 체인 내의 모든 블록을 확인
    for (let i = 1; i < receiveBlockchain.length; i++) {

        if (!isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i - 1])) return false;
    }
    
    return true;
}

// 통째로 교체할 필요가 있을 때
const replaceBlockchain = (receiveBlockchain) => {
    
    // receiveBlockchain = JSON.parse(receiveBlockchain);
    
    if (isValidBlockchain(receiveBlockchain)) 
    {
        // let blocks = getBlocks();
        if ((receiveBlockchain.length > blocks.length) || 
            receiveBlockchain.length ==  blocks.length && random.boolean()) 
        {
            console.log('받은 블록체인 길이가 길다.')
            // setBlocks(receiveBlockchain);
            blocks = receiveBlockchain;
            console.log(getBlocks());

            // 사용되지 않은 txOuts 세팅
        
            // 트랜잭션 풀 업데이트
            updateTransactionPool(unspentTxOuts);
        }
    }
    else {
        console.log('invalid received blockchain.')
    }
}
// let testHash = calculateHash(10, 20, 30, 40);
// console.log(testHash);
// console.log(testHash.length);

// 블록의 무결성 검증
/*
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전 블록의 hash이다.
    블록의 구조가 일치해야한다.
*/

const isValidBlockStructure = (newBlock) => {
    if (typeof (newBlock.index) === "number"
    && typeof (newBlock.data) === "string"
    && typeof (newBlock.timestamp) === "number"
    && typeof (newBlock.hash) === "string"
    && typeof (newBlock.previousHash) === "string"
    && typeof (newBlock.difficulty) === "number"
    && typeof (newBlock.nonce) === "number"){
        return true;
    }

    return false;
}

const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1) {
        console.log("invalid index!");
        return false;
    }
    else if (newBlock.previousHash !== previousBlock.hash) {
        console.log("invalid previous hash!");
        return false;
    }
    else if (!isValidBlockStructure(newBlock)) {
        console.log('invalid block structure!');
        return false;
    }

    return true;

}

// 문제 해결을 검사하는 함수
const hashMatchDifficulty = (hash, difficulty) => {
    const binaryHash = hexToBinary(hash);
    const requirePrefix = '0'.repeat(difficulty);

    return binaryHash.startsWith(requirePrefix);
}

const hexToBinary = (hex) => {
    const lookupTable = {
        '0' : '0000', '1' : '0001', '2' : '0010', '3' : '0011',
        '4' : '0100', '5' : '0101', '6' : '0110', '7' : '0111',
        '8' : '1000', '9' : '1001', 'a' : '1010', 'b' : '1011',
        'c' : '1100', 'd' : '1101', 'e' : '1110', 'f' : '1111',
    }

    // 03cf
    // 0000001111001111
    let binary = '';
    for (let i = 0; i < hex.length; i++) {
        if (lookupTable[hex[i]]) {
            binary += lookupTable[hex[i]];
        }
        else {
            console.log('invalid hex : ', hex);
            return null;
        }
    }

    return binary;
} 

const findNonce = (index, data, timestamp, previousHash, difficulty) => {
    let nonce = 0;

    while(true) 
    {
        let hash = calculateHash(index, data, timestamp, previousHash, difficulty, nonce);

        if (hashMatchDifficulty(hash, difficulty)) {
            // console.log(nonce);
            return nonce;
        }
        nonce++;
    }
}

let blocks = [createGenesisBlock()];
// const blocks6002 = [createGenesisBlock()];
// const blocks6003 = [createGenesisBlock()];

export { getBlocks, createBlock, getLatestBlock, setBlocks, addBlock, isValidNewBlock, blocks, replaceBlockchain }