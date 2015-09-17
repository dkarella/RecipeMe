var express = require('express'),
    app = require('./app.js')({}),
    server = require('http')(app);

server.listen(3000, function(){
    console.log('Server is running on port 3000');
});