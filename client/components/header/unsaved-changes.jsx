var React = require("react");
var Postal = require('postal');
var Icons = require('./../icons');
var {Button} = require('react-bootstrap');
var { connect } = require('react-redux');
var _ = require('lodash');

function getState(state){
    return {specs: state.get('specs')}
}

function UnsavedChanges(props){
    var dirties = props.specs.toList().toArray().filter(x => x.spec.isDirty());

    if (dirties.length == 0) return (<span />);

    var SaveIcon = Icons['save'];

    var onClick = e => {
        dirties.forEach(spec => {
            var message = {
                type: 'save-spec-body',
                id: spec.id,
                spec: spec.write(),
                revision: spec.revision
            };

            Postal.publish({
                channel: 'engine-request',
                topic: 'save-spec-body',
                data: message
            });
        });

        e.preventDefault();
    };

    return (
        <Button bsStyle="link" onClick={onClick} title="Click to save all specifications with unsaved changes"><SaveIcon />Save All Changes</Button>
    );
}

module.exports = connect(getState)(UnsavedChanges);