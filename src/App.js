import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { orginals, action, comedy, documentaries, horror } from './urls';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<RowPost url={orginals} title="Netflix Originals" />
			<RowPost url={action} small title="Action" />
			<RowPost url={comedy} small title="Comedy" />
			<RowPost url={documentaries} small title="Documentaries" />
			<RowPost url={horror} small title="Horror" />
		</div>
	);
}

export default App;
