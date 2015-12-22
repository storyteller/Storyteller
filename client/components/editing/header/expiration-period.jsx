var React = require("react");
var Postal = require('postal');
var {range} = require('./../../../lib/array-helpers');
var changes = require('./../../../lib/model/change-commands');
var hierarchy = require('./../../../lib/stores/hierarchy');
var {OverlayTrigger, Tooltip} = require('react-bootstrap');



var ExpirationPeriod = React.createClass({
  changeFunc(e){
    const value = e.target.value;
    const number = parseInt(value, 10);
    e.preventDefault();
    if (isNaN(number)) {
      return;
    }

    changes.changeExpirationPeriod(number);
  },

  clickFunc(e) {
    e.preventDefault();
    hierarchy.bumpSpecDate(this.props.spec);
  },

  getExpirationPeriod(){
    return this.props.spec['expiration-period']
  },

  getTooltip(){
    return <Tooltip id="expiration-tooltip" animation={true}>This button will bump the "Last Updated" date.</Tooltip>;
  },

  getSelect(){
    const options = range(0, 12).map(function (val) {
      var display = (val) ? val : "Never";
      return <option value={val} key={val}>{display}</option>
    })
    return <select id="expiration-period-select" onChange={this.changeFunc} type="text" value={this.getExpirationPeriod()}>{options}</select>;
  },

  render(){
    var message = this.getExpirationPeriod() ? <p>Expires in: {this.getSelect()} months.</p> : <p>{this.getSelect()} expires.</p>;
    return <div id='expiration-period' className='clearfix'>
      {message}
      <p className='last-updated'><em><small>Last Updated: {this.props.spec['last-updated']}</small></em></p>
      <OverlayTrigger placement='bottom' overlay={this.getTooltip()}>
        <button disabled={this.props.disabled} className='pull-right btn' onClick={this.clickFunc}>Update</button>
      </OverlayTrigger>
    </div>;
  },
});

module.exports = ExpirationPeriod;
