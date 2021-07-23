import axios from "axios";
import { SET_VIDEOGAME } from "./index";

export default function getVideogame(idGame) {
    return (dispatch) => {
        axios.get(`http://localhost:3005/videogame/${idGame}`)
            .then((response) => {
                dispatch({ type: SET_VIDEOGAME, payload: response.data })
            })
            .catch(error => {
                if (error.response.status === 404) { //un cambio
                    return dispatch({ type: SET_VIDEOGAME, payload: undefined })
                }
                alert("Ups!!! 😥")
            });
    };
};