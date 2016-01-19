var React = require('react');
var ReactDOM = require('react-dom');
var initialization = require('./../initialization');
var $ = require('jquery');
var Reducer  = require('./../lib/state/reducer');
var { createStore } = require('redux');
var { Provider } = require('react-redux');
var Postal = require('postal');
var expect = require('chai').expect;
var _ = require('lodash')

class Listener {
    constructor(channel){
        this.events = [];    
        
        Postal.subscribe({
            channel: channel,
            topic: '*',
            callback: (data, env) => {
                data.type = env.topic;
                this.events.push(data);
            } 
        });
    }
    
    send(msg){
        this.events.push(msg);
    }
    
    clear(){
        this.events = [];
    }
    
    singleEventReceivedShouldBe(expected){
        expect(listener.events.length).to.equal(1);
        expect(listener.events[0]).to.deep.equal(expected);
    }
    
    findPublishedMessage(topic){
        return _.find(this.events, x => {
            return x.type == topic;
        });
    }
}

class ComponentHarness {
    constructor(){
        Postal.reset();
        
        this.store = createStore(Reducer);
        this.store.dispatch(initialization);

		this.div = document.createElement('div');
		document.documentElement.appendChild(this.div);

        this.engineMessages = new Listener('engine-request');
        this.editorMessages = new Listener('editor');
        this.explorerMessages = new Listener('explorer');
        
        var SpecEditorPresenter = require('./../lib/presentation/spec-editor-presenter');

        SpecEditorPresenter(this.store, this.engineRequests);
        
        global.$ = $;
        global.jQuery = $;
        
 
	    if (window){
		    window.$ = $;
		    window.jQuery = $;
	    }
	    
        
        require('./../lib/presentation/typeahead.jquery.js');
    }
    
    reset(){
        this.engineMessages.clear();
        this.editorMessages.clear();
        this.explorerMessages.clear();
        
        this.store.dispatch({type: 'reset-all', initialization: initialization});
    }
    
    render(component){
        ReactDOM.render(
        (
            <Provider store={this.store}>
                {component}
            </Provider>
        )
        , this.div);
    }
    
    openResults(id){
        var SpecResults = require('./../components/editing/spec-results');
        var component = (<SpecResults params={{id: id}} />);
        this.render(component);
    }
    
    openEditor(id){
        var SpecEditor = require('./../components/editing/spec-editor');
        var component = (<SpecEditor params={{id: id}} />);
        this.render(component);
    }
    
    $(match){
        return $(match, this.div);
    }
    
	element(css){
        if (!css){
            return this.div.firstChild;
        }
        
		return $(css, this.div).get(0);
	}

	click(css){
		var node = this.element(css);
		TestUtils.Simulate.click(node);
	}

	html(css){
        if (!css){
            return $(this.div).html();
        }
        
		return $(css, this.div).html();
	}
}

module.exports = ComponentHarness;