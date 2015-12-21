var React = require("react");
var Postal = require('postal');

var {ProgressBar, Button, Navbar} = require('react-bootstrap');

var SpecProgressBar = React.createClass({
	getInitialState: function(){
		return {
			running: false,
			step: 0,
			total: 0,
			spec: null,
			counts: null
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'explorer',
			topic: 'spec-execution-state',
			callback: data => {
				self.setState({
					running: data.running,
					step: data.step,
					total: data.total,
					spec: data.spec,
					counts: data.counts
				});
			}
		});
	},

	render: function(){
		if (!this.state.running){
			return null;
		}

		var bsStyle = null;

		if (this.state.counts.anyResults()){
			if (this.state.counts.success()){
				bsStyle = "success";
			}
			else{
				bsStyle = "danger";
			}
		}

		var cancel = e => {
			Postal.publish({
				channel: 'engine-request',
				topic: 'cancel-spec',
				data: {id: this.state.spec.id}
			});

			e.preventDefault();
		}

		return (
			<div className="well status-bar" style={{margin: '10px', padding: '5px'}} id="spec-progress-bar">
			<Button onClick={cancel} className="pull-right" bsStyle="link" style={{marginLeft: '10px', marginRight: '10px', height: '25px'}}>Cancel Execution</Button>
			<ProgressBar  
				label={'Running ' + this.state.spec.title} 
				bsStyle={bsStyle} 
				min={0} 
				max={this.state.total} 
				now={this.state.step} />
				
			</div>
		);

	}
});

module.exports = SpecProgressBar;