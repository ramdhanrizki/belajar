var express = require('express');
var app = express();
var port = process.env.port || 1337;
app.use('/public', express.static('./public/'));
app.get('/',function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log('Running on : ' + port);
});
