import axios from "axios";
import { SET_VIDEOGAME } from "./index";

export default function getVideogame(idGame) {
    return (dispatch) => {
        axios.get(`/videogame/${idGame}`)
            .then((response) => {
                dispatch({ type: SET_VIDEOGAME, payload: response.data })
            })
            .catch(error => {
                alert("Ups!!! 😥")
            });
    };
};