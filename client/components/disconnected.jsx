var React = require("react");

var Disconnected = React.createClass({
	render(){
		return (
			<div>
				<br />
				<br />
				<br />
				<h1 style={{textAlign: 'center'}}>This Storyteller client is disconnected from the server.</h1>
				<p style={{textAlign: 'center'}}>Close this tab or refresh to try to reconnect</p>

			</div>


		);
	}
});

module.exports = function(){
	React.render(<Disconnected/>, document.body);
}