let http = require('http');
let fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  console.log('test load');
  res.writeHead(200, {    'Content-Type': 'text/html'});
  fs.readFile('page.html', null, function(err, data){
  //   if(err) throw err;
      res.write(data);    
    res.end(); 
  })

}).listen(8080, function(){
console.log('server successfully started')}); //the server object listens on port 8080