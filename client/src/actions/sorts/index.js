import { SORT_BY_ALPHABET, SORT_BY_RATING } from "..";

export function sortByAlphabet(order) {
    return { type: SORT_BY_ALPHABET, payload: order };
}

export function sortByRating(order) {
    return { type: SORT_BY_RATING, payload: order };
}