var chat = function (data) {
	console.log("From user session: " + data.sessionToken);
	console.log(data.content);
	var newMessage = {
		type: 0,
		who: 'Bot',
		time: new Date(),
		content: 'Your message: <' + data.content + '> was received by the server. This is the server responding.'
	};
	return newMessage;
}

module.exports.chat = chat;