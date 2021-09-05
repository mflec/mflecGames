import axios from "axios";
import { SET_VIDEOGAMES } from "./index";
import Swal from "sweetalert2";

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
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...😥',
                    text: 'Something went wrong! 😕',
                    footer: '<h3> Please come back in later 😁 </h3>'
                  })
            });
    }
}