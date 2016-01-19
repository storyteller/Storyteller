var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');
var batch_run_data = require('./../batch-run-response-data');
var BatchReport = require('./../components/batching/batch-report');

describe('The BatchReport', () => {
    var main;
    
    function showResults(alter){
        var data = batch_run_data;
        if (alter){
            data = JSON.parse(JSON.stringify(data));
            alter(data);
        }
        
        BatchReport(data);
    }
    
    beforeEach(() => {
        $('#main').remove();
        
        main = document.createElement('div');
        main.id = "main";
        document.documentElement.appendChild(main);
        
        
    });
    
    it('can show the results report without any errors', () => {
        showResults(); 
    });
    
    it('shows the system name without a suite', () => {
        showResults(x => {
            x.system = 'The Test System';  
            x.suite = 'All';
        });
        
        var headerText = $('#batch-header-text', main).html();
        expect(headerText).to.equal('The Test System');
    });
    
    it('shows the system name with a suite', () => {
        showResults(x => {
            x.system = 'The Test System';  
            x.suite = 'Dangerous Specs';
        });
        
        var headerText = $('#batch-header-text', main).html();
        expect(headerText).to.equal('The Test System: Dangerous Specs');
    });
    
    it('highlights the header red when the report failed', () => {
        showResults(x => {
            x.success = false;
              
        });
        
        expect($('#header-alert', main).attr('class')).to.equal('alert alert-danger');
    });
    
    it('highlights the header green when the report is successful', () => {
        showResults(x => {
            x.success = true; 
        });
        
        expect($('#header-alert', main).attr('class')).to.equal('alert alert-success');
    });
    
    function rowCount(){
        var table = $('#results-table', main);
        return $('tr.spec-row', table).length;
    }
    
    it('can apply regression filter', () => {
        showResults(x => {
            for (var i = 0; i < 5; i++){
                x.records[i].specification.lifecycle = 'Regression';
            }
        });

        expect(rowCount()).to.equal(21);
        expect($('#regression-lifecycle', main).length).to.equal(1);
        TestUtils.Simulate.click($('#regression-lifecycle', main).get(0));

        expect(rowCount()).to.equal(5);
    });
    
    it('can apply acceptance filter', () => {
        showResults(x => {
            for (var i = 0; i < 5; i++){
                x.records[i].specification.lifecycle = 'Regression';
            }
        });
        
        expect(rowCount()).to.equal(21);
        
        $('#acceptance-lifecycle', main).click();
        expect(rowCount()).to.equal(16);
    });
    
    it('can clear the lifecycle filter', () => {
        showResults(x => {
            for (var i = 0; i < 5; i++){
                x.records[i].specification.lifecycle = 'Regression';
            }
        });
        
        expect(rowCount()).to.equal(21);
        
        $('#acceptance-lifecycle', main).click();
        $('#any-lifecycle', main).click();
        expect(rowCount()).to.equal(21);
    })
    
    it('can  apply the success filter', () => {
        showResults();
        
        $('#success-status', main).click();
        expect(rowCount()).to.equal(5);
    });
    
    it('can apply the failed filter', () => {
        showResults();
        
        $('#failed-status', main).click();
        expect(rowCount()).to.equal(16);
        
    });
    
    it('can clear the status filter', () => {
        showResults(); 
        $('#failed-status', main).click();
        $('#all-status', main).click();
        
        expect(rowCount()).to.equal(21);
    });
    
    it('will show the results for a single spec', () => {
        showResults(x => {
            var records = [x.records[0]];
            x.records = records;
        });
        
        expect($('div.results-view', main).length).to.equal(1);
        expect($('div.summary-table', main).length).to.equal(0);
    });
    
    it('shows the summary table if there are more than one spec', () => {
        showResults();
        
        expect($('div.results-view', main).length).to.equal(0);
        expect($('div.summary-table', main).length).to.equal(1);
    });
});