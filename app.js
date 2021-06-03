const path = require('path')
const config = require('./config')
const koa = require('koa')

const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const router = require('./router/router')()

const app = new koa()

app.use(bodyParser())

const {host,database,port} = config.db
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(host,database,port).then(()=>{
    console.info('MongoDB is ready')
},err=>{
    console.error('connnect error:',err)
})

app.use(router.routes()).use(router.allowedMethods)
app.use(cors({
    credentials:true
}))

app.listen(config.port,err=>{
  if(err) throw err;
  console.log('application is running at port 3000')
})

