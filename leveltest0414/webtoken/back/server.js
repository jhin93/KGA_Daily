const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const cors = require('cors')
const cookieParser = require('cookie-parser')


app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
})

app.use(cookieParser())

app.use(cors({
    origin:['http://localhost:4000'],
    credentials: true
}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/getCookie',(req,res)=>{
    // res.setHeader('Access-Control-Allow-Origin','http://localhost:4000')
    // res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE') // methods 사용여부
    // res.setHeader('Access-Control-Allow-Credentials','true')
    // res.setHeader('Access-Control-Allow-Headers','Content-type')


    res.setHeader('Set-Cookie','token=true')
    res.send('cookie~?')
})

app.get('/cookieParser',(req,res)=>{
    res.cookie('token2','true')
    res.send('cookieparser?')
})

app.listen(3000,()=>{
    console.log('server start')
})