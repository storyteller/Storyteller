var React = require("react");
var _ = require('lodash');
var { connect } = require('react-redux');

function getLibrary(state){
    return {library: state.get('fixtures')};
}

function FixtureTable({library}){
    var fixtures = _.sortBy(_.values(library.fixtures), x => x.title);

    var i = 0;

    var rows = fixtures.map(x => {
        var href = '#/fixture/' + x.key;
        var clazz = '';
        if (x.errorCount() > 0){
            clazz = 'warning';
        }


        return (
            <tr key={++i} className={clazz}>
                <td><a href={href}>{x.title}</a></td>
                <td>{x.implementation}</td>
                <td style={{textAlign: 'right'}}>{x.errorCount()}</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>The Specification Language</h2>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Fixture Title</th>
                        <th>Implementation</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

        </div>
    );
}



module.exports = connect(getLibrary)(FixtureTable);