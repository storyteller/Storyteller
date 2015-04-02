/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
	render(){
		var clazz = '';
		if (this.props.active){
			clazz = 'bg-primary';
		}

		return (<div className={clazz}>Will be adder lookup for {this.props.holder.title}</div>)
	}
});