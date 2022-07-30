import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageBaseUrl } from '../../constants/constants';

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
			const movies = response.data.results;
			if (movies) {
				const randomMovie = movies[Math.floor(Math.random() * movies.length)];
				setMovie(randomMovie);
			}
		});
	}, []);

	return (
		<div className="banner" style={{ backgroundImage: `url(${movie ? imageBaseUrl + movie.backdrop_path : ''})` }}>
			<div className="content">
				<h1 className="title">{movie ? movie.title || movie.original_title || movie.original_name : ''}</h1>
				<div className="banner_buttons">
					<button className="button">Play</button>
					<button className="button">My list</button>
					<h1 className="description">{movie ? movie.overview : ''}</h1>
				</div>
			</div>
			<div className="fade-bottom"></div>
		</div>
	);
}

export default Banner;
