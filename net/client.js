const net = require('net');
const port = 3000;
const host ='127.0.0.1';


const client = net.createConnection(port,host)
client.on('connect',()=>{
    console.log('client is connect')
})
client.on('data',data=>{
    console.log('client get data',data.toString())
})
client.end('client')