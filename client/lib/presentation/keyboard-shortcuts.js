var Mousetrap = require('mousetrap');
var Postal = require('postal');

var shortcuts = [];

function add(data){
	shortcuts.push(data);

	var func = function(e, combo){
		console.log(combo + ': ' + data.description);

		Postal.publish({
			channel: data.channel,
			topic: data.topic,
			data: {}
		});

		return false;
	}

	Mousetrap.bind(data.keys, func);
}

function editor(data){
	data.channel = 'editor';
	add(data);
}

function explorer(data){
	data.channel = 'explorer';
	add(data);
}

function engine(data){
	data.channel = 'engine-request';
	add(data);
}



module.exports = {
	shortcuts: () => shortcuts,


	register(){
		explorer({
			keys: ['ctrl+n', 'ctrl+shift+f'],
			topic: 'find',
			description: "Find a specification or suite by name (similar to ReSharper/IntelliJ's ctrl-n functionality",
		});

		editor({
			keys: 'tab',
			topic: 'go-next',
			description: 'Move to the next cell or step in the editor'
		});

		editor({
			keys: 'shift+tab',
			topic: 'go-previous',
			description: 'Move to the previous cell or step in the editor'
		});

		explorer({
			keys: 'ctrl+/',
			topic: 'shortcut-help',
			description: 'Get help for the available keyboard shortcuts'
		});

		editor({
			keys: ['ctrl+shift+h', 'home'],
			topic: 'go-home',
			description: 'Move the focus to the top of the active specification editor'
		});

		editor({
			keys: ['ctrl+shift+e', 'end'],
			topic: 'go-end',
			description: 'Move the focus to the very bottom of the active specification editor'
		});

		editor({
			keys: 'up',
			topic: 'move-up',
			description: 'Move the focus to the prior step in the specification editor'
		});

		editor({
			keys: ['shift+up', 'pageup'],
			topic: 'move-up-section',
			description: 'Move the focus to the parent section of the active step or the prior section of a section'
		});

		editor({
			keys: 'down',
			topic: 'move-down',
			description: 'Move the focus to the next step in the specification editor'
		});

		editor({
			keys: ['shift+down', 'pagedown'],
			topic: 'move-down-section',
			description: 'Move the focus to the next section in the specification editor'
		});

		editor({
			keys: ['ctrl+alt+up', 'ctrl+pageup'],
			topic: 'reorder-up',
			description: 'Reorder steps or sections by moving the active step or section up'
		});

		editor({
			keys: ['ctrl+alt+down', 'ctrl+pagedown'],
			topic: 'reorder-down',
			description: 'Reorder steps or sections by moving the active step or section down'
		});

		editor({
			keys: ['ctrl+shift+p', ],
			topic: 'run-spec',
			description: 'Execute the current specification from the specification editor'
		});
/*
		editor({
			keys: 'ctrl+shift+r',
			topic: 'run-spec-auto',
			description: 'Toggle the auto-run state of the current specification editor screen'
		});
*/

		editor({
			keys: 'ctrl+s',
			topic: 'save-spec',
			description: 'Save the current specification'
		});

		editor({
			keys: 'ctrl+z',
			topic: 'undo',
			description: 'Undo the last edit'
		});

		editor({
			keys: 'ctrl+y',
			topic: 'redo',
			description: 'Redo the last undone edit'
		});

		editor({
			keys: ['alt+ins', 'alt+='],
			topic: 'add-item',
			description: 'Add an item to the active section or table'
		});

		editor({
			keys: 'ctrl+1',
			topic: 'go-preview',
			description: 'Activate the preview mode of the current specification'
		});

		editor({
			keys: 'ctrl+2',
			topic: 'go-editing',
			description: 'Activate the editor mode of the current specification'
		});

		editor({
			keys: 'ctrl+3',
			topic: 'go-results',
			description: 'Activate the results mode of the current specification'
		});

	}

}