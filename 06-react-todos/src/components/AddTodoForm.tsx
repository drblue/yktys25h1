import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import type { CreateTodoPayload } from "../services/TodosAPI.types";

interface AddTodoFormProps {
	onAdd: (newTodo: CreateTodoPayload) => Promise<void>
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		// Stop form from submitting
		e.preventDefault();

		if (title.trim().length < 2) {
			alert("That's too short to be a todo!");
			return;
		}

		// Create payload
		const newTodo: CreateTodoPayload = {
			title,
			completed: false,
		}

		// Pass the new todo to the parent
		await onAdd(newTodo);

		// Clear input field
		setTitle("");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Enter the title of the new todo"
					onChange={e => setTitle(e.target.value)}
					placeholder="Buy milk"
					required
					value={title}
				/>

				<Button
					type="submit"
					variant="success"
				>
					Create
				</Button>
			</InputGroup>
		</Form>
	)
}

export default AddTodoForm;
