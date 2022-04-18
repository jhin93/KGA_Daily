// 서버가 2개. 프론트 서버 , 백엔드 서버
// 브라우저 <-> 프론트 A(4000)
// 브라우저 <-> 백 B(3000)

// 브라우저는 기본적으로 보안이라는 개념이 있고, 허락을 따로 해줘야 한다.
// 헤더부분을 따로 조작하면 cors 따로 해결 가능

// 쿠키로 로그인해야 하는 이유.
// 세션으로 로그인 하면 그에 해당하는 서버만 로그인이 가능하다.
// 하지만 쿠키로 로그인을 하게 되면 서버가 증설(ex 사용자 증가 등의 이유로)이 되어도 브라우저에서 가지고 있는 쿠키로 어느 서버건 로그인이 가능하다.
// 이 쿠키를 잘 쓰기 위해 등장한게 jwt.

// 로그인 전문 서버가 OAuth.

const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('lvtest q4')
})

axios.post("http://localhost:4000/getCookie", {name: "ingoo"}, {
  headers : {
    'Content-type' : 'application/x-www-form-urlencoded'
  }
})

app.listen(port, () => {
  console.log(`leveltest Question number 3 answer code. Check it out localhost:${port}`)
})