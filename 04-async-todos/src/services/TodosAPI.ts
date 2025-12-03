/**
 * All communication with the backend REST-API (`json-server`)
 */

import axios from "axios";
import type { CreateTodoPayload, Todo, UpdateTodoPayload } from "./TodosAPI.types";

const BASE_URL = import.meta.env.VITE_API_BASEURL;

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
 * Get todos from API using axios 🤘🏻
 */
export const getTodos = async () => {
	const response = await axios.get<Todo[]>(BASE_URL + "/todos");
	return response.data;
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

/**
 * Create a todo in the API using axios 😎
 *
 * @param payload
 */
export const createTodo = async (payload: CreateTodoPayload) => {
	const response = await axios.post<Todo>(BASE_URL + "/todos", payload);
	return response.data;
}

/**
 * Update a todo in the API
 *
 * @param id
 * @param payload
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
	const response = await axios.patch<Todo>(BASE_URL + "/todos/" + id, payload);
	return response.data;
}

/**
 * Delete a todo from the API
 *
 * @param id
 */
export const deleteTodo = async (id: number) => {
	await axios.delete(BASE_URL + "/todos/" + id);
	return true;
}
