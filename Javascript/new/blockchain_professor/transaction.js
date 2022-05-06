
class TxIn{
    constructor(txOutId, txOutIndex, sign){ // out으로 in을 만든다.
        this.txOutId = txOutId; // string
        this.txOutIndex = txOutIndex; // number
        this.sign = sign; // string
    }
}

class TxOut {
    constructor(address, amount){ // address로부터 amount만큼 준다.
        this.address = address; // string
        this.amount = amount; // number
    }
}

// 트랜잭션 클래스
class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id; // string
        this.txIns = txIns; // TxIn []
        this.txOuts = txOuts; // TxOut []
    }
}