'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();
var read = require('read-metadata');

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    
    read(req, function(err, data){
    console.log(data);
});
    
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.PolicyNumber ? req.body.result.parameters.PolicyNumber+" is available but SC is not connected." : "Seems like some problem. Speak again."
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});
restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
