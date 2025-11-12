/*
let myString = "Hello, Vite!";
//      ^?

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;
myBoolean = false;
myBoolean = null;
*/

// let myName: any = "Johan";
//   ^?

/*
let myName;
//     ^?
myName = "Johan";
myName = 1337;
myName = null;
myName = [];
*/

const greet = (name: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${name}!`);
		return;
	}

	console.log(`Hello, ${name}! You are ${age.toFixed()} years old.`);
}

greet("Johan", 43);
greet("Script-kiddo", 13.37);
greet("Pelle");
// greet("Smurf", "1337");  // nope, only numbers as second argument or don't pass any value at all!

const pets = ["cat", "dog", "hamster"];
// pets.push(42);  // nope, only accepts numbers!
pets.forEach(pet => {
	console.log(pet.toUpperCase());
});
