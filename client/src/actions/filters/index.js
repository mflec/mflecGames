import { FILTER_BY_GENRES, FILTER_BY_ORIGIN } from "..";

export function filterByOrigin(origin) {
    return { type: FILTER_BY_ORIGIN, payload: origin };
}

export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}