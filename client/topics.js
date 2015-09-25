var Mousetrap = require('mousetrap');
var $ = require('jquery');

Mousetrap.bind('ctrl+shift+r', (e, combo) => {
	$.post('/refresh', {});
});
