module.exports = 	{
	key: 'Zork', 
	title: 'Playing Zork', 
	grammars: [
		{type: 'sentence', key: 'SwingSword', format: 'Swing sword!'},
		{type: 'sentence', key: 'North', format: 'Walk North {x} miles', cells:[{key: 'x'}]},
		{type: 'sentence', key: 'South', format: 'Walk South {x} miles', cells:[{key: 'x'}]},
		{type: 'sentence', key: 'East', format: 'Walk East {x} miles', cells:[{key: 'x'}]},
		{type: 'sentence', key: 'West', format: 'Walk West {x} miles', cells:[{key: 'x'}]}

	]
}