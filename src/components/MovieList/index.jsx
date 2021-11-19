import React from 'react';
import movies from './../../movies.js';

import {Link} from 'react-router-dom';

const MovieList = () => {
	return (
		<ul> 
		
		<nav className="movie-list">
		
			{movies.map((movie) => (
			<li key={movie.id}> <Link to={`/movies/${movie.id}`}> {movie.title} </Link> </li>
			))
			}	
		
    	</nav>
		
		</ul>
		
	)
}

export default MovieList;



//{
//	movies.map((movie) => (
//		<p key={movie.id}>{movie.title}</p>
//	))
//}