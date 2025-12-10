type HttpVerbs = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

// Like `Pick` but for Type Unions
type CreatingHttpVerbs = Extract<HttpVerbs, "POST" | "PUT">;  // "POST" | "PUT"

// Like `Omit` but for Type Unions
type NonDestructiveHttpVerbs = Exclude<HttpVerbs, "PUT" | "DELETE">;  // "GET" | "POST" | "PATCH"

const method1: HttpVerbs = "DELETE";
// const method2: NonDestructiveHttpVerbs = "DELETE";  // not allowed
