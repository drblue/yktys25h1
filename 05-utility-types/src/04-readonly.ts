interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface BetterTodo {
	readonly id: number;
	title: string;
	completed: boolean;
}

const todo1: BetterTodo = {
	id: 42,
	title: "My first todo",
	completed: false,
}

// todo1.id = 1337;  // Cannot assign to 'id' because it is a read-only property.
todo1.title = "My VERY first todo";
