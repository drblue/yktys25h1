import Alert from "react-bootstrap/Alert";

interface SuccessAlertProps {
	children: React.ReactNode;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ children }) => {
	return (
		<Alert variant="success" dismissible>
			{children}
		</Alert>
	)
}

export default SuccessAlert;
