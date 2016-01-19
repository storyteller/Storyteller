var React = require("react");
var Postal = require("postal");
var _ = require('lodash');

var {Grid, Row, Alert} = require('react-bootstrap');
var ResultsView = require('./results-view');
var SummaryTable = require('./../results/summary-table');

var ReactDOM = require('react-dom');

var {Router, Route, IndexRoute, Link, RouteHandler, browserHistory} = require('react-router');
var { Provider } = require('react-redux');
var { connect } = require('react-redux');

function getSpec(state, ownProps){
    return {spec: state.get('specs').get(ownProps.params.id)};
}

var SpecResults = connect(getSpec)(ResultsView);




function BatchReport(props){
    if (props.specs.length == 1){
        return (<ResultsView spec={props.specs[0]} />);
    }
    
    var headerText = props.system;
    if (props.suite && props.suite != 'All'){
        headerText += ': ' + props.suite;
    }

    var alertStyle = 'danger';
    var alertText = 'Failed ';
    if (props.success){
        alertStyle = 'success';
        alertText = 'Succeeded ';
    }

    return (
        <Grid>
            <Row>
                <Alert id="header-alert" bsStyle={alertStyle}>
                    <h3>Storyteller Results for <span id="batch-header-text">{headerText}</span> <small>{alertText} at {props.time}</small></h3>
                </Alert>

                <SummaryTable {...props} />
            </Row>
        </Grid>
    );
}

function getSpecs(state){
    var specs = state.get('specs').toList().toArray();
    return {
        specs: specs, 
        success: state.get('success'), 
        suite: state.get('suite'), 
        system: state.get('system'), 
        time: state.get('time'), 
        status: state.get('status-filter'), 
        lifecycle: state.get('lifecycle-filter')
    };
}

function getDispatch(dispatch){
    return {dispatch: dispatch};
}

var Summary = connect(getSpecs, getDispatch)(BatchReport);


module.exports = function startRouting(data){
    var Reducer  = require('./../../lib/state/reducer');

    var { createStore } = require('redux');
    var store = createStore(Reducer);
    
    store.dispatch(data);
    
    
    if (store.getState().get('specs').size == 1){
        var spec = store.getState().get('specs').toList().toArray()[0];
        
        ReactDOM.render(<Provider store={store}><ResultsView spec={spec} /></Provider>, document.getElementById("main"));
    }   
    else {
        var screen = (
            <Provider store={store}>
            <div>
                <div className="container">
                
                <Router>
                    <Route name="app" path="/" >
                        <Route name="spec-results" path="/spec/results/:id" component={SpecResults} />
                        <IndexRoute component={Summary}/>
                    </Route>
                </Router>
                
                </div>
                
            </div>
            </Provider>
        );
        
        ReactDOM.render(screen, document.getElementById("main"));
        
        
    }
};