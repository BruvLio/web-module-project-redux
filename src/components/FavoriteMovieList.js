import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = ({ favoritesList, removeFavorite }) => {
    const favorites = favoritesList;

    const handleRemoveMovie = (movie) => {
        removeFavorite(movie)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => handleRemoveMovie(movie)} className="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}

const mapStateToProps = ({ favoriteState }) => {
    return ({
        favoritesList: favoriteState.favorites

    });
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);