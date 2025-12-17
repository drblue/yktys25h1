import ListGroup from "react-bootstrap/ListGroup";
import { PacmanLoader } from "react-spinners";
import AddTodoForm from "../components/AddTodoForm";
import TodoListItem from "../components/TodoListItem";
import * as TodosAPI from "../services/TodosAPI";
import type { CreateTodoPayload, Todo } from "../services/TodosAPI.types";
import { useQuery } from "@tanstack/react-query";

const TodosPage = () => {
	const { data: todos, isLoading } = useQuery({
		queryKey: ["todos"],
		queryFn: () => TodosAPI.getTodos(),
		staleTime: 30 * 1000,  // 30 sec
		gcTime: 60 * 1000,  // 1 min
	});

	const createTodo = async (newTodo: CreateTodoPayload) => {
		await TodosAPI.createTodo(newTodo);

		// Re-fetch all todos
		// getTodos();
	}

	const deleteTodo = async (todoId: number) => {
		await TodosAPI.deleteTodo(todoId);

		// Re-fetch all todos
		// getTodos();
	}

	const editTodo = async (todoId: number, newTitle: string) => {
		await TodosAPI.updateTodo(todoId, { title: newTitle });

		// Re-fetch all todos
		// getTodos();
	}

	const toggleTodo = async (todo: Todo) => {
		await TodosAPI.updateTodo(todo.id, { completed: !todo.completed });

		// Re-fetch all todos
		// getTodos();
	}

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			{/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
			<AddTodoForm onAdd={createTodo} />

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
