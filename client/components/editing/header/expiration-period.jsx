/** @jsx React.DOM */
var React = require("react");
var Postal = require('postal');
var changes = require('./../../../lib/model/change-commands');
var range = require('./../../../lib/array-helpers').range;


var ExpirationPeriod = React.createClass({
  changeFunc(e){
    const value = e.target.value;
    const number = parseInt(value, 10);
    e.preventDefault();
    if (isNaN(number)) {
      return;
    }

    Postal.publish({
      channel: 'editor',
      topic: 'changes',
      data: changes.changeExpirationPeriod(number)
    });
  },

  getSelect(){
    const options = range(0, 12).map(function (val) {
      return <option value={val} key={val}>{val}</option>
    })
    const select = <select id="expiration-period" onChange={this.changeFunc} type="text" value={this.props.expirationPeriod}>{options}</select>;
    if (!this.props.expirationPeriod) {
      return <div>Never expires. ({select} months)</div>;
    }

		return (
      <div>Expires in: {select} months.</div>
		);
  },

	render(){
    return this.getSelect();
	}
});

module.exports = ExpirationPeriod;
