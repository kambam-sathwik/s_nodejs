// const fs=require('fs');
// fs.writeFileSync('hi.txt','aygsfdyttdsffy');
const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log("sathwik")
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My page</title></title></head>');
    res.write('<body><h1>My first node js program</h1></body>')
    res.write('</html>');
    res.end();
})
server.listen(4000);