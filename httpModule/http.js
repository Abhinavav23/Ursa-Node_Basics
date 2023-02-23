const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('req received');
    // console.log('headers', req.headers);
    console.log('url', req.url);
    if(req.url === '/'){
        res.write("{name: 'Abhinav'}");
    }else if(req.url === '/home'){
        res.end('<h2>Home Page</h2>')
    }else if(req.url === '/login'){
        res.end('<h2>Login Page</h2>')
    }else{
        res.end('sending Response');
    }
    res.end()
})


// http internally implements Event module
// server.on('error', () => {
//     console.log('error inside server ');
// })
// server.emit('error');


const PORT = 8000
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})



// function calculate(a,b){
//     return a+b
// }

// const res = calculate(10,40)

fetch('http:localhost/3000', {
    method: "POST"
})