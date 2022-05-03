// 다른 노드와 통신을 위한 서버
import random from 'random';
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';
import { getLatestBlock, getBlocks, createBlock, addBlock, isValidNewBlock/*, blocks*/ } from './block.js';

const sockets = [];
const MessageType = {
    // RESPONSE_MESSAGE: 0,
    // SENT_MESSAGE: 1,

    // 최신 블록 요청
    QUERY_LATEST : 0,
    // 모든 블록 요청
    QUERY_ALL : 1,
    // 요청에 따른 블록 전달
    RESPONSE_BLOCKCHAIN : 2
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({ port: p2pPort });
    server.on('connection', (ws, req) => {
        console.log(req.headers.host)
        initConnection(ws);
        initMessageHandler(ws);
    });

    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);

    write(ws, queryAllMessage());
};

const connectToPeer = (newPeer) => {
    // console.log('sockets: ', sockets);
    const ws = new WebSocket(newPeer);
    ws.on('open', () => { initConnection(ws); console.log("connected to:", newPeer); return true; })
    ws.on('error', () => {
        console.log('failed to connect to new peer : ', newPeer);
        console.log('failed to connect to ws.remoteAddress : ', newPeer);
        return false;
    })
}

const getPeers = () => {
    return sockets;
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data); //ev.data? test
        switch (message.type) {
            // case MessageType.RESPONSE_MESSAGE: // 메세지 받았을때
            //     break;
            // case MessageType.SENT_MESSAGE: // 보내진 메세지
            //     console.log(message.message);
            //     break;
            case MessageType.QUERY_LATEST:
                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMessage())
                break;
            case MessageType.RESPONSE_BLOCKCHAIN: // 내가 위에서 요청한 블록 데이터를 받음
                // console.log(ws._socket.remoteAddress, ' : ', message.data)
                replaceBlockchain(message.data);
                // handleBlockchainResponse(message);
                break;
        }
    })
}

const isValidBlockchain = (receiveBlockchain) => {
    // 같은 제네시스 블록인가
    if(JSON.stringify(receiveBlockchain[0]) !== JSON.stringify(getBlocks()[0]))  // 상대방 제네시스 블록 !== 내 제네시스 블록이면 바로 리턴
        return false

    // 체인 내의 모든 블록을 확인
    for (let i = 1; i < receiveBlockchain.length; i ++) {
        console.log("receiveBlockchain ", receiveBlockchain)
        if(isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i-1]) == false) { // isValidNewBlock의 인자가 블록, 전블록을 받기에 i, i-1을 대입
            return false // 만약 블록들 중 하나라도 isValidNewBlock를 통과못하면 return false
        }
    }
    return true
}

const replaceBlockchain = (receiveBlockchain) => {
    if(isValidBlockchain(receiveBlockchain)) {
        let blocks = getBlocks()
        if(receiveBlockchain.length > blocks.length){ // 들어온게 가지고 있는 체인보다 길이가 길면 바꾼다.
            console.log('받은 블록체인 길이가 길다')
            blocks = receiveBlockchain // 기존의 체인을 새것으로 대체
        } else if(receiveBlockchain.length == blocks.length && random.boolean()) { // 길이가 같으면 바꾸거나 안바꾸거나. random.boolean()으로 true가 나오면 바꾸고 아니면 안바꿈.
            console.log('받은 블록체인 길이가 같다')
            blocks = receiveBlockchain // 기존의 체인을 새것으로 대체
        }
    }
    else {
        console.log("problem!");
    }
}

const handleBlockchainResponse = (receiveBlockchain) => {
    // 받은 블록체인이 현재 블록체인보다 짧으면 안바꿈

    // 길이가 같으면 바꾸거나 안 바꿈.
    
    // 받은 블록체인이 현재 블록체인보다 길다. 즉, 바꿈
}

// 마지막 요청 보내기
const queryLastestMessage = () => {
    return ({
        "type" : MessageType.QUERY_LATEST,
        "data" : null
    })
}

// 전체 요청
const queryAllMessage = () => {
    return ({
        "type" : MessageType.QUERY_ALL,
        "data" : null
    })
}

// 마지막 요청 응답하기
const responseLatestMessage = () => {
    return ({
        "type" : MessageType.RESPONSE_BLOCKCHAIN,
        "data" : JSON.stringify(getLatestBlock()) /* 내가 가지고 있는 체인의 마지막 블록 */
    })
}

// 요청 전체 응답하기

const responseAllMessage = () => {
    return ({
        "type" : MessageType.RESPONSE_BLOCKCHAIN,
        "data" : JSON.stringify(getBlocks) /* 내가 가지고 있는 전체 블록 */
    })
}

const write = (ws, message) => {
    // console.log("write() : ", message)
    ws.send(JSON.stringify(message));
}

const broadCasting = (message) => { // broadcasting
    sockets.forEach((socket) => {
        // console.log(socket);
        write(socket, message);
    })
}

// 내가 새로운 블록을 채굴했을 때 연결된 노드들에게 전파
const mineBlock = (blockData) => { // 블록 생성(createBlock), 배열에 추가(getLatestBlock), 만든 블록 전파 (responseLatestMessage) 
    const newBlock = createBlock(blockData); // newblock
    if (addBlock(newBlock, getLatestBlock())) {
        broadCasting(responseLatestMessage()); // responseLatestMessage를 broadCasting에 넣어서 모든 소켓에 전달.
    }
}

export { initP2PServer, connectToPeer, getPeers, broadCasting, mineBlock } // mineBlock export
