var Mousetrap = require('mousetrap');
var $ = require('jquery');

Mousetrap.bind('ctrl+shift+r', (e, combo) => {
	$.post('/refresh', {});
});

Mousetrap.bind('ctrl+shift+e', () => {
	var topic = window.location.href;
	$.post('/open', {topic: topic}, () => {}, 'json');
});