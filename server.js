var serverPort = process.env.PORT || process.argv.pop();
serverPort = isNaN(serverPort) ? 3000 : serverPort;

var PeerServer = require('peer').PeerServer;
var server = new PeerServer({ port: serverPort, debug: true });

console.log('PeerJS Server listening on port ' + serverPort);
