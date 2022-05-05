// 블록체인 관련 함수
// 블록 구조 설계
/* 
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값 (블록의 유일성)
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조)
*/

import CryptoJS from 'crypto-js'

const BLOCK_GENERATION_INTERVAL = 10 // 블록 생성주기. SECOND  
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10 // 일정한 블록 개수를 생성할 때마다 난이도 조절. generate block count 

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
    return blocks;
}

const getLatestBlock = () => {
    return blocks[blocks.length - 1];
}

const calculateHash = (index, data, timestamp, previousHash, difficulty, nonce) => 
    CryptoJS.SHA256((index + data + timestamp + previousHash + difficulty + nonce).toString()).toString();

// 0 두 개로 시작하는 hash값을 만드는 매개변수(nonce)를 찾는다.
// 16진수 64자리
// 16진수 1자리 -> 2진수 4자리 256개의 0과 1로 표현

const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', 0, 0, 0, 1, 0);
    
    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp,
                         genesisBlock.previousHash, genesisBlock.difficulty, genesisBlock.nonce);

    return genesisBlock;
}

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextDifficulty = getDifficulty();  // 난이도를 구하게 한다.
    const nextNonce = findNonce(nextIndex, blockData, nextTimestamp, previousBlock.hash,
        nextDifficulty);
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash,
                         nextDifficulty, nextNonce);

    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash,
                             nextDifficulty, nextNonce);

    return newBlock;
}

const addBlock = (newBlock, previousBlock) => {
    if (isValidNewBlock(newBlock, previousBlock)) {
        blocks.push(newBlock);
        return true;
    }
    return false;
}

// 블록의 무결성 검증
/*
    블록의 인덱스가 이전 블록인덱스보다 1 크다.
    블록의 previousHash가 이전 블록의 hash이다.
    블록의 구조가 일치해야 한다.
*/
const isValidBlockStructure = (newBlock) => {
    if (typeof (newBlock.index) === 'number'
        && typeof (newBlock.data) === 'string'
        && typeof (newBlock.timestamp) === 'number'
        && typeof (newBlock.hash) === 'string'
        && typeof (newBlock.previousHash) === 'string'
        && typeof (newBlock.difficulty) === 'number'
        && typeof (newBlock.nonce) === 'number') {
        return true;
    }

    return false;
}


const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1) {
        console.log('invalid index');
        return false;
    }
    else if (newBlock.previousHash !== previousBlock.hash) {
        console.log('invalid previous hash');
        return false;
    }
    else if (isValidBlockStructure(newBlock) == false) {
        console.log('invalid block structure');
        return false;
    }

    return true;
}

// 문제 해결을 검사하는 함수
const hashMatchDifficulty = (hash, difficulty) => {
    const binaryHash = hexToBinary(hash);
    const requiredPrefix = '0'.repeat(difficulty);

    return binaryHash.startsWith(requiredPrefix);
}

const hexToBinary = (hex) => {
    const lookupTable = {
        '0' : '0000', '1' : '0001', '2' : '0010', '3' : '0011',
        '4' : '0100', '5' : '0101', '6' : '0110', '7' : '0111',
        '8' : '1000', '9' : '1001', 'a' : '1010', 'b' : '1011',
        'c' : '1100', 'd' : '1101', 'e' : '1110', 'f' : '1111'
    }

    // '03cf'
    // 0000001111001111
    let binary = '';
    for(let i = 0; i < hex.length; i++)
    {
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
            return nonce;
        }
        nonce++;
    }
}

const isValidBlockchain = (receiveBlockchain) => {
    // 같은 제네시스 블록인가
    if (JSON.stringify(receiveBlockchain[0]) !== JSON.stringify(getBlocks()[0])){
        console.log('같은 제네시스 블록이 아님');
        console.log(receiveBlockchain[0]);
        console.log('-------------------------')
        console.log(getBlocks()[0]);
        return false;
    }

    // 체인 내의 모든 블록을 확인
    for (let i = 1; i < receiveBlockchain.length; i++)
    {
        if (isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i - 1]) == false)
        {
            console.log(i - 1, '번 블록과 ', i, '번 블록이 문제');
            console.log(receiveBlockchain[i - 1]);
            console.log(receiveBlockchain[i]);
            return false;
        }
    }

    console.log('블록체인 확인 완료')
    return true;
}

const replaceBlockchain = (receiveBlockchain) => {
    console.log(receiveBlockchain);
    if (isValidBlockchain(receiveBlockchain))
    {
        //let blocks = getBlocks();
        if (receiveBlockchain.length > blocks.length)
        {
            console.log('받은 블록체인 길이가 길다');
            blocks = receiveBlockchain;
        }
        else if (receiveBlockchain.length == blocks.length && random.boolean())
        {
            console.log('받은 블록체인 길이가 같다');
            blocks = receiveBlockchain;
        }
    }
    else {
        console.log('받은 블록체인에 문제가 있음');
    }
}

// 난이도 조절 함수
const getAdjustmentDifficulty = () => { 
    // 현재 시간, 마지막으로 난이도 조정된 시간
    // 마지막으로 조정된 애. 현재가 30번째 블록이라면 현재 블록 인덱스 - 조절 주기 = 20번째 블록.
    // const prevAdjustedBlock = blocks[blocks.length - 1 - DIFFICULTY_ADJUSTMENT_INTERVAL] 
    const prevAdjustedBlock = blocks[blocks.length - DIFFICULTY_ADJUSTMENT_INTERVAL] 
    // 마지막 블록
    const latestBlock = getLatestBlock();
    // 경과시간. 마지막 블록 시간 - 마지막 조정된 블록 시간
    const elapsedTime = latestBlock.timestamp - prevAdjustedBlock.timestamp
    const expectedTime = DIFFICULTY_ADJUSTMENT_INTERVAL * BLOCK_GENERATION_INTERVAL;
    
    if(elapsedTime > expectedTime * 2)
    { 
        // 우리가 기대한 시간(expectedTime * 2)보다 경과시간(elapsedTime)이 크면 난이도를 낮춘다.
        return prevAdjustedBlock.difficulty - 1;
    }
    else if(elapsedTime < expectedTime / 2) 
    { 
        // 우리가 기대한 시간보다 경과시간이 짧으면 난이도를 높인다.
        return prevAdjustedBlock.difficulty + 1;
    }
    else
    {
        return prevAdjustedBlock.difficulty; // 난이도를 그대로 쓴다.
    }
}

// 현재 난이도를 알아오는 함수
const getDifficulty = () => {
    // 마지막 블록에 최신화된 난이도 존재
    const latestBlock = getLatestBlock();

    // 난이도 조정 주기 확인. 10번째 블록마다 난이도 상승
    if(latestBlock.index % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 && latestBlock.index !== 0) { // 0번째 블록은 난이도 조절에서 제외
        return getAdjustmentDifficulty();
    }

    return latestBlock.difficulty;
}

let blocks = [createGenesisBlock()];

export { getBlocks, getLatestBlock, createBlock, addBlock, isValidNewBlock, replaceBlockchain }