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

const ec = new ecdsa.ec('secp256k1'); // ec()는 여러 암호화 알고리즘 중 하나. secp256k1는 256비트로 만드는 방식

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();
    console.log(privateKey);
}

createPrivateKey()













