var restify = require('restify');
var builder = require('botbuilder');

var bot = new builder.BotConnectorBot({appId: 'Squad', appSecret: '91606fa3e08e456a9b22c244c2589cbf'});
bot.add('/', function(session) {
	session.send('Hello World');
});

var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function() {
	console.log('%s listening to %s', server.name, server.url);
});