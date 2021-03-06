//---------------------imports---------------
import {
    SET_VIDEOGAME,
    SET_VIDEOGAMES,
    FILTER_BY_GENRES,
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
        case FILTER_BY_GENRES: {
            if (payload === "All games") return {
                ...state,
                videogamesToShow: null
            };
            return {
                ...state,
                videogamesToShow: state.videogames.filter(e => e.genres.map((genre) => (genre.name)).includes(payload))
            };
        };
        case SORT_BY_ALPHABET: {
            if (state.videogamesToShow) {
                if (payload === "Default") return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((a, b) => a.added < b.added ? 1 : -1)
                };
                if (payload === "az") return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((game1, game2) => game1.name > game2.name ? 1 : -1)
                };
                return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((game1, game2) => game1.name > game2.name ? -1 : 1)
                };
            } else {
                if (payload === "Default") return {
                    ...state,
                    videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1)
                };
                if (payload === "az") return {
                    ...state,
                    videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? 1 : -1)
                };
                return {
                    ...state,
                    videogames: [...state.videogames].sort((game1, game2) => game1.name > game2.name ? -1 : 1)
                };
            }
        };
        case SORT_BY_RATING: {
            if (state.videogamesToShow) {
                if (payload === "Default") return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((a, b) => a.added < b.added ? 1 : -1)
                };
                if (payload === "high") return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((game1, game2) => game1.rating > game2.rating ? -1 : 1)
                };
                return {
                    ...state,
                    videogamesToShow: [...state.videogamesToShow].sort((game1, game2) => game1.rating > game2.rating ? 1 : -1)
                };
            } else {
                if (payload === "Default") return {
                    ...state,
                    videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1)
                };
                if (payload === "high") return {
                    ...state,
                    videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? -1 : 1)
                };
                return {
                    ...state,
                    videogames: [...state.videogames].sort((game1, game2) => game1.rating > game2.rating ? 1 : -1)
                };
            }
        };
        default:
            return state;
    };
};