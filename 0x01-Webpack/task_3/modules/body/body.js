import $ from "jquery";
import _ from "lodash";
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let x = 0;

function updateCounter() {
	x++;
	$("#count").text(`${x} clicks on the button`);
	
}

$(button).on('click', _.debounce(updateCounter, 1000));
