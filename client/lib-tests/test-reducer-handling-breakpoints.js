var expect = require('chai').expect;
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');
var Postal = require('postal');
var _ = require('lodash');

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

    last(){
        if (this.events.length == 0){
            return null;
        }

        return this.events[this.events.length - 1];
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

describe('Handling changes to breakpoints in the Reducer', () => {
    var store;
    var listener;
   
    beforeEach(() => {
        Postal.reset();

        listener = new Listener('engine-request');

        store = createStore(reducer);
        store.dispatch(initial);
    });

    it('can set the next step message', () => {
        store.dispatch({
            type: 'next-step',
            spec: 'embeds',
            id: 5,
            position: null
        });

        var state = store.getState();
        var spec = state.get('specs').get('embeds');

        expect(spec.spec.nextStep).to.deep.equal({id: 5, position: null});
    });

    it('captures a new breakpoint', () => {
        var action = {
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 1,
            position: null
        };

        store.dispatch(action);

        var state = store.getState();
        var spec = state.get('specs').get('embeds');

        expect(spec.breakpoints()).to.deep.equal([{id: 1, position: null}]);
    });

    it('should update breakpoints to the engine upon changes', () => {
        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 1,
            position: null
        });

        expect(listener.last()).to.deep.equal({
            type: 'set-breakpoints',
            breakpoints: [{id: 1, position: null}],
            id: 'embeds'
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 5,
            position: 'setup'
        });

        expect(listener.last()).to.deep.equal({
            type: 'set-breakpoints',
            breakpoints: [{id: 1, position: null}, {id: 5, position: 'setup'}],
            id: 'embeds'
        });
        

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'clear',
            spec: 'embeds',
            id: 1,
            position: null
        });

        expect(listener.last()).to.deep.equal({
            type: 'set-breakpoints',
            breakpoints: [{id: 5, position: 'setup'}],
            id: 'embeds'
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'clear-all',
            spec: 'embeds'
        });

        expect(listener.last()).to.deep.equal({
            type: 'set-breakpoints',
            breakpoints: [],
            id: 'embeds'
        });
        
    });

    it('can add multiple breakpoints', () => {
        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 1,
            position: null
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 5,
            position: 'setup'
        });

        var state = store.getState();
        var spec = state.get('specs').get('embeds');

        expect(spec.breakpoints()).to.deep.equal([{id: 1, position: null}, {id: 5, position: 'setup'}]);
    });

    it('can clear all breakpoints', () => {
        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 1,
            position: null
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 5,
            position: 'setup'
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'clear-all',
            spec: 'embeds'
        });

        var state = store.getState();
        var spec = state.get('specs').get('embeds');

        expect(spec.breakpoints().length).to.equal(0);
    });

    it ('can clear a single breakpoint', () => {
        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 1,
            position: null
        });

        store.dispatch({
            type: 'alter-breakpoints',
            action: 'set',
            spec: 'embeds',
            id: 5,
            position: 'setup'
        });

        // now, clear one
        store.dispatch({
            type: 'alter-breakpoints',
            action: 'clear',
            spec: 'embeds',
            id: 1,
            position: null
        });

        var state = store.getState();
        var spec = state.get('specs').get('embeds');

        expect(spec.breakpoints()).to.deep.equal([{id: 5, position: 'setup'}]);
    });
});