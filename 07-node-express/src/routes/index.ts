/**
 * Root Router
 */
import express from "express";

// Create a new Express Router
const router = express.Router();

// Respond to `GET /` requests
router.get("/", (_req, res) => {
	console.log("Someone requested my (g)root 🎄");
	// console.log("Method:", req.method);
	// console.log("Path:", req.path);
	// console.log("Client IP:", req.ip);
	res.json({ message: "I AM (G)ROOT 🎄!" });
});

// Respond to `GET /luke` requests
router.get("/luke", (_req, res) => {
	res.send({ message: "I AM YOUR FATHER" });
});

// Respond to `POST /todos` requests
router.post("/todos", (req, res) => {
	console.log("request body", req.body);

	res.send({ message: "Would have created todo if I knew how to" });
});

export default router;
