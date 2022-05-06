
import CryptoJS from 'crypto-js'
const COIN_BASE_AMOUNT = 50;


// 코인을 어디로 얼만큼 보냈는가
class TxOut {
    constructor(address, amount){ // address로부터 amount만큼 준다.
        this.address = address; // string
        this.amount = amount; // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn{
    constructor(txOutId, txOutIndex, sign){ // out으로 in을 만든다.
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex; // number
        this.sign = sign; // string
    }
}


// 트랜잭션 클래스
class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id; // string
        this.txIns = txIns; // TxIn [].
        this.txOuts = txOuts; // TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => { // 트랜잭션 아이디가 동일한지 검증
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transaction.txIns
    .map((txIn) => (txIn.txOutId + txIn.txOutIndex)) // txIns는 배열.map메소드 적용
    .reduce((a, b) => a + b, '')
    

    // txOut에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txIns
    .map((txOut) => (txOut.address + txOut.amount))
    .reduce((a, b) => a + b, '')

    // 위의 두 내용을 다 합해서 hash처리한다.
    return CryptoJS.SHA256(txInsContent + txOutsContent).toString() // 트랜잭션 아이디
}

// transaction signature
const signTxIn = (transaction, txInIndex, privateKey) => {
    // const txIn = transaction.txIns[txInIndex];

    // TODO : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER(); // 아이디를 서명. 
    return signature;
    // toHexString는 16진수 문자열. toDER은 인코딩 방식이라고 함.
}




// coinbase Transaction. 맨처음 채굴을 했을때 
const getCoinbaseTransaction = (address, blockIndex) => { // 받을 사람의 주소, 블록 인덱스
    const tr = new Transaction();

    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex // 몇번째 채굴인가


    const txOut = new TxOut();
    txOut.address = address;
    txOut.amount = COIN_BASE_AMOUNT;

    tr.txIns = [txIn]; // 배열 형태로
    tr.txOuts = [txOut]; // 배열 형태로
    tr.id = getTransactionId(tr); // id

    return tr
}







