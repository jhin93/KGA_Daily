// 블록체인 관련 함수
// 블록 구조 설계
/*
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터 (트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값 (블록의 유일성)
    previous hash : 이전 블록의 해쉬 (이전 블록을 참조)
*/
import CryptoJS from 'crypto-js'

class Block {
    constructor (index, data, timestamp, hash, previoushash) {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previoushash = previoushash;
    }
}

const blocks = [];

function getBlocks () {
    return blocks;
}

// 해쉬값 계산
const calculateHash = (index, data, timestamp, previoushash) => {
    // 암호화 모듈 사용
    return CryptoJS.SHA256((index + data + timestamp + previoushash).toString()).toString(); // toString을 붙이면 16진수 64자리 해쉬 형태로 나온다. 해당 블록이 유일무이하다는 증거.
    // sha256은 string을 받기 때문에 안쪽에도 toString을 사용
    // int값이 조금만 변해도 해쉬값이 판이하게 변함
}


// genesis 블록 생성 함수
const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'the times 03/jan/2009 chancellor on brink of second bailout for banks', 0, 0, 0);
    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previoushash);
}


// 일반 블록 생성 함수
const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1]; // 가장 마지막 블록
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000 //밀리세컨드 단위를 초단위로 만듬
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash) // 이전 블록의 정보들을 가지고 다음 블록 해쉬 구하기
    
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash);

    return newBlock;
}


export { getBlocks }







