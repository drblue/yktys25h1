// document.querySelector("h1")?.remove();

const headingEl = document.querySelector("h4");
//      ^?
console.log("headingEl:", headingEl);
console.log("Heading content:", headingEl?.innerText);

// I promise that this element exists 🤞🏻
const paragraphEl = document.querySelector("p")!;
//      ^?
console.log("paragraphEl:", paragraphEl);
// console.log("Paragraph content:", paragraphEl.innerText);

// 🤩
const subHeadingEl = document.querySelector("h2");
//       ^?
if (!subHeadingEl) {
	throw new Error("I can't do stuff without my h2! 😢");
}
console.log("subHeadingEl", subHeadingEl);

// 😊
const todosEl = document.querySelector("#todos") as HTMLUListElement;
//     ^?
console.log("todosEl", todosEl);
console.log("Todos content:", todosEl.innerText);

// 😁
const todos2El = document.querySelector<HTMLUListElement>("#todos");
//     ^?
