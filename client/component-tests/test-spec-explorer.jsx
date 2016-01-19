var React = require('react');
var expect = require('chai').expect;
var ComponentHarness = require('./component-harness');
var SpecExplorer = require('./../components/explorer/spec-explorer');
var $ = require('jquery');

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

describe('The Spec Explorer', () => {
    var icons = {
        'fa fa-fw fa-check text-success': 'success',
        'fa fa-fw fa-exclamation-circle text-danger': 'failed',
        'fa fa-fw fa-circle-o': 'none',
        'fa fa-fw fa-spinner fa-spin': 'running',
        'fa fa-fw fa-spinner fa-spin text-success': 'running-success',
        'fa fa-fw fa-spinner fa-spin text-danger': 'running-failed',
        'fa fa-fw fa-hourglass-o': 'queued'
    }  
    
    function findSuiteElement(path){
        var css = 'div.suite-node[data-path="' + path + '"]';
        return harness.$(css);
    }
    
    function toSuite(div){
        var iconClass = $($('i.fa', div).get(1)).attr('class');

        return {
            name: $('a.suite-name', div).html(),
            path: $(div).attr('data-path'),
            open: $(div).hasClass('open'),
            icon: icons[iconClass]
        }
    }
    
    
    
   function findSuiteNodes(){
       var suiteNodes = [];

       harness.$('.suite-header').each((i, div) => {
           suiteNodes.push(toSuite(div));
       });
       
       return suiteNodes;
   } 
   
   
 
   
    function fromSpecLeafElement(element){
        var iconClass = $('i.fa', element).attr('class');
        
        return {
            path: $(element).attr('data-path'),
            title: $('a.spec-name', element).html(),
            icon: icons[iconClass]
       }
    }
   

    
    function findSpecElement(path){
        var css = 'div.spec-leaf[data-path="' + path + '"]';
        return harness.$(css);
    }
    
    function findSpec(path){
        return fromSpecLeafElement(findSpecElement(path));
    }
    

    
    function iconIs(path, expected){
        var spec = findSpec(path);
        expect(spec.icon).to.equal(expected);

    }
    
    function suiteIconIs(path, expected){
        var element = findSuiteElement(path);

        var suite = toSuite(element);
        expect(suite.icon).to.equal(expected);
    }
    
    function findSpecLeaves(suitePath){
        var div = findSuiteElement(suitePath);

        var specs = [];

        $('div.spec-leaf', div).each((i, div) => {
            var spec = fromSpecLeafElement(div);
            specs.push(spec);
        });

        return specs;
    }
   
   
    var harness, component;

    before(() => {
        harness = new ComponentHarness();
        component = (<SpecExplorer />);
        harness.render(component); 
    });
    
    beforeEach(() => {
        harness.reset(); 
    });
   
    it('can render all the suites', () => {
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['Embedded', 'General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']); 
    });
    
    it('shows all the specs for a suite in the default mode', () => {
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Check properties",
            "Occasionally Times Out",
            "Selection List Values",
            "Services",
            "System Defined Lists and Runtime Converters",
            "Test with Bad Grammar Name",
            "Test with Missing Fixture Name"
        ]); 
    });
    
    
    
    it('spec has the none icon for a spec that is not running, queued, or has any results', () => {
        iconIs('Embedded/Embeds', 'none');
    });
    
    it('spec has the success icon when a spec has succeeded and is not running or queued', () => {
        iconIs('General/Occasionally Times Out', 'success');
    });
    
    it('spec has the failure icon when a spec has failed and is not running or queued', () => {
        iconIs('General/Check properties', 'failed');
    });
    
    it('suite state in intial load', () => {
       suiteIconIs('General', 'failed'); 
       suiteIconIs('Embedded', 'none');
    });
    
    it('picks up running icon on spec', () => {
        
        
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', step: 1, total: 10, counts: {rights: 0, wrongs: 0, errors: 0, invalids: 0}})
        harness.store.dispatch({type: 'queue-state', queued: [], running: 'embeds'});
        
        iconIs('Embedded/Embeds', 'running'); 
    });
    
    it('picks up running-success icon on spec', () => {
        
        
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', step: 1, total: 10, counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}})
        harness.store.dispatch({type: 'queue-state', queued: [], running: 'embeds'});
        
        iconIs('Embedded/Embeds', 'running-success'); 
    });
    
    it('picks up running-failed icon on spec', () => {
        
        
        harness.store.dispatch({type: 'spec-progress', id: 'embeds', counts: {rights: 0, wrongs: 1, errors: 0, invalids: 0}})
        harness.store.dispatch({type: 'queue-state', queued: [], running: 'embeds'});
        
        iconIs('Embedded/Embeds', 'running-failed'); 
    });
    
    it('picks up queued icon on spec', () => {
        harness.store.dispatch({type: 'queue-state', queued: ['embeds'], running: null});
        
        iconIs('Embedded/Embeds', 'queued'); 
    });
    
    it('can filter by success', () => {
        harness.click('#status-success');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['General', 'Sets', 'Tables']); 
        
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Occasionally Times Out",
            "System Defined Lists and Runtime Converters"
        ]); 
    });
    
    it('can filter by failed', () => {
        harness.click('#status-failed');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']); 
        
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Check properties",
            "Selection List Values",
            "Services",
            "Test with Bad Grammar Name",
            "Test with Missing Fixture Name"
        ]); 
    });
    
    it('can filter by none', () => {
        harness.click('#status-none');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['Embedded', 'Paragraphs', 'Sentences']); 
        
        var specs = findSpecLeaves('Sentences');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Facts",
        ]); 
    });
    
    it('can set the state filter back to all', () => {
        harness.click('#status-none');
        harness.click('#status-any');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['Embedded', 'General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']); 
    
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Check properties",
            "Occasionally Times Out",
            "Selection List Values",
            "Services",
            "System Defined Lists and Runtime Converters",
            "Test with Bad Grammar Name",
            "Test with Missing Fixture Name"
        ]); 
    
    });
    
    it('can filter by acceptance', () => {
        harness.click('#acceptance-lifecycle');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']); 
    
        var specs = findSpecLeaves('Sentences');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Currying",
            "Importing and Currying",
            "Sentences"
        ]); 
    });
    
    it('can filter by regression', () => {
        harness.click('#regression-lifecycle');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['Embedded', 'Paragraphs', 'Sentences']); 
        
        var specs = findSpecLeaves('Sentences');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Facts"
        ]); 
    });
    
    it('can reset the lifecycle filter back to all', () => {
        harness.click('#regression-lifecycle');
        harness.click('#any-lifecycle');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['Embedded', 'General', 'Paragraphs', 'Sentences', 'Sets', 'Tables']); 
    
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Check properties",
            "Occasionally Times Out",
            "Selection List Values",
            "Services",
            "System Defined Lists and Runtime Converters",
            "Test with Bad Grammar Name",
            "Test with Missing Fixture Name"
        ]); 
    });

    it('can filter by a mix of lifecycle and status', () => {
        harness.click('#acceptance-lifecycle');
        harness.click('#status-success');
        
        var suiteNodes = findSuiteNodes();
        var suiteNames = suiteNodes.map(x => x.path);

        expect(suiteNames).to.deep.equal(['General', 'Sets', 'Tables']); 
        
        
        var specs = findSpecLeaves('General');
        var names = specs.map(x => x.title);

        expect(names).to.deep.equal([
            "Occasionally Times Out",
            "System Defined Lists and Runtime Converters"
        ]); 
    });
    
    function badgeNumber(id){
        var button = harness.$('#' + id);
        var badge = $('span.badge', button).html();

        return parseInt(badge);
    }
    
    it('has the counts', () => {
       expect(badgeNumber('any-lifecycle')).to.equal(24); 
       expect(badgeNumber('acceptance-lifecycle')).to.equal(21); 
       expect(badgeNumber('regression-lifecycle')).to.equal(3);
       
       expect(badgeNumber('status-any')).to.equal(24);
       expect(badgeNumber('status-success')).to.equal(5);
       expect(badgeNumber('status-failed')).to.equal(16);
       expect(badgeNumber('status-none')).to.equal(3);
       
        
    });
   
    function assertIsOpen(suitePath){
        var element = findSuiteElement(suitePath);
        var toggle = $('a.toggle', element).get(0);


        var isOpen = $('i', toggle).attr('class').includes('fa-caret-down');
        expect(isOpen).to.be.true;
    }
    
    function assertIsClosed(suitePath){
        var element = findSuiteElement(suitePath);
        var toggle = $('a.toggle', element).get(0);
 
        var isClosed = $('i', toggle).attr('class').includes('fa-caret-right');
        expect(isClosed).to.be.true;
    }
    
    function toggleOpenedCaret(path){
        var element = findSuiteElement(path);
        var toggle = $('a.toggle', element).get(0);
        
        TestUtils.Simulate.click(toggle);

    }
    
    it('has all suites open by default', () => {
        assertIsOpen('Embedded'); 
        assertIsOpen('General'); 
        assertIsOpen('Paragraphs'); 
        assertIsOpen('Sentences'); 
        assertIsOpen('Sets'); 
        assertIsOpen('Tables'); 
    });
    
    it('can collapse all', () => {
        harness.click("#collapse-all");
        
        assertIsClosed('Embedded'); 
        assertIsClosed('General'); 
        assertIsClosed('Paragraphs'); 
        assertIsClosed('Sentences'); 
        assertIsClosed('Sets'); 
        assertIsClosed('Tables'); 
    });
    
    it('can expand all', () => {
        harness.click("#collapse-all");
        harness.click("#expand-all");
        
        assertIsOpen('Embedded'); 
        assertIsOpen('General'); 
        assertIsOpen('Paragraphs'); 
        assertIsOpen('Sentences'); 
        assertIsOpen('Sets'); 
        assertIsOpen('Tables'); 
    });
    

    it('can toggle a suite closed', () => {
        toggleOpenedCaret('General');
        
        assertIsClosed('General');
    });
    
    it('can toggle a suite open', () => {
        toggleOpenedCaret('General');
        toggleOpenedCaret('General');
        
        assertIsOpen('General');
    });
    
});