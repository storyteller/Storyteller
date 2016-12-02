var React = require("react");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var Icons = require('./../../icons');

module.exports = function({spec, channel, message, icon, id, disabled, title}){
    var onclick = e => {
        var data = {id: spec.id};
        if (typeof message !== "string"){
            data = message;
        }

        var channel = channel || 'editor';

        Postal.publish({
            channel: channel,
            topic: message,
            data: data
        });

        e.preventDefault();
    };

    var Icon = Icons[icon];

    return (
        <Button
            id={id}
            title={title}
            disabled={disabled}
            onClick={onclick}><Icon /></Button>

    );
}