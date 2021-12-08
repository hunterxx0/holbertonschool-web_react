import $ from "jquery";
const _ = require('lodash');
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let x = 0;

function updateCounter() {
	x++;
	$("#count").text(`${x} clicks on the button`);
	
}

$(button).on('click', _.debounce(updateCounter, 1000));