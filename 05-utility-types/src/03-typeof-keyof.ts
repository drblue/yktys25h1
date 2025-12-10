// const username = "johan";
//     ^?

let username = "johan";
//    ^?

// Generate a type from the type of `username`
type TypeOfUsername = typeof username;

const johan = {
	username: "johan",
	role: "meme-lord",
	level: 1337,
}

// Extract the type from a object
type User = typeof johan;

type Car = {
	manufacturer: string;
	model: string;
	year: number;
	fuel: string;
}

// Extract the keys of a type as a union
type CarKeys = keyof Car;  // CarKeys will be of type `"manufacturer" | "model" | "year" | "fuel"`

// Extract the keys from a object
// type UserKeys = keyof User;
type UserKeys = keyof typeof johan; // =>
