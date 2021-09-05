import axios from "axios";
import { SET_VIDEOGAMES } from "./index";

export default function getVideogames(page) {
    return (dispatch) => {
        let localhost
        if (page) localhost = `/videogames/${page}`
        if (!page) localhost = `/videogames`
        axios.get(localhost)
            .then((response) => {
                dispatch({ type: SET_VIDEOGAMES, payload: response.data });
            })
            .catch(error => {
                alert("Ups!!! 😥")
            });
    }
}