/**
 * Root Controller
 */
import type { Request, Response } from "express";

interface CreateTodoPayload {
	title: string;
	completed: boolean;
}

export const getRoot = (_req: Request, res: Response) => {
	console.log("Someone requested my (g)root 🎄");
	// console.log("Method:", req.method);
	// console.log("Path:", req.path);
	// console.log("Client IP:", req.ip);
	res.json({ message: "I AM (G)ROOT 🎄!" });
}

export const getLuke = (_req: Request, res: Response) => {
	res.send({ message: "I AM YOUR FATHER" });
}

export const postTodos = (req: Request<unknown, unknown, CreateTodoPayload>, res: Response) => {
	console.log("request body", req.body);

	res.send({ message: "Would have created todo if I knew how to" });
}
