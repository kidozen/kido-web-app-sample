var path = require('path'),
    express = require('express'),
    app = express();

app.use(express.static(path.resolve(__dirname, './public')));

var server = app.listen(9000, function() {
    console.log('Web server listening on port %d', server.address().port);
});
