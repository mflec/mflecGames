import axios from "axios";
import { SET_VIDEOGAMES } from "./index";

export default function getVideogamesByName(name) {
    return (dispatch) => {
        axios.get(`http://localhost:3005/videogames?name=${name}`)
            .then(response => {
                dispatch({ type: SET_VIDEOGAMES, payload: response.data });
            })
            .catch(error => {
                if (error.response.status === 404) {
                    return dispatch({ type: SET_VIDEOGAMES, payload: undefined })
                }
                alert("Ups!!! 😥")
            });
    };
};