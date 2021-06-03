var url = require("url");

var http = require("http");


http.createServer(function(req,res){
  if(req.url != "/favicon.ico"){
    var result = url.parse(req.url,true);
    console.log(result)
    console.log(result.query.userName);
    console.log(result.query.userAge)
  }



  res.writeHead(200,{
    "Conten-Type":"text/html;charset=UTF-8"
  });

  res.write("this is second page");

  res.end()
}).listen(3000,function(){
  console.log("application is running at port 3000")
})