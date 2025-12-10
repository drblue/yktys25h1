import type { Todo } from "./services/TodosAPI.types";

/**
 * Generic type that accepts a type argument for typing `data`
 */
export type Response<T> = {
	status: "success" | "fail" | "error";
	data: T;
	message?: string;
}

// Generates a new type where `data` is typed as `Todo[]`
export type TodosResponse = Response<Todo[]>;

// Generates a new type where `data` is typed as `Todo`
export type TodoResponse = Response<Todo>;

// const response1: TodosResponse = {
// 	status: "success",
// 	data: []
// }

// if (response1.status === "success") {
// 	// do something
// }
