
import CryptoJS from 'crypto-js'
import _ from 'lodash' // 깊은 복사를 위해 설치
import { getPublicKeyFromWallet } from './wallet.js';

const COIN_BASE_AMOUNT = 50;

let transactionPool = []; // 트랜잭션 풀
const getTransactionPool = () => {
    // 배열안의 요소들은 트랜잭션. 트랜잭션은 클래스고 그 안에 들어있는 txIns, txOuts 등은 다시 구조체
    return _.cloneDeep(transactionPool); // 깊은 복사를 해준다. Transaction 복사할 때 내부 요소 txIns, txouts가 클래스인 것 까지 전부 복사
}

let unspentTxOuts = []; // UnspentTxOut가 요소로 들어감

// 얕은 복사
// 메모리의 주소에 접근만 할 수 있도록 하는 것

// 깊은 복사
// 원본을 유지한 채 데이터를 일일히 다 복사하는 것

class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

// 코인을 어디로 얼만큼 보냈는가
class TxOut {
    constructor(address, amount) { // address로부터 amount만큼 준다.
        this.address = address; // string
        this.amount = amount; // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn{
    constructor(txOutId, txOutIndex, sign) { // out으로 in을 만든다.
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

const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    const tx = createTransaction();

    // 2. 트랜잭션 풀에 추가


    // 3. 주변 노드에 전파


    return tx;
}

const createTransaction = () => {
    // 1. 아직 처리되지 않았지만 트랜잭션 풀에 올라가있는 내용을 확인
    const myAddress = getPublicKeyFromWallet(); // wallet.js에서 import해서 사용
    const myUnspentTxOuts = unspentTxOuts.filter((uTxO) => {uTxO.address === myAddress})
    // TODO : ArrowFunction 형태 확인
    // unspentTxOuts.filter(uTxO => uTxO.address === myAddress); () => {} 를 => 만 남긴 것.
    const filteredUnspentTxOuts = filterTxPoolTxs(myUnspentTxOuts);

    // 2. 거래에 사용되지 않은 TxOuts을 구성, 트랜잭션에 필요한 코인을 확인
    // 전송하고 남는 금액은 다시 나에게 전달
    

    // 3. 서명 전의 TxIns로 구성

    // 4. 트랜잭션 구성
}


const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출
    // _은 lodash 사용. transactionPool를 매개변수로 lodash의 함수들을 호출해서 사용
    const txIns = _(transactionPool)
                .map((tx) => tx.txIns) // 트랜잭션 풀에서 txIns만 추출해서 배열을 만듬. 거기서도 내가 사인한 것만 필터링할 예정.
                .flatten()
                .value();

    // 내용비교
    console.log("트랜잭션 풀 : ", transactionPool);
    console.log("트랜잭션 풀안의 Inputs : ", txIns);

    const removable = [];
    for(const unspentTxOut of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, (txIn) => { // txIns안에 있는 요소를 돌면서 return의 로직을 적용. 로직에 적용된 것을 변수에 저장.
            // 로직에 맞는 요소들은 트랜잭션 풀에 올라가있다는 소리
            return txIn.txOutIndex === unspentTxOut.txOutIndex &&
                txIn.txOutId === unspentTxOut.txOutId 
        })

        if(findTxIn === undefined) {

        } else { // 트랜잭션 풀에 없다는 말. 제거대상.
            removable.push(unspentTxOut);
        }
    }

    return _.without(myUnspentTxOuts, ...removable); // myUnspentTxOuts에서 removable을 제외하는 메소드 'without'.
}


const findTxOutsForAmount = (amount, filteredUnspentTxOuts) => { // 보내고 싶은 금액(amount), 실제로 사용할 filteredUnspentTxOuts
    let currentAmount = 0;
    
    for (const unspentTxout of filteredUnspentTxOuts) { // 보내고 싶은 금액을 넘어가면 그때 보냄. 안넘어가면 계속 누적
        currentAmount = currentAmount + unspentTxout.amount; 
        if(currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount; // 현재 금액 - 보낼 금액 = 나한테 보낼 금액
        }
    }
} 







