var React = require("react");
var uuid = require('node-uuid');

var marked = require('marked');
marked.setOptions({
  gfm: true
});

function ErrorBox({title, error, errorDisplay}){
	var title = null;
	if (title){
		title = (
			<span>{title}</span>
		);
	}

	var style = {
		overflow: 'auto'
	}

	if (title){
		return (
			<pre style={style} className="error bg-warning">
				{title}
				<hr />
				{error}
			</pre>
		);
	}

	if (errorDisplay == 'markdown'){
		var html = marked(error);
		return (
			<div style={style} className="error bg-warning">
				{title}
				<div>dangerouslySetInnerHTML={{__html: html}}</div>
			</div>
		)
	}

	return (
		<pre style={style} className="error bg-warning">
			<i className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>{error}
		</pre>
	);
}


module.exports = ErrorBox;
