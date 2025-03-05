import React from 'react'
import './Hero.scss'

const Hero = () => {
	const handleBookingClick = () => {
		window.location.href = "https://vk.com/k_denisova23";
	};
	
	return (
		<section className="hero">
			<div className="overlay"></div>
			<div className="container">
				<h1>Незабываемое путешествие по Дагестану</h1>
				<p>Исследуй величественные горы, древние аулы и кристально чистые каньоны с нами.</p>
				<p className="subtext">Гарантированное погружение в атмосферу приключений и национальной культуры.</p>
				<button onClick={handleBookingClick}>Забронировать тур</button>
			</div>
		</section>
	);
};

export default Hero;
