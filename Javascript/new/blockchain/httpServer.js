// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express';
import bodyParser from 'body-parser';
import { getBlocks, createBlock } from './block.js';
import { connectionToPeer } from './p2pServer.js';


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
        res.send(connectionToPeer(req.body.data))
    })
    






    app.listen(myHttpPort, () => {// listen은 매개변수가 2개.
        console.log('listening httpServer Port : ', myHttpPort);
    })

}

export {initHttpServer}






