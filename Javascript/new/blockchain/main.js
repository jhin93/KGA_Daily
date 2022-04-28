// p2p 서버 초기화, 사용
// http 서버 초기화, 사용
// 블록체인 함수 사용

import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js";

const httpPort = parseInt(process.env.HTTP_PORT) || 3001; // 설정이 되어있으면 변수 쓰고 아니면 3001을 쓴다. 변수가 뭘로 들어가든간에 정수화(parseInt)해서 넣는다.
const p2pPort = 6001;

initHttpServer(httpPort);
initP2PServer(p2pPort);


