const h=require('http')
// console.log(h)
// createServer
h.createServer(function(req,res){
    res.write('<h1> welcome node js  </h1> ')
    res.end()
}).listen(3000,()=>console.log('server is running local host:3000'))