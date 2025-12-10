/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodosAPI.types";

const BASE_URL = import.meta.env.VITE_API_BASEURL;

// Create a new axios instance
const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Accept": "application/json",
	},
	timeout: 10000,  // 10 seconds
});


/**
 * Make a generic HTTP GET request
 *
 */
export const get = async <T = any>(endpoint: string) => {
	const response = await instance.get<T>(endpoint);
	return response.data;
}

/**
 * Get todos from API using axios 🤘🏻
 */
export const getTodos = async () => {
	return get<Todo[]>("/todos");  // "http://localhost:3000/todos"
}

/**
 * Get a single todo from the API
 *
 * @param id
 */
export const getTodo = async (id: number) => {
	return get<Todo>("/todos/" + id);  // "http://localhost:3000/todos/42"
}

/**
 * Create a todo in the API using axios 😎
 *
 * @param payload
 */
export const createTodo = async (payload: CreateTodoPayload) => {
	const response = await instance.post<Todo>("/todos", payload);
	return response.data;
}

/**
 * Update a todo in the API
 *
 * @param id
 * @param payload
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
	const response = await instance.patch<Todo>("/todos/" + id, payload);
	return response.data;
}

/**
 * Delete a todo from the API
 *
 * @param id
 */
export const deleteTodo = async (id: number) => {
	await instance.delete("/todos/" + id);
	return true;
}


/**
 * *********************************************
 * HERE BE DRAGONS 🐉
 * *********************************************
 */

/**
 * Get todos from API using fetch
 */
export const getTodosFetch = async () => {
	const res = await fetch(BASE_URL + "/todos");
 //     ^?

	if (!res.ok) {
		throw new Error("Response was not OK!");
	}

	const data = await res.json() as Todo[];
//         ^?

	return data;
}

/**
 * Create a todo in the API using fetch
 *
 * @param payload
 */
export const createTodoFetch = async (payload: CreateTodoPayload) => {
	const res = await fetch(BASE_URL + "/todos", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!res.ok) {
		throw new Error("Response for creating new todo was not OK!");
	}

	const data = await res.json() as Todo;

	return data;
}
