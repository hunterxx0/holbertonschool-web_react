interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const us1: Student = {
	firstName: "Alex",
	lastName: "Murfy",
	age: 25,
	location: "LA",
};
const us2: Student = {
	firstName: "Emma",
	lastName: "Smith",
	age: 20,
	location: "DC",
};
const studentsList: Array<Student> = [us1, us2];
const tablerow: Array<string> = ['firstName', 'location'];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

table.appendChild(thead);
table.appendChild(tbody);

for (let x: number = 0; x < tablerow.length; x++) {
	const th: HTMLTableCellElement = document.createElement('th');
	th.appendChild(document.createTextNode(`${tablerow[x]}`));
	thead.appendChild(th);
}

for (let x :number = 0; x < studentsList.length; x++) {
	const tr: HTMLTableRowElement = document.createElement('tr');
	tbody.appendChild(tr);
	const student: Array<string> = [studentsList[x].firstName, studentsList[x].location]

	for (let y :number = 0; y < student.length; y++) {
		const td: HTMLTableCellElement = document.createElement('td');
		td.appendChild(document.createTextNode(`${student[y]}`));
		tr.appendChild(td);
	}
}

document.body.appendChild(table);
