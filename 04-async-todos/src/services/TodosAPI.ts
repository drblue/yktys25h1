/**
 * All communication with the backend REST-API (`json-server`)
 */

import type { Todo } from "./TodosAPI.types";

const BASE_URL = import.meta.env.VITE_API_BASEURL;

/**
 * Get todos from API using fetch
 */
export const getTodosFetch = async () => {
	const res = await fetch(BASE_URL + "/todos");
 //     ^?

	if (!res.ok) {
		throw new Error("Response was not OK!");
	}

	const data = await res.json() as Todo[];
//         ^?

	return data;
}
