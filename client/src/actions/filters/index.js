import { FILTER_BY_GENRES} from "..";

export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}