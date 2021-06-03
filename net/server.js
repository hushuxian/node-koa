const net = require('net');
const port = 3000;
const host ='127.0.0.1';


const server = net.createServer(socket=>{
    console.log('server is running')
    socket.on('data',(data)=>{
        console.log('get data',data.toString())
        socket.write('server')
    })
})

server.listen(port,host,()=>{
    console.log('serve is running at port' + port)
})