import React from 'react';
import cn from 'classnames';

const icons = {};

const icon = function(name, classes){
	const core = ['fa', 'fa-fw'];

	function component(props) {
		return (
			<i className={cn(core, classes, props.className)}></i>
		);
	}
	component.displayName = name;

	icons[name] = component;

	return component;
};


const Success = icon('success', ['fa-check', 'text-success']);
const Failed = icon('failed', ['fa-exclamation-circle', 'text-danger']);
const None = icon('none', ['fa-circle-o']);
const Running = icon('running', ['fa-spinner', 'fa-spin']);
const RunningSuccess = icon('running-success', ['fa-spinner', 'fa-spin', 'text-success']);
const RunningFailed = icon('running-failed', ['fa-spinner', 'fa-spin', 'text-danger']);
const Close = icon('close', ['fa-close']);
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
