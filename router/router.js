const Router = require('koa-router')
const api = require('./userRouter')()
const page = require('./pageRouter')()
module.exports = ()=>{
    let router = new Router()
    router.use('/api',api.routes(),api.allowedMethods())
    router.use('/',page.routes(),page.allowedMethods())
    return router
}