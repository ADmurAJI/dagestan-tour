import React from 'react'
import './Hero.scss'

const Hero = () => {
	return (
		<section className="hero">
			<div className="overlay"></div>
			<div className="container">
				<h1>Незабываемое путешествие по Дагестану</h1>
				<p>Исследуй величественные горы, древние аулы и кристально чистые каньоны с нами.</p>
				<p className="subtext">Гарантированное погружение в атмосферу приключений и национальной культуры.</p>
				<button>Забронировать тур</button>
				<p className="subtext">Но могут дать пи*ды за короткие шорты.</p>
			</div>
		</section>
	);
};

export default Hero;
