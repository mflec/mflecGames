import axios from "axios";
import { SET_VIDEOGAMES } from "./index";

export default function getVideogames(page) {
    return (dispatch) => {
        let localhost
        if (page) localhost = `http://localhost:3005/videogames/${page}`
        if (!page) localhost = `http://localhost:3005/videogames`
        axios.get(localhost)
            .then((response) => {
                dispatch({ type: SET_VIDEOGAMES, payload: response.data });
            })
            .catch(error => {
                if (error.response.status === 404) {
                    return dispatch({ type: SET_VIDEOGAMES, payload: undefined })
                }
                alert("Ups!!! 😥")
            });
    }
}