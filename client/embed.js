import $ from 'jquery';
import React from 'react';
import FixtureLibrary from './lib/fixtures/fixture-library';
import Specification from './lib/model/specification';
import ComponentLoader from './components/editing/component-loader';
import EmbeddedSpec from './components/embedded-spec';


$(document).ready(() => {
	$('.spec-preview').each((i, div) => {
		var path = $(div).attr('data-path');
		console.log('Writing spec results for ' + path);

		var fixtures = JSON.parse(_.unescape($(div).attr('data-fixtures')));
		var specData = JSON.parse(_.unescape($(div).attr('data-spec')));
		var library = new FixtureLibrary(fixtures);


		var spec = new Specification(specData, library);
		var components = spec.previews(ComponentLoader.preview);

		var component = React.createElement(EmbeddedSpec, {children: components, spec: spec});
		React.render(component, div);

	});

	$('.spec-result').each((i, div) => {

		var path = $(div).attr('data-path');
		console.log('Writing spec results for ' + path);

		var fixtures = JSON.parse(_.unescape($(div).attr('data-fixtures')));
		var specData = JSON.parse(_.unescape($(div).attr('data-spec')));
		var results = JSON.parse(_.unescape($(div).attr('data-results')));

		var library = new FixtureLibrary(fixtures);


		var spec = new Specification(specData, library);
		spec.readResults({results: results});


		var components = spec.buildResults(ComponentLoader.results);

		var component = React.createElement(EmbeddedSpec, {children: components, spec: spec});
		React.render(component, div);
	});
});
