var ipAddress  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var serverPort = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || process.argv.pop();
serverPort = isNaN(serverPort) ? 3000 : serverPort;

var PeerServer = require('peer').PeerServer;
var server = new PeerServer({ port: serverPort, ip: ipAddress, debug: true });

console.log('PeerJS Server listening on port ' + serverPort);
