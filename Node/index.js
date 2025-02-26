const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req, res)=>{
    
     const log= `${Date.now()}: New Request Recived\n`
     fs.appendFile("log.txt",log,(err,data)=>{

         res.end("Hello form server")
     })


});

myServer.listen(8000, ()=>{
    console.log("server Staterd")
})