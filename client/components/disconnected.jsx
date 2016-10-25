import React from 'react';
import ReactDOM from 'react-dom';

function Disconnected() {
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

export default function() {
	ReactDOM.render(<Disconnected/>, document.getElementById('main'));
}
