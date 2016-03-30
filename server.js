// Node modules
var restify = require('restify');
var builder = require('botbuilder');

// application vars
var phrases = ['squaaaad', 'suh dude', 'dab for Bill Gates', 'it\'s lit'];
var index = 0;

// endpoints
var bot = new builder.BotConnectorBot({appId: 'Squad', appSecret: '91606fa3e08e456a9b22c244c2589cbf'});
bot.add('/', function(session) {
	setTimeout(function() {
		session.send(phrases[index % phrases.length]);
		index++;
	}, 10000);
	
});

// run server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function() {
	console.log('%s listening to %s', server.name, server.url);
});