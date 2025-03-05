import React from 'react'
import './Footer.scss'

const Footer = () => {
	const currentYear = new Date().getFullYear();
	
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	
	return (
		<footer className='footer'>
			<div className='overlay'></div>
			<div className='container'>
				<nav>
					<ul>
						<li>
							<button onClick={() => scrollToSection('about')}>О туре</button>
						</li>
						<li>
							<button onClick={() => scrollToSection('itinerary')}>Программа</button>
						</li>
						<li>
							<button onClick={() => scrollToSection('gallery')}>Галерея</button>
						</li>
						<li>
							<button onClick={() => scrollToSection('contacts')}>Контакты</button>
						</li>
					</ul>
				</nav>
				<p>© {currentYear} Авторский тур по Дагестану. Все права защищены.</p>
				<button className='scroll-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					↑
				</button>
			</div>
		</footer>
	);
};

export default Footer
