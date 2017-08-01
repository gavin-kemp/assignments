var employees = [];

function Employees (name, jobTitle, salary, status) {
	this.name = name;
	this.jobTitle = jobTitle;
	this.salary = salary;
	this.status = "Full Time";
	this.printEmployeeForm = function(){
		return ("Name: " + this.name + " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + this.status);				
	}
}


var red = new Employees("Red Foreman", "Salesman", "$50000");
var nick = new Employees("Nick Foreman", "Instructor", "$50000");
var kevin = new Employees("Kevin Foreman", "CEO", "$1000000");

nick.status = "Part Time";

employees.push(red, nick, kevin);

console.log(red.printEmployeeForm());
console.log(nick.printEmployeeForm());
console.log(kevin.printEmployeeForm());