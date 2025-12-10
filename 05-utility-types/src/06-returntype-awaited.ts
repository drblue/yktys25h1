const say = (msg: string) => {
	console.log("You said:", msg);
	return msg;
	// return true;
}

// type SayType = typeof say;
// type SayReturnType = ReturnType<SayType>;
type SayReturnType = ReturnType<typeof say>;
//      ^?

const sayAsync = async (msg: string) => {
	console.log("You said:", msg);
	return msg;
	// return true;
}

type SayAsyncReturnType = ReturnType<typeof sayAsync>;
//      ^?

type SayAsyncResolvedReturnType = Awaited<SayAsyncReturnType>;
//      ^?
