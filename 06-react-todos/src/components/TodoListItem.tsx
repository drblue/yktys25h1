import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodosAPI.types";

interface TodoListItemProps {
	onDelete: (todoId: number) => Promise<void>;
	onEdit: (todoId: number, newTitle: string) => Promise<void>;
	onToggle: (todo: Todo) => Promise<void>;
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ onDelete, onEdit, onToggle, todo }) => {
	const handleDelete = () => {
		// Ask user to confirm
		if (!confirm("U SURE BRO?!")) {
			return;
		}

		// Tell parent to delete the todo
		onDelete(todo.id);
	}

	const handleEdit = () => {
		const newTitle = prompt("Enter the new title", todo.title);

		// If the user provided an empty title, bail
		if (!newTitle) {
			alert("Y U NO TITLE GIFES?!");
			return;
		}

		// Tell parent to update the todo
		onEdit(todo.id, newTitle);
	}

	const handleToggle = () => {
		// Tell parent to toggle the todo
		onToggle(todo);
	}

	return (
		<ListGroup.Item
			className={todo.completed ? "todo done" : "todo"}
		>
			<span className="todo-title">{todo.title}</span>
			<div className="todo-actions">
				<Button onClick={handleToggle} variant="secondary">Toggle</Button>
				<Button onClick={handleEdit} variant="warning">Edit</Button>
				<Button onClick={handleDelete} variant="danger">Delete</Button>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem;
