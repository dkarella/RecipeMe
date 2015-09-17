var express = require('express'),
    app = express();

module.exports = function(data) {

    app.use(express.static(__dirname + '/public'));

    return router;
}