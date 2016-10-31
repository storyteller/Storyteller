import React from 'react';
import Icons from './../../icons';
import Postal from 'postal';
import { Alert } from 'react-bootstrap';

const Running = Icons['running'];

const PersistedAlert = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={10000}>
          <p>Saved at {this.props.lastSaved}</p>
        </Alert>
      );
    }

    return null;
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});


class Persisting extends React.Component {
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
