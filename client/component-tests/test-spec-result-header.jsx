var expect = require('chai').expect;
var QueueCount = require('./../components/queue/queue-count');
var ComponentHarness = require('./component-harness');
var React = require('react');
var SpecPreview = require('./../components/editing/spec-preview');
var $ = require('jquery');

describe.only('The SpecResultHeader', () => {
    var harness;
    
    before(() => {
        harness = new ComponentHarness(); 
    });
    
    it('does not render when there are no results', () => {
        harness.openEditor('embeds');
        
        var isRendered = harness.$('#spec-result-header').length > 0;
        
        expect(isRendered).to.be.false;
    });
    
    function findText(headerElement){
        var text = "";
        $('span', headerElement).each((i, span) => {
            if (!span.innerHTML.includes('<span')){
                text = text + span.innerHTML;
            }
            
        });
        
        return text.trim();
    }
    
    it('renders for failed spec that is not running', () => {
        harness.openEditor('general1');
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Failed in 151 ms with 3 right, 3 wrong, 0 errors, 0 invalids at 2:05:03 PM");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-exclamation-circle text-danger");
            
        expect(header.attr('class')).to.equal("alert alert-danger");
    });
    
    it('renders for successful spec that is not running', () => {
        harness.openEditor('SometimesSlow');
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Succeeded in 3 ms with 0 right, 0 wrong, 0 errors, 0 invalids at 2:05:03 PM");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-check text-success");
            
            
        expect(header.attr('class')).to.equal("alert alert-success");
    });
    
    it('renders for queued spec, no previous results', () => {
        harness.openEditor('embeds');
        harness.store.dispatch({type: 'queue-state', queued: ['embeds'], running: null})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Queued for Execution");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-hourglass-o");
            
        expect(header.attr('class')).to.equal("alert alert-info");
    });
    
    it('renders for queued spec the previously succeeded', () => {
        harness.openEditor('SometimesSlow');
        harness.store.dispatch({type: 'queue-state', queued: ['SometimesSlow'], running: null})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Queued for Execution, last run was 0 right, 0 wrong, 0 errors, 0 invalids");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-hourglass-o");
            
        expect(header.attr('class')).to.equal("alert alert-success");
    });
    
    it('renders for queued spec the previously failed', () => {
        harness.openEditor('general1');
        harness.store.dispatch({type: 'queue-state', queued: ['general1'], running: null})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Queued for Execution, last run was 3 right, 3 wrong, 0 errors, 0 invalids");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-hourglass-o");
            
        expect(header.attr('class')).to.equal("alert alert-danger");
    });
    
    it('renders for running spec with no results', () => {
        harness.openEditor('embeds');
        harness.store.dispatch({type: 'queue-state', queued: ['embeds'], running: null})
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', step: 1, total: 10, counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0}})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Running with 0 right, 0 wrong, 0 errors, 0 invalids");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-spinner fa-spin");
            
        expect(header.attr('class')).to.equal("alert alert-info");
    });
    
    it('renders for running spec that is succeeding', () => {
        harness.openEditor('embeds');
        harness.store.dispatch({type: 'queue-state', queued: ['embeds'], running: null})
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', step: 1, total: 10, counts: {rights: 5, wrongs: 0, errors: 0, invalids: 0}})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Running with 5 right, 0 wrong, 0 errors, 0 invalids");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-spinner fa-spin text-success");
            
        expect(header.attr('class')).to.equal("alert alert-success");
    });
    
    it('renders for running spec that is failing', () => {
        harness.openEditor('embeds');
        harness.store.dispatch({type: 'queue-state', queued: ['embeds'], running: null})
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', step: 1, total: 10, counts: {rights: 5, wrongs: 5, errors: 0, invalids: 0}})
        
        // pre-canned data in initialization.js
        
        var header = harness.$("#spec-result-header");
        
        expect(findText(header))
            .to.equal("Running with 5 right, 5 wrong, 0 errors, 0 invalids");
    
        expect($("i.fa", header).attr('class'))
            .to.equal("fa fa-fw fa-spinner fa-spin text-danger");
            
        expect(header.attr('class')).to.equal("alert alert-danger");
    });
});