var _ = require('lodash');

function OutlineNode(holder){
	this.id = holder.id;
	this.title = holder.title;
	this.active = holder.active;

	this.children = [];

	holder.steps.forEach(step => {
		if (step.isHolder()){
			this.children.push(new OutlineNode(step));
		}
		else{
			if (step.collections){
				// TODO -- maybe we don't care, but this could get messed up with Paragraphs

				_.values(step.collections).forEach(section => {
					this.children.push(new OutlineNode(section));
				});
			}
		}
	});

}

module.exports = OutlineNode;

