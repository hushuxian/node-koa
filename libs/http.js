var htpp = require("http");


http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type":"text/html;charset=UTF-8"
  })
  res.write('this is my page')
  res.end()
}).listen(3000);