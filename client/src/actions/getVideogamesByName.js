import axios from "axios";
import { SET_VIDEOGAMES } from "./index";

export default function getVideogamesByName(name) {
    return (dispatch) => {
        axios.get(`/videogames?name=${name}`)
            .then(response => {
                dispatch({ type: SET_VIDEOGAMES, payload: response.data });
            })
            .catch(error => {
                alert("Ups!!! 😥")
            });
    };
};