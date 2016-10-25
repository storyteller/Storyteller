import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';


function toErrorMessage(data){
	if (data.error != null && data.message != null){
		return `${data.message} -> ${data.error}`;
	}

	return data.message || data.error;
}


function FixtureError({error}){
    const text = toErrorMessage(error);

    return (
        <pre>{text}</pre>
    );
}

function GrammarError({error, grammar}){
    const text = toErrorMessage(error);

    let title = null;
    if (grammar != null && grammar != 'null'){
        title = (<h4>Grammar: {grammar}</h4>);
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

function FixtureHeader({fixture}){
    const title = fixture.key + ' implemented by ' + fixture.implementation + ' (' + fixture.title + ')';

    return (
        <h3>{title}</h3>
    );
}



var getReport = function(state){
	return {report: state.get('fixtures').errorReport()};
}

function GrammarReport({report}){
    const body = [];

    let i = 0;

    report.forEach(fixture => {
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
