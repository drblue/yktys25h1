type MixedGet = "GeT";  // 🐐
//     ^?

type UppercaseGet = Uppercase<MixedGet>;  // "GET"
type LowercaseGet = Lowercase<MixedGet>;  // "get"

type ProperlyCapitalizedGet = Capitalize<LowercaseGet>;  // "Get" 🤑🐐
//     ^?
