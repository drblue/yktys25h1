import { createTodo, deleteTodo, getTodos, updateTodo } from "./services/TodosAPI";
import type { Todo } from "./services/TodosAPI.types";
import "./assets/scss/app.scss";
import { AxiosError } from "axios";

/**
 * DOM references
 */

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

// Local copy containing all todos from the server
let todos: Todo[] = [];

// Error handler
const handleError = (err: unknown) => {
	if (err instanceof AxiosError) {
		alert("Network error, response code was: " + err.status);
		console.log("Network Error thrown:", err);

	} else if (err instanceof Error) {
		alert("Something went wrong: " + err.message);
		console.log(err);

	} else {
		alert("Something unexpected happend. Please try not to break stuff.");
		console.log("Someone caused an error that isn't an error but is still an error (somehow?)", err);
	}
}

// Get todos from API and render them
const getTodosAndRender = async () => {
	try {
		// Get todos from server and update local copy
		todos = await getTodos();

		// Render dem todos
		renderTodos();

	} catch (err) {
		handleError(err);
	}
}

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo => {
			return `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo-id="${todo.id}">
				<span class="todo-item">
					<input type="checkbox" class="me-2" ${todo.completed ? "checked" : ""} />
					<span class="todo-title">${todo.title}</span>
				</span>
				<span class="todo-actions">
					<button class="btn btn-warning" data-action="edit">Edit</button>
					<button class="btn btn-danger" data-action="delete">Delete</button>
				</span>
			</li>`;
		})
		.join("");
}

/**
 * Listen for clicks in the todos list
 */
todosEl.addEventListener("click", async (e) => {
	// console.log("You clicked on:", e.target);

	// Get event target and type it as HTMLElement
	const target = e.target as HTMLElement;

	if (target.tagName === "INPUT") {
		// Toggle that todo
		console.log("They see me toggling...", e.target);

		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);
		console.log("Would toggle todo id:", clickedTodoId);

		/*
		let todo: Todo;
		todos.forEach(t => {
			if (t.id === clickedTodoId) {
				todo = t;
			}
		});
		*/
		const clickedTodo = todos.find((todo) => todo.id === clickedTodoId);
		if (!clickedTodo) {
			return;
		}
		console.log("Found todo-object with that id:", clickedTodo)

		try {
			// Toggle todo
			await updateTodo(clickedTodoId, { completed: !clickedTodo.completed });

			// Get todos from API
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "delete") {
		// Delete that todo
		console.log("Someone wants to delete a todo", e.target);

		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);
		console.log("Would delete todo id:", clickedTodoId);

		try {
			// Delete todo
			await deleteTodo(clickedTodoId);

			// Get todos from API
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "edit") {
		console.log("Edit all the things!");

		// Find todo id
		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);

		// Find todo based on the id
		const clickedTodo = todos.find((todo) => todo.id === clickedTodoId);
		if (!clickedTodo) {
			return;
		}

		// Ask user what the new title should be
		const title = prompt("What's the new title?", clickedTodo.title);
		if (!title) {
			// The user got cold feet 🦶🧊
			return;
		}

		try {
			// Update todo title in the API
			await updateTodo(clickedTodoId, { title });

			// Get todos from API
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}
	}
});



/**
 * List for new todo form being submitted
 */
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitle = newTodoTitleEl.value.trim();

	// 🚔
	if (newTodoTitle.length < 3) {
		alert("That's too short todo to do, better do it right now!");
		return;
	}

	try {
		// Create the todo in the API (and wait for the request to be completed)
		await createTodo({
			title: newTodoTitle,
			completed: false,
		});

		// Re-render todos
		getTodosAndRender();

		// Clear input field
		newTodoTitleEl.value = "";
		console.log("Great success!", todos);

	} catch (err) {
		handleError(err);
	}
});

// Get the todos from the API and *then* render initial list of todos
getTodosAndRender();
