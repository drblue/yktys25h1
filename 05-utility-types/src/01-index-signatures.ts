interface Todo {
	id: number;
	title: string;
	completed: boolean;
	deadline?: number;
	[key: string]: any;  // index signature
}

const fakeTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	project_manager: "bob",  // allowed even though the key isn't declared in the Todo type
	importance: "high",
	project_manager_skills: "low"
}

const secondFakeTodo: Todo = {
	id: 1338,
	title: "My second fake todo",
	completed: true,
	client_id: 42,
}
