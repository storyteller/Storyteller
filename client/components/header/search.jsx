var React = require("react");
var {Modal, Button, NavItem} = require('react-bootstrap');
var Icons = require('./../icons');
var SpecAndSuiteLookup = require('./spec-and-suite-lookup');
var Postal = require('postal');

class Search extends React.Component{
    constructor(){
        super();
        
        this.state = { showModal: false };
    }
    
	componentDidMount(){
		Postal.subscribe({
			channel: 'explorer',
			topic: 'find',
			callback: data => {
				if (!this.state.showModal){
					this.open();
				}
			}
		});
	}
    
	close() {
		this.setState({ showModal: false });
	}

	handleToggle(){
		this.setState({
			showModal: !this.state.showModal
		});
	}

	open() {
		this.setState({ showModal: true });
	}

	render(){
		var SearchIcon = Icons['search'];

        var handleToggle = () => this.handleToggle();
        var close = () => this.close();

		return (
			<Button id="search-button" bsStyle="link" onClick={handleToggle} title="Click to search for a specification or suite"><SearchIcon /> Search
			<Modal show={this.state.showModal} onHide={close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Search for Specifications or Suites</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	          	<SpecAndSuiteLookup  close={handleToggle}/>
	          </Modal.Body>
	          <Modal.Footer>
	          	<Button onClick={close}>Close</Button>
	          </Modal.Footer>
			</Modal>
			</Button>


		);
	}
}



module.exports = Search;