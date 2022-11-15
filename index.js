// Class
class Person {
	constructor(firstName, lastName, dob) {
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.dob = new Date(dob); // date of birth
	}
	
	getBirthYear() {
    	return this.dob.getFullYear();
	}
	
	getFullName() {
    	return `${this.firstName} ${this.lastName}`;
	}
} // syntactic sugar (same program that constructor function does)

// Instantiate object
const person1 = new Person( 'Leoneil', 'Odrunia', '6-21-2001' );
const person2 = new Person( 'Mike', 'Ross', '12-24-1989' );

console.log(person2.getBirthYear());
console.log(person1.getFullName());
console.log(person2);
