var _ = require('lodash');

class SentenceParser{
	constructor(format, sentence){
		this.format = format;
		this.sentence = sentence;

		this.current = this.format;
	}
	
	parse(){
		this.parseNext(0);
	}

	addText(text){
		this.sentence.addText(text);
	}

	addCell(started){
		var ended = this.current.indexOf('}');
		if (ended < 0){
			throw 'Mismatched brackets in format "' + this.format + "'";
		}

		var key = this.current.substring(started + 1, ended);


		this.sentence.addCell(key);

		if (ended <= this.current.length - 1){
			this.parseNext(ended + 1);
		}
	}	

	parseNext(from){
		this.current = this.current.substring(from);
		if (this.current.length == 0) return;

		var started = this.current.indexOf('{');
		if (started > -1){
			if (started == 0){
				this.addCell(started);
			}
			else{
				this.addText(this.current.substring(0, started));

				this.addCell(started);
			}
		}
		else{
			this.addText(this.current);
		}
	}

}





module.exports = SentenceParser;