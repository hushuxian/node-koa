const Router = require('koa-router')

module.exports = ()=>{
    const router = new Router()
    router.get('/',(ctx,next)=>{
        ctx.body = 'index';
        next()
    })
    router.get('about',(ctx,next)=>{
        ctx.body = 'about';
        next()
    })
    return router
}