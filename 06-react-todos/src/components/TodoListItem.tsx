import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodosAPI.types";

interface TodoListItemProps {
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
	return (
		<ListGroup.Item
			className={""}
		>
			{todo.title}
		</ListGroup.Item>
	)
}

export default TodoListItem;
