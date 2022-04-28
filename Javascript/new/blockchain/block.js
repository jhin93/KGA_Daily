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

const blocks = [1, 2, 3, 4, 5];

function getBlocks () {
    return blocks;
}

// 해쉬값 계산
const calculateHash = (index, data, timestamp, previoushash) => {
    // 암호화 모듈 사용
    CryptoJS.SHA256(index + data + timestamp + previoushash);
}

export { getBlocks }