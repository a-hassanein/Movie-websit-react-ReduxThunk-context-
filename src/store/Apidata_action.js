import {allMovies } from "../network/network-Index";

export const getMovieData = () => (dispatch) => {
    let pageNumber=1;
	return  allMovies
    .get(`${pageNumber}`)
	.then((res)=> dispatch({
		type: "GET_DATA",
		payload: res.data.results
	})
	)

	.catch((err) => console.log(err))
}