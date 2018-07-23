var _ = require('lodash');

var activeSessions = [];

var chat = function (data) {
	console.log("From user session: " + data.sessionToken);
	console.log(data.content);
	var found = false;
	var currentSession;
	_.forEach(activeSessions, function (session) {
		if (session.sessionToken == data.sessionToken) {
			currentSession = session;
			currentSession.messages.push(data);
			found = true;
		}
	});
	if (!found) {
		var newSession = {
			sessionToken: data.sessionToken,
			manual: false,
			messages: []
		}
		newSession.messages.push(data);
		currentSession = newSession;
		activeSessions.push(newSession);
	}
	//Handle data
	if (data.content.toLowerCase().includes('ronald')) {
		//Switch to manual
		currentSession.manual = true;
	}
	var newMessage = {
		type: 0,
		who: 'Bot',
		time: new Date(),
		content: 'Your message: <' + data.content + '> was received by the server. This is the server responding.'
	};
	currentSession.messages.push(newMessage);
	return newMessage;
}

var getActiveSessions = function () {
	return activeSessions;
}

module.exports.chat = chat;
module.exports.getActiveSessions = getActiveSessions;