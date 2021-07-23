import {SET_VIDEOGAME} from "./index.js";

export default function clearVideogame() {
    return { type: SET_VIDEOGAME, payload: {} }
};