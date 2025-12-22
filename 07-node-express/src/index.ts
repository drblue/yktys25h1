import express from "express";
import routes from "./routes/index.ts";

// Constants
const PORT = 3000;

// Create a new Express app (instance)
const app = express();

// Register middlewares
app.use(express.json());

// Use root router
app.use(routes);

// Respond to ALL other requests (catch-all)
app.use((req, res) => {
	res.status(404).send({ message: `Cannot ${req.method} ${req.path}` });
});

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`🤩 Server listening for requests on http://localhost:${PORT}`);
});
