/** @jsx React.DOM */

var React = require("react");
var Icons = require('./../../icons');
var Running = Icons['running'];

var Alert = require('react-bootstrap/Alert');


var PersistedAlert = React.createClass({
  getInitialState: function() {
    return {
      alertVisible: true
    };
  },

  render: function() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={10000}>
          <p>Saved at {this.props.lastSaved}</p>
        </Alert>
        );
    }

    return null;
  },

  handleAlertDismiss: function() {
    this.setState({alertVisible: false});
  },

  handleAlertShow: function() {
    this.setState({alertVisible: true});
  }
});



var Persisting = React.createClass({
	render: function(){
		if (this.props.persisting){
			return (
				<p><Running /> Saving...</p>
			);
		}

		if (this.props.lastSaved != null){
			return ( <PersistedAlert lastSaved={this.props.lastSaved} /> );
		}

		return null;
	}
});

module.exports = Persisting;