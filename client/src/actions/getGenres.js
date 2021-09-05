import axios from "axios";
import { SET_GENRES} from "./index";

export default function getGenres() {
    return (dispatch) => {
        axios.get(`/genres`)
            .then((response) => {
                dispatch({ type: SET_GENRES, payload: response.data })
            })
            .catch(error => {
                alert("Ups!!! 😥")
            });
    };
};