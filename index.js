// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob; // date of birth
}

// Instantiate object
const person1 = new Person( 'Leoneil', 'Odrunia', '6-21-2001' );
const person2 = new Person( 'Mike', 'Ross', '12-24-1989' );

console.log(person1);
console.log(person2.dob); //getting the date of birth