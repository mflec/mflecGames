//---------------------imports---------------
import {
    SET_VIDEOGAME,
    SET_VIDEOGAMES,
    SET_GENRES, //FILTERS
    FILTER_BY_GENRES,
    SORT_BY_RATING, //SORTS
    SORT_BY_ALPHABET
} from "../actions";


//------------------reducer-----------------

let initialState = {
    videogames: [],
    videogame: {},
    videogamesToShow: null,
    filters: {
        filter: "All games",
        sortAlphabet: "Default",
        sortRating: "Default"
    },
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
        case SET_GENRES:
            return {
                ...state,
                genres: payload
            };
        case FILTER_BY_GENRES: {
            if (payload === "All games") return {
                ...state, 
                videogamesToShow: null,
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                }
            };
            return {
                ...state,
                videogamesToShow: state.videogames.filter(e => e.genres.map((genre) => (genre.name)).includes(payload)),
                filters: {
                    ...state.filters, 
                    filter: payload
                }
            };
        };
        case SORT_BY_ALPHABET: {
            if (payload === "Default")  return { 
                ...state, 
                videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1),
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                }
            };
            if (payload === "az") return { 
                ...state, 
                videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? 1 : -1),
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                }
            };
            return { 
                ...state, 
                videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? -1 : 1),
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                }
             };
        };
        case SORT_BY_RATING: {
            if (payload === "Default")  return { 
                ...state, 
                videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1),
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                } 
            };
            if (payload === "high") return { 
                ...state, 
                videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? -1 : 1),
                filters: {
                    ...state.filters, 
                    sortAlphabet: payload
                }
            };
            return { 
                ...state, 
                videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? 1 : -1),
                filters: {
                    ...state.filters, 
                    sortRating: payload
                }
             };
        };
        default:
            return state;
    };
};