// p2p 서버 초기화, 사용
// http 서버 초기화, 사용
// 블록체인 함수 사용

import { initHttpServer } from "./httpServer.js";
import { initP2PServer } from "./p2pServer.js"

const httpPort = parseInt(process.env.Http_Port) || 3001; // 3001, env 파일에는 모두 string?
const p2pPort = parseInt(process.env.P2P_Port) || 6001; // 6001
const p2pPort6002 = 6002;
const p2pPort6003 = 6003;

initHttpServer(httpPort);
initP2PServer(p2pPort);
initP2PServer(p2pPort6002);
initP2PServer(p2pPort6003);