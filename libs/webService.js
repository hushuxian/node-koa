let http = require("http");
let fs = require("fs");
let path = require("path");

http.createServer((req,res)=>{
  let pathName = req.url;
  if(pathName == '/'){
    pathName = "index.html"
  }

  let extName = path.extname(pathName);


  if(pathName != "/favicon.ico"){
    fs.readFile("../Static/"+pathName,(err,data)=>{
      if(err){
        console.log("404 Not Found!");
        fs.readFile("../static/404.html",(errorNotFound,dataNotFound)=>{
          if(errorNotFound){
            console.log(errorNotFound);
          }else{
            res.writeHead(200,{
              "Content-Type":"text/html;charset='uft-8'"
            });
            res.write(dataNotFound);
            res.end();
          }
        })
      }else{
        getExt(extName,(extension)=>{
          let ext = JSON.parse(extension.toString());

          res.writeHead(200,{
            "Content-Type": ext + ";charset='uft-8'"
          });
          res.write(data);
          res.end()
        });


      }

    })
  }
}).listen(3000)

getExt = (extName,callback)=>{
  let data = fs.readFile("./ext.json",(err,data)=>{
    callback(data)
  });
  
}
