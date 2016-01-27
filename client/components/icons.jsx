'use strict';

var React = require('react');
var _ = require('lodash');

var icons = {};

var icon = function(name, classes){
	var all = ['fa', 'fa-fw'].concat(classes);
	var clazz = _(all).join(' ');


	var component = React.createClass({
		displayName: name,
		render: function(){
			var className = clazz;
			if (this.props.className){
				className = clazz + ' ' + this.props.className;
			}

			return (
				<i className={className}></i>
			);

		}
	});

	icons[name] = component;

	return component;
};


var Success = icon('success', ['fa-check', 'text-success']);
var Failed = icon('failed', ['fa-exclamation-circle', 'text-danger']);
var None = icon('none', ['fa-circle-o']);
var Running = icon('running', ['fa-spinner', 'fa-spin']);
var RunningSuccess = icon('running-success', ['fa-spinner', 'fa-spin', 'text-success']);
var RunningFailed = icon('running-failed', ['fa-spinner', 'fa-spin', 'text-danger']);
var Close = icon('close', ['fa-close']);
icon('queued', ['fa-hourglass-o']);

icon('remove', ['fa-remove']);
icon('folder-open', ['fa-caret-down']);
icon('folder-closed', ['fa-caret-right']);

icon('undo', ['fa-undo']);
icon('redo', ['fa-undo', 'fa-rotate-180']);
icon('run', ['fa-play']);
icon('save', ['fa-save']);
icon('copy', ['fa-copy']);
icon('stop', ['fa-stop']);
icon('help', ['fa-question']);
icon('search', ['fa-search']);
icon('checked', ['fa-check']);
icon('error', ['fa-exclamation-circle']);

icon('down-arrow', ['fa-chevron-down']);
icon('up-arrow', ['fa-chevron-up']);
icon('reorder-inactive', ['fa-bars']);
icon('reorder-active', ['fa-bars', 'text-success']);

icon('open', ['fa-external-link']);

module.exports = icons;
