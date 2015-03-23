module.exports = 	{
	key: 'Math', 
	title: 'Doing some mathematics!', 
	grammars: [
		{type: 'sentence', key: 'StartWith', format: 'Start with {x}'},
		{type: 'sentence', key: 'Add', format: 'Add {x}', cells:[{key: 'x', description: 'The operand for addition', default: '0'}]},
		{type: 'sentence', key: 'Subtract', format: 'Subtract {x}'},
		{type: 'sentence', key: 'TheResultShouldBe', format: 'The result should be {x}'},
		{type: 'sentence', key: 'Adding', format: 'Adding {x} to {y} should be {result}'},
		{type: 'embedded-section', key: 'Tabulating', fixture: {
			key: 'Tabulating',
			title: 'Doing some tabulations!',
			grammars: [
				{type: 'sentence', key: 'Enter', format: 'Enter {x}'},
				{type: 'sentence', key: 'Press', format: 'Press {button}'},
				{type: 'sentence', key: 'ValueShouldBe', format: 'The displayed value should be {value}'}
			]
		}}
	]
}