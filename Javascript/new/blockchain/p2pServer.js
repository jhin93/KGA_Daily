// 다른 노드와 통신을 하기 위한 서버
import WebSocket from 'ws';
import { WebSocketServer } from 'ws';

const sockets = [];

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort}); // port를 매개변수로 받겠다. WebSocketServer는 포트를 넣어주면 웹소켓 서버를 만들어주는 메소드
    server.on('connection', (ws) => { // connection은 웹소켓으로 만든 서버에 연결해주는 이벤트. 커넥션이 일어나면 , 다음에 따라오는 함수를 실행한다
        initConnection(ws);
    }) 
    console.log('listening P2PServer Port : ', p2pPort); // 터미널 콘솔창에서 확인
} 


const initConnection = (ws) => {
    sockets.push(ws); // ws를 담는 구조로, 계속 뭔가를 추가한다.
}

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer)
    ws.on('open', () => { initConnection(ws); console.log('Connection peer : ', newPeer); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })
}

export { initP2PServer, connectionToPeer };

