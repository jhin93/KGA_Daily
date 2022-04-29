// 다른 노드와 통신을 하기 위한 서버
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';

const MessageType = {
    RESPONSE_MESSAGE : 0,
    SEND_MESSAGE : 1

    // 최신 블록 요청
    // 모든 블록 요청
    // 블록 전달
}

const sockets = [];

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort}); // port를 매개변수로 받겠다. WebSocketServer는 포트를 넣어주면 웹소켓 서버를 만들어주는 메소드
    server.on('connection', (ws) => { // connection은 웹소켓으로 만든 서버에 연결해주는 이벤트. 커넥션이 일어나면 , 다음에 따라오는 함수를 실행한다
        initConnection(ws);
        initMessageHandler(ws);
    }) 
    
    console.log('listening P2PServer Port : ', p2pPort); // 터미널 콘솔창에서 확인
} 


const initConnection = (ws) => {
    sockets.push(ws); // ws를 담는 구조로, 계속 뭔가를 추가한다.
    initMessageHandler(ws);
}

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer)
    ws.on('open', () => { initConnection(ws); console.log('Connection peer : ', newPeer); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data); // json 형태로 변형

        switch(message.type)
        {
            case MessageType.RESPONSE_MESSAGE: // 메시지 받았을 때
                break;
            case MessageType.SEND_MESSAGE: // 메시지 보낼 때
                write(ws, message)
                break;
        }
    })
}

const write = (ws, message) => {
    ws.send(JSON.stringify(message));
}

const sendMessage = () => {
    sockets.forEach(() => {
        write(socket, message) // 나에게 연결된 모든 소켓에게 메시지를 뿌림 . broadcast
    }) // 0부터 끝까지 반복
}

export { initP2PServer, connectionToPeer,  getPeers, sendMessage };

