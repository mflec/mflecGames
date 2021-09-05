import axios from "axios";
import { SET_VIDEOGAME } from "./index";
import Swal from "sweetalert2";

export default function getVideogame(idGame) {
    return (dispatch) => {
        axios.get(`/videogame/${idGame}`)
            .then((response) => {
                dispatch({ type: SET_VIDEOGAME, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...😥',
                    text: 'Something went wrong! 😕',
                    footer: '<h3> Please come back in later 😁 </h3>'
                  })
            });
    };
};