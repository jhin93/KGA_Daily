// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express';
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';
import { connectionToPeer, getPeers, sendMessage } from './p2pServer.js';


// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send("Hello, World")
    })


    //block.js의 블록 데이터를 조회
    app.get('/getblocks', (req, res) => {
        res.send(getBlocks()); // getBLock 함수를 실행시킨 것을 import 해온다.
        console.log(req.body)
    })

    app.post('/createBlock', (req, res) => {
        res.send(createBlock(req.body.data)) // postman에서 입력한 값을 여기서 전달해준다.
    })

    app.post('/addPeer', (req, res) => {
        console.log("send : ", req.body.send)
        res.send(connectionToPeer(req.body.data)) 
        // 포스트맨에서 다음과 같이 작성해서 보내면 뜬다.
        // {
        //     "data" : "ws://192.168.0.211:6001", // 받는 사람 ip 입력하고 받는 사람이 6001을 열어놔야 가능
        //     "message" : "test" // 이건 내 콘솔에서 뜸
        // }
    })
    
    app.post('/sendMessage', (req, res) => {
        sendMessage(req.body.data);
    })





    app.listen(myHttpPort, () => {// listen은 매개변수가 2개.
        console.log('listening httpServer Port : ', myHttpPort);
    })

}

export {initHttpServer}






