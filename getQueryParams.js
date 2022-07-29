import { useLocation } from "react-router-dom";

// get the query String from the url
// e.g In React
const { search } = useLocation();
let queryParams = convertQueryParamsStringToQueryParamsObject(search);
console.log("queryParams", queryParams);

const convertQueryParamsStringToQueryParamsObject = (string) => {
	let queryParams = {};
	// remove first letter from query string
	string = string.substring(1);
	// console.log("string", string);
	// convert string to array
	const queryParamsArray = string.split("&");
	// console.log("queryParamsArray", queryParamsArray);

	// covert each index query to object
	queryParamsArray.forEach((queryParam) => {
		// console.log("queryParam", queryParam);
		// split param by =
		const queryParamArray = queryParam.split("=");
		// console.log("queryParamArray", queryParamArray);
		queryParams[queryParamArray[0]] = queryParamArray[1];
		// console.log("queryParams", queryParams);
	});
	return queryParams;
};
