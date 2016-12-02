var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('chai').expect;
var $ = require('jquery');

var Breakpoint = require('../components/editing/breakpoint');


describe('Breakpoint Icon', () => {
    const id = 11;
    const position = 'setup';

    var spec;
    var message;
    var dispatch;
    var props;
    var instance;

    beforeEach(() => {
        message = null;
        spec = {
            isAtBreakpoint: () => false,
            isActiveStep: () => false
        }

        dispatch = msg => message = msg;

        props = {spec: spec, id: id, position: position, dispatch: dispatch};
    });

	function element(){
        var div = $('<div></div>').appendTo(document.body).get(0);

        var component = (<Breakpoint {...props} />);
        ReactDOM.render(component, div);

		return div.firstChild;
	}

	function iconClasses(){
        var elem = element();
        return $('i', elem).attr('class');
	}


    it('renders for a inactive line that is not a breakpoint', () => {
        expect(iconClasses()).to.equal('fa fa-fw fa-circle-o');
    });

    it('will set a breakpoint for something inactive', () => {
        element().click();

        expect(message).to.deep.equal({
            type: 'alter-breakpoints',
            id: id,
            position: position,
            action: 'set',
            spec: spec
        });
    });

    it('renders for an active line that is not a breakpoint', () => {
        spec.isActiveStep = () => true;

        expect(iconClasses()).to.equal('fa fa-fw fa-circle text-info');
    });

    it('renders for an active line that is a breakpoint', () => {
        spec.isActiveStep = () => true;
        spec.isAtBreakpoint = () => true;

        expect(iconClasses()).to.equal('fa fa-fw fa-circle text-info');
    });

    it('renders for an inactive line that is a breakpoint', () => {
        spec.isAtBreakpoint = () => true;

        expect(iconClasses()).to.equal('fa fa-fw fa-circle text-danger');
    });

    it('will clear a breakpoint for something inactive', () => {
        spec.isAtBreakpoint = () => true;

        element().click();

        expect(message).to.deep.equal({
            type: 'alter-breakpoints',
            id: id,
            position: position,
            action: 'clear',
            spec: spec
        });
    });
});