import React from 'react';
import { useDispatch} from 'react-redux';
import { filterByGenres} from '../actions/filters'
import { sortByAlphabet, sortByRating } from '../actions/sorts'

function Filters() {
    let dispatch = useDispatch();

    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterByGenres(e.target.value));
    }
    function handleAlphabet(e) {
        e.preventDefault()
            dispatch(sortByAlphabet(e.target.value));
    }
    function handleRating(e) {
        e.preventDefault()
            dispatch(sortByRating(e.target.value));

    }
    return (
        <div className="filters-sort">
            <div>
                <label htmlFor="genres">
                    <span>Filter by Genres </span>
                
                <select id='genres' onChange={(e) => handleFilterGenre(e)} className="box">
                    <option value="All games">All games</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
                </label>
            </div>
            <div>
                <label htmlFor="order">
                    <span>Order by Alphabet </span>
                </label>
                <select id="order" onChange={ (e) => handleAlphabet(e)}>
                    <option value="Default">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div>
                <label htmlFor="orderRating">
                    <span>Order by Rating </span>
                </label>
                <select id="orderRating" onChange={ (e) => handleRating(e)}>
                    <option value="Default">Default</option>
                    <option value="high">Highest Rated</option>
                    <option value="less">Less Rated</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;