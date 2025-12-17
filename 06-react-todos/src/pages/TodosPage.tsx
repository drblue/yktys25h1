import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { PacmanLoader } from "react-spinners";
import TodoListItem from "../components/TodoListItem";
import * as TodosAPI from "../services/TodosAPI";
import type { Todo } from "../services/TodosAPI.types";

const TodosPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const deleteTodo = async (todoId: number) => {
		setIsLoading(true);
		await TodosAPI.deleteTodo(todoId);

		// Re-fetch all todos
		getTodos();
	}

	const editTodo = async (todoId: number, newTitle: string) => {
		setIsLoading(true);
		await TodosAPI.updateTodo(todoId, { title: newTitle });

		// Re-fetch all todos
		getTodos();
	}

	const getTodos = async () => {
		// reset initial state
		setIsLoading(true);

		const data = await TodosAPI.getTodos();
		setIsLoading(false);
		setTodos(data);
	}

	const toggleTodo = async (todo: Todo) => {
		setIsLoading(true);
		await TodosAPI.updateTodo(todo.id, { completed: !todo.completed });

		// Re-fetch all todos
		getTodos();
	}

	// Fetch todos when component is mounted (being rendered for the first time)
	useEffect(() => {
		(async () => {
			getTodos();
		})();
	}, []);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			{/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
			{/* <AddTodoForm onAdd={createTodo} /> */}

			{isLoading &&
				<div id="loading-spinner-wrapper">
					<PacmanLoader size={30} color="#f00" speedMultiplier={1.25} />
				</div>
			}

			{todos && (
				<ListGroup className="todolist">
					{todos.map(todo => (
						<TodoListItem
							key={todo.id}
							onDelete={deleteTodo}
							onEdit={editTodo}
							onToggle={toggleTodo}
							todo={todo}
						/>
					))}
				</ListGroup>
			)}
		</>
	)
}

export default TodosPage
