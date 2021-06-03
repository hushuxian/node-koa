let  fs = require('fs');
/*
fs.stat('index.js',(error,stats)=>{
  if(error){
    console.log(error);
  }else{
   console.log(stats);
   return false;
  }
})
fs.mkdir('css',(err)=>{
  if(err){
    consolek.log(err);
    return false;
  }else{
    console.log("Ok")
  }
})
fs.rmdir('css',(err)=>{
  if(err){
    console.log(err);
    return false;
  }else{
    console.log("Ok")
  }
})
fs.writeFile('index.js','hello hsx',(err)=>{
  if(err){
    console.log(err);
    return false;
  }else{
    console.log("ok")
  }
})
fs.appendFile('text.docx','+1\n',(err)=>{
  if(err){
    console.log(err)
    return false;
  }else{
    console.log("Ok")
  }
})

fs.readFile('index.js',(err,data)=>{
  if(err){
    console.log(err);
    return  false;
  }else{
    console.log("OK")
    console.log(data)
  }
})
fs.readdir('../node_modules',(err,data)=>{
  if(err){
    console.log(err)
    return false;
  }else{
    console.log("Ok");
    console.log(data)
  }
})
fs.rename("common.js","index.js",(err)=>{
  if(err){
    console.log(err);
    return false;
  }else{
    console.log("OK")
  }
})




fs.stat('upload',(err,stats)=>{
  if(err){
    fs.mkdir('upload',(error)=>{
      if(error){
        console.log(error);
        return false;
      }else{
        console.log("OK")
      }
    })
  }else{
    console.log(stats.isDirectory());
    console.log("已有upload目录")
  }
})


fs.readdir('../node_modules',(err,files)=>{
  if(err){
    console.log(err);
    return false;
  }else{
    let filesArr =[];
    (function getFile(i){
      if(i==files.length){
        console.log("目录：");
        console.log(filesArr);
        return false;
      }

      fs.stat('../node_modules/'+files[i],(error,stats)=>{
        if(error){
          console.log(error)
          return false;
        }
        if(stats.isDirectory()){
          filesArr.push(files[i])
        }
        getFile(i+1);
      })
    })(0)
  }
})



*/


let data ='console.log("Hello World!")';

let writeStream = fs.createWriteStream('index.js');
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',()=>{
  console.log('write Ok')
})


let  fileReadStream = fs.createReadStream('index.js');
let count = 0;
let str ='';
fileReadStream.on('data',(chunk)=>{
  console.log(`${++count} 接收到： ${chunk.length}`)
  str += chunk
})

fileReadStream.on('end',()=>{
  console.log("OK");
  console.log(count);
  console.log(str);
})


fileReadStream.on('error',(error)=>{
  console.log(error)
})










