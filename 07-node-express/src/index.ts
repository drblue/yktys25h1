import express from "express";

// Constants
const PORT = 3000;

// Create a new Express app (instance)
const app = express();

// Register middlewares
app.use(express.json());

// Respond to `GET /` requests
app.get("/", (_req, res) => {
	console.log("Someone requested my (g)root 🎄");
	// console.log("Method:", req.method);
	// console.log("Path:", req.path);
	// console.log("Client IP:", req.ip);
	res.json({ message: "I AM (G)ROOT 🎄!" });
});

// Respond to `GET /luke` requests
app.get("/luke", (_req, res) => {
	res.send({ message: "I AM YOUR FATHER" });
});

// Respond to `POST /todos` requests
app.post("/todos", (req, res) => {
	console.log("request body", req.body);

	res.send({ message: "Would have created todo if I knew how to" });
});

// Respond to ALL other requests (catch-all)
app.use((req, res) => {
	res.status(404).send({ message: `Cannot ${req.method} ${req.path}` });
});

// Listen for incoming requests
app.listen(PORT, () => {
	console.log(`🤩 Server listening for requests on http://localhost:${PORT}`);
});
