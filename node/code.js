//METHOD 1:
// const http = require('http');
//  http.createServer((req,resp)=>{
//   resp.write("<h1>hello, world<h1>");
//   resp.end();
//  }).listen(4500);
// 

//METHOD 2:
// const http = require('http');
// const dataControl=(req,resp)=>
// {
//   resp.write("<h1>hello, this is purvi sahu<h1>");
//   resp.end();
// }
// http.createServer(dataControl).listen(4500);

//METHOD 3:
// const http = require('http');
// function dataControl(req,resp)
// {
//   resp.write("<h1>hello, this is purvi sahu<h1>");
//   resp.end();
// }
// http.createServer(dataControl).listen(4500);

// METHOD :4
// const http = require('http');
// const server = http.createServer((req, res) => {
//     // Set a valid status code, for example:
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, World!');
// });
// server .listen(4500);

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
