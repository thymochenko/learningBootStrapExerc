var path = require('path');
var express = require('express');
var app = express();
var path = __dirname + '/';
app.use(express.static('public'));

var router = express.Router(); 
router.get("/", function (req, res){
	res.sendFile(path + "index.html");
});

app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

