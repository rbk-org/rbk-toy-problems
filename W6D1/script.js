function important() {
	$('*').removeAttr('class')
	$('body').addClass('back-red')
	$('p').addClass('white-text')
	$('h1').addClass('dark-red-head')
}
function normal() {
	$('*').removeAttr('class')
	$('body').addClass('back-lightblue')
	$('p').addClass('white-text')
	$('h1').addClass('dark-blue-head')
}
function reset() {
	$('*').removeAttr('class')
}