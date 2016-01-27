var React = require("react");
var Postal = require('postal');

// {id: , active: , title: , children:[]}

var buildItem = function(item){
	var children = item.children.map(x => buildItem(x));

	if (item.active){
		return ( <ActiveOutlineItem key={item.id} title={item.title} children={children}/> );
	}
	else {
		return ( <OutlineItem key={item.id} title={item.title} id={item.id} children={children} /> );
	}
}

var ActiveOutlineItem = React.createClass({
	render: function(){
		return (
			<li key={this.props.id}><b>{this.props.title}</b><ul>{this.props.children}</ul></li>
		);
	}
});

var OutlineItem = React.createClass({
	render: function(){
		var onclick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'select-holder',
				data: {holder: this.props.id}
			});

			e.preventDefault();
		}

		var id = 'outline-node-' + this.props.id;

		return (
			<li key={this.props.id}>
				<a href="#" id={id} onClick={onclick}>{this.props.title}</a>
				<ul>{this.props.children}</ul>
			</li>
		);
	}
});

module.exports = React.createClass({
	render: function(){
		var outline = buildItem(this.props.outline);

		return (<ul style={{marginTop: '20px'}} className="spec-outline">{outline}</ul>);
	}
});