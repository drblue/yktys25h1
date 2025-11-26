import { getTodos } from "./services/TodosAPI";
import type { Todo } from "./services/TodosAPI.types";
import "./assets/scss/app.scss";

/**
 * DOM references
 */

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

// Local copy containing all todos from the server
let todos: Todo[] = [];

// Get todos from API and render them
const getTodosAndRender = async () => {
	// Get todos from server and update local copy
	todos = await getTodos();

	// Render dem todos
	renderTodos();
}

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

	// Save todos 🏊‍♀️🛟
	// saveTodos();

	// Re-render todos
	getTodosAndRender();

	// Clear input field
	newTodoTitleEl.value = "";

	console.log("Great success!", todos);
});

// Get the todos from the API and *then* render initial list of todos
getTodosAndRender();
