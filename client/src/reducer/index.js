//---------------------imports---------------
import {
    SET_VIDEOGAME,
    SET_VIDEOGAMES, //FILTERS
    FILTER_BY_GENRES,
    FILTER_BY_ORIGIN,
    SORT_BY_RATING, //SORTS
    SORT_BY_ALPHABET
} from "../actions";


//------------------reducer-----------------

let initialState = {
    videogames: [],
    videogame: {},
    videogamesToShow: null,
    genres: []
};


export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_VIDEOGAMES:
            return {
                ...state,
                videogames: payload
            };
        case SET_VIDEOGAME:
            return {
                ...state,
                videogame: payload
            };
        case FILTER_BY_ORIGIN: {
            if (payload === "All games") return {...state, videogamesToShow: null}
            if (payload == "local") return {
                ...state,
                videogamesToShow: state.videogames.filter(e => e.local)
            }
            return {
                ...state,
                videogamesToShow: state.videogames.filter(e => !e.local)
            }
        }
        case FILTER_BY_GENRES: {
            if (payload === "All games") return {...state, videogamesToShow: null}
            return {
                ...state,
                videogamesToShow: state.videogames.filter(e => e.genres.map((genre) => (genre.name)).includes(payload))
            }
        }
        case SORT_BY_ALPHABET: {
            if (payload === "az") return { ...state, videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? 1 : -1) }
            return { ...state, videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? -1 : 1) }
        }
        case SORT_BY_RATING: {
            if (payload === "high") return { ...state, videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? -1 : 1) }
            return { ...state, videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? 1 : -1) }
        }
        default:
            return state;
    };
};