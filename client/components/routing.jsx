import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, RouteHandler} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import SpecExplorer from './explorer/spec-explorer';
import Language from './language/language';
import Documentation from './documentation';
import QueuePage from './queue/queue-page';
import Header from './header/header';
import GrammarErrors from './grammars/grammar-errors';
import SpecEditor from './editing/spec-editor';
import SpecPreview from './editing/spec-preview';
import SpecResults from './editing/spec-results';
import SpecStepthrough from './editing/spec-stepthrough';
import SuiteExplorer from './explorer/suite-explorer';
import ResultsPane from './results/results-pane';
import FixtureTable from './language/fixture-table';

var history = createHistory();
history.listen(location => {
    setLocation(location);
});

function Routing(){
    return (
        <div>
            <Header />
            
            <Router>
                <div className="container-fluid">   
                    <Route name="language" path="/language" component={Language}/>
                    <Route name="documentation" path="/docs" component={Documentation}/>
                    <Route name="queue" path="/queue" component={QueuePage} />
                    <Route name="grammar-errors" path="/grammar-errors" component={GrammarErrors} />
                    <Route name="spec-preview" path="/spec/preview/:id" component={SpecPreview} />
                    <Route name="spec-editor" path="/spec/editing/:id" component={SpecEditor} />
                    <Route name="spec-results" path="/spec/results/:id" component={SpecResults} />
                    <Route name="spec-stepthrough" path="/spec/stepthrough/:id" component={SpecStepthrough} />
                    <Route name="fixture" path="/fixture/:key" component={FixtureTable} />
                    <Route name="suite-explorer" path="/suite/*" component={SuiteExplorer} />
                    <Route name="results" path="/results" component={ResultsPane} />
                    <Route name="home" exact path="/" component={SpecExplorer}/>
                </div>
            </Router>
            
        </div>
    );
}

module.exports = Routing;