// 브라우저가 데이터, 파일을 저장할 수 있는 능력이 바로 쿠키.
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.headers) // req는 request message라는 브라우저가 쏴준 메시지를 몽땅 담고 있는 것.
  // 헤더조작
  res.setHeader('Set-Cookie', 'token=true') // 크롬 검사기 - 애플리케이션 - 쿠키
  // 헤더에서도 확인 가능 Set-Cookie: token=true
  res.send('lvtest q3')
})

app.get('/getCookie', (req, res) => {
  const [name, value] = req.headers.cookie.split('=')
  console.log(name, value) // token true 이렇게 나온다. 이걸 라이브러리 쿠키 파서로 가능하다.
  res.send("Hello")
})

app.listen(port, () => {
  console.log(`leveltest Question number 3 answer code. Check it out localhost:${port}/getCookie`)
})