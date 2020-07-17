import React from 'react';
import PropTypes, { func } from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie_detail',
                    state: { year, title, summary, poster, genres },
                }}
                >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h3 className="movie__year">{year}</h3>
                    <ul className="movie__generes">
                        {genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie_genre">
                                {genre}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 100)}...</p>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;