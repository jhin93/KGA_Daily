/*
    암호화
    
    탈중앙화
    분산원장관리

    무결성 : 정보는 일반적으로 수정이 가능한데, 이는 권한이 있는 사용자에게만 허가.
    기밀성 : 정보를 저장하고 전송하면서 부적절한 노출을 방지, 정보 보안의 주된 목적
    가용성 : 활용되어야할 정보에 접근할 수 없다면, 기밀성과 무결성이 훼손된 것 만큼이나 무의미하다.

    지갑
    private key
    public key

    타원 곡선 디지털 서명 알고리즘(ECDSA)

    - 영지식 증명 (Zero knowledge Proof)

    증명하는 사람(A), 증명을 원하는 사람(B)
    A, B는 증명된 내용에 합의.
    그 외의 사람들은 동의하지 않습니다.
    증명하는 과정에서 A는 B에게 아무런 정보도 주지 않는다.
    
    예시 : 동굴에서 나올때 A는 위든 아래든 B는 주문하는 대로 A는 나온다. 위와 아래를 가로막는 문에 대한 비밀번호를 A가 알고 있다는 것을 증명하는 것.
*/

// 타원 곡선 디지털 서명 알고리즘(ECDSA) 설치 : npm install elliptic
import ecdsa from 'elliptic';
import fs from 'fs'

const ec = new ecdsa.ec('secp256k1'); // ec()는 여러 암호화 알고리즘 중 하나. secp256k1는 256비트로 만드는 방식
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'default') // 환경변수에 있다면 가지고 오고, 없다면 default
const privateKeyFile = privateKeyLocation + '/private_key'

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();

    // console.log("==== private key ====  : ", privateKey);
    // console.log("==== 16진수 ==== : ", privateKey.toString(16)) // 16진수로 바꾸기

    return privateKey.toString(16)
}


const initWallet = () => {
    // 이미 만들어져 있을 때
    if(fs.existsSync(privateKeyFile)) {
        console.log('지갑에 비밀키가 이미 만들어져 있음')
        return;
    }

    // 폴더 있는지 체크
    if(!fs.existsSync('wallet/')) { fs.mkdirSync('wallet/') } // 만약 wallet 폴더가 없다면 폴더 생성
    if(!fs.existsSync(privateKeyLocation)) { fs.mkdirSync(privateKeyLocation) }

    const privateKey = createPrivateKey() // 지갑이 초기화될때, 비밀키가 만들어진다
    // 만든 비밀키를 저장하기 위해 fs 모듈을 사용
    fs.writeFileSync(privateKeyFile, privateKey); // 파일 생성하고 그 안에 privateKey 삽입
}


const getPrivateKeyFromWallet = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8'); // 프라이빗 키를 읽어옴
    return buffer.toString();
}





const getPublicKeyFromWallet = () => {
    const privateKey = getPrivateKeyFromWallet();
    const publicKey = ec.keyFromPrivate(privateKey, 'hex') // keyFromPrivate는 받은 인자로 다른 키를 만드는 메소드. 16진수로 인코딩
    
    return publicKey.getPublic().encode('hex') // 공개키. 여기서 비밀키를 유추하는 건 불가능.
    // 퍼블릭키는 다 04로 나옴
}





export { getPublicKeyFromWallet, getPrivateKeyFromWallet, initWallet }



