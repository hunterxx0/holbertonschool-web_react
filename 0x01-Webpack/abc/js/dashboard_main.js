import $ from "jquery";
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter() {
	let x = 0;
	$(button).on('click', function() {
		x++;
		$("#count").text(`${x} clicks on the button`);
	});
}

_.debounce(updateCounter, 1000);
updateCounter();