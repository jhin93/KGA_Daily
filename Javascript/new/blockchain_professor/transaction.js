import CryptoJS from 'crypto-js';
import _ from 'lodash';
import { getPrivateKeyFromWallet, getPublicKeyFromWallet } from './wallet';

const COINBASE_AMOUNT = 50;

let transactionPool = [];

const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);    // 깊은 복사
}

// let unspentTxOuts = []; // UnspentTxOut []
let unspentTxOuts = processTransaction(transactions /* Transaction[] */, [] /* UnspentTxOut[] */, 0 /* blockIndex */);
const getUnspentTxOuts = () => {
    return _.cloneDeep(unspentTxOuts);
}

class UnspentTxOut {
    constructor(txOutId, txOutIndex, address, amount) {
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn {
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex;   // number
        this.sign = sign;   // string
    }
}

// 코인을 어디로 얼만큼 보낼 것인가
class TxOut {
    constructor(address, amount) { // 누구한테 얼마를 주느냐
        this.address = address; // string
        this.amount = amount;   // number
    }
}

class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id;   // string
        this.txIns = txIns; // TxIn []
        this.txOuts = txOuts;   // TxOut []
    }
}

// transaction id
const getTransactionId = (transaction) => {
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transaction.txIns
        .map((txIn) => txIn.txOutId + txIn.txOutIndex)
        .reduce((a, b) => a + b, '');

    // txOuts에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txOuts
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => a + b, '');

    // 위의 두 내용을 다 합해서 hash처리한다.
    return CryptoJS.SHA256(txInsContent + txOutsContent).toString();
}

// transaction signature
// 누가 보냈는지
const signTxIn = (transaction, txInIndex, privateKey) => {
    // const txIn = transaction.txIns[txInIndex];   // 코인을 보낼 때

    //  TODO : sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER();  // toDER: Encoding하는 방식
    return signature;
} 

// coinbase Transaction
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transaction();
    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    const txOut = new TxOut(address, COINBASE_AMOUNT);
    // txOut.address = address;
    // txOut.amount = COINBASE_AMOUNT;

    tr.txIns = [txIn];
    tr.txOuts = [txOut];
    tr.id = getTransactionId(tr);

    return tr;
}

const sendTransaction = (address, amount) => {
    // 1. 트랜잭션 생성
    const tx = createTransaction(address, amount);

    // 2. 트랜잭션 풀에 추가
    transactionPool.push(tx);

    // 3. 주변 노드에 전파


    return tx;
}

const createTransaction = (address, amount) => {
    // 1. 아직 처리되지 않았지만 트랜잭션 풀에 올라가 있는 내용을 확인
    const myAddress = getPublicKeyFromWallet();
    const myUnspentTxOuts = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress);

    const filterUnspentTxOuts = filterTxPoolTxs(myUnspentTxOuts);

    // 2. 거래에 사용되지 않은 TxOuts을 구성, 트랜잭션에 필요한 코인을 확인
    // 넘기는 금액은 나한테 전달
    const { includeTxOuts, leftoverAmount } = findTxOutsForAmount(amount, filterUnspentTxOuts);

    // 내가 보유한 TxOuts 10, 25, 20, 40 
    // 내가 지금 만들고 싶은 트랜잭션 코인 60 ==> 95 (35)

    // 3. 서명 전에 TxIns로 구성 
    // const txIn = new TxIn();
    // txIn.txOutId = 

    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn);
    // const unsignedTxIns = includeTxOuts.map((txOut) => createUnsignedTxIn(txOut));
    // 4. 트랜잭션 구성
    const tx = new Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(address, amount, leftoverAmount);
    tx.id = getTransactionId(tx);

    tx.txIns = tx.txIns.map((txIn) => {
        txIn.sign = signTxIn(tx, txIn.txOutIndex, getPrivateKeyFromWallet());
        return txIn;
    });

    return tx;
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜잭션 풀에서 트랜잭션 인풋 내용만 추출
    const txIns = _(transactionPool)
                .map((tx) => tx.txIns)
                .flatten()
                .value();
    
    console.log('트랜잭션 풀: ', transactionPool);
    console.log('트랜잭션 풀안의 Inputs: ', txIns);

    const removable = [];
    for (const unspentTxOut of myUnspentTxOuts) {
        const findTxIn = _.find(txIns, () => {
            return txIn.txOutIndex === unspentTxOut.txOutIndex &&
                txIn.txOutId === unspentTxOut.txOutId;
        })

        if (findTxIn === undefined) {

        }
        else {
            removable.push(myUnspentTxOut);
        }
    }

    return _.without(myUnspentTxOuts, ...removable) //첫 번째 배열에서 두 번째 배열의 모든 요소를 제거
}

const findTxOutsForAmount = (amount, filterUnspentTxOuts) => {
    let currentAmount = 0;
    const includeTxOuts = [];
    
    for (const unspentTxOut of filterUnspentTxOuts) {
        includeTxOuts.push(unspentTxOut);

        currentAmount += unspentTxOut.amount;
        if (currentAmount >= amount) {
            const leftoverAmount = currentAmount - amount;
            return { includeTxOuts, leftoverAmount };
        }
    }

    throw Error('보내려는 금액보다 보유 금액이 적습니다!');
}

const createUnsignedTxIn = (unspentTxOut) => {
    const txIn = new TxIn();
    txIn.txOutId = unspentTxOut.txOutId;
    txIn.txOutIndex = unspentTxOut.txOutIndex;

    return txIn;
}

const createTxOuts = (address, amount, leftoverAmount) => {
    const txOut = new TxOut(address, amount);
    if (leftoverAmount > 0) {
        const leftovertxOut = new TxOut(getPublicKeyFromWallet(), leftoverAmount);
        return [leftoverAmount, txOut];
    }
    else {
        return [txOut];
    }
}

const addToTransactionPool = (transaction) => {
    // 올바른 트랜잭션인지
    if (!isValidTransaction(transaction, unspentTxOuts)) {
        throw Error('추가하려는 트랜잭션이 올바르지 않습니다!', transaction);
    }
    // 중복되는지
    if (!isValidTxForPool(transaction)) {
        throw Error('추가하려는 트랜잭션이 트랜잭션 풀에 있습니다.', transaction);
    }

    transactionPool.push(transaction);
}

const isValidTransaction = (transaction, unspentTxOuts) => {
    if (getTransactionId(transaction) !== transaction.id) {
        console.log('invalid transaction id:', transaction.id);
        return false;
    }

    const totalTxInValues = transaction.txIns
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts))
        .reduce((a, b) => a + b, 0);

    const totalTxOutValues = transaction.txOuts
        .map((txOut) => txOut.amount)
        .reduce((a, b) => a + b, 0);

    if (totalTxInValues !== totalTxOutValues) {
        console.log('totalTxInValues: ', totalTxInValues );
        console.log('totalTxOutValues: ', totalTxOutValues );
        return false;
    }

    return true;
}

const getTxInAmount = (txIn, unspentTxOuts) => {
    const findUnspentTxOut = unspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId &&
        uTxO.txOutIndex === txIn.txOutIndex);

    return findUnspentTxOut.amount;
}

const isValidTxForPool = (transaction) => {
    // 트랜잭션 풀에 있는 txIns들과 transaction에 txIns들을 비교해서 같은 것이 있는지 확인
    const txPoolIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();

    const containTxIn = (txIn) => {
        return _.find(txPoolIns, (txPoolIn) => {
            return txIn.txOutIndex === txPoolIn.txOutIndex &&
                txIn.txOutId === txPoolIn.txOutId;
        })
    }

    for (const txIn of transaction.txIns) {
        if (containTxIn(txIn)) {
            console.log('이미 존재하는 트랜잭션입니다! id: ', transaction.id);
            return false;
        }
    }
    return true;
}

const updateTransactionPool = () => {

    const removable = [];
    // 1. 현재 트랜잭션 풀에 있는 트랜잭션 중에
    // 사용되지 않은 TxOuts내용과 일치하지 않는 트랜잭션들을 제거한다.
    for (const tx of transactionPool) {
        for (const txIn of tx.txIns) {
            if (!isInTx(txIn)) {
                removable.push(tx);
                break;
            }   
        }
    }

    transactionPool = _.without(transactionPool, ...removable);
}

const isInTx = (txIn) => {
    const findTxOut = _(unspentTxOuts).find((uTxO) => { return uTxO.txOutIndex === txIn.txOutIndex &&
    uTxO.txOutId === txIn.txOutId});

    return findTxOut !== undefined;
}

const processTransaction = (transactions, unspentTxOuts, blockIndex) => {
    // 1. 예외처리 (트랜잭션 구조를 검증하는 과정)
    if(!isValidateBlockTransaction(transactions, unspentTxOuts, blockIndex)) {
        console.log('invalid processTransaction');
        return null;
    }
    
    // 2. 미사용 txouts를 추출하는 과정
    // 2-1. 블록에 있는 데이터 (처리해야 할 트랜잭션 정보) 중에서 txIns로 이미 소모된 txOuts(UnspentTxOut)를 구성
    const consumedTxOuts = transactions.map((tx) => tx.txIns)  // txIns로만 만든 배열
        .reduce((a,b) => a.concat(b), []) // txIns들을 하나의 배열로
        .map((txIn) => new UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0));

    // 2-2. 새로 들어온 트랜잭션 정보에서 추출한 UnspentTxout 생성
    const newUnspentTxOuts = transactions.map((tx) => {
        return tx.txOuts.map((txOut) => new UnspentTxOut(tx.id, blockIndex, txOut.address, txOut.amount))
    })
    .reduce((a, b) => a.concat(b), []);    

    // 2-3. 기존 UnspentTxOut - 소모된 UnspentTxOut + newUnspentTXout을 추가 
    // 두 1차원 배열의 txOutId와 txOutIndex를 비교해서 같은 요소를 filter하는 코드를 만들어보자.
    
    // txOutId와 txOutIndex를 비교해서 같은 요소를 찾는 함수
    const findSameEle = txOutId.filter(ele => txOutIndex.includes(ele))

    const resultUnspentTxOuts = (unspentTxOuts.filter((uTxO) => !checkSameElement(consumedTxOuts, uTxO.txOutIndex, uTxO.txOutId))).concat(newUnspentTxOuts);
    // !checkSameElement 인 이유는 같은 요소를 배제해야 하기 때문에 ! 연산자를 붙인다.

    unspentTxOuts = resultUnspentTxOuts
    return resultUnspentTxOuts;
}

const checkSameElement = (txOuts, txOutIndex, txOutId) => {
    return txOuts.find((txOut) => txOut.txOutId === txOutId &&  txOut.txOutIndex === txOutIndex);
}

export { sendTransaction, getTransactionPool, addToTransactionPool, getCoinbaseTransaction, updateTransactionPool, getUnspentTxOuts, processTransaction };