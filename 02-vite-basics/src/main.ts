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

/**
 * Arrays (implicit typing)
 */
const pets = ["cat", "dog", "hamster"];
//     ^?
// pets.push(42);  // nope, only accepts numbers!
pets.forEach(pet => {
	console.log(pet.toUpperCase());
});

// const ages = [2, 4, 7, 3, 9];
// //     ^?
// ages.forEach(age => {
// 	console.log(age.toUpperCase());  // Error: Property 'toUpperCase' does not exist on type 'number'.
// });

/**
 * Arrays (explicit typing)
 */
const names: string[] = [];
names.push("Alice");
// names.push(42);
// names.push(true);
console.log("names:", names);

const ages: number[] = [];
ages.push(13.37);
ages.push(42);
// ages.push("tretton37");

/**
 * Custom Types
 */

// const printCoords = ( pos: { lat: number, lng: number } ) => {
// 	console.log(`x = ${pos.lat}, y = ${pos.lng}`);
// }
// printCoords({ lat: 55.7, lng: 13.23 });

interface Position {
	lat: number;
	lng: number;
	height?: number;
}

const printCoords = ( pos: Position ) => {
	if (typeof pos.height === "undefined") {
		console.log(`lat = ${pos.lat}, lng = ${pos.lng}`);
		return;
	}

	console.log(`lat = ${pos.lat}, lng = ${pos.lng}, height = ${pos.height.toFixed()}`);
 //                                                                ^?
}


const myHome: Position = { lat: 55.7, lng: 13.23, height: 73.15 }
const myWork = { lat: 55.6070133, lng: 13.0108056 }
const myFriendsHome = { lat: 0, long: 0 }

printCoords(myHome);
printCoords(myWork);
// printCoords(myFriendsHome);
