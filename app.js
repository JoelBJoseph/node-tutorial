
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    if(req.url === '/about'){
        res.end('Here is about more')
    }
    res.end(`<h1>oops! We cant seem to find the page you are looking for</h1>
             <a href="/">Back Home</a>`);
})
server.listen(5000);

const _ = require('lodash');
const items = [1,2,3,4];

const newItems = _.flattenDeep(items);
console.log(newItems);