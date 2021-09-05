import axios from "axios";
import { SET_GENRES} from "./index";
import Swal from 'sweetalert2';


export default function getGenres() {
    return (dispatch) => {
        axios.get(`/genres`)
            .then((response) => {
                dispatch({ type: SET_GENRES, payload: response.data })
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