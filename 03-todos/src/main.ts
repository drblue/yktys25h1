import "./assets/scss/app.scss";

/**
 * DOM references
 */

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

/**
 * Initial state
 */
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

let todos: Todo[] = [
	{ id: 1, title: "🤓 Learn about TypeScript", completed: true },
	{ id: 2, title: "😇 Take over the world", completed: false },
	{ id: 3, title: "💰 Profit", completed: false },
	{ id: 4, title: "😈 Be nice", completed: true },
];

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => {
			return `<li class="list-group-item d-flex justify-content-between align-items-center">
				<span class="todo-item">
					<input type="checkbox" class="me-2" ${todo.completed ? "checked" : ""} />
					<span class="todo-title">${todo.title}</span>
				</span>
				<span class="todo-actions">
					<button class="btn btn-warning">Edit</button>
					<button class="btn btn-danger">Delete</button>
				</span>
			</li>`;
		})
		.join("");
}

/**
 * List for new todo form being submitted
 */
newTodoFormEl.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTodoTitle = newTodoTitleEl.value.trim();

	// 🚔
	if (newTodoTitle.length < 3) {
		alert("That's too short todo to do, better do it right now!");
		return;
	}

	// Find the highest ID among all todos
	/*
	let maxId = 0;
	todos.forEach(todo => {
		if (todo.id > maxId) {
			maxId = todo.id;
		}
	});
	*/
	/*
	const maxId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId) {
			return todo.id;
		}
		return maxId;
	}, 0);
	*/
	const maxId = Math.max(0, ...todos.map(todo => todo.id) );

	// PUSH! 🫸🏻
	todos.push({
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	});

	// Re-render todos
	renderTodos();

	console.log("Great success!", todos);
});

// Render initial list of todos
renderTodos();
