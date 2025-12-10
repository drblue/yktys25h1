interface Todo {
	id: number;
	title: string;
	completed: boolean;
	deadline?: number;
}

// 🫴🏻
export type TodoIdTitle = Pick<Todo, "id" | "title">;  // id, title

// ✋🏻
export type TodoExceptId = Omit<Todo, "id">;   // title, completed, deadline

// 🏗️
export type OptionalTodo = Partial<Todo>;

// 🚔
export type RequiredTodo = Required<Todo>;
