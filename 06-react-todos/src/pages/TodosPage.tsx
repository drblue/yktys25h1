import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import { PacmanLoader } from "react-spinners";
import * as TodosAPI from "../services/TodosAPI";
import type { Todo } from "../services/TodosAPI.types";
import TodoListItem from "../components/TodoListItem";
import SuccessAlert from "../components/alerts/SuccessAlert";

const TodosPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	// Fetch todos when component is mounted (being rendered for the first time)
	useEffect(() => {
		const getTodos = async () => {
			const data = await TodosAPI.getTodos();
			setIsLoading(false);
			setTodos(data);
		}
		getTodos();
	}, []);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			<SuccessAlert>Hey, it's coffee time!</SuccessAlert>
			<SuccessAlert>OMG COFFEEEEE!!!!!!!!!!!!!!</SuccessAlert>
			<SuccessAlert>
				<h1>COFFEEE!!</h1>
				<img src="https://i.pinimg.com/originals/d9/55/4d/d9554df0955b2ae10c68bc61f7d8c7b6.gif" className="img-fluid" />
			</SuccessAlert>

			{isLoading && <PacmanLoader size={30} color="#f00" speedMultiplier={1.25} />}

			{todos && (
				<ListGroup className="todolist">
					{todos.map(todo => (
						<TodoListItem
							key={todo.id}
							todo={todo}
						/>
					))}
				</ListGroup>
			)}
		</>
	)
}

export default TodosPage
