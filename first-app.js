const fs=require('fs');
// fs.writeFileSync('hi.txt','aygsfdyttdsffy');
const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile("msg.txt",{encoding:"utf-8"},(err,data)=>{
            // res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>Message</title></title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
            res.write('</html>');
            return res.end();
        });
    }
    else if(url==="/message" && method==="POST"){
        const body=[];
        req.on("data",(chunk)=>{
            body.push(chunk);
        });
        req.on("end",()=>{
            const parsedbody=Buffer.concat(body).toString();
            const msg=parsedbody.split("=")[1];
            fs.writeFileSync("msg.txt",msg);
        })
        res.statusCode=302;
        res.setHeader("Location","/");
        return res.end();
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My page</title></title></head>');
        res.write('<body><h1>My first node js program</h1></body>')
        res.write('</html>');
        res.end();
    }
})
server.listen(4000);