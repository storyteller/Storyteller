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

function height(domNode)
{
	return $(domNode).height();
}

function screenHeight()
{
	return $(window).height();
}

export default {
	offsetTop,
	scrollTop,
	width,
	height,
	screenHeight
};