var React = require("react");
var Postal = require('postal');
var Icons = require('./../icons');

// {id: , active: , title: , children:[]}

var FolderOpen = Icons['folder-open'];
var FolderClosed = Icons['folder-closed'];

var ActiveOutlineItem = React.createClass({
	getInitialState: function() {
		return {
			collapsed: false,
			collapsedIcon: <FolderOpen />
		};
	},

	collapse: function(e) {
		this.setState({
			collapsed: !this.state.collapsed,
			collapsedIcon: this.state.collapsed ? <FolderOpen /> : <FolderClosed />
		});

		e.preventDefault();
	},

	render: function(){
		var container = this.props.children.length > 0 && !this.state.collapsed ? <OutlineContainer children={this.props.children} /> : '';
		var collapser = this.props.children.length > 0 ? <a className="toggle" href='#' onClick={this.collapse}>{this.state.collapsedIcon}</a> : '';
		return (
			<li key={this.props.id}>
				{collapser}
				<b>{this.props.title}</b>
				{container}
			</li>
		);
	}
});

var OutlineItem = React.createClass({
	getInitialState: function() {
		return {
			collapsed: false,
			collapsedIcon: <FolderOpen />
		};
	},

	collapse: function(e) {
		this.setState({
			collapsed: !this.state.collapsed,
			collapsedIcon: this.state.collapsed ? <FolderOpen /> : <FolderClosed />
		});

		e.preventDefault();
	},


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
		var container = this.props.children.length > 0 && !this.state.collapsed ? <OutlineContainer children={this.props.children} /> : '';
		var collapser = this.props.children.length > 0 ? <a className="toggle" href='#' onClick={this.collapse}>{this.state.collapsedIcon}</a> : '';

		return (
			<li key={this.props.id}>
				{collapser}
				<a href="#" id={id} onClick={onclick}>{this.props.title}</a>
				{container}
			</li>
		);
	}
});

var OutlineContainer = React.createClass({
	render: function() {
		return (
			<ul className="outline-container spec-outline">
			{
				this.props.children.map(item => {
					return item.active ?
					<ActiveOutlineItem key={item.id} title={item.title} children={item.children}/> :
					<OutlineItem key={item.id} title={item.title} id={item.id} children={item.children} />
				})
			}
			</ul>
		)
	}
});

module.exports = React.createClass({
	render: function(){
		return (
			<div className="spec-outline">
				<OutlineContainer children={this.props.outline.children} />
			</div>
		);
	}
});