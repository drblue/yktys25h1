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

/**
 * Interface
 */

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

/**
 * Type Aliases
 */

type Point = {
	x: number;
	y: number;
}

const printPoint = ( { x, y }: Point ) => {
	console.log(`x = ${x}, y = ${y}`);
}
printPoint({ x: 42, y: 1337 });

// Type Aliases can be assigned primitive types
type Tal = number;
let x: Tal = 42;
let y: number = 1337;

const sumNum = (a: number, b: number) => a + b;
sumNum(x, y);

// Type Aliases can also be a union between two (or more) types
type StringOrNumber = string | number;
let s: StringOrNumber = 42;
s = "forty-two";

const makeMoreInteresting = (msg: StringOrNumber) => {
	return (typeof msg === "string")
		? msg.toUpperCase() + "!!!!111"
		: String(msg) + "!!!!111";
}
console.log(makeMoreInteresting("lolcats are funny"));
console.log(makeMoreInteresting(1337));
// console.log(makeMoreInteresting(["loldogs"]));

// Inheritance 💰
interface Animal {
	name: string;
}

interface Dog extends Animal {
	legs: number;
}

interface Dog extends Animal {
	wagsTrail: boolean;
}

const doge: Dog = {
	name: "Doge",
	legs: 4,
	wagsTrail: true,
}

type AnimalType = {
	name: string;
}

type DogType = AnimalType & {
	legs: number;
}

// nope! duplicate identifier
// type DogType = AnimalType & {
// 	wagsTail: boolean;
// }

type Todo = {
	title: string;
	completed: boolean;
}

type TodoList = Todo[];

const todos: TodoList = [];

/**
 * Literal Types
 */

const username = "drblue";
//      ^?

type AllowedGitHubUsernames = "drblue" | "voxpelli";

const fetchGitHubProfile = (username: AllowedGitHubUsernames) => {
	if (username !== "drblue" && username !== "voxpelli") {
		throw new Error("Invalid username");
	}

	// 🐶🦴
	console.log("Would fetch GitHub profile for user:", username);

	return null;
}

// fetchGitHubProfile("drblue");
// fetchGitHubProfile("voxpelli")
// fetchGitHubProfile("medieinstitutet");  // Argument of type '"medieinstitutet"' is not assignable to parameter of type 'AllowedGitHubUsernames'.

const validHttpVerbs = ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"];
type HttpVerbs = "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "OPTIONS" | "HEAD";

const makeHttpRequest = (method: HttpVerbs, endpoint: string) => {
	if (!validHttpVerbs.includes(method)) {
		throw new Error(`${method} is not a valid HTTP method`);
	}

	// 🐶🦴
	console.log(`Would ${method} from ${endpoint}`);
}

makeHttpRequest("GET", "http://localhost:3000/todos");
// makeHttpRequest("PSOT", "http://localhost:3000/todos");  // Argument of type '"PSOT"' is not assignable to parameter of type 'HttpVerbs'
makeHttpRequest("PATCH", "lolcats.gif");
