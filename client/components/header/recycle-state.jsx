var React = require("react");
var {Button, Modal} = require('react-bootstrap');
var uuid = require('node-uuid');
var Icons = require('./../icons');

var SystemProperties = function(props){
    var propDefs = [];
    var properties = props.system.get('properties');
    
    var i = 0;

    var entries = properties.toJS();
    for (var key in entries){
        var dt = ( <dt key={++i}>{key}</dt> );
        var dd = ( <dd key={++i}>{entries[key]}</dd> );

        propDefs.push(dt);
        propDefs.push(dd);
    }


    return (
            <dl className="dl-horizontal">
                <dt>System Name</dt>
                <dd>{props.system.get('system_name')}</dd>
                {propDefs}
            </dl>
    );
}

var SystemError = function(props){
    if (props.system.get('success')){
        return (
            <div></div>
        );
    }

    return (
        <div className="recycle-error bg-danger">{props.system.get('error')}</div>
    );
}

class RecycleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {showModal: false};
    }

    render(){
        var handleToggle = () => {
            this.setState({
                showModal: !this.state.showModal
            });
        }
        
        var close = () => this.setState({showModal: false});
        
		if (this.props.system.get('recycling')){
			var Running = Icons['running'];
		
			return (
				<Button bsStyle="link"><Running />Recycling...</Button>
			);
		}
	
		var bsStyle = 'link';
		var date = this.props.system.get('time');
		var text = 'Recycled at ' + date;

		if (!this.props.system.get('success')){
			bsStyle = "danger";
			text = "Recycle Failure!";
		}


		return (
			<Button onClick={handleToggle} bsStyle={bsStyle}>{text}
			<Modal show={this.state.showModal} onHide={close}>
	          <Modal.Header closeButton>
	            <Modal.Title>System State</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
			      <SystemProperties system={this.props.system} />
			      <SystemError system={this.props.system} />
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={close}>Close</Button>
	          </Modal.Footer>
			</Modal>
			</Button>


		);
    }
}





module.exports = RecycleState;