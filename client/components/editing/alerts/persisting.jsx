var React = require("react");
var Icons = require('./../../icons');
var Running = Icons['running'];
var Postal = require('postal');
var {Alert} = require('react-bootstrap');


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


class Persisting extends React.Component
{
    constructor(){
        super();
        this.state = {persisting: false, lastSaved: null};
        
        
    }
    
    componentDidMount(){
        this.listenForPersisting = Postal.subscribe({
            channel: 'editor',
            topic: 'persisting',
            callback: data => {
                if (data.id == this.props.id){
                    this.setState({persisting: true});
                }
            }
        });
        
        this.listenForSaved = Postal.subscribe({
           channel: 'engine',
           topic: 'spec-saved',
           callback: data => {
               if (data.spec.id == this.props.id){
                   this.setState({persisting: false, lastSaved: data.lastSaved});
               }
           } 
        });
    }
    
    componentWillUnmount(){
        
    }
    
    render(){
		if (this.state.persisting){
			return (
				<p><Running /> Saving...</p>
			);
		}

		if (this.state.lastSaved != null){
			return ( <PersistedAlert lastSaved={this.state.lastSaved} /> );
		}

		return null;
    }
}



module.exports = Persisting;