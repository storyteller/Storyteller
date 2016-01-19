var React = require('react');
var expect = require('chai').expect;

var $ = require('jquery');
var ComponentHarness = require('./../component-tests/component-harness');
var Header = require('./../components/header/header');




describe('The Header Control', () => {
	var component, harness;

	beforeEach(() => {
		harness = new ComponentHarness();
        component = (<Header />);
        harness.render(component);
	});

    function render(props){
		var recycled = require('./../initialization').recycled;
        
        var msg = _.assign(recycled, props);

        harness.store.dispatch(msg);
    }

	it('renders the project name without the profile', function(){

        render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: null
			}
        });

		var title = harness.$('#project-title a').html();
		expect(title).to.equal('My Project');
	});

	it('displays the project name with the profile', () => {
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

		var title = harness.$('#project-title a').html();
		expect(title).to.equal('My Project (Connected)');
	});

	it('a request can be sent to recycle the system', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

		harness.click('#force-recycle a');

		var message = harness.engineMessages.findPublishedMessage('force-recycle');

		expect(message).to.not.be.null;
	});

	it('shows the grammar errors if there are some', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

        // pre-canned data
		var errorCount = 14;

		var grammarCountText = harness.$('#grammar-error-count .badge').html();

		expect(grammarCountText).to.equal(errorCount.toString());
	});

	it('does not show grammar errors if there are none', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			},
			fixtures: []
		});


		expect(harness.store.getState().get('fixtures').errorCount()).to.equal(0);

		expect(harness.$('#grammar-error-count').length).to.equal(0);
	});



});