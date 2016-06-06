var React = require("react");
var {Grid, Row} = require('react-bootstrap');

function EditorLoading({spec}){
    return (
        <Grid>
            <Row>
                <div className="center-block">
                    <br />
                    <br />
                    <br />
                    <h3><i className="fa fa-spinner fa-2x fa-spin"></i> Loading {spec.title}...</h3>
                </div>
            </Row>
        </Grid>
    );
}

module.exports = EditorLoading;