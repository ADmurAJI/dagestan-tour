import React from 'react'
import './About.scss'

const About = () => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="about-content">
					<div className="about-text">
						<h2>О туре</h2>
						<p>
							Наш авторский тур по Дагестану — это уникальная возможность
							познакомиться с культурой, природой и историей этого удивительного региона.
						</p>
						<div className="features">
							<div className="feature">
								<span>🚗</span>
								<p>Комфортные переезды</p>
							</div>
							<div className="feature">
								<span>🏔</span>
								<p>Уникальные локации</p>
							</div>
							<div className="feature">
								<span>🍽</span>
								<p>Аутентичная кухня</p>
							</div>
							<div className="feature">
								<span>📷</span>
								<p>Потрясающие виды</p>
							</div>
							<div className="feature">
								<span>🔥</span>
								<p>Вечера у костра</p>
							</div>
							<div className="feature">
								<span>🚤</span>
								<p>Прогулки на катере</p>
							</div>
							<div className="feature">
								<span>🌿</span>
								<p>Чистейший горный воздух</p>
							</div>
							<div className="feature">
								<span>🗺</span>
								<p>Опытные гиды</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
