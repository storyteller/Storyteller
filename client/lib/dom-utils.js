var $ = require('jquery');

function offsetTop(domNode)
{
	return $(domNode).offset().top;
}

function scrollTop(domNode)
{
	return $(domNode).scrollTop();
}

function width(domNode)
{
	return $(domNode).width();
}

export default {
	offsetTop,
	scrollTop,
	width
};