const authService = require('../service/auth')
const App = requier('./app')


class Auth extends App{
    async check(ctx,next){
        const url = ctx.request.url
        if(url.indexOf('auth')>0 && url !== '/api/auth/update'){
            return next()
        }
        const rs = await authService.check(ctx.header.authorization)
        if(rs.success){
            ctx.authInfo = rs.authInfo
            return next()
        }else{
            super.result(rs)
        }
    }
}

module.exports = new Auth()