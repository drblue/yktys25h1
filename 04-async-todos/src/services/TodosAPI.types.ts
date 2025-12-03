/**
 * Type-definitions for the TodosAPI service
 */

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

/*
// 🥴
export interface CreateTodoPayload {
	title: string;
	completed: boolean;
}
*/

// 😎
export type CreateTodoPayload = Omit<Todo, "id">;

/*
// 🫠
export interface UpdateTodoPayload {
	title?: string;
	completed?: boolean;
}
*/

// 🤩
export type UpdateTodoPayload = Partial<CreateTodoPayload>;
