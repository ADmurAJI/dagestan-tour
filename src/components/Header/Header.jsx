import React, { useState } from 'react'
import './Header.scss'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setMenuOpen(false); // Закрываем меню после нажатия (для мобилки)
		}
	};
	
	return (
		<header className="header">
			<div className="overlay"></div>
			<div className="container">
				<div className="logo">Авторский тур по Дагестану</div>
				
				<div className={`burger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				
				<nav className={`nav ${menuOpen ? "open" : ""}`}>
					<ul>
						<li>
							<button onClick={() => scrollToSection("about")}>О туре</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("itinerary")}>Программа</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("gallery")}>Галерея</button>
						</li>
						<li>
							<button onClick={() => scrollToSection("contacts")}>Контакты</button>
						</li>
					</ul>
				</nav>
				<div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}></div>
			</div>
		</header>
	);
};

export default Header;
