import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodosAPI.types";

interface TodoListItemProps {
	onToggle: (todo: Todo) => Promise<void>;
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ onToggle, todo }) => {
	const handleToggle = () => {
		console.log("Would really want to toggle this todo:", todo);
		onToggle(todo);
	}

	return (
		<ListGroup.Item
			className={todo.completed ? "todo done" : "todo"}
		>
			<span className="todo-title">{todo.title}</span>
			<div className="todo-actions">
				<Button onClick={handleToggle} variant="secondary">Toggle</Button>
				<Button variant="warning">Edit</Button>
				<Button variant="danger">Delete</Button>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem;
