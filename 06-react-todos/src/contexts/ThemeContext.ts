import { createContext } from "react";

// Type Definition for the actual Context
interface ThemeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

// Create the actual context (and set the context's initial/default values)
export const ThemeContext = createContext<ThemeContextType | null>(null);
