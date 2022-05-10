// 다른 노드와 통신을 위한 서버
import random from 'random';
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';
import { getLatestBlock, getBlocks, setBlocks, addBlock, createBlock, isValidNewBlock, replaceBlockchain } from './block.js';
import { getTransactionPool, addToTransactionPool } from './transaction.js';

const MessageType = {
    // RESPONSE_MESSAGE : 0,
    // SEND_MESSAGE: 1,

    // 최신 블록 요청
    QUERY_LATEST : 0,
    // 모든 블록 요청
    QUERY_ALL : 1,
    // 블록 전달
    RESPONSE_BLOCKCHAIN : 2,
    
    // 트랜잭션 요청
    QUERY_TRANSACTION_POOL : 3,
    // 트랜잭션 전달
    RESPONSE_TRANSACTION_POOL : 4
}

const sockets = [];

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort});
    server.on('connection', (ws) => {
        console.log("url: " + ws.origin);
        initConnection(ws);
        // initMessageHandler(ws);
    })

    console.log("listening P2PServer Port : ", p2pPort);
}

const initConnection = (ws) => {
    // ws.send("메롱");
    sockets.push(ws);
    initMessageHandler(ws);

    write(ws, queryAllMessage());
}

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer);
    ws.on('open', () => { initConnection(ws); console.log("Connect Peer: ", newPeer); return true; })
    ws.on('error', () => { 
        console.log('Failed to connect to peer address : ', ws.remoteAddress); 
        return false;
    })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        // () message.type = 0

        switch(message.type) 
        {
            // case MessageType.RESPONSE_MESSAGE : // 메시지 받았을 때
            //     // console.log(message);
            //     break;
            // case MessageType.SEND_MESSAGE : // 메시지 받았을 때
            //     // sendMessage(ws, message);
            //     console.log(ws._socket.remoteAddress, ':' , message.message);
            //     // console.log(message.message); 
            //     break;
            case MessageType.QUERY_LATEST:
                console.log('a')
                // ws.send(JSON.stringify(responseLatestMessage()));
                break;
            case MessageType.QUERY_ALL:
                console.log('b')
                write(ws, responseAllMessage())
                // ws.send(JSON.stringify(responseAllMessage()));
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:
                console.log('c')
                // console.log(ws._socket.remoteAddress, ':' , message.data);
                // let received = JSON.parse(message.data);
                // if (received.length == 1) {
                    // console.log(received); 
                // }
                // else if (received.length > getBlocks().length) setBlocks(JSON.parse(message.data));
                // replaceBlockchain(message.data)
                handleBlockchainResponse(message.data);
                break;
            case MessageType.QUERY_TRANSACTION_POOL:
                write(ws, responseTransactionPoolMessage());
                break;
            case MessageType.RESPONSE_TRANSACTION_POOL:
                handleTransactionPoolResponse(message.data);
                break;
        }
    })
}

const handleBlockchainResponse = (receiveBlockchain) => {
    // 받아온 블록의 마지막 인덱스가 내 마지막 블록의 인덱스보다 크다.
    const newBlocks = JSON.parse(receiveBlockchain);
    const latestNewBlock = newBlocks[newBlocks.length - 1];
    const latestMyBlock = getLatestBlock();

    if (latestNewBlock.index > latestMyBlock.index) {
        if (latestNewBlock.previousHash === latestMyBlock.hash) {
            if (addBlock(latestNewBlock, latestMyBlock)) {

                // 제한된 플러딩을 사용한다. flooding
                broadcast(responseLatestMessage());
            }
        }
         // 받아온 마지막 블록의 previousHash와 내 마지막 블록의 hash를 확인한다.

        // 받아온 블록의 전체 크기가 1인 경우 -> 재요청
        else if (newBlocks.length === 1) {
            broadcast(queryAllMessage());
        }

        // 그외
        // 받은 블록체인보다 현재 블록체인이 더 길거나 같다. (안 바꿈)
        // 같으면 (바꾸거나 안 바꿈)
        // 받은 블록체인이 현재 블록체인보다 길면 바꾼다.
        else replaceBlockchain(newBlocks);
    }
}

const handleTransactionPoolResponse = (receivedTransactionPool) => {
    console.log('received TransactionPool: ', receivedTransactionPool);
    receivedTransactionPool.forEach((rcTx) => {
        // 중복검사 + 트랜잭션 풀에 추가
        addToTransactionPool(rcTx);

        // 다시 전파
    })
};

const queryLatestMessage = () => {
    return ({ 
        "type": MessageType.QUERY_LATEST,
        "data": null    
    })
}

const queryAllMessage = () => {
    return ({ 
        "type": MessageType.QUERY_ALL,
        "data": null    
    })
}

const responseLatestMessage = () => {
    return ({
        "type": MessageType.RESPONSE_BLOCKCHAIN,
        "data": JSON.stringify([getLatestBlock()])    
    })
}

const responseAllMessage = () => {
    return ({
        "type": MessageType.RESPONSE_BLOCKCHAIN,
        "data": JSON.stringify(getBlocks())    
    })
}

const responseTransactionPoolMessage = () => {
    return ({
        "type": MessageType.RESPONSE_TRANSACTION_POOL,
        "data": JSON.stringfy(getTransactionPool())
    })
}

const  mineBlock = (blockData) => {
    const newBlock = createBlock(blockData);
    if (addBlock(newBlock, getLatestBlock())) 
    {
        broadcast(responseLatestMessage());
    }
    return false;
}

const write = (ws, message) => {
    ws.send(JSON.stringify(message));
}

const broadcast = (message) => {
    sockets.forEach( (socket => {
        // console.log('broadcast() ', ws._socket.remoteAddress, ':', message);
        socket.send(JSON.stringfy(message));
    }))
}

const sendMessage = (message) => {
    sockets.forEach( (socket) => {
        broadcast(socket, message);
    })
}

// 내가 새로운 블록을 채굴했을 떄 연결된 노드들에게 전파


export { initP2PServer, connectionToPeer, getPeers, sendMessage, queryAllMessage, queryLatestMessage, mineBlock }