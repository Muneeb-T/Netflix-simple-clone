import React, { useState, useEffect } from 'react';
import './RowPost.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
import { API_KEY, imageBaseUrl } from '../../constants/constants';
function RowPost(props) {
	const [movies, setMovies] = useState([]);
	const [trailerUrlId, setTrailerUrlId] = useState('')
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleMovieTrailer = (id) => {
		axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
			const trailers = response.data.results;
			if(trailers.length!==0){
				setTrailerUrlId(trailers[0])
			}else{
				console.log('Array empty')
			}
		})
	};

	useEffect(() => {
		axios.get(props.url).then((response) => {
			const movies = response.data.results;
			setMovies(movies);
		});
	}, []);
	return (
		<div className="row">
			<h2 className='genre'>{props.title}</h2>
			<div className="posters">
				{movies.map((movie) => {
					return (
						<img
							onClick={() => handleMovieTrailer(movie.id)}
							className={props.small ? 'small-poster' : 'poster'}
							src={`${imageBaseUrl + movie.backdrop_path}`}
							alt="Poster"
						/>
					);
				})}
			</div>
			{ trailerUrlId && <Youtube className='trailer' opts={opts} videoId={trailerUrlId.key} /> }
			
		</div>
	);
}

export default RowPost;
