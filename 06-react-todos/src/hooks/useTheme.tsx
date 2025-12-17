import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
	const theme = useContext(ThemeContext);
	if (!theme) {
		throw new Error("Trying to access ThemeContext outside of ThemeProvider!");
	}

	return theme;
}

export default useTheme;
