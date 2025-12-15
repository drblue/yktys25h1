import Alert from "react-bootstrap/Alert";

interface SuccessAlertProps {
	children: React.ReactNode;
	heading?: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ children, heading }) => {
	return (
		<Alert variant="success" dismissible>
			{heading && <Alert.Heading>{heading}</Alert.Heading>}
			{children}
		</Alert>
	)
}

export default SuccessAlert;
