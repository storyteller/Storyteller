var React = require("react");
var {Alert} = require('react-bootstrap');
var { connect } = require('react-redux');


function toErrorMessage(data){
	if (data.error != null && data.message != null){
		return data.message + " -> " + data.error;
	}

	return data.message || data.error;
}


function FixtureError(props){
    var text = toErrorMessage(props.error);

    return (
        <pre>{text}</pre>
    );
}

function GrammarError(props){
    var text = toErrorMessage(props.error);

    var title = null;
    if (props.grammar != null && props.grammar != 'null'){
        title = (<h4>Grammar: {props.grammar}</h4>);
    }

    return (
        <div>
            {title}
            <pre>
                {text}
            </pre>
        </div>
    );
}

function FixtureHeader(props){
    var title = props.fixture.key + ' implemented by ' + props.fixture.implementation + ' (' + props.fixture.title + ')';

    return (
        <h3>{title}</h3>
    );
}



var getReport = function(state){
	return {report: state.get('fixtures').errorReport()};
}

function GrammarReport(props){
    var body = [];

    var i = 0;

    props.report.forEach(fixture => {
        var header = (<FixtureHeader fixture={fixture} key={++i} />);
        body.push(header);

        fixture.errors.forEach(e => {
            var error = (<FixtureError error={e} key={++i} />);
            body.push(error);
        });

        fixture.grammars.forEach(g => {
            g.errors.forEach(e => {
                var error = (<GrammarError error={e} grammar={g.key} key={++i} />);
                body.push(error);
            });
        });

        body.push(<hr key={++i} />);
 
    });


    return (
        <div>
        <h2>Grammar Errors</h2>

        {body}

        </div>
    );
}




module.exports = connect(getReport)(GrammarReport);