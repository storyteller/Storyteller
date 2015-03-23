var ProgressPlugin = require('webpack/lib/ProgressPlugin')

//lets you see what is going on with webpack as it builds
module.exports = function getProgressPlugin() {
  var chars = 0;
  return new ProgressPlugin(function(percentage, msg) {
    var out = '';
    if(percentage < 1) {
      percentage = Math.floor(percentage * 100);
      msg = percentage + "% " + msg;
      if(percentage < 100) {
        msg = " " + msg;
      }
      if(percentage < 10) {
        msg = " " + msg;
      }
    }

    for(; chars > msg.length; chars--) {
      out += "\b \b";
    }

    chars = msg.length;

    for(var i = 0; i < chars; i++) {
      out += "\b";
    }

    process.stderr.write(out + msg);
  });
};
