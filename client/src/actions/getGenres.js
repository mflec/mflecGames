import axios from "axios";
import { SET_GENRES} from "./index";

export default function getGenres() {
    return (dispatch) => {
        axios.get(`http://localhost:3005/genres`)
            .then((response) => {
                dispatch({ type: SET_GENRES, payload: response.data })
            })
            .catch(error => {
                if (error.response.status === 404) { //un cambio
                    return dispatch({ type: SET_GENRES, payload: undefined })
                }
                alert("Ups!!! 😥")
            });
    };
};